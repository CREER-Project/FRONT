<template>
  <divbox>
    <h1>{{ message }}</h1>
    <div class="div">
      <form
        :action=url
        method="POST"
        enctype="multipart/form-data"
        autocomplete="off"
      >
        <p>タイトル</p>
        <input
          name="title"
          v-model="title"
          type="text"
          placeholder="タイトルを入力"
        />
        <p>SNSタグ</p>
        <input
          name="tag"
          v-model="tag"
          type="text"
          placeholder="SNSタグを追加 (#を除いて)"
        />
        <p>詳細</p>
        <textarea
          name="videoDetail"
          v-model="videoDetail"
          placeholder="詳細を入力"
          rows="5"
        ></textarea>
        <input
          v-if="tag && title && videoDetail"
          type="submit"
          value="ライブを作成"
          v-on="post()"
          />
      </form>
    </div>
  </divbox>
</template>

<script>
export default {
  data() {
    return {
      message: "CreateLive",
      tag: "",
      title: "",
      videoDetail: "",
      url: ""
    };
  },
  methods: {
    post() {
      this.url = "http://192.168.1.11/post?tag=" + this.tag + "&title=" + this.title + "&videoDetail=" + this.videoDetail
     },
  },
};
</script>

<style>
input[type=submit] {
  width: 100%;
}
</style>