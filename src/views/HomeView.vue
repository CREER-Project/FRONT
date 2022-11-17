<template>
  <divbox>
    <for v-for="post in posts" :key="post.id">
      <router-link :to="'/lives/' + post.id">
        <div class="div">
          <h2>{{ post.title }}</h2>
          <p>{{ post.tag }}</p>
        </div>
      </router-link>
    </for>
  </divbox>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
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
</style>
