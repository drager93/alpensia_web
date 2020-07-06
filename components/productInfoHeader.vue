<template>
  <div class="product-info-header" df fdr fjc>
    <div
      class="header-background w12 font _white"
      :style="{ backgroundImage: `url('${header.url}')`}"
      df
      fdc
      fjc
      fic
    >
      <div class="header-logo t-center">
        <img class="mw11" :src="header.logo" />
      </div>
      <div class="header-title n-my font _54 _bold t-shadow tw11 mw11">{{ header.title }}</div>
      <div class="header-text n-sq font _20 _regular t-center t-shadow tw11 mw11">{{ header.text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({
  components: {}
})
export default class productInfoHeader extends Vue {
  @Prop({ default: [] }) header!: any;
}
</script>

<style lang="scss" scoped src="./productInfoHeader.scss"/>
