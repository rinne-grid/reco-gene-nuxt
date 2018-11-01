/**
 * CG設定
 */
export class RecoCg {
  constructor() {
    this.sequence       = 0;
    this.title          = '';
    this.imageList      = [];
    this.commonEventId  = 0;
    this.switchId       = 0;
    this.thumbnailName  = '';
  }
}

/**
 * Window設定
 */
export class RecoWindow {
  constructor() {
    this.selectWindowPosX   = 260;
    this.selectWindowPosY   = 180;
    this.myModeTitle        = '回想モード';
    this.showRecoText       = '回想を見る';
    this.showCgText         = 'CGを見る';
    this.backTitleText      = 'タイトルに戻る';
    this.recoVerticalSize   = 2;
    this.recoHorizontalSize = 2;
    this.isShowExplain      = true;
    this.posExplain         = 1;
    this.neverWatchImage    = 'never_watch_picture';
    this.neverWatchText     = '？？？';
  }

  static getShowExplainTexts () {
    return [
      {text: '表示する',     value: true },
      {text: '表示しない',   value: false }
    ]
  }
  
  static getPosExplainTexts () {
    return [
      { value: '1', text: '中央寄せ'},
      { value: '2', text: '左寄せ'},
      { value: '3', text: '右寄せ'}
    ]
  }
}

/**
 * BGM設定
 */
export class RecoBgm {
  constructor() {
    this.name   = "blank_memories";
    this.pan    = 0;
    this.pitch  = 100;
    this.volume = 90;
  }
}

/**
 * その他設定
 */
export class Other {
  constructor() {
    this.sandboxMapId     = 1;
    this.shareRecoSwitch  = false;
  }
}

