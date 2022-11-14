<template>
  <divbox>
    <h1>{{ message }}</h1>
    <div class="div">
      <p>ユーザー名</p>
      <input v-model="userName" type="text" placeholder="ユーザー名を入力" />
      <p>タイトル</p>
      <input v-model="title" type="text" placeholder="タイトルを入力" />
      <p>詳細</p>
      <textarea v-model="videoDetail" placeholder="詳細を入力" rows="5"></textarea>
      <button v-if="userName&&title&&videoDetail" v-on:click="post()">ライブを作成</button>
    </div>
  </divbox>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "CreateLive",
      userName: "",
      title: "",
      videoDetail: ""
    };
  },
  methods: {
    post() {
      axios
        .post(
          "http://127.0.0.1/post?" +
            "userName" +
            "=" +
            this.userName +
            "&" +
            "title" +
            "=" +
            this.title +
            "&" +
            "videoDetail" +
            "=" +
            this.videoDetail
        )
        .then((response) => {
          console.log(response);
          window.location.replace('/');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
button {
  width: 100%;
}
</style>