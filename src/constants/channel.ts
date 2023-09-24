import {
  AI,
  Back,
  BigData,
  Data,
  DevOps,
  Embedded,
  Free,
  Front,
  Game,
  Job,
  Question,
  Security
} from "@assets/svg";

export const CHANNEL_MAP: {
  [key: string]: { title: string; Svg: typeof Question };
} = {
  "650944f87378db52d101801e": {
    title: "질문/답변",
    Svg: Question
  },
  "6509450a7378db52d1018028": {
    title: "자유",
    Svg: Free
  },
  "650945497378db52d1018049": {
    title: "취업/이직",
    Svg: Job
  },
  "6509455f7378db52d101804d": {
    title: "프론트엔드",
    Svg: Front
  },
  "650945737378db52d1018053": {
    title: "백엔드",
    Svg: Back
  },
  "650cf36acd60d7549331ae2b": {
    title: "게임",
    Svg: Game
  },
  "650cf378cd60d7549331ae2f": {
    title: "데이터",
    Svg: Data
  },
  "650cf382cd60d7549331ae41": {
    title: "AI",
    Svg: AI
  },
  "650cf3ebcd60d7549331ae81": {
    title: "빅데이터",
    Svg: BigData
  },
  "650cf408cd60d7549331aeb7": {
    title: "DevOps",
    Svg: DevOps
  },
  "650cf420cd60d7549331aebb": {
    title: "임베디드",
    Svg: Embedded
  },
  "650cf440cd60d7549331aedb": {
    title: "보안",
    Svg: Security
  }
};
