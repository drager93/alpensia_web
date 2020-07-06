<template>
  <div class="menuTab-wrapper">
    <div v-for="(menu, index) in menus" :key="index">
      <nuxt-link :to="menu.link" class="noto font _15 _white _regular">{{ menu.title }}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { IMenu } from "~/types/menu";

@Component({
  components: {}
})
export default class menuTab extends Vue {
  @Prop({ default: [] }) menus!: IMenu[];
}
</script>

<style scoped lang="scss" src="./menuTab.scss"/>