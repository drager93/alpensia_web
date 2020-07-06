<template>
  <div class="specialBanner-wrapper w12" df fdc fjc fic>
    <div class="banner-header n-my font _54 _white t-shadow mw10">평창 알펜시아 특별전</div>
    <div class="banner-text n-sq font _21 _white _regular mw11 t-shadow">자연이 선택한 알프스와 감동, 그리고 럭셔리 힐링</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import pagePath from "~/components/pagePath.vue";

@Component({
  components: {
    pagePath
  }
})
export default class specialBanner extends Vue {}
</script>

<style scoped lang="scss" src="./specialBanner.scss"/>