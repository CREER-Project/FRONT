<template>
  <divbox>
    <h1>{{ message }}</h1>
      <div class="div">
        <h2>{{ posts.title }}</h2>
        <p>SNSタグ: {{ posts.tag }}</p>
        <p>RTMPサーバー: rtmp://live.gamma410.win</p>
        <p>ストリームキー: {{ posts.videoTitleHex }}</p>
        <br />
        <a :href="'http://192.168.1.11/delete?id=' + posts.id">
          <button><span class="material-symbols-rounded">delete</span></button>
        </a>
      </div>
  </divbox>
</template>
  
<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "Manage",
      posts: [],
      len: 0,
    };
  },
  mounted() {
    axios
      .get("http://192.168.1.11/search/" + this.$route.params.id)
      .then((res) => {
        console.log(res);
        this.posts = res.data;
        this.len = this.posts.length;
      })
      .catch((err) => {
        this.posts = err;
      });
  },
};
</script>
  
<style>
divbox a {
  text-decoration: none;
}
button {
  width: 100%;
}
</style>