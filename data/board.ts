import * as Types from "~/types";

const boards: Types.Board.IBoard[] = [];

export const setBoard: Types.Board.IBoard = {
  index: 0,
  title: "",
  startDate: "",
  endDate: "",
  mainImg: "",
  detailImg: "",
  viewCount: 0
};

export default boards;
