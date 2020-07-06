<template>
  <div class="form-wrapper w12" df fdc fic>
    <div class="form-title n-sq font _30 _greyish t-center">서류 양식</div>
    <div class="form-sub noto font _16 _greyish-three t-center w12 tw11 mw11">회원카드 / 회원 증서의 신규 발급 및 재발급 신청에 필요한 서류 양식을 다운로드 하실 수 있습니다.</div>
    <div class="download-wrap w12" df fdc fic>
      <div class="download-title font _22 _greyish _bold t-center">회원카드</div>
      <div class="download-content" df fdr fjc fic style="flex-wrap: wrap;">
        <a v-for="(item, index) in files" :key="index" :href="item.href" target="_blank">
          <div class="content-wrap" df fdr fjb fic>
            <div class="card-title noto font _16 _greyish" v-html="jsonToHtml(item.contents)"></div>
            <img src="https://alpensia.s3.ap-northeast-2.amazonaws.com/images/service/download.png" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { IMenu } from "~/types/menu";

const baseUrl = "https://alpensia.s3.ap-northeast-2.amazonaws.com";

@Component({
  components: {},
})
export default class documentForm extends Vue {
  files: any[] = [
    {
      href: `${baseUrl}/documents/app01.doc`,
      contents: `
            <div>회원카드</div>
            <div>
              재발급신청서
              <span class="font _warm-grey">(개인용)</span>
            </div> 
      `,
    },
    {
      href: `${baseUrl}/documents/app02.doc`,
      contents: `
          <div>회원카드</div>
          <div>
            재발급신청서
            <span class="font _warm-grey">(법인용)</span>
          </div>
        `,
    },
    {
      href: `${baseUrl}/documents/app03.doc`,
      contents: `
            <div class="card-title noto font _16 _greyish">
              <div>가족/기명 회원</div>
              <div>변경 신청서</div>
            </div>
            `,
    },
    {
      href: `${baseUrl}/documents/app04.doc`,
      contents: `
          <div>지정 회원</div>
          <div>변경 신청서</div>
            `,
    },
    {
      href: `${baseUrl}/documents/app05.doc`,
      contents: `
            <div>분실</div>
            <div>신고서</div>
            `,
    },
    {
      href: `${baseUrl}/documents/app05_1.hwp`,
      contents: `
              <div>회원카드</div>
              <div>분실 신고서</div>
            `,
    },
    {
      href: `${baseUrl}/documents/app06.hwp`,
      contents: `
              <div>회원증서</div>
              <div>재발급 신청서</div>
            `,
    },
    {
      href: `${baseUrl}/documents/app07.hwp`,
      contents: `
              <div>명의변경 계약서</div>
              <div>
                <span class="font _warm-grey">(회사 보관용)</span>
              </div>
            `,
    },
    {
      href: `${baseUrl}/documents/app08.hwp`,
      contents: `
              <div>명의변경 계약서</div>
              <div>
                <span class="font _warm-grey">(회원 보관용)</span>
              </div>
            `,
    },
    {
      href: `${baseUrl}/documents/app09.hwp`,
      contents: `
              <div>
                골프장 법인
                <span class="font _warm-grey">(임직원)</span>
              </div>
              <div>등록 신청서</div>
            `,
    },
    {
      href: `${baseUrl}/documents/app10.xls`,
      contents: `
              <div>
                상호
                <span class="font _warm-grey">(개명)</span> 변경
              </div>
              <div>신청서</div>
            `,
    },
    {
      href: `${baseUrl}/documents/app10.hwp`,
      contents: `
              <div>입회금</div>
              <div>반환신청서</div>
            `,
    },
  ];

  jsonToHtml(json: any) {
    if (typeof json === "string") {
      return json;
    }

    switch (json.type) {
      case "doc":
        return json.contents.map((item: any) => this.jsonToHtml(item)).join("");

      case "paragraph":
        return "<div>" + json.contents.map((item: any) => this.jsonToHtml(item)).join("") + "</div>";

      case "text":
        return json.contents;

      case "span":
        return '<span class="font _warm-grey">' + json.contents + "</span>";
    }
  }
}
</script>

<style lang="scss" src="./documentForm.scss" />
