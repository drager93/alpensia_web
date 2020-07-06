<template>
  <div class="alpensia-public-wrapper">
    <div class="section1" df fdr fjc fic>
      <div class="w12 tw9 mw11 t-center">
        <!-- <div class="section1-subheader n-my font _21 _white t-shadow">대한민국 휴향의 중심</div> -->
        <div class="section1-header n-my font _54 _white t-shadow">
          대한민국 휴양의 중심,
          <br />평창알펜시아
        </div>
        <div class="section1-text n-sq font _14 _white _regular t-shadow">
          인간의 몸에 가장 적합한 환경인 해발 700m 대관령자락,
          <br />그 중심에 월드클래스의 품격을 갖춘 국내 최고의 리조트, 평창알펜시아가 있습니다.
        </div>
      </div>
    </div>
    <page-path>
      <template v-slot:category>평창 알펜시아</template>
      <template v-slot:menu>알펜시아 안내</template>
    </page-path>
    <div class="section2" df fdr fjc>
      <div class="section2-content-container mw11" df fdr fjc fic>
        <div class="tw10 t-center">
          <div class="section2-header n-sq font _40 _greyish _regular">
            365일, 지루할 틈 없는
            <span class="font _bold">레저 천국</span>
          </div>
          <div class="section2-text noto font _20 _greyish hidet hidem">
            세계에서 가장 아름답고 재미있는 리조트, 알펜시아는 다른 리조트와는 비교할 수 없는 독특한
            <br />프로그램들로 넘쳐납니다. 365일 놀라운 재미가 끊이지 않는 곳, 한 번 경험하시면
            <br />알펜시아 마니아가 되실 것입니다.
          </div>

          <div class="section2-text noto font _20 _greyish hided hidem">
            세계에서 가장 아름답고 재미있는 리조트, 알펜시아는 다른 리조트와는 비교할 수 없는 독특한
            프로그램들로 넘쳐납니다. 365일 놀라운 재미가 끊이지 않는 곳, 한 번 경험하시면
            알펜시아 마니아가 되실 것입니다.
          </div>

          <div class="m-section2-text noto font _14 _greyish hided hidet">
            세계에서 가장 아름답고 재미있는 리조트, 알펜시아는 다른 리조트와는 비교할 수 없는 독특한
            프로그램들로 넘쳐납니다. 365일 놀라운 재미가 끊이지 않는 곳, 한 번 경험하시면
            알펜시아 마니아가 되실 것입니다.
          </div>
          <img class="hidet hidem" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section2-1.png" />
          <img class="mw11 hided" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/m-al-s2.png" />
        </div>
      </div>
    </div>
    <div class="section3" df fdr fjc fic>
      <div class="section3-content w12 tw11 mw11 t-center" df fdc fic>
        <div class="section3-subheader n-sq tw10 font _27 _ochre _regular">서울에서 한시간, 국내 최고의 리조트를 만나다</div>
        <div class="section3-header n-sq font _40 _white">대한민국 관광 커뮤니티의 허브</div>
        <div class="section3-text noto font _20 _white hidet">
          KTX(고속철도)와 제2영동고속도로를 이용하시면 서울에서 한 시간대에 평창알펜시아를
          <br />만나실 수 있습니다. 또한, 평창알펜시아에서 양양국제공항은 40분, 청정해안 동해바다까지는 30분,
          <br />대한민국 최고의 명산 설악산, 오대산은 20분 이내로 연결되는 강원도 관광의 중심입니다.
        </div>
        <div class="section3-text noto font _24 _white hided hidem">
          KTX(고속철도)와 제2영동고속도로를 이용하시면 서울에서 한 시간대에 평창알펜시아를
          만나실 수 있습니다. 또한, 평창알펜시아에서 양양국제공항은 40분, 청정해안 동해바다까지는 30분,
          대한민국 최고의 명산 설악산, 오대산은 20분 이내로 연결되는 강원도 관광의 중심입니다.
        </div>
        <img class="hidem" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section3-1.png" />
        <img class="mw11 hided hidet" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/m-al-s3.png" />
        <div class="section3-detail" df fdr fjc fic>
          <a
            class="t-center"
            href="https://www.alpensia.com/lc/visit.do"
            target="_blank"
            df
            fdr
            fic
          >
            <div class="n-sq font _16 _white">
              <span class="font _y-orange">평창군</span>
              주변 여행지
            </div>
            <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/main/detail.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import pagePath from "./pagePath.vue";

@Component({
  components: { pagePath }
})
export default class alpensiaPublic extends Vue {}
</script>

<style lang="scss" scoped src="./alpensiaPublic.scss"/>