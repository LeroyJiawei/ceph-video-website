from flask import Flask,render_template
from boto3.session import Session
import boto3,json
from flask_cors import *

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/', methods=["GET"])
def index():
    return render_template('index.html')

@app.route('/getVideoList',methods=["GET"])
def getVideoList():
    access_key = '5KIX9D5B4J19GN0U0YWB'
    secret_key = '4sBYQihP3D4LqJBsINIATnLShn76cX4cxLthGnnL'
    session = Session(access_key, secret_key)
    host = "http://47.101.209.115:7480/"
    s3_client = session.client('s3', endpoint_url=host)

    video_list = s3_client.list_objects(Bucket="videos")["Contents"]

    mp4_list = []
    for vedio in video_list:
        if vedio['Key'].split('.')[-1] == "mp4":
            mp4_list.append(vedio['Key'])

    ret_video_info = []
    for video_key in mp4_list:
        detailInfo = s3_client.head_object(Bucket="videos",Key=video_key)
        ret_video_info.append({
            'description':detailInfo["Metadata"]["description"],
            'source':host+"videos/"+video_key,
            'img':host+"pictures/"+detailInfo["Metadata"]["img"],
            'order':detailInfo["Metadata"]["order"]
        })
    print(ret_video_info)
    return json.dumps(ret_video_info)

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=80,debug=False)