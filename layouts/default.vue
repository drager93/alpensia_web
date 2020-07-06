<template>
  <div class="defauly-layout">
    <header class="default-header w12 hidet hidem" df fdr fjb fic>
      <nuxt-link to="/" class="logo">
        <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/layout/header-logo.png" />
      </nuxt-link>
      <div class="menu-list noto font _18" df fdr fic>
        <div
          class="header-tab font _white t-center c-pointer"
          v-for="(menu, index) in menus"
          :key="index"
        >
          <nuxt-link class="font _white" :to="menu.link">{{menu.title}}</nuxt-link>
          <div class="underscore"></div>
          <menu-tab v-if="menu.subMenus" :menus="menu.subMenus"></menu-tab>
        </div>
      </div>
      <div df fdr fic>
        <img class="right-image" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/layout/header-phone.png" />
        <div class="noto font _14 _white _regular">분양문의 : 033-339-3355</div>
      </div>
    </header>

    <header class="mobile-header hided tw12 mw12" df fdr fjb fic>
      <div class="menu-container">
        <div class="header-menu" @click="isShow = !isShow">
          <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/layout/m-menu.png" />
        </div>
        <mobile-menu class="mobile-menu" :is-show.sync="isShow"></mobile-menu>
      </div>
      <nuxt-link to="/" class="logo">
        <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/layout/header-logo.png" />
      </nuxt-link>
      <div></div>
    </header>

    <div class="page-wrapper w12">
      <nuxt />
    </div>

    <div class="section1 w12" df fdr>
      <div class="section1-left tw12 mw12"></div>
      <div class="section1-right tw12 mw12">
        <div class="w12 tw10 mw12">
          <div class="n-sq font _40 _greyish _regular t-center">분양상담 신청</div>
          <div class="mw11">
            <div class="w12">
              <input
                v-model="name"
                class="right-input noto font _12 w12"
                type="text"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div class="w12">
              <input
                v-model="phone"
                class="right-input noto font _12 w12"
                type="text"
                placeholder="연락처를 입력하세요"
              />
            </div>
            <div class="term-box noto" df fdr fjb fic>
              <div @click="isToggle" class="font _14 _greyish" df fic>
                <custom-checkbox :isAgree.sync="isAgree"></custom-checkbox>
                <div>개인정보 수집/이용에 동의합니다.</div>
              </div>
              <div class="detail-view font _12 _greyish c-pointer" @click="showModal">자세히 보기</div>
              <a-modal v-model="visible" :footer="null" :bodyStyle="{ padding: 0}">
                <img class="modal-image" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/layout/apply-term.jpg" />
              </a-modal>
            </div>
            <button @click="sendEmail" class="w12 noto font _16 _white _regular">상담신청</button>
          </div>
        </div>
      </div>
    </div>

    <div class="section2 w12 hidet hidem hidet" df fdc fic>
      <div df fdr fjc fic>
        <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/layout/section2-logo.png" />
      </div>
      <div class="w5 tw8 n-sq font _21 _white t-center">THE OLYMPIC LEGACY AND WORLD CLASS RESORT</div>
    </div>

    <a-affix :offsetBottom="this.bottom">
      <div class="m-section2 hided">
        <nuxt-link to="/presale" class="section2-container" df fdr fjc fic>
          <img class="right-image" src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/layout/header-phone.png" />
          <div class="noto font _14 _white _regular">분양문의 : 033-339-3355</div>
        </nuxt-link>
        <div class="division mw12"></div>
      </div>
    </a-affix>

    <footer class="default-footer w12 noto t-center" df fdc fic>
      <div class="w12 tw10 mw10" df fdr fjc fic>
        <div class="footer-terms w4 tw10 mw12 font _16 _greyish _normal" df fdr fic>
          <div class="w3 tw3 mw3">
            <a class="font _greyish" href="https://www.alpensia.com/main.do" target="_blank">알펜시아</a>
          </div>
          <div class="w4 tw4 mw4">
            <a class="font _greyish" href="http://gdco.co.kr/etc/etc_61.php?" target="_blank">이용약관</a>
          </div>
          <div class="w5 tw5 mw5">
            <a
              class="font _greyish"
              href="http://www.gdco.co.kr/about/about_131.php"
              target="_blank"
            >개인정보처리방침</a>
          </div>
        </div>
      </div>
      <div class="footer-text w4 tw10 mw10 font _14">
        강원도 개발공사 사업자 번호 221-82-07004 주소 [25348] 강원도 평창군 대관령면 솔봉로 287
        Copyright © 2018 ALPENSIA. CO.,LTD. All rights reserved.
      </div>
    </footer>

    <div class="fix-apply hidet hidem" @scroll.passive="handleScroll()" :class="{'on': isScrolled}">
      <nuxt-link to="/presale">
        <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/layout/scroll.png" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import customCheckbox from "~/components/customCheckbox.vue";
import menuTab from "~/components/menuTab.vue";
import mobileMenu from "~/components/mobileMenu.vue";
import { IMenu } from "~/types/menu";
import menus from "~/data/menu";
import axios from "~/plugins/axios";

@Component({
  components: {
    customCheckbox,
    menuTab,
    mobileMenu
  }
})
export default class defaultLayout extends Vue {
  public isShow: boolean = false;
  public menus: IMenu[] = menus;
  public isScrolled: boolean = true;
  public bottom: number = 0;
  public isAgree: boolean = false;
  public name: string = "";
  public phone: string = "";
  public visible: boolean = false;

  showModal() {
    this.visible = true;
  }

  isToggle() {
    this.isAgree = !this.isAgree;
  }

  // private async mounted() {}
  async sendEmail() {
    if (this.name == "") {
      alert("이름을 입력해 주세요.");
      return;
    }

    if (this.phone == "") {
      alert("연락처를 입력해 주세요.");
      return;
    }

    if (this.isAgree == false) {
      alert("개인정보 동의에 체크해 주세요.");
      return;
    }

    // const TH = this;

    // const data = await axios
    //   .post("/emailsend", {
    //     name: this.name,
    //     phone: this.phone
    //   })
    //   .then(data => {
    //     this === TH;
    //   })
    //   .catch(err => {});

    // const data = await axios
    //   .post("/emailsend", {
    //     name: this.name,
    //     phone: this.phone
    //   })
    //   .then(function(data) {
    //     this !== TH;
    //   })
    //   .catch(function(err) {});

    try {
      const data = await axios.post("/email/emailsend", {
        name: this.name,
        phone: this.phone
      });

      console.log("통신 성공");

      this.name = "";
      this.phone = "";
      this.isAgree = false;
    } catch (err) {
      console.log("통신 실패");
    }

    alert("신청이 정상적으로 완료되었습니다.");
  }

  handleScroll(event: any) {
    let bottomOfWindow =
      document.documentElement.scrollTop + window.innerHeight;

    if (window.pageYOffset > 0) {
      this.isScrolled = true;
    }

    if (bottomOfWindow > document.body.scrollHeight - 300) {
      this.isScrolled = false;
    }

    if (window.pageYOffset == 0) {
      this.isScrolled = false;
    }
  }

  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  }

  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
}
</script>

<style scoped lang="scss" src="./default.scss"/>

