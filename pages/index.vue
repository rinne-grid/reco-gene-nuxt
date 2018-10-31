<template>
  <div id="app">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand tag="h1" class="mb-0" href="#">RecoGene</b-navbar-brand>(version.nuxt)
    </b-navbar>
    <b-card no-body>
      <b-tabs small card>
        <b-tab title="CGの設定">

        </b-tab>
        <b-tab active title="ウィンドウの設定">
          <window-setting />
        </b-tab>
        <b-tab title="BGMの設定">

        </b-tab>
        <b-tab title="その他設定">

        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import WindowSetting from '~/components/WindowSetting.vue'

export default {
  components: {
    WindowSetting
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
