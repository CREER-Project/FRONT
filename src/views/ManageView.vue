<template>
  <divbox>
    <h1>{{ message }}</h1>
    <for v-for="post in posts" :key="post.id">
      <div class="div">
        <h2>{{ post.title }}</h2>
        <p>ユーザー名: {{ post.userName }}</p>
        <p>ストリームキー: {{ post.videoTitleHex }}</p>
        <br />
        <a :href="'https://api.creer.gamma410.win/delete?id=' + post.id">
          <button><span class="material-symbols-rounded">delete</span></button>
        </a>
      </div>
    </for>
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
      .get("https://api.creer.gamma410.win/")
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