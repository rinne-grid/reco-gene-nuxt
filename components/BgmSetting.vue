<template>
  <div>
    <h4>BGM設定(rec_mode_bgm)</h4>
    <!-- BGMファイル名 -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="BGMファイル名を入力"
      label="BGMファイル名<br><span class='reco-var-memo'>(name)</span>"
      label-for="bgmName">
      <b-form-input id="bgmName" v-model="recoBgm.name"></b-form-input>
    </b-form-group>
    <!-- BGMパンポッド -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="パンポッドを入力"
      label="パンポッド<br><span class='reco-var-memo'>(pan)</span>"
      label-for="pan">
      <b-form-input id="pan" v-model="recoBgm.pan" :type="typeNumber"></b-form-input>
    </b-form-group>
    <!-- BGMパンポッド -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="ピッチベンドを入力"
      label="ピッチベンド<br><span class='reco-var-memo'>(pitch)</span>"
      label-for="pitch">
      <b-form-input id="pitch" v-model="recoBgm.pitch" :type="typeNumber"></b-form-input>
    </b-form-group>
    <!-- BGMボリューム -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="ボリュームを入力"
      label="ボリューム<br><span class='reco-var-memo'>(volume)</span>"
      label-for="volume">
      <b-form-input id="volume" v-model="recoBgm.volume" :type="typeNumber"></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
import {RecoBgm} from '~/modules/entities'

export default {
  name: 'BgmSetting',
  data () {
    return {
      recoBgm: {},
      typeNumber: "number"
    }
  },
  mounted () {
    this.recoBgm = new RecoBgm()
  }
}
</script>

<style>

</style>
