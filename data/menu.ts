import * as Types from "~/types";

const menus: Types.Menu.IMenu[] = [
  {
    title: "특별전",
    link: "/specialExhibition/special"
  },
  {
    title: "평창 알펜시아",
    link: "/alpensia",
    subMenus: [
      { title: "평창 알펜시아 안내", link: "/alpensia" },
      { title: "찾아오시는 길", link: "/alpensia/directions" }
    ]
  },
  {
    title: "분양 상품소개",
    link: "/productInfo",
    subMenus: [
      { title: "에스테이트", link: "/productInfo/estate" },
      {
        title: "알펜시아컨트리클럽",
        link: "/productInfo/alpensiaCountryClub"
      },
      { title: "인터컨티넨탈 호텔", link: "/productInfo/intercontinental" },
      { title: "홀리데이인 호텔", link: "/productInfo/holidayInnHotel" },
      { title: "홀리데이인 콘도", link: "/productInfo/holidayInnCondo" }
    ]
  },
  {
    title: "분양문의",
    link: "/presale"
  },
  {
    title: "분양회원서비스",
    link: "/service"
  }
];

export default menus;
