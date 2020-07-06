<template>
  <div class="parkInfo tw12 mw12">
    <div df fdc fic>
      <div
        class="section1-header n-sq font _18 _greyish _regular t-center mw11"
      >평창동계올림픽을 유치한 국제적 규모와 시설</div>
      <div class="section1-text n-sq font _40 _greyish _bold t-center mw11">건강한 즐거움을 드립니다</div>
    </div>
    <image-overlap :overlap="overlap">
      2018 평창 동계올림픽의 핵심시설, 평창알펜시아 스포츠 파크가 올림픽의 감동을 이어갑니다. 올림픽의
      랜드마크 스키점핑타워와 겨울에는 국내 유일의 크로스 컨트리, 바이에슬론 경기장으로
      <br />탈바꿈하는
      알펜시아 700 골프클럽이 생생한 감동의 현장을 재현합니다.
    </image-overlap>
    <div df fdr fjc>
      <div class="parkInfo-postbox mw11" df fdr fjc>
        <div class="mw12" v-for="(post, index) in posts" :key="index" df fdr fjc>
          <post :post="post">{{ post.content }}</post>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import imageOverlap from "~/components/imageOverlap.vue";
import post from "~/components/post.vue";

@Component({
  components: { imageOverlap, post }
})
export default class olympicParkInfo extends Vue {
  public overlap: any = {
    backUrl: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/olympic-back.png",
    url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/olympic-1.png"
  };

  public posts: any[] = [
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/olympic1.png",
      //   logo: require("https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-postlogo1.png"),
      title: "알펜시아 700 골프클럽",
      content:
        "알펜시아 700 골프클럽은 전 세계 유명 홀들에서 콘셉트를 얻어 18홀의 레플리카(Replica) 형태로 설계되어 있어, 단 한번의 라운딩으로 세계 유명 골프코스를 모두 순례하는 듯한 감동과 국제적 수준의 서비스를 함께 만끽하실 수 있습니다. 5성호텔, 콘도 등의 알펜시아 회원분들께는 특별한 해택을 드립니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/olympic2.png",
      //   logo: require("https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-postlogo2.png"),
      title: "바이애슬론 & 크로스컨트리 코스",
      content:
        "겨울에 알펜시아 700 골프클럽은 국내 유일의 바이애슬론, 크로스컨트리 경기장으로 탈바꿈합니다. 국제스키연맹에서 인증한 최고의 시설을 바탕 으로 국내 동계 스포츠 육성은 물론 올림픽을 비롯한 세계선수권대회를 성공적으로 치러낸 경험을 가지고 있습니다."
    },
    {
      url: "https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/olympic3.png",
      //   logo: require("https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section5-postlogo3.png"),
      title: "알펜시아 스키점핑타워",
      content:
        "2018 평창 동계올림픽의 랜드마크로 자리매김한 알펜시아 스키점핑타워는 국내에서는 유일하게 국제연맹에서 인증 기준을 충족한 스키점프 경기장 입니다. 지상 90여 미터의 높이로 세워진 알펜시아 스키점핑타워 꼭대기의 전망대에서는 대관령의 아름다운 전경과 웅장한 풍광을 한눈에 조망할 수 있습니다."
    }
  ];
}
</script>

<style lang="scss" scoped src="./olympicParkInfo.scss"/>