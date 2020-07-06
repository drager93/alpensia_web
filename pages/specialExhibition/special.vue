<template>
  <div class="special-wrapper w12">
    <special-banner></special-banner>
    <page-path>
      <template v-slot:category>특별전</template>
      <template v-slot:menu>진행중</template>
    </page-path>
    <div class="section2">
      <div class="section2-imagebox" df fdc fic v-for="(item,index) in list" :key="index">
        <div class="t-center w11">
          <div class="box-header n-sq font _54 _greyish">{{item.title}}</div>
          <div
            class="box-text n-sq font _26 _greyish _regular"
          >특별전 기간 : {{item.startDate}}~ {{item.endDate}}</div>
        </div>
        <nuxt-link :to="'/specialExhibition/' + item.index" df fdr fjc>
          <img class="w12 tw12 mw11" :src="item.mainImg" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import pagePath from "~/components/pagePath.vue";
import specialBanner from "~/components/specialBanner.vue";
import * as Types from "~/types";
import axios from "~/plugins/axios";
import moment from "moment";

@Component({
  components: {
    pagePath,
    specialBanner
  }
})
export default class extends Vue {
  list: Types.Board.IBoard[] = [];

  private async mounted() {
    let response = await axios.get("board").then(res => {
      return res.data;
    });

    for (let item of response) {
      item.startDate = moment(item.startDate).format("YYYY.MM.DD");
      item.endDate = moment(item.endDate).format("YYYY.MM.DD");
      item.mainImg = require("../../static/images/special/" + item.mainImg);
    }

    this.list = response;
  }
}
</script>

<style scoped lang="scss" src="./special.scss"/>