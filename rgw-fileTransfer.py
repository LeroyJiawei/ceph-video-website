#coding=utf-8
import os
from boto3.session import Session
import boto3

access_key = '5KIX9D5B4J19GN0U0YWB'
secret_key = '4sBYQihP3D4LqJBsINIATnLShn76cX4cxLthGnnL'
session = Session(access_key, secret_key)

host = "http://192.168.1.138:7480"

s3_client = session.client('s3', endpoint_url=host)

buckets = s3_client.list_buckets()['Buckets']

print ([bucket['Name'] for bucket in buckets])


""" 检索与封装 """
video_list = s3_client.list_objects(Bucket="videos")["Contents"]

""" 删除 """
# for item in video_list:
#     print s3_client.delete_object(Bucket="videos",Key=item['Key'])

mp4_list = []
for vedio in video_list:
    if vedio['Key'].split('.')[-1] == "mp4":
        mp4_list.append(vedio['Key'])

ret_video_info = []
for video_key in mp4_list:
    detailInfo = s3_client.head_object(Bucket="videos",Key=video_key)
    print({
        'description':detailInfo["Metadata"]["description"],
        'source':"http://192.168.1.138:7480/videos/"+video_key,
        'img':"http://192.168.1.138:7480/pictures/"+detailInfo["Metadata"]["img"],
        'order':detailInfo["Metadata"]["order"]
    })


""" 权限控制 """
# resp = s3_client.put_object(Bucket=buckets[0]['Name'], Key="v1.flv", Body=open(path_name, 'rb').read())

# resp = s3_client.put_object_acl(ACL="public-read",Bucket=buckets[0]['Name'], Key="v1.flv",)
# s3_client.list_objects(Bucket="videos")
# resp = s3_client.put_bucket_acl(Bucket="videos",ACL='public-read')

""" 文件上传 """
# path_name = "/home/titanxu/Downloads/pics/"
# s3_client.create_bucket(Bucket="pictures",ACL='public-read')

# files = os.listdir(path_name)
# for i in range(0,len(files)):
#     map=[5,0,2,1,4,3]
#     print("Opening file: "+path_name+files[i])
    # print("stroed name: "+"p"+str(map[i])+".png")
    # print("description: "+files[i].split(".")[0])
    # print("img: "+"p"+str(i)+".png")
    # print("order: "+str(i))
    # resp = s3_client.put_object(Bucket="videos", Key="v"+str(i)+".mp4",
    #                     Body=open(path_name+files[i], 'rb').read(),
    #                     ACL="public-read",
    #                     Metadata={
    #                         'description':files[i].split(".")[0],
    #                         'img':"p"+str(i)+".png",
    #                         "order": str(i)
    #                     })
""" 图片上传 """
    # resp = s3_client.put_object(Bucket="pictures", Key="p"+str(map[i])+".png",
    #                     Body=open(path_name+files[i], 'rb').read(),
    #                     ACL="public-read",
    #                     )
    # print("Upload result:")
    # print(resp)
