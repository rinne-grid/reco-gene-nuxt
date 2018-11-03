<template>
  <div>
    <h4>回想CG選択ウィンドウの設定(rec_mode_window)</h4>
    <!-- ウィンドウX座標 -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="表示するx座標を入力"
      label="回想・CGの選択ウィンドウのX座標<br><span class='reco-var-memo'>(x)</span>"
      label-for="selectWindowX">
      <b-form-input id="selectWindowPosX" v-model="recoWindow.selectWindowPosX"></b-form-input>
    </b-form-group>

    <!-- ウィンドウY座標 -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="表示するy座標を入力"
      label="回想・CGの選択ウィンドウのY座標<br><span class='reco-var-memo'>(y)</span>"
      label-for="selectWindowY">
      <b-form-input id="selectWindowPosY" v-model="recoWindow.selectWindowPosY"></b-form-input>
    </b-form-group>

    <!-- 回想モードテキスト -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="タイトル画面に表示する「回想モード」の表示内容を入力"
      label="タイトル画面に表示する「回想モード」に該当する選択肢テキスト<br><span class='reco-var-memo'>(recollection_title)</span>"
      label-for="myModeTitleText">
      <b-form-input id="myModeTitleText" v-model="recoWindow.myModeTitle"></b-form-input>
    </b-form-group>

    <!-- 回想を見るテキスト -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="「回想を見る」選択肢のテキストを入力"
      label="回想・CGの選択ウィンドウで「回想を見る」に該当する選択肢テキスト<br><span class='reco-var-memo'>(str_select_recollection)</span>"
      label-for="showRecoText">
      <b-form-input id="showRecoText" v-model="recoWindow.showRecoText"></b-form-input>
    </b-form-group>

    <!-- CGを見るテキスト -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="「CGを見る」選択肢のテキストを入力"
      label="回想・CGの選択ウィンドウで「CGを見る」に該当する選択肢テキスト<br><span class='reco-var-memo'>(str_select_cg)</span>"
      label-for="showCgText">
      <b-form-input id="showCgText" v-model="recoWindow.showCgText"></b-form-input>
    </b-form-group>

    <!-- タイトルに戻るテキスト -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="「タイトルに戻る」選択肢のテキストを入力"
      label="回想・CGの選択ウィンドウで「タイトルに戻る」に該当する選択肢テキスト<br><span class='reco-var-memo'>(str_select_back_title)</span>"
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
      label="1画面に表示する回想の縦の個数<br><span class='reco-var-memo'>(item_height)</span>"
      label-for="recoVerticalSize">
      <b-form-input id="recoVerticalSize" v-model="recoWindow.recoVerticalSize"></b-form-input>
    </b-form-group>

    <!-- 1画面に表示する回想の横の個数 -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="表示する横の個数を入力"
      label="1画面に表示する回想の横の個数<br><span class='reco-var-memo'>(item_height)</span>"
      label-for="recoHorizontalSize">
      <b-form-input id="recoHorizontalSize" v-model="recoWindow.recoHorizontalSize"></b-form-input>
    </b-form-group>

    <!-- 説明テキストの表示可否 -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="回想・CGの説明テキストを表示するかどうかを選択"
      label="回想・CGの説明テキストの表示可否<br><span class='reco-var-memo'>(show_title_text)</span>"
      label-for="isShowExplain">
      <b-form-radio-group id="isShowExplain" v-model="recoWindow.isShowExplain" :options="getShowExplainTexts"></b-form-radio-group>
    </b-form-group>

    <!-- 説明テキストの表示位置 -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="回想・CGの説明テキストの表示位置を選択"
      label="回想・CGの説明テキストの表示位置<br><span class='reco-var-memo'>(title_text_align)</span>"
      label-for="posExplain">
      <b-form-select id="posExplain" v-model="recoWindow.posExplain" :options="getPosExplainTexts"></b-form-select>
    </b-form-group>

    <!-- ゲーム内でまだ閲覧したことがないCGに表示する画像ファイル名 -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="未開放の回想・CGの場合に表示する画像ファイル名を入力"
      label="未開放の回想・CGの場合に表示する画像ファイル名<br><span class='reco-var-memo'>(never_watch_picture_name)</span>"
      label-for="neverWatchImage">
      <b-form-input id="neverWatchImage" v-model="recoWindow.neverWatchImage"></b-form-input>
    </b-form-group>

    <!-- ゲーム内でまだ閲覧したことがないCGに表示するテキスト -->
    <b-form-group
      horizontal
      :label-cols="8"
      breakpoint="md"
      description="未開放の回想・CGの場合に表示するテキストを入力"
      label="未開放の回想・CGの場合に表示するテキスト<br><span class='reco-var-memo'>(never_watch_title_text)</span>"
      label-for="neverWatchText">
      <b-form-input id="neverWatchText" v-model="recoWindow.neverWatchText"></b-form-input>
    </b-form-group>

  </div>
</template>

<script>
import {RecoWindow} from '~/modules/entities'
export default {
  name: 'WindowSetting',
  data () {
    return {
      recoWindow: {}
    }
  },
  computed: {
    getShowExplainTexts() {
      return RecoWindow.getShowExplainTexts()
    },
    getPosExplainTexts() {
      return RecoWindow.getPosExplainTexts()
    }
  },
  mounted () {
    this.recoWindow = new RecoWindow()

  }
}
</script>

<style lang="scss" scoped>
</style>
