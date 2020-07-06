<template>
  <div class="productInfo-wrapper w12">
    <div class="section" df fdr fjc fic>
      <div class="section-content t-center font _white tw11 mw11">
        <div class="section-header n-my font _54 _bold t-shadow">Alpensia Estate</div>
        <div
          class="section-subheader n-sq font _21 t-shadow"
        >Alpensia Estate는 체류형 골프코스 홈으로서 한 단계 더 높은 주거문화 스타일을 제시합니다.</div>
        <div class="section-text n-sq font _14 _regular t-shadow">
          마스터 베드룸을 중심으로 스파시설 및 엔터테인먼트룸 등 모든 편의 휴식공간들이 1층에 전면 배치되어 있고
          <br />전 세대에서 페어웨이 조망이 가능합니다.
          <br />특히 각 세대별로 갖추어진 스파 시설은 편안한 휴식에 프라이버시를 더해 드립니다.
          <br />비즈니스에 필요한 업무공간도 세심하게 배치하여 새로운 라이프 스타일을 구현하고 있습니다.
        </div>
      </div>
    </div>
    <div class="section1 font _white" df fdr fjc>
      <div class="section1-left w6 tw12 mw12" df fdc fic>
        <div
          class="section1-subheader n-my font _20 t-center t-shadow"
        >The Greatest Honorable Community</div>
        <div class="section1-header n-my font _35 _bold t-center t-shadow mw11">ALPENSIA ESTATE</div>
        <div class="section1-text n-my font _20 t-shadow mw11">소수의 VVIP만을 위해 준비된 비교할 수 없는 특별한 가치</div>
        <nuxt-link class="n-sq font _14 _white" to="/productInfo/estate">자세히 보기</nuxt-link>
      </div>
      <div class="section1-right w6 tw12 mw12" df fdc fic>
        <div class="section1-header n-my font _35 _bold t-shadow mw11">ALPENSIA COUNTRY CLUB</div>
        <div class="section1-text n-my font _20 t-shadow">세계적 거장의 27홀 골프코스 디자인</div>
        <nuxt-link class="n-sq font _14 _white" to="/productInfo/alpensiaCountryClub">자세히 보기</nuxt-link>
      </div>
    </div>
    <div class="section" df fdr fjc fic>
      <div class="section-content t-center font _white w5 tw11 mw11">
        <div class="section-header n-my font _54 _bold t-shadow">Alpensia Town</div>
        <div class="section-subheader n-sq font _21 t-shadow">청정 자연이 숨겨둔 알프스</div>
        <div class="section-text n-sq font _14 _regular t-shadow">
          다양한 연령대와 계층의 사람들이 어느 때나 찾아와 청정 자연에 휴식과 레저 스포츠를 즐길 수 있도록 격조
          <br />높은 고객 만족 서비스로 고품질의 경험을 선사합니다.
        </div>
      </div>
    </div>
    <div class="section2 font _white" df fdr fjc>
      <div class="section2-left w4 tw12 mw12" df fdc fic>
        <img class="star" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/fs.png" />
        <div class="image-title n-my font _30 _bold t-center t-shadow mw11">INTERCONTINENTAL HOTEL</div>
        <div class="image-text n-my font _16 t-center t-shadow mw11">자연이 선택한 알프스와 감동, 그리고 럭셔리 힐링</div>
        <nuxt-link
          class="left-detail n-sq font _14 _white"
          to="/productInfo/intercontinental"
        >자세히 보기</nuxt-link>
      </div>
      <div class="section2-middle w4 tw12 mw12" df fdc fic>
        <img class="star" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/fs.png" />
        <div class="image-title n-my font _30 _bold t-center t-shadow mw11">HOLIDAY INN RESORT HOTEL</div>
        <div class="image-text n-my font _16 t-center t-shadow mw11">공간에 활기를 불어넣는 기분좋은 편안함</div>
        <nuxt-link
          class="middle-detail n-sq font _14 _white"
          to="/productInfo/holidayInnHotel"
        >자세히 보기</nuxt-link>
      </div>
      <div class="section2-right w4 tw12 mw12" df fdc fic>
        <div class="image-title n-my font _30 _bold t-center t-shadow mw11">HOLIDAY INN & SUITES</div>
        <div
          class="image-text n-my font _16 t-center t-shadow mw11"
        >해발 700고지의 건강함이 숨쉬는 국내 유일의 유럽풍 가족형 콘도미니엄</div>
        <nuxt-link
          class="right-detail n-sq font _14 _white"
          to="/productInfo/holidayInnCondo"
        >자세히 보기</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {}
})
export default class extends Vue {}
</script>

<style lang="scss" scoped src="./index.scss"/>