import { rest } from "msw";

const jisoos = ["집순이", "보부상", "필카 좋아"];

export const handlers = [
  // 지수에 대한 정보 목록
  rest.get("/jisoos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(jisoos));
  }),

  // 할일 추가
  rest.post("/jisoos", (req, res, ctx) => {
    jisoos.push(req.body);
    return res(ctx.status(201));
  }),
];
