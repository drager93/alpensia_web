<template>
  <div class="alpensia-country-club w12">
    <product-info-header :header="header"></product-info-header>
    <page-path>
      <template v-slot:category>분양 상품소개</template>
      <template v-slot:m-menu>알펜시아 C.C</template>
    </page-path>
    <div class="section1">
      <div class="section1-header" df fdr fjc>
        <div class="n-sq font _40 font _greyish _regular t-center tw11 mw11">
          대관령의 아름다운 자연이 빚어낸 환상적인 골프코스
          <br />
          <span class="font _bold">ALPENSIA COUNTRY CLUB</span>
        </div>
      </div>
      <image-overlap class="hidem" :overlap="overlap">
        세계적 거장의 27홀 골프코스 디자인
        <br />메도우, 레이크, 포레스트 세 개의 코스로 이루어진 180만 제곱미터의 27홀 회원제 골프코스
        <br />세계적인 골프코스 설계의 거장 Rober Trent Jones, Jr. 설계
      </image-overlap>

      <image-overlap class="hided hidet" :overlap="overlap">
        세계적 거장의 27홀 골프코스 디자인
        메도우, 레이크, 포레스트 세 개의 코스로 이루어진 180만 제곱미터의 27홀 회원제 골프코스
        세계적인 골프코스 설계의 거장 Rober Trent Jones, Jr. 설계
      </image-overlap>
      <div df fdr fjc>
        <img class="ccmap w12 tw12 mw12" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/acc/section2-map.png" />
      </div>
    </div>
    <div class="section2">
      <div class="section2-content" df fdr fjc>
        <div class="postbox-wrapper w12" df fdr fjc>
          <div class="w12 post-box" df fdr fjc>
            <div class="mw11" v-for="(post, index) in posts" :key="index" df fdr>
              <post class="text-height" :post="post">{{ post.content }}</post>
            </div>
          </div>
          <div class="zindex-background w10 hidet hidem"></div>
        </div>
      </div>

      <!-- <div class="section2-content" df fdr fjc>
        <div class="postbox-wrapper w12" df fdr fjc>
          <div class="w12 post-box m-post-box" df fdr fjs>
            <div class="mw11" v-for="(post, index) in posts1" :key="index" df fdr>
              <post :post="post">{{ post.content }}</post>
            </div>
          </div>
          <div class="zindex-background w12 hidet hidem"></div>
        </div>
      </div>-->
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
    url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/acc/section1-back.png",
    title: "ALPENSIA COUNTRY CLUB",
    mTitle: "ALPENSIA C.C"
    // text: "세계적인 명품 골프 코스"
  };

  public overlap: any = {
    backUrl: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/acc/section2-back.png",
    url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/acc/section2-1.png"
  };

  public posts: any[] = [
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/acc/acc1.png",
      title: "포레스트 코스",
      subTitle: "9Hole / 전장 3,620yd",
      content:
        "기존의 산림과 조화를 이루며 조성된 포레스트 코스는 파노라마처럼 펼쳐진 산의 경치와 코스를 둘러싼 숲의 신선함을 느끼실 수 있습니다. 숲 사이로 흐르는 실개천은 골프장의 평화로움을 더해주는 동시에 페어웨이를 가로질 로 배치되어 샷의 정확성을 요구해, 도전적인 모험심을 느껴 보실 수 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/acc/acc2.png",
      title: "레이크 코스",
      subTitle: "9Hole / 전장 3,536yd",
      content:
        "레이크 코스는 Alpensiz Country Club이 세계 100대 골프장으로 진입 하는 것을 가능케 해줄 호반 코스입니다. 챔피언십 등급의 토너먼트를 개최 할 수 있는 전략적인 코스 설계와 한 번의 라운딩으로도 잊지 못할 아름다운 풍경이 조화를 이루고 있습니다. 기존의 하천을 그대로 살려 조성된 레이크 코스에서는 넓은 호수와 클럽하우스의 아름다운 경관을 느낄 수 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/acc/acc3.png",
      title: "메도우 코스",
      subTitle: "9Hole / 전장 3,502yd",
      content:
        "억새와 갈대가 부드럽게 어우러져 스코틀랜드의 초원을 연상시키는 메도우 코스에서 아름다운 풍경화의 주인공이 되어 라운딩을 즐겨 보십시오. 실개 천과 연못의 고요한 풍경사이로 다채로운 모습의 벙커들이 코스를 특색있게 만들어 주고 있습니다. 길게 이어지는 건천은 정확한 샷을, 레이크를 끼고 있는 그린은 도전적인 플레이를 시도할 수 있도록 설계되어 있습니다."
    }
  ];

  public posts1: any[] = [
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/acc/acc4.png",
      title: "Gated Community",
      content:
        "백두대간의 장중한 흐름에 순응한 건축스타일. 육중하면서도 가볍게 떠 있는 듯한 지붕의 부드러운 실루엣과 지붕을 떠 받치고 있는 기단부의 자연스런 재질, 독특한 패턴은 우아하고 품격있는 Aplensia Estate만의 건축 스타일을 보여주고 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/acc/acc5.png",
      title: "세계적인 운영사의 골프코스 관리",
      content:
        "세계 최대 골프전문 운영사인 <트룬골프>의 골프코스 관리. 페어웨이로 카트 진입이 가능하며, 전세계 2인승 골프카트 제공 (올림픽 유치와 최상의 골프코스와 복합 레저 인프라로 투자가치 상승)"
    }
  ];
}
</script>

<style lang="scss" scoped src="./alpensiaCountryClub.scss"/>