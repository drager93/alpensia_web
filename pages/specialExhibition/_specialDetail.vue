<template>
  <div class="special-detail-wrapper w12">
    <special-banner></special-banner>
    <page-path>
      <template v-slot:category>특별전</template>
      <template v-slot:menu>진행중</template>
    </page-path>
    <div class="section-content mw12" df fdr fjc>
      <div class="w12 mw12">
        <div class="content-title noto font _24 _greyish t-center w12">{{data.title}}</div>
        <div class="content-date" df fdr fje>
          <div class="noto font _15 _greyish _regular">특별전 기간 : {{data.startDate}}~{{data.endDate}}</div>
        </div>
        <div class="content-image" df fdr fjc>
          <img class="w12 tw11 mw12" :src="data.detailImg" />
        </div>
        <div class="content-list">
          <nuxt-link
            :to="'/specialExhibition/' + prev.index"
            df
            fdr
            fic
            v-if="prev.index != data.index"
          >
            <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/special/detail-up.png" />
            <div class="noto font _16 _greyish _bold">다음글</div>
            <div class="list-title noto font _16 _greyish-three _regular">{{prev.title}}</div>
          </nuxt-link>
          <nuxt-link
            :to="'/specialExhibition/' + next.index"
            df
            fdr
            fic
            v-if="next.index != data.index"
          >
            <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/special/detail-down.png" />
            <div class="noto font _16 _greyish _bold">이전글</div>
            <div class="list-title noto font _16 _greyish-three _regular">{{next.title}}</div>
          </nuxt-link>
        </div>
        <div class="content-back" df fdr fje>
          <nuxt-link to="/specialExhibition/special" class="noto font _16 _greyish-three">목록</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import pagePath from "~/components/pagePath.vue";
import specialBanner from "~/components/specialBanner.vue";
import * as Types from "~/types";
import * as BoardData from "~/data/board";
import axios from "~/plugins/axios";
import moment from "moment";

@Component({
  components: {
    pagePath,
    specialBanner
  }
})
export default class extends Vue {
  data: Types.Board.IBoard = BoardData.setBoard;
  next: number = 0;
  prev: number = 0;

  private async mounted() {
    let response = await axios
      .get("board/" + this.$route.params.specialDetail)
      .then(res => {
        return res.data;
      });
    console.log(response);

    this.data = response.board;
    this.next = response.next;
    this.prev = response.prev;

    this.data.detailImg = require("../../static/images/special/" +
      this.data.detailImg);
    this.data.startDate = moment(this.data.startDate).format("YYYY.MM.DD");
    this.data.endDate = moment(this.data.endDate).format("YYYY.MM.DD");
  }
}
</script>

<style scoped lang="scss" src="./specialDetail.scss"/>