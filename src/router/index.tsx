import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { ChannelPage, ChannelPageSkeleton } from "@pages/ChannelPage";
import ErrorPage from "@pages/ErrorPage";
import HomePage from "@pages/HomePage/HomePage";
import HomePageSkeleton from "@pages/HomePage/HomePageSkeleton";
import LoginPage from "@pages/LoginPage";
import PasswordPage from "@pages/PasswordPage";
import SearchPage from "@pages/SearchPage/SearchPage";
import SignUpPage from "@pages/SignUpPage";
import UserPage from "@pages/UserPage/UserPage";

import FallbackPage from "@components/molecules/FallbackPage";
import { Article } from "@components/organisms/Article";
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
            <Suspense fallback={<HomePageSkeleton />}>
              <HomePage />
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
            <Suspense fallback={<FallbackPage />}>
              <Article />
            </Suspense>
          }
        />
        <Route path={PATH.CREATE_ARTICLE} element={<ArticleWrite />} />
        <Route
          path={PATH.EDIT_ARTICLE(":articleId")}
          element={<ArticleEdit />}
        />
        <Route
          path={PATH.SEARCH}
          element={
            <Suspense fallback={<FallbackPage />}>
              <SearchPage />
            </Suspense>
          }
        />
        <Route
          path={PATH.USER(":userId")}
          element={
            <Suspense fallback={<FallbackPage />}>
              <UserPage />
            </Suspense>
          }
        />
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
