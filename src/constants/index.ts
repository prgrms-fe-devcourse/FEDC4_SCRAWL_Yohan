type PathId = string | number;

export const PATH = {
  HOME: "/",
  CHANNEL: (channelId: PathId) => `/channels/${channelId}`,
  ARTICLE: (articleId: PathId) => `/articles/${articleId}`,
  EDIT_ARTICLE: (articleId: PathId) => `/articles/${articleId}/edit`,
  QUESTION: (questionId: PathId) => `/questions/${questionId}`,
  EDIT_QUESTION: (questionId: PathId) => `/questions/${questionId}/edit`,
  USER: (userId: PathId) => `/users/${userId}`,
  SEARCH: "/search",
  SIGNUP: "/signup",
  LOGIN: "/login",
  PASSWORD: "/password",
  ERROR: "error"
} as const;
