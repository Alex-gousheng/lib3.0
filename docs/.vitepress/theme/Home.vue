<template>
  <f-main>
    <f-text align="center" line-height="70px" bold block size="25px">
      Hello
    </f-text>

    <f-text align="center">
      <f-button round type="primary" class="start" href="/docs/hello.html">
        ð å¿«éå¼å§
      </f-button>
      <f-button
        round
        href="https://github.com/Tyh2001/vitePress-demo"
        target="_blank"
      >
        Github
      </f-button>
    </f-text>

    <f-divider margin="40px" color="#eef" />

    <f-text bold block>æ¬¢è¿ä½¿ç¨</f-text>
    <f-text block>â¡ æ¬¢è¿ä½¿ç¨ vitePress-template</f-text>
    <f-text block>ð² å¨è¿éç¼åä½ çåå®¢å§</f-text>
    <f-text block>
      ð¨ å®æ¹ææ¡£å¨
      <f-link href="https://vitepress.vuejs.org" type="primary"> è¿é </f-link>
    </f-text>

    <f-divider margin="40px" color="#eef" />

    <f-text bold block>ç¹æ§</f-text>
    <f-text>ð å¼ç®±å³ç¨</f-text>
    <f-text>
      ð å
      <f-link
        href="https://github.com/FightingDesign/fighting-design"
        type="primary"
      >
        fighting-design
      </f-link>
      å®ç¾èå
    </f-text>
    <f-text>ðª ä½¿ç¨ Vue.js ææ°ç¹æ§å¼å</f-text>
    <f-text>ð å¨é¢åºäº Viteï¼éåº¦å¤å¿«</f-text>
    <f-text>ðï¸ markdown ä¸­ç´æ¥ä½¿ç¨ vue ç»ä»¶</f-text>
    <f-text>âï¸ éç½®ç®åï¼ä¸æå®¹æ</f-text>
    <f-text>ð© markdown ä¸­ç´æ¥ä½¿ç¨ setup è¯­æ³ç³</f-text>
    <f-text>ð ç¬¬ä¸æ¹ç»ä»¶åºæ¯æ</f-text>
  </f-main>
</template>

<style scoped>
  .f-main {
    max-width: 620px;
    margin: 40px auto;
    box-sizing: border-box;
    padding: 40px;
    padding-bottom: 0;
  }

  .f-button-default {
    margin-left: 10px;
  }

  .f-text {
    display: block;
    line-height: 40px;
  }
</style>
