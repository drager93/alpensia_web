<template>
  <div class="post-wrapper mw12" df fdc fis>
    <img class="post-image w12" :src="post.url" />
    <img class="post-logo" :src="post.logo" />
    <div class="post-container">
      <div class="post-content noto w12">
        <div class="post-name font _24 _greyish">{{ post.title }}</div>
        <div class="post-subname font _24 _greyish">{{ post.subTitle }}</div>
        <div class="post-text font _16 t-justify tw11">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({
  components: {}
})
export default class post extends Vue {
  @Prop({ default: [] }) post!: any;
}
</script>

<style lang="scss" scoped src="./post.scss"/>