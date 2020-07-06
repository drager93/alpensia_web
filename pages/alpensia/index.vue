<template>
  <div class="alpensia-info-wrapper w12">
    <alpensia-public></alpensia-public>

    <div class="section1" df fdr fjc fic>
      <div class="t-center w12 tw11 mw11" df fdc fic>
        <div class="section1-tab noto font _20 w12 tw10 mw11" df fdr fic>
          <div
            class="tab-box"
            :class="{active : selectTab == 'town'}"
            @click="select('town')"
          >알펜시아 타운</div>
          <div
            class="tab-box"
            :class="{active : selectTab == 'estate'}"
            @click="select('estate')"
          >에스테이트</div>
          <div class="tab-box" :class="{active : selectTab == 'park'}" @click="select('park')">올림픽파크</div>
        </div>
      </div>
    </div>
    <div v-if="selectTab == 'town'">
      <town-info></town-info>
    </div>
    <div v-else-if="selectTab == 'estate'">
      <estate-info></estate-info>
    </div>
    <div v-else>
      <olympic-park-info></olympic-park-info>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import alpensiaPublic from "~/components/alpensiaPublic.vue";
import townInfo from "~/components/townInfo.vue";
import olympicParkInfo from "~/components/olympicParkInfo.vue";
import estateInfo from "~/components/estateInfo.vue";

@Component({
  components: {
    alpensiaPublic,
    olympicParkInfo,
    estateInfo,
    townInfo
  }
})
export default class extends Vue {
  selectTab: string = "town";

  public select(value: string) {
    this.selectTab = value;
  }
}
</script>

<style lang="scss" scoped src="./index.scss"/>
