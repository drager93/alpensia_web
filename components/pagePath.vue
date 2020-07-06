<template>
  <div class="page-path" df fdr fjc fic>
    <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section2-home.png" />
    <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section2-arrow.png" />
    <div class="noto font _13 _greyish-three">
      <slot name="category" />
    </div>
    <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/info/section2-arrow.png" />
    <div class="noto font _13 _greyish-three">
      <slot name="menu" />
      <slot name="m-menu" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {}
})
export default class pagePath extends Vue {}
</script>

<style lang="scss" scoped src="./pagePath.scss"/>