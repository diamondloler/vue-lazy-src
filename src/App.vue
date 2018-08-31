<template>
  <div id="app">
    <left-bar></left-bar>
    <div class="ml200">
      <transition name="xiaowei-fade-in">
        <router-view></router-view>
      </transition>
    </div>
    <div>
      <img v-for="item in imgList" style="height: 300px; width: 300px;" v-src="item" alt="">
    </div>
   
  </div>
</template>
<script>
import leftBar from "./components/left_bar";
export default {
  name: "app",
  components: {
    "left-bar": leftBar
  },
  async mounted() {
    var aaa = [
      "http://pic.qiantucdn.com/58pic/27/37/85/18858PICiCr_1024.jpg!qt324",
      "http://img.dmaku.com/upload/moban/20170514143831.png",
      "http://5b0988e595225.cdn.sohucs.com/images/20171211/659bb43dd35a48f18f28fc7dcf76e823.jpeg",
      "http://bpic.588ku.com/element_pic/16/10/28/d8e9ffd39d879bbb30ce56629b456b4d.jpg",
      "http://seopic.699pic.com/photo/40006/5720.jpg_wh1200.jpg",
      "http://img06file.tooopen.com/images/20171224/tooopen_sy_231021357463.jpg",
      "https://s.mxmcdn.net/images-storage/albums/3/1/6/4/6/3/30364613_350_350.jpg",
      "http://pic.qiantucdn.com/58pic/25/56/48/58399c4f3f005_1024.jpg!qt324",
      "https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-0.3.5&s=ef5d386c6242fe9c28c4ac3eb15d06ec&w=1000&q=80",
      "http://sjbz.fd.zol-img.com.cn/t_s320x510c/g5/M00/05/0D/ChMkJ1hFDiSIDV9AAASfdElPbtwAAYT6gMOAQkABJ-M724.jpg"
    ];
    setTimeout(() => {
      this.imgList = aaa;
    }, 500);
  },
  data() {
    return {
      imgList: []
    };
  }
};
</script>
<style lang="less">
.ml200 {
  margin-left: 200px;
  height: 100vh;
}
</style>