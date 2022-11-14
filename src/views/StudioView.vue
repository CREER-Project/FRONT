<template>
  <divbox>

    <h1>{{ message }}</h1>
    <p>{{ userName }} の Studio</p>

    <div class="div">
      <p>作る</p>
      <router-link to="/create"><button>新規ライブを作成</button></router-link>
      <p>管理</p>
      <router-link to="/manage"><button>コンテンツを管理</button></router-link>
    </div>

  </divbox>
</template>

<script>
export default {
  data() {
    return {
      message: "Studio",
      userName: "みんな",
    };
  },
};
</script>

<style>
button {
  width: 100%;
}
</style>
