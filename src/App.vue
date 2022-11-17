<template>
  <divbox id="app">

    <header>
      <a href="/"><h1>CRÉER</h1></a>
      <p>var 2.0</p>
    </header>

    <main>
      <router-view />
      <brbox>
        <br>
      </brbox>
    </main>

    <menu>
      <router-link to="/"><span class="material-symbols-rounded">home</span></router-link>
      <router-link to="/create"><span class="material-symbols-rounded">create</span></router-link>
    </menu>
    
  </divbox>
</template>


<style>
@import "../public/style/v3.css";
header a {
  text-decoration: none;
}
</style>
