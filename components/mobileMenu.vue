<template>
  <div class="mobile-menu-wrapper" :class="{show : isShow}">
    <div class="blur" @click="closeMenu"></div>
    <div class="menu-container" df fdc fjb fic>
      <div class="menu-content">
        <div class="other-view t-center">
          <nuxt-link
            class="n-sq font _16 _greyish _bold t-center mw12"
            to="/presale"
            @click.native="closeMenu"
          >분양 상담신청하기</nuxt-link>
        </div>
        <div
          class="menu-tab noto font _20 _greyish _bold"
          df
          fdr
          fic
          v-for="(menu, index) in menus"
          :key="index"
        >
          <div class="mobile-menu mw12" df fdr fjb fic>
            <nuxt-link
              class="font _20 _greyish _bold"
              :to="menu.link"
              @click.native="closeMenu"
            >{{menu.title}}</nuxt-link>
            <img
              class="right-image"
              @click="toggleSubmenu(index)"
              src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/layout/m-arrow.png"
              v-if="menu.subMenus"
            />
            <div class="mobile-submenus" v-if="showSubmenu[index]">
              <div v-for="(subMenu,subIndex) in menu.subMenus" :key="`${index}-${subIndex}`">
                <nuxt-link
                  class="noto font _18 _greyish _regular submenu"
                  :to="subMenu.link"
                  @click.native="closeMenu"
                >{{subMenu.title}}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-footer noto font _14 _greyish-three" df fic>
        <img class="right-image" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/layout/header-phone.png" />
        <div>분양문의 : 033-339-3355</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

import { IMenu } from "~/types/menu";
import menus from "~/data/menu";

@Component({
  components: {}
})
export default class mobileMenu extends Vue {
  @Prop({ default: false }) isShow!: boolean;
  //   public isShow: boolean = false;
  public isShow1: boolean = false;
  public isShow2: boolean = false;
  public menus: IMenu[] = menus;

  public showSubmenu: boolean[] = [];

  private mounted() {
    for (const tmp of this.menus) {
      this.showSubmenu.push(false);
    }
  }

  public toggleSubmenu(index: number) {
    Vue.set(this.showSubmenu, index, !this.showSubmenu[index]);
  }

  public closeMenu() {
    this.$emit("update:isShow", false);
  }
}
</script>

<style lang="scss" scoped src="./mobileMenu.scss"/>
