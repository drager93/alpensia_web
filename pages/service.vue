<template>
  <div class="service-wrapper w12">
    <div class="service-title noto font _40 _greyish t-center">분양 회원 서비스</div>
    <div class="tab-wrap" df fdc fic>
      <div class="service-tab w6 tw10 mw11" df fdr fjc fic>
        <div
          class="n-sq font _20 _greyish t-center c-pointer w6"
          :class="{active : selectTab == 'term'}"
          @click="select('term')"
        >분양 회원 카드 발급 정책</div>
        <div
          class="n-sq font _20 _greyish t-center c-pointer w6"
          :class="{active : selectTab == 'form'}"
          @click="select('form')"
        >서류 양식</div>
      </div>

      <div class="w12" v-if="selectTab == 'term'">
        <card-term></card-term>
      </div>
      <div class="w12" v-else>
        <document-form></document-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import cardTerm from "~/components/cardTerm.vue";
import documentForm from "~/components/documentForm.vue";

@Component({
  components: {
    cardTerm,
    documentForm
  }
})
export default class extends Vue {
  selectTab: string = "term";

  public select(value: string) {
    this.selectTab = value;
  }
}
</script>

<style lang="scss" scoped src="./service.scss"/>
