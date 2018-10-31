<template>
  <div>
    <h4>回想CG選択ウィンドウの設定(rec_mode_window)</h4>
    <!-- ウィンドウX座標 -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="表示するx座標を入力"
      label="回想・CGの選択ウィンドウのX座標<br>(x)"
      label-for="selectWindowX">
      <b-form-input id="selectWindowPosX" v-model="recoWindow.selectWindowPosX"></b-form-input>
    </b-form-group>

    <!-- ウィンドウY座標 -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="表示するy座標を入力"
      label="回想・CGの選択ウィンドウのY座標<br>(y)"
      label-for="selectWindowY">
      <b-form-input id="selectWindowPosY" v-model="recoWindow.selectWindowPosY"></b-form-input>
    </b-form-group>

    <!-- 回想モードテキスト -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="タイトル画面に表示する「回想モード」の表示内容を入力"
      label="タイトル画面に表示する「回想モード」に該当する選択肢テキスト<br>(recollection_title)"
      label-for="myModeTitleText">
      <b-form-input id="myModeTitleText" v-model="recoWindow.myModeTitle"></b-form-input>
    </b-form-group>

    <!-- 回想を見るテキスト -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="「回想を見る」選択肢のテキストを入力"
      label="回想・CGの選択ウィンドウで「回想を見る」に該当する選択肢テキスト<br>(str_select_recollection)"
      label-for="showRecoText">
      <b-form-input id="showRecoText" v-model="recoWindow.showRecoText"></b-form-input>
    </b-form-group>

    <!-- CGを見るテキスト -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="「CGを見る」選択肢のテキストを入力"
      label="回想・CGの選択ウィンドウで「CGを見る」に該当する選択肢テキスト<br>(str_select_cg)"
      label-for="showCgText">
      <b-form-input id="showCgText" v-model="recoWindow.showCgText"></b-form-input>
    </b-form-group>

    <!-- タイトルに戻るテキスト -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="「タイトルに戻る」選択肢のテキストを入力"
      label="回想・CGの選択ウィンドウで「タイトルに戻る」に該当する選択肢テキスト<br>(str_select_back_title)"
      label-for="backTitleText">
      <b-form-input id="backTitleText" v-model="recoWindow.backTitleText"></b-form-input>
    </b-form-group>

    <h4>回想CG閲覧ウィンドウの設定(rec_list_window)</h4>
     <!-- 1画面に表示する回想の縦の個数 -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="表示する縦の個数を入力"
      label="1画面に表示する回想の縦の個数<br>(item_height)"
      label-for="recoVerticalSize">
      <b-form-input id="recoVerticalSize" v-model="recoWindow.recoVerticalSize"></b-form-input>
    </b-form-group>

    <!-- 1画面に表示する回想の横の個数 -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="表示する横の個数を入力"
      label="1画面に表示する回想の横の個数<br>(item_height)"
      label-for="recoHorizontalSize">
      <b-form-input id="recoHorizontalSize" v-model="recoWindow.recoHorizontalSize"></b-form-input>
    </b-form-group>

    <!-- 説明テキストの表示可否 -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="回想・CGの説明テキストを表示するかどうかを選択"
      label="回想・CGの説明テキストの表示可否<br>(show_title_text)"
      label-for="isShowExplain">
      <b-form-radio-group id="isShowExplain" v-model="recoWindow.isShowExplain" :options="getShowExplainText"></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
import {RecoWindow} from '~/modules/entities'
export default {
  name: "WindowSetting",
  data () {
    return {
      recoWindow: {}
    }
  },
  computed: {
    getShowExplainText() {
      return RecoWindow.getShowExplainText()
    }
  },
  mounted () {
    this.recoWindow = new RecoWindow()

  }
}
</script>

<style scoped>

</style>
