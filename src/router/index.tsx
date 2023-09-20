import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { ChannelPage, ChannelPageSkeleton } from "@pages/ChannelPage";
import ErrorPage from "@pages/ErrorPage";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import PasswordPage from "@pages/PasswordPage";
import SignUpPage from "@pages/SignUpPage";
import UserPage from "@pages/UserPage/UserPage";

import { Article, ArticleSkeleton } from "@components/organisms/Article";
import { ArticleWrite } from "@components/organisms/ArticleWrite";
import { PageTemplate } from "@components/templates/PageTemplate";

import { PATH } from "@constants/index";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<PageTemplate />}>
        <Route path={PATH.HOME} element={<HomePage />} />
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
          element={<ArticleWrite />}
        />
        <Route path={PATH.SEARCH} element={<div>search</div>} />
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
