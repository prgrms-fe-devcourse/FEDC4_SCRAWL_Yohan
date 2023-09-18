type PathId = string | number;

export const PATH = {
  HOME: "/",
  CHANNEL: (channelId: PathId) => `/channels/${channelId}`,
  ARTICLE: (articleId: PathId) => `/articles/${articleId}`,
  CREATE_ARTICLE: "/create",
  EDIT_ARTICLE: (articleId: PathId) => `/articles/${articleId}/edit`,
  USER: (userId: PathId) => `/users/${userId}`,
  SEARCH: "/search",
  SIGNUP: "/signup",
  LOGIN: "/login",
  PASSWORD: "/password",
  ERROR: "error"
} as const;
