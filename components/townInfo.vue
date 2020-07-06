<template>
  <div class="town tw12 mw12">
    <div class="section1-header n-sq font _18 _greyish _regular t-center">휴식에 필요한 모든 것을 한곳에서 즐길 수 있는</div>
    <div class="section1-text n-sq font _40 _greyish _bold t-center">평창알펜시아 타운</div>
    <image-overlap :overlap="overlap">
      평창알펜시아 타운은 국내 최초로 리조트 단지 내에 5성 호텔과 콘도미니엄을 배치하였으며 월드 클래스의
      우아한 분위기와 고품격 서비스를 제공하는 세계 1위의 호텔 체인 IHG 그룹이 운영하고 있습니다.
      리테일 스트리트 광장에서는 쇼핑과 외식을 즐기실 수 있으며 스키장, 워터파크 등을 통해 휴식에 필요한
      모든 즐거움을 한곳에서 느낄 수 있도록 원스톱 리조트 시스템을 구현하였습니다.
    </image-overlap>
    <div class="town-content" df fdc fic>
      <div class="postbox mw11" df fdr fjc>
        <div v-for="(post, index) in posts" :key="index" class="mw12" df fdr>
          <post :post="post">{{ post.content }}</post>
        </div>
      </div>
      <div class="imagebox w12 tw10 mw12" df fdr fjc>
        <div class="mw11" v-for="(image, index) in images" :key="index" df fdr>
          <img class="mw12" :src="image.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import post from "~/components/post.vue";
import imageOverlap from "~/components/imageOverlap.vue";

@Component({
  components: {
    post,
    imageOverlap
  }
})
export default class townInfo extends Vue {
  selectTab: string = "town";

  public select(value: string) {
    this.selectTab = value;
  }
  public posts: any[] = [
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-post1.png",
      logo: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-postlogo1.png",
      title: "인터컨티넨탈 호텔 (5성 호텔)",
      content:
        "세계 최대규모의 호텔 매니지먼트사인 인터컨티넨탈 호텔 그룹(IHG)이 운영하는 국내 최초 리조트 단지 내 최고급 호텔입니다. 대관령의 전경이 파노라마처럼 펼쳐지는 환상적인 전망과 고급스럽고 품격있는 분위기를 느낄 수 있는 238개의 객실로 이루어져 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-post2.png",
      logo: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-postlogo2.png",
      title: "홀리데이인 호텔 (5성 호텔)",
      content:
        "국내에서 가장 규모가 큰 리조트 내 컨벤션센터를 가지고 있는 홀리데이인 호텔은 비즈니스에 최적화된 호텔입니다. 이와 더불어 키즈, 패밀리 컨셉에 특화된 객실을 가지고 있어 가족과 함께 자연 속에서 휴식과 비즈니스를 동시에 즐길 수 있는 고품격 호텔입니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-post3.png",
      logo: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-postlogo3.png",
      title: "홀리데이인 콘도",
      content:
        "보행자 전용 거리와 광장을 따라 저층형 건물로 조성된 홀리데이인 콘도는 대관령의 아름다운 자연과 어우러져 동 화속 그림 같은 이색적인 분위기를 연출합니다. 단순하게 숙박만 제공하는 것이 아니라 쇼핑과 문화, F&B 등 휴식에 필요한 모든 것을 편리하게 즐길 수 있는 원스톱 리조트 시설을 갖추 고 있습니다."
    }
  ];

  public images: any[] = [
    { url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-content1.png" },
    { url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-content2.png" },
    { url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-content3.png" },
    { url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-content4.png" },
    { url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-content5.png" },
    { url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-content6.png" }
  ];

  public overlap: any = {
    backUrl: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-header.png",
    url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-header-1.png"
  };
}
</script>

<style lang="scss" scoped src="./townInfo.scss"/>