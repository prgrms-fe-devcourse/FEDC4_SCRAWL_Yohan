export const BASE_URL = "https://kdt.frontend.4th.programmers.co.kr:5003";

export const DOMAIN = {
  HOME: "/",
  CREATE_CHANNEL: "/channels/create",
  LOGIN: "/login",
  LOGOUT: "/logout",
  SIGNUP: "/signup",
  AUTH_USER: "/auth-user",
  GET_USERS: "/users/get-users",
  GET_USER: (userId: string) => `/users/${userId}`,
  UPLOAD_PROFILE: "/users/upload-photo",
  UPDATE_USER: "/settings/update-user",
  UPDATE_PASSWORD: "/settings/update-password",
  GET_CHANNELS: "/channels",
  GET_CHANNEL: (channelName: string) => `/channel/${channelName}`,
  GET_ARTICLE: (articleId: string) => `/posts/${articleId}`,
  GET_ARTICLES: {
    BY_CHANNEL_ID: (channelId: string) => `/posts/channel/${channelId}`,
    BY_USER_ID: (userId: string) => `/posts/author/${userId}`
  },
  CREATE_ARTICLE: "/posts/create",
  UPDATE_ARTICLE: "/posts/update",
  DELETE_ARTICLE: "/posts/delete",
  CREATE_LIKE: "/likes/create",
  DELETE_LIKE: "/likes/delete",
  CREATE_COMMENT: "/comments/create",
  DELETE_COMMENT: "/comments/delete",
  GET_NOTIFICATIONS: "/notifications",
  READ_NOTIFICATION: "/notifications/seen",
  CREATE_NOTIFICATION: "/notifications/create",
  SEARCH_USER: (searchKeyword: string) => `/search/users/${searchKeyword}`,
  SEARCH_ALL: (searchKeyword: string) => `/search/all/${searchKeyword}`
} as const;

export const NETWORK = {
  TIMEOUT: 10000
} as const;

export const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";
