<template>
  <div class="otherGoods" df fdc fic>
    <div class="goods-title n-sq font _40 _greyish _regular mw11">
      다른 상품
      <span class="font _bold">둘러보기</span>
    </div>
    <div class="image-box" df fdr fjc fic>
      <div class="mw11" df fdr fjc fic>
        <nuxt-link to="/productInfo/estate">
          <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s5-1.png" />
        </nuxt-link>
        <nuxt-link to="/productInfo/alpensiaCountryClub">
          <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s5-2.png" />
        </nuxt-link>
        <nuxt-link to="/productInfo/intercontinental">
          <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s5-3.png" />
        </nuxt-link>
        <nuxt-link to="/productInfo/holidayInnHotel">
          <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s5-4.png" />
        </nuxt-link>
        <nuxt-link to="/productInfo/holidayInnCondo">
          <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/productInfo/intercontinental/s5-5.png" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {}
})
export default class otherGoods extends Vue {}
</script>

<style lang="scss" scoped src="./otherGoods.scss"/>
