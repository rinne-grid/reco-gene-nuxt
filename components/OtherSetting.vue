<template>
  <div>
    <h4>その他の設定</h4>
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="回想時に一時的に利用するマップIDを入力"
      label="回想時に一時的に利用するマップID（何もないマップ）"
      label-for="sandboxMapId">
      <b-form-input id="sandboxMapId" v-model="recoOther.sandboxMapId"></b-form-input>
    </b-form-group>
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="回想用スイッチをセーブデータ間で共有するかどうかを選択"
      label="回想用スイッチをセーブデータ間で共有するかどうか"
      label-for="shareRecoSwitch">
      <b-form-select id="shareRecoSwitch" v-model="recoOther.shareRecoSwitch" :options="getShowShareSaveDataTexts"></b-form-select>
    </b-form-group>
  </div>
</template>

<script>
import {Other} from '~/modules/entities'
export default {
  name: 'OtherSetting',
  data () {
    return {
      recoOther: {},
    }
  },
  mounted () {
    this.recoOther = new Other()
  },
  computed: {
    getShowShareSaveDataTexts() {
      return Other.showShareSaveDataText()
    }
  }
}
</script>

<style>

</style>
