<template>
  <div class="holidayHotel-wrapper w12">
    <product-info-header :header="header"></product-info-header>
    <page-path>
      <template v-slot:category>분양 상품소개</template>
      <template v-slot:menu>홀리데이인호텔</template>
    </page-path>
    <div class="section2">
      <div class="section2-s1" df fdr fjc fic>
        <div class="s1-header t-center n-sq font _40 _greyish _regular tw11 mw11">
          비즈니스 친화적인
          <span class="font _bold">또 하나의 럭셔리 호텔</span>
        </div>
      </div>
      <image-overlap :overlap="overlap">
        국내에서 가장 규모가 큰 리조트 내 컨벤션센터를 가지고 있는 홀리데이인 호텔은 비즈니스에 최적화된
        호텔입니다. 이와 더불어 키즈, 패밀리 컨셉에 특화된 객실을 가지고 있어 가족과 함께 자연 속에서 휴식
        과 비즈니스를 동시에 즐길 수 있는 고품격 호텔입니다.
      </image-overlap>
      <div class="section2-s3" df fdc fic>
        <div class="s3-header n-sq font _40 _greyish _regular mw11">
          홀리데이인호텔의
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
    url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hih/section1-back.png",
    title: "HOLIDAY INN RESORT HOTEL"
  };

  public overlap: any = {
    backUrl: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hih/section2-back.png",
    url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hih/section2-1.png",
    star: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/fs.png"
  };

  public posts: any[] = [
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hih/hih1.png",
      title: "평창알펜시아 컨벤션센터",
      content:
        "약 2,500명을 수용할 수 있는 국내 최고 수준의 컨퍼런스 시설로 8개 국어 동시 통역시스템을 갖춘 그랜드볼룸과 오디토리움, 비즈니스센터 등 14개 회의실과 연회장을 보유하고 있으며 대규모 국제 행사뿐만 아니라 다양한 문화, 예술행사를 개최할 수 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hih/hih2.png",
      title: "몽블랑 레스토랑",
      content:
        "한식의 맛과 멋을 즐길 수 있는 다양한 요리를 선보이는 자연 속 다이닝 공간입니다. 특급호텔의 오랜 노하우를 가지고 있는 쉐프가 제공하는 품격 있는 정찬을 즐길 수 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hih/hih3.png",
      title: "회의공간 및 비즈니스 센터",
      content:
        "7층에 위치한 코스모스룸, 민들레룸은 대관령의 아름다운 경관을 바라보며 비즈니스 미팅을 할 수 있는 특별한 공간입니다. 또한, 로비에 위치한 비즈니스 센터에서는 업무를 위한 다양한 편의 서비스를 제공합니다."
    }
  ];

  public rooms: any[] = [
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hih/room1.png",
      title: "SUPERIOR ROOM",
      content:
        "자연소재를 사용하여 편안함을 느끼실 수 있으며 포인트 컬러를 활용하여 공간에 활기를 불어 넣었습니다. 도심을 벗어나 기분 좋은 편안함을 느끼게 하는 공간입니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hih/room2.png",
      title: "SUPERIOR ONDOL",
      content:
        "한실로 구성된 슈페리어 온돌룸은 전통의 미를 느낄 수 있는 공간입니다. 고유 문양의 가구와 소품들을 배치하여 한국적 미를 더욱 극대화했으며, 공간을 넓게 활용할 수 있는 온돌형 객실을 선호하시는 분들께 편안하고 따뜻한 분위기를 제공합니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hih/room3.png",
      title: "ALPS SUITE",
      content:
        "알프스 스위트는 침실과 거실이 통합되어 있는 스튜디오형의 효율적인 객실로, 넓은 공간에서 편안한 휴식 시간을 계획하시는 분들께 적합합니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hih/room4.png",
      title: "FAMILY SUITE",
      content:
        "키즈 스위트와 유사한 구조로 마련된 패밀리 스위트는 전체적으로 밝고 부드러운 느낌의 인테리어, 침실과 분리된 넓은 키즈룸으로 가족 고객이 이용하시기에 더 없이 매력적인 객실입니다. 밝고 따뜻한 색감으로 활력 넘치는 실내 분위기를 느낄 수 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hih/room5.png",
      title: "KIDS SUITE",
      content:
        "키즈 스위트는 화사한 분위기의 활기가 넘치는 공간으로 어린자녀를 둔 가족 고객들이 선호하시는 객실입니다. 2층 침대가 마련된 독립적 공간, 밝고 따뜻한 색감과 소품들로 아이들을 위한 배려를 느낄 수 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hih/room6.png",
      title: "SPA SUITE",
      content:
        "스파 스위트는 욕실과 테라스의 개방감을 강조하여, 스파를 즐기며 대관령의 경관을 즐길 수 있는 객실입니다. 자연 속 편안함과 함께, 도심을 벗어나 활력을 충전할 수 있는 공간으로 특히 여성분께 인기가 높습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/hih/room7.png",
      title: "TERRACE SUITE",
      content:
        "홀리데이인 호텔의 장점을 극대화한 최고급 객실입니다. 품위 있고 아늑한 기분을 느낄 수 있는 자연 질감의 소재, 포인트 컬러가 돋보이는 인테리어를 통해 자연 속 별장에 머무르는 듯한 경험을 선사합니다."
    }
  ];
}
</script>

<style lang="scss" scoped src="./holidayInnHotel.scss"/>