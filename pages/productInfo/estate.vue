<template>
  <div class="estate-wrapper w12">
    <product-info-header :header="header"></product-info-header>
    <page-path>
      <template v-slot:category>분양 상품소개</template>
      <template v-slot:menu>에스테이트</template>
    </page-path>
    <div class="section1">
      <div class="section1-header" df fdc fic>
        <div class="header-text noto font _35 _white _bold t-center tw10 mw11 hidet hidem">
          "평창알펜시아 에스테이트 189 전세대 분양 완료!"
          <br />성원에 감사드리며 최고의 서비스와 가치로 보답 하겠습니다.
        </div>
        <div class="t-header-text noto font _25 _white _bold t-center tw10 mw11 hided hidem">
          "평창알펜시아 에스테이트 189 전세대 분양 완료!"
          <br />성원에 감사드리며 최고의 서비스와 가치로
          <br />보답 하겠습니다.
        </div>
        <div class="m-header-text noto font _20 _white _bold t-center tw10 mw11 hided hidet">
          "평창알펜시아 에스테이트
          <br />189 전세대 분양 완료!"
          <br />성원에 감사드리며 최고의 서비스와 가치로 보답 하겠습니다.
        </div>
        <div class="header-title n-sq font _40 font _greyish _regular t-center hidet hidem">
          소수의 VVIP만을 위해 준비 된 비교할 수 없는
          <br />특별한 가치
          <span class="font _bold">ALPENSIA ESTATE</span>
        </div>
        <div class="m-header-title n-sq font _54 font _greyish _regular t-center tw11 mw11 hided">
          소수의 VVIP만을 위해 준비 된 비교할 수 없는
          특별한 가치
          <span class="font _bold">ALPENSIA ESTATE</span>
        </div>
      </div>
      <image-overlap :overlap="overlap">
        지상과 천국이 맞닿은 해발 700m의 대관령, 환상적인 페어웨이 뷰를 자랑하는 알펜시아 에스테이트는
        국내 최고의 인테리어와 과학적 설계로 실내에서 대관령과 페어웨이를 한눈에 조망하실 수 있습니다. 에스테이트는 대한민국을 이끌어 가시는 정상의 오피니언 리더들이 함께하는 국내 유일의 정통 골프 빌리지입니다.
      </image-overlap>
    </div>
    <div class="section2">
      <div class="section2-header" df fdr fjc>
        <div class="n-sq font _40 _greyish _regular mw11">
          ALPENSIA ESTATE의
          <span class="font _bold">특장점</span>
        </div>
      </div>
      <div class="section2-content" df fdc fic>
        <div class="w12" df fdr fjc>
          <div class="post-box" df fdr fjc>
            <div class="mw11" v-for="(post, index) in posts" :key="index" df fdr>
              <post :post="post">{{ post.content }}</post>
            </div>
          </div>
          <div class="zindex-background w12 hidet hidem"></div>
        </div>
      </div>
    </div>
    <other-goods></other-goods>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import productInfoHeader from "~/components/productInfoHeader.vue";
import post from "~/components/post.vue";
import pagePath from "~/components/pagePath.vue";
import imageOverlap from "~/components/imageOverlap.vue";
import otherGoods from "~/components/otherGoods.vue";

@Component({
  components: { productInfoHeader, post, pagePath, imageOverlap, otherGoods }
})
export default class extends Vue {
  public header: any = {
    url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/estate/section1-back.png",
    logo: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/estate/estate-logo.png"
    // title: "ALPENSIA ESTATE",
    // text: "소수의 VVIP만을 위해 준비 된 비교할 수 없는 특별한 가치"
  };

  public overlap: any = {
    backUrl: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/estate/section2-back.png",
    url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/estate/section2-1.jpg"
  };

  public posts: any[] = [
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/estate/estate1.png",
      title: "백두대간을 형상화",
      content:
        "백두대간의 장중한 흐름에 순응한 건축스타일. 육중하면서도 가볍게 떠 있는 듯한 지붕의 부드러운 실루엣과 지붕을 떠 받치고 있는 기단부의 자연스런 재질, 독특한 패턴은 우아하고 품격있는 Aplensia Estate만의 건축 스타일을 보여주고 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/estate/estate2.png",
      title: "자연과 인간의 소통",
      content:
        "대관령의 아름다운 자연과 사람이 소통하는 공간의 콘셉트,우리의 전통적 주거공간이 추구하는 자연과의 소통, 자연과의 조화를 계승해 대관령이 주는 아름다운 자연의 기쁨과 경이로움을 생생하게 반영하는 <환경디자인>을 강조했습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/estate/estate3.png",
      title: "품격 높은 라이프스타일",
      content:
        "오너 중심의 프라이빗 리조트와 스파 시스템 Alpensia Estate는 체류형 골프코스 홈으로서 한 단계 더 높은 주거문화 스타일을 표망했습니다. 오너 의 휴식과 충전을 위해 세심하게 안배된 마스터존은 침실과 프라이빗 스파 는 물론 오피스 기능까지 갖추어 품격 높은 라이프스타일을 창출했습니다."
    }
  ];
}
</script>

<style lang="scss" scoped src="./estate.scss"/>
