<template>
  <div class="intercontinental-wrapper w12">
    <product-info-header :header="header"></product-info-header>
    <page-path>
      <template v-slot:category>분양 상품소개</template>
      <template v-slot:menu>인터컨티넨탈 호텔</template>
    </page-path>
    <div class="section2">
      <div class="section2-s1" df fdr fjc fic>
        <div class="s1-header t-center n-sq font _40 _greyish _regular tw11 mw11">
          자연이 선택한 알프스와 감동,
          <br />
          <span class="font _bold">그리고 럭셔리 힐링</span>
        </div>
      </div>
      <image-overlap class="hidet hidem" :overlap="overlap">
        세계 최대 규모의 호텔 매니지먼트사인 인터컨티넨탈 그룹(IHG)이 운영하는 국내 최초 리조트 단지 내
        <br />최고급 5성 호텔입니다. 대관령의 전경이 파노라마처럼 펼쳐지는 환상적인 전망과
        <br />고급스럽고 품격있는 분위기를 느낄 수 있는 238개의 객실로 이루어져 있습니다.
      </image-overlap>
      <image-overlap class="hided" :overlap="overlap">
        세계 최대 규모의 호텔 매니지먼트사인 인터컨티넨탈 그룹(IHG)이 운영하는 국내 최초 리조트 단지 내
        최고급 5성 호텔입니다. 대관령의 전경이 파노라마처럼 펼쳐지는 환상적인 전망과
        고급스럽고 품격있는 분위기를 느낄 수 있는 238개의 객실로 이루어져 있습니다.
      </image-overlap>
      <div class="section2-s3" df fdc fic>
        <div class="s3-header n-sq font _40 _greyish _regular mw11">
          인터컨티넨탈 호텔의
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
        <div class="postbox w9 tw11 mw10" df fdr fjs>
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
  public posts: any[] = [
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s3-1.png",
      title: "스파",
      content:
        "강원도 유일의 고품격 데스티네이션 스파에서는 고객들의 피로회복과 혈액 순환을 돕는 시그니처 마사지, 야외 자쿠지에서 따사로운 햇살과 여유를 즐기며 받는 Eco-Nature 테라피와 건강관리 등 최고급 서비스를 제공합니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s3-2.png",
      title: "플레이버스",
      content:
        "‘건강한 삶’과 ‘품격있는 스타일’을 지향하는 최고급 레스토랑입니다. 오랜 노하우를 가진 특급호텔 쉐프들이 선보이는 깔끔하고 다양한 요리들을 신선하게 즐기실 수 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s3-3.png",
      title: "옥시라운지",
      content:
        "호텔을 찾은 손님들을 위한 현대적이고 감각적인 공간으로 가벼운 스낵과 케이크, 칵테일과 함께 비즈니스 티타임에서 트랜디한 사교 모임까지 즐기실 수 있습니다."
    }
  ];

  public rooms: any[] = [
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s4-1.png",
      title: "STANDARD",
      content:
        "창밖의 풍경이 실내에 들어오는 공간에 전체적으로 따듯한 톤과 자연재질의 인테리어 소재를 활용하여 더욱 친근하고 포근한 느낌을 주는 공간입니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s4-2.png",
      title: "JUNIOR SUITE",
      content:
        "침실과 거실을 분리하여 공간의 활용도를 높이고 자연을 담으려는 인테리어 컨셉으로 부드럽고 온화한 공간이 연출되었습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s4-3.png",
      title: "EXECUTIVE SUITE",
      content:
        "테라스에서 이국적분위기의 아름다운 야경을 감상하며 인터컨티넨탈에서 둘만의 시간을 보내실 수 있습니다. 전체적으로 밝고 부드러운 느낌의 색조를 사용하여 연인, 부부가 와서 지내기에 더없이 매력적인 공간입니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s4-4.png",
      title: "DELUXE SUITE",
      content:
        "온 가족이 함께 즐길 수 있는 럭셔리한 휴가를 계획하신다면 부부침실과 아이들 침실이 따로 준비되어있는 디럭스 스위트를 권해드립니다. 두고두고 추억할 수 있는 가족 간의 의미있는 시간을 보내실 수 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s4-5.png",
      title: "ALPENSIA SUITE",
      content:
        "시간에 구애받지 않는 긴밀한 비즈니스 회의를 계획하신다면 알펜시아 스위트를 선택하십시오. 빠른 인터넷 서비스는 물론 최대 8분이 회의 할 수 있는 테이블이 갖춰져 있어 비즈니스와 휴식을 병행하실 수 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s4-6.png",
      title: "PRESIDENTIAL SUITE",
      content:
        "넓은 발코니를 통해 대관령의 아름다운 자연환경을 감상하며 보내는 넉넉하고 여유로운 시간. 고급스러운 인테리어와 자연소재 마감으로 품위 있는 아늑한공간에서 가족과 추억을 만드실 수 있습니다."
    }
  ];

  public overlap: any = {
    backUrl: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s2-back.png",
    url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s2-1.png",
    star: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/fs.png"
  };

  public header: any = {
    url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/section1-back.png",
    title: "INTERCONTINENTAL HOTEL"
  };
}
</script>

<style lang="scss" scoped src="./intercontinental.scss"/>