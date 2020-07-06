<template>
  <div class="directions-wrapper w12">
    <div class="section1 t-center font _white" df fdc fjc fic>
      <div class="section1-header n-my font _54 mw11 t-shadow">찾아오시는 길</div>
      <div class="section1-text n-aq font _21 mw11 t-shadow">자연이 선택한 알프스와 감동, 그리고 럭셔리 힐링</div>
    </div>
    <page-path>
      <template v-slot:category>평창 알펜시아</template>
      <template v-slot:menu>찾아오시는 길</template>
    </page-path>
    <div class="section2" df fdc fic>
      <div class="section2-header w12 tw11 mw11 font _greyish t-center">
        <div class="header-title n-sq font _18 _regular">KTX(고속철도)와 제2영동고속도로로 더 가깝게</div>
        <div class="header-title n-sq font _40 _regular">
          교통망 대거 확충으로
          <span class="font _bold">어디서나 편리하게</span>
        </div>
        <div class="header-text noto font _20 hidet hidem">
          주변 교통망의 대거 확충으로 수도권에서 찾아 오시기에 더욱 편리합니다. 청정해안 동해바다까지 30분,
          <br />대한민국 최고의 명산 설악산, 오대산이 20분 이내로 연결되는 관광 커뮤니티의 허브에 위치하고
          <br />있습니다.
        </div>

        <div class="header-text noto font _20 hided hidem">
          주변 교통망의 대거 확충으로 수도권에서 찾아 오시기에 더욱 편리합니다. 청정해안 동해바다까지 30분,
          대한민국 최고의 명산 설악산, 오대산이 20분 이내로 연결되는 관광 커뮤니티의 허브에 위치하고
          있습니다.
        </div>

        <div class="m-header-text noto font _14 hided hidet">
          주변 교통망의 대거 확충으로 수도권에서 찾아 오시기에 더욱 편리합니다. 청정해안 동해바다까지 30분,
          대한민국 최고의 명산 설악산, 오대산이 20분 이내로 연결되는 관광 커뮤니티의 허브에 위치하고
          있습니다.
        </div>
      </div>
      <div class="section2-content tw11 mw11" df fdc fic>
        <GmapMap
          class="section2-location mw11"
          :center="{lat:37.661890, lng:126.676314}"
          :zoom="16"
          map-type-id="roadmap"
        >
          <GmapMarker :key="0" :position="{lat:37.661756, lng:126.676356}" />
        </GmapMap>
        <div
          class="location-text noto font _20 _greyish"
        >평창 알펜시아 리조트 : 강원도 평창군 대관령면 솔봉로 325 / 033) 339-0000</div>
        <a href="https://www.alpensia.com/guide/directions-public.do" target="_blank">
          <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/directions-1.png" />
        </a>
      </div>
    </div>
    <div class="section3" df fdr fjc>
      <div class="section3-content w12 tw11 mw11 t-center">
        <div class="section3-subheader n-sq font _18 _ochre _regular">서울에서 한시간, 국내 최고의 리조트를 만나다</div>
        <div class="section3-header n-sq font _40 _white">대한민국 관광 커뮤니티의 허브</div>
        <div class="section3-text noto font _20 _white hidet">
          KTX(고속철도)와 제2영동고속도로를 이용하시면 서울에서 한 시간대에 평창알펜시아를
          <br />만나실 수 있습니다. 또한, 평창알펜시아에서 양양국제공항은 40분, 청정해안 동해바다까지는 30분,
          <br />대한민국 최고의 명산 설악산, 오대산은 20분 이내로 연결되는 강원도 관광의 중심입니다.
        </div>
        <div class="section3-text noto font _20 _white hided hidem">
          KTX(고속철도)와 제2영동고속도로를 이용하시면 서울에서 한 시간대에 평창알펜시아를
          만나실 수 있습니다. 또한, 평창알펜시아에서 양양국제공항은 40분, 청정해안 동해바다까지는 30분,
          대한민국 최고의 명산 설악산, 오대산은 20분 이내로 연결되는 강원도 관광의 중심입니다.
        </div>
        <img class="hidem" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section3-1.png" />
        <img class="mw11 hided hidet" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/m-al-s3.png" />
        <div class="section3-detail" df fdr fjc fic>
          <nuxt-link class="t-center hided hidet" to="/" df fdr fic>
            <div class="n-sq font _16 _white">
              <span class="font _y-orange">평창군</span>
              주변 여행지
            </div>
            <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/main/detail.png" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="section4" df fdr fjc>
      <div class="font _greyish w12 tw11 mw11 t-center">
        <div class="section4-header n-sq font _40 _regular">세상에서 제일 살기 좋은 곳, 해발 700M 대관령</div>
        <div class="section4-text noto font _20 hidet">
          알펜시아는 대관령 중에서도 몸에 가장 적합한 고도인 해발 700M에 위치하고 있습니다.
          <br />해발 700M(해피700)는 저기압과 고기압이만나는 지점으로 호르몬 분비를 증가시키고, 혈류 공급을
          <br />원활하게 해 짧은 수면으로도 2~3시간 빨리 피로가 회복되는 것을 느끼실수 있습니다.
        </div>
        <div class="section4-text noto font _24 hided hidem">
          알펜시아는 대관령 중에서도 몸에 가장 적합한 고도인 해발 700M에 위치하고 있습니다.
          해발 700M(해피700)는 저기압과 고기압이만나는 지점으로 호르몬 분비를 증가시키고, 혈류 공급을
          원활하게 해 짧은 수면으로도 2~3시간 빨리 피로가 회복되는 것을 느끼실수 있습니다.
        </div>
        <img class="tw12 max-wdith hidem" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/directions-2.png" />
        <img class="tw12 mw12 hided hidet" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/m-direction-1.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import pagePath from "~/components/pagePath.vue";

@Component({
  components: { pagePath }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped src="./directions.scss"/>