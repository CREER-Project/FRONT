<template>
  <divbox id="app">

    <header>
      <a href="/"><h1>CRÉER</h1></a>
      <p>Prott Ver</p>
    </header>

    <main>
      <router-view />
      <brbox>
        <br>
      </brbox>
    </main>

    <menu>
      <router-link to="/"><span class="material-symbols-rounded">home</span></router-link>
      <router-link to="/studio"><span class="material-symbols-rounded">hub</span></router-link>
    </menu>
    
  </divbox>
</template>

<style>
@import "../public/style/v3.css";
header a {
  text-decoration: none;
}
</style>
