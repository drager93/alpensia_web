<template>
  <div class="imageOverlap-wrapper">
    <div class="overlap-back hidet hidem" :style="{ backgroundImage: `url('${overlap.backUrl}')`}">
      <div class="img-wrap">
        <img class="overlap-img" :src="overlap.url" />
        <img class="star" :src="overlap.star" />
      </div>
    </div>
    <div class="m-overlap-back hided" :style="{ backgroundImage: `url('${overlap.url}')`}">
      <img class="m-star" :src="overlap.star" />
    </div>
    <div class="overlap-text w12 tw11 mw11" df fdr fjc fic>
      <div class="noto font _20 _greyish t-center hidem">
        <slot />
      </div>
      <div class="m-slot noto font _14 _greyish hided hidet">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({
  components: {}
})
export default class imageOverlap extends Vue {
  @Prop({ default: [] }) overlap!: any;
}
</script>

<style lang="scss" scoped src="./imageOverlap.scss"/>