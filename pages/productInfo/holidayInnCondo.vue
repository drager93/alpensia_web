<template>
  <div class="holidayCondo-wrapper w12">
    <product-info-header :header="header"></product-info-header>
    <page-path>
      <template v-slot:category>분양 상품소개</template>
      <template v-slot:menu>홀리데이 인 & 스위트</template>
    </page-path>
    <div class="section2">
      <div class="section2-s1" df fdr fjc fic>
        <div class="s1-header t-center n-sq font _40 _greyish _regular tw11 mw11">
          해발 700고지의 건강함이 숨쉬는
          <br />
          <span class="font _bold">해외 리조트 스타일의 유럽형 콘도미니엄</span>
        </div>
      </div>
      <image-overlap
        :overlap="overlap"
      >보행자 전용 거리와 광장을 따라 저층형 건물로 조성된 홀리데이인 콘도는 대관령의 아름다운 자연과 어우러져 동화 속 그림 같은 이색적인 분위기를 연출합니다. 단순하게 숙박만 제공하는 것이 아니라 쇼핑과 문화, F&B 등 휴식에 필요한 모든 것을 편리하게 즐길 수 있는 원스톱 리조트 시설을 갖추고 있습니다.</image-overlap>
      <div class="section2-s3" df fdc fic>
        <div class="s3-header n-sq font _40 _greyish _regular mw11">
          홀리데이인콘도의
          <span class="font _bold">특장점</span>
        </div>
        <div class="postbox-wrapper w12" df fdr fjc>
          <div class="postbox" df fdr fjc>
            <div class="tw12 mw11" v-for="(post, index) in posts" :key="index">
              <post :post="post">{{ post.content }}</post>
            </div>
          </div>
          <div class="zindex-background w12 hidet hidem"></div>
        </div>
      </div>
      <div class="section2-s4" df fdc fic>
        <div class="sectio2-header n-sq font _40 _greyish _regular">
          객실
          <span class="font _bold">평면도 안내</span>
        </div>
        <div class="postbox w9 tw11 mw10" df dfr fjsc>
          <div class="mw12" v-for="(room, index) in rooms" :key="index">
            <post class="m-content-padding small scroll" :post="room">{{ room.content }}</post>
          </div>
        </div>
      </div>
      <other-goods></other-goods>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import post from "~/components/post.vue";
import pagePath from "~/components/pagePath.vue";
import imageOverlap from "~/components/imageOverlap.vue";
import otherGoods from "~/components/otherGoods.vue";
import productInfoHeader from "~/components/productInfoHeader.vue";

@Component({
  components: { pagePath, post, imageOverlap, otherGoods, productInfoHeader }
})
export default class extends Vue {
  public header: any = {
    url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hic/section1-back.png",
    title: "HOLIDAY INN & SUITES"
    // text: "해발 700고지의 건강함을 숨쉬는 국내 유일의 유럽풍 가족형 콘도미니엄"
  };

  public overlap: any = {
    backUrl: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hic/section2-back.png",
    url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hic/section2-1.png"
  };

  public posts: any[] = [
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hic/hic1.png",
      title: "웰컴센터",
      content:
        "별도로 조성한 웰컴센터를 통하여 체크인, 체크아웃을 편리하게 하실 수 있으며, 컨시어시 등 평창알펜시아의 품격에 어울리는 다양한 서비스를 제공 받으실 수 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hic/hic2.png",
      title: "리테일스트리트",
      content:
        "동화 속 풍경과 같은 평창알펜시아 리테일스트리트는 다양한 축제와 쇼핑을 함께 즐길 수 있는 자연 속 문화공간입니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hic/hic3.png",
      title: "플레이그라운드",
      content:
        "평창알펜시아는 가족을 위한 놀이터는 물론 활동적인 여가를 즐길 수 있는 농구장, 테니스장, 스케이트보드장 등 다양한 스포츠 편의시설을 구비하고 있습니다."
    }
  ];

  public rooms: any[] = [
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hic/room1.png",
      title: "STANDDARD (22PY형)",
      content:
        "주방에 포인트컬러를 사용하여 개성있는 분위기를 연출하면서 따뜻한 톤의 마감재를 인테리어로 활용하였습니다. 합리적인 동선계획으로 공간감을 극대화시켰고, 도심을 벗어나 휴식하기에 적합한 편안한 느낌의 공간입니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hic/room2.png",
      title: "DELUXE (33PY형)",
      content:
        "전체적으로 밝고 화사한 색감으로 경쾌한 느낌을 살렸습니다. 효율적인 공간구성으로 개방감을 높였으며 특히, 여가공간으로서의 키친과 홈바의 분위기가 매력적입니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hic/room3.png",
      title: "FAMILY (35PY형)",
      content:
        "자연과 교감하는 리조트 분위기를 반영하여 자연 질감 소재를 인테리어로 활용하고 밝은 그린톤을 포인트로 하여 깨끗한 느낌과 모던한 분위기를 연출하였습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hic/room4.png",
      title: "LUXURY (39PY형)",
      content:
        "넉넉한 발코니를 통해 대관련의 자연을 생생하게 느끼실 수 있습니다. 가족 단위 고객을 위한 공간으로 좌우 독립적으로 배치된 2개의 큰 침실과 욕실은 두 가족이 함께 지내시기에도 전혀 불편함이 없습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hic/room5.png",
      title: "ROYAL A (49PY형)",
      content:
        "블루톤을 주조색으로한 이국적이며 우아한 분위기가 연출된 공간입니다. 대면형 주방개념의 도입으로 바에서 마주보고 가족과 이야기를 할 수 있으며, 모든 공간에서 가족과 함께 시간을 보내실 수 있게 구성하였습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hic/room6.png",
      title: "ROYAL B (49PY형)",
      content:
        "블루톤을 주조색으로한 이국적이며 우아한 분위기가 연출된 공간입니다. 리조트 콘도임에도 고급 주택 못지 않게 기품 있는 실내공간을 경험하실 수 있습니다."
    }
  ];
}
</script>

<style lang="scss" scoped src="./holidayInnCondo.scss"/>