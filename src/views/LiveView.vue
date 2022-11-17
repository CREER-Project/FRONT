<template>
  <divbox>
    <VideoPlayer :options="videoOptions" />
    <h2>{{ posts[0].title }}</h2>
    <p>{{ posts[0].tag }}</p>
    <div class="div">
      <p>{{ posts[0].videoDetail }}</p>
    </div>
  </divbox>
</template>
  
<script>
import axios from "axios";
import VideoPlayer from "@/components/videoPlayer.vue";
import "video.js/dist/video-js.css";

export default {
  components: {
    VideoPlayer,
  },
  data() {
    return {
      posts: [],
      len: 0,
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: "",
            type: "application/x-mpegURL",
          },
        ],
      },
    };
  },
  mounted() {
    axios
      .get("https://api.creer.gamma410.win/lives/" + this.$route.params.id)
      .then((res) => {
        console.log(res);
        this.posts = res.data;
        this.len = this.posts.length;
        var hex = this.posts[0].videoTitleHex;
        this.videoOptions.sources[0].src =
          "https://live.gamma410.win/hls/" + hex + ".m3u8";
      })
      .catch((err) => {
        this.posts = err;
      });
  },
};
</script>

<style>
.video-js {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 56.25%;
  /*比率調整※16:9の画面幅*/
  color: #ffffff;
  background: #e7dfd1;
}
.video-js button {
  border: none;
  box-shadow: none;
}
.video-js .vjs-tech {
  outline: none;
}
.video-js .vjs-big-play-button:focus {
  background: none;
}
/*再生ボタン(大)*/
.video-js:hover .vjs-big-play-button,
.video-js .vjs-big-play-button {
  height: 90px;
  width: 90px;
  border: 0px;
  border-radius: 50%;
  font-size: 5em;
  line-height: 90px;
  background: hsl(41, 81%, 71%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.video-js .vjs-big-play-button:hover {
  background: hsl(41, 67%, 71%);
}
.video-js .vjs-control-bar {
  background: #6c6c6c4a;
}
.video-js .vjs-slider,
.video-js .vjs-load-progress div {
  background: hsl(41, 86%, 50%);
}
</style>
