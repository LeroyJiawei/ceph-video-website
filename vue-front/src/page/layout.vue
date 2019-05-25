<style lang="less" scoped>
  .console-body {
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    bottom: 0px;
    background-color: #eff2f7;
    z-index: 100;
    overflow-x: hidden;
    overflow-y: auto;
    .console-main {
      position: relative;
      padding: 50px 100px 0px 100px;
      width: auto;
      height: auto;
      &.console-main-full {
        margin-left: 130px;
      }
     .firstCard{
        .title{
          font-size: 30px;
          text-align: center;
        }
        margin: 10px 10px 0px 10px;
        min-width: 700px;
        width: auto;
        .carousalStyle{
          // max-width: 1000px;
          .carousalItem{
            // background: black;
            display: flex; 
            justify-content: center; /*水平居中*/
            align-items: Center; /*垂直居中*/
            width: auto;
          }
        }
     }
    }
  }
</style>
<template>
    <div class="console-body" style="min-width: 768px; overflow: scroll">
        <console-topbar></console-topbar>
        <!-- <console-sidebar></console-sidebar> -->
        <!-- <console-navbar v-show="hasNavbar"></console-navbar> -->
        <div class="console-main" :class="{'console-main-full': hasNavbar}">
          <el-card class = "firstCard">
            <h1 class="title">{{titleContent}}</h1>
            <el-carousel @change="changeVideo" :autoplay="false" type='card' height="500px" class="carousalStyle">
              <el-carousel-item v-for="item in videos" height="100px" class="carousalItem" :key="item.order">
                <video width="720px" height="480px" v-if="currentCrou===item.order" class="videoCss" controls>
                  <source  :src="item.source"  type="video/mp4">
                  您的浏览器不支持 video 标签。
                </video>
                <img v-else :src="item.img" />
              </el-carousel-item>
            </el-carousel>
          </el-card>
        </div>
    </div>
</template>
<script>
  import ConsoleTopbar from '../components/layout/consoleTopbar';
  export default {
    components: {
      ConsoleTopbar,
    },
    data () {
      return {
        currentCrou: '',
        titleContent:"",
        videos:[
          
        ],
      }
    },
    created:function(){
      this.$axios
        .get(`${window.$config.HOST}/getVideoList`)
        .then(response=>{
          this.videos = response.data;
          console.log(response.data);
        })
        .catch(error=>{
          console.log("加载视频信息失败!");
          // this.videos = [
          //   {
          //     source:'http://192.168.1.138:7480/videos/v5.mp4',
          //     img:"http://192.168.1.138:7480/videos/p5.png",
          //     description:"一拳超人比武",
          //     order:0,
          //   },
          //   {
          //     source:'http://192.168.1.138:7480/videos/v6.mp4',
          //     img:"http://192.168.1.138:7480/videos/p6.png",
          //     description:"进击!",
          //     order:1,
          //   },
          //   {
          //     source:'http://192.168.1.138:7480/videos/v7.mp4',
          //     img:"http://192.168.1.138:7480/videos/p7.png",
          //     description:"一拳吹雪",
          //     order:2,
          //   },
          //   {
          //     source:'http://192.168.1.138:7480/videos/v8.mp4',
          //     img:"http://192.168.1.138:7480/videos/p8.png",
          //     description:"不知道是什么",
          //     order:3,
          //   },
          // ]
        });
    },
    methods:{
      changeVideo(val){
        // console.log(str(val+1));
        this.currentCrou = '' + val;
        this.titleContent = this.videos[val].description;
        console.log(this.currentCrou);
      },
    },
    computed: {
      hasNavbar () {
        const $route = this.$route;
        return $route.meta && $route.meta.navbar && $route.meta.navbar.length > 0;
      },
      
    },
   
  }
</script>
