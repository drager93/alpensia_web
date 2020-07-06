<template>
  <div class="main-wrapper w12">
    <div class="section1" df fdr>
      <div class="section1-side w12">
        <img class="side-top" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/main/section1-1.png" />
        <img class="side-bottom" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/main/section1-2.png" />
      </div>
      <div class="section1-middle w12">
        <nuxt-link to="/specialExhibition/13">
          <img class="tw6" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/main/section1-3.png" />
        </nuxt-link>
      </div>
      <div class="section1-side w12">
        <img class="side-top" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/main/section1-4.png" />
        <img class="side-bottom" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/main/section1-5.png" />
      </div>
    </div>

    <div class="pro-section1" df fdr fjc fic>
      <div df fdr fjc>
        <nuxt-link df fdr fjc to="/specialExhibition/13">
          <img class="tw9 mw6" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/main/pro.png" />
        </nuxt-link>
      </div>
    </div>

    <div class="section2" df fdr fjc fic v-for="(item, index) in list" :key="index">
      <img class="hidem" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/main/section2-1.png" />
      <div class="m-section2-container hided hidet" df fdc fic>
        <div class="section2-header n-my font _30 _white _bold t-shadow t-center mw10">
          프리미엄
          <span class="font _y-orange">회원모집</span>
        </div>
        <div class="section2-text n-sq font _14 _white _regular mw10 t-center">국내 최초 리조트 단지 내 최고급 호텔인터컨티넨탈만의 품격을 담아 프리미엄 회원을 한정 모집합니다.</div>
        <nuxt-link :to="'/specialExhibition/' + item.index" df fdr fic>
          <div class="n-sq font _16 _white">
            자세히
            <span class="font _y-orange">보기</span>
          </div>
          <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/main/detail.png" />
        </nuxt-link>
      </div>
    </div>

    <div class="m-secion3 hided hidet mw12" df fdr fjc>
      <div class="section3-container mw11" df fdr fjc fic>
        <nuxt-link to="/productInfo/estate" df fdr fic>
          <div class="n-sq font _16 _white">
            자세히
            <span class="font _y-orange">보기</span>
          </div>
          <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/main/detail.png" />
        </nuxt-link>
      </div>
    </div>

    <div class="m-section4 hided hidet" df fdr fjc>
      <nuxt-link to="/productInfo" class="n-sq font _16 _greyish _bold mw11 t-center">다른 분양상품 보기</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "~/plugins/axios";
import * as Types from "~/types";

@Component({
  components: {},
})
export default class extends Vue {
  list: Types.Board.IBoard[] = [];

  // private async mounted() {
  //   let response = await axios.get("board/getmain").then(res => {
  //     return res.data;
  //   });

  //   this.list = response;
  //   console.log(response);
  // }
}
</script>

<style lang="scss" scoped src="./index.scss" />
