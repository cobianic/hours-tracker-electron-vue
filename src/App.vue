<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" variant="info">
        <b-button v-b-toggle.sidebar class="mr-5">Menu</b-button>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav> </b-collapse>
      </b-navbar>

      <b-sidebar id="sidebar" title="Main Menu" shadow="">
        <div class="px-3 py-2">
          <b-list-group>
            <b-list-group-item href="/#/">Hours Log</b-list-group-item>
            <b-list-group-item href="/#/projects">Projects</b-list-group-item>
          </b-list-group>
          <div class="dropdown-divider"></div>
          <b-list-group>
            <b-list-group-item href="/">Exports</b-list-group-item>
            <b-list-group-item href="/">Settings</b-list-group-item>
          </b-list-group>
        </div>
      </b-sidebar>
    </div>

    <router-view />
  </div>
</template>

<script></script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
