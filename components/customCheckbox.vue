<template>
  <div class="custom-checkbox" df fdr fic>
    <img :class="{'on': !isAgree}" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/component/uncheck.png" />
    <img :class="{'on': isAgree}" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/component/checked.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { booleanLiteral } from "@babel/types";

@Component({
  components: {}
})
export default class customCheckbox extends Vue {
  @Prop({ default: false }) isAgree!: boolean;
}
</script>

<style lang="scss" scoped src="./customCheckbox.scss"/>