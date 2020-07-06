<template>
  <div class="estateInfo w12 mw12">
    <div df fdc fic>
      <div
        class="section1-header n-sq font _18 _greyish _regular t-center mw11"
      >대한민국을 대표하는 최고의 명사분들께</div>
      <div class="section1-text n-sq font _40 _greyish _bold t-center mw11">
        최고의 프레스티지를
        드립니다
      </div>
    </div>
    <image-overlap :overlap="overlap">
      평창알펜시아 타운은 국내 최초로 리조트 단지 내에 5성 호텔과 콘도미니엄을 배치하였으며 월드 클래
      스의 우아한 분위기와 고품격 서비스를 제공하는 세계 1위의 호텔 체인 IHG 그룹이 운영하고 있습니다.
      리테일 스트리트 광장에서는 쇼핑과 외식을 즐기실 수 있으며 스키장, 워터파크 등을 통해 휴식에 필요
      한 모든 즐거움을 한곳에서 느낄 수 있도록 원스톱 리조트 시스템을 구현하였습니다.
    </image-overlap>
    <div df fdr fjc>
      <div class="estateInfo-postbox mw11" df fdr fjc>
        <div class="mw12" v-for="(post, index) in posts" :key="index" df fdr fjc>
          <post class="name-height" :post="post">{{ post.content }}</post>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import imageOverlap from "~/components/imageOverlap.vue";
import post from "~/components/post.vue";

@Component({
  components: { imageOverlap, post }
})
export default class extends Vue {
  public overlap: any = {
    backUrl: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/estate-back.png",
    url:"https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/estate-1.png"
  };

  public posts: any[] = [
    {
      url:"https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/estate1.png",
      title: "백두대간의 장중한 흐름에 순응한 건축스타일",
      content:
        "대관령에 흐르고 있는 백두대간의 산세와 형상을 따라 펼쳐진 알펜시아 에스테이트의 장중한 경관은 골프코스에 또 다른 멋을 제공합니다. 자연을 닮은 지붕의 부드러운 실루엣, 기단부의 자연스런 재질, 그리고 독특한 패턴 은 우아하고 품격있는 알펜시아 에스테이트만의 건축스타일을 구현하고 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/estate2.png",
      title: "대관령의 아름다운 자연과 사람이 서로 소통하는 공간",
      content:
        "자연과의 소통, 자연과의 조화를 디자인 컨셉으로 한 알펜시아 에스테이트 는 과학적인 배치계획과 자연스런 환경디자인 전개로 아름다운 자연이 주는 기쁨과 경이로움을 생생하게 경험하실 수 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/estate3.png",
      title: "오너 중심의 프라이빗 리조트&스파",
      content:
        "체류형 골프코스홈인 알펜시아 에스테이트는 스파 및 엔터테이먼트룸 등의 휴식공간들의 독립적인 조망과 비즈니스용 업무공간의 새로운 라이프스타 일 제시로 한 단계 더 높은 주거문화를 실현하였습니다."
    }
  ];
}
</script>

<style lang="scss" scoped src="./estateInfo.scss"/>