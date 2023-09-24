import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { ChannelPage, ChannelPageSkeleton } from "@pages/ChannelPage";
import ErrorPage from "@pages/ErrorPage";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import PasswordPage from "@pages/PasswordPage";
import SearchPage from "@pages/SearchPage/SearchPage";
import SignUpPage from "@pages/SignUpPage";
import UserPage from "@pages/UserPage/UserPage";

import ErrorBoundary from "@components/_errorBoundaries/ErrorBoundary";
import { Article, ArticleSkeleton } from "@components/organisms/Article";
import { ArticleEdit, ArticleWrite } from "@components/organisms/ArticleWrite";
import { PageTemplate } from "@components/templates/PageTemplate";

import { PATH } from "@constants/index";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<PageTemplate />}>
        <Route
          path={PATH.HOME}
          element={
            <Suspense fallback={"글 목록을 불러오는 중입니다."}>
              <ErrorBoundary
                fallback={"전체 글 목록을 불러오는데 실패하였습니다."}>
                <HomePage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          path={PATH.CHANNEL(":channelId")}
          element={
            <Suspense fallback={<ChannelPageSkeleton />}>
              <ChannelPage />
            </Suspense>
          }
        />
        <Route
          path={PATH.ARTICLE(":articleId")}
          element={
            <Suspense fallback={<ArticleSkeleton />}>
              <Article />
            </Suspense>
          }
        />
        <Route path={PATH.CREATE_ARTICLE} element={<ArticleWrite />} />
        <Route
          path={PATH.EDIT_ARTICLE(":articleId")}
          element={<ArticleEdit />}
        />
        <Route path={PATH.SEARCH} element={<SearchPage />} />
        <Route path={PATH.USER(":userId")} element={<UserPage />} />
      </Route>
      <Route path={PATH.SIGNUP} element={<SignUpPage />} />
      <Route path={PATH.LOGIN} element={<LoginPage />} />
      <Route path={PATH.PASSWORD} element={<PasswordPage />} />
      <Route path={PATH.ERROR} element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
