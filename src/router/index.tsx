import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ChannelPage, ChannelPageSkeleton } from "@pages/ChannelPage";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import SignUpPage from "@pages/SignUpPage";

import ArticleWrite from "@components/organisms/ArticleWrite";
import { PageTemplate } from "@components/templates/PageTemplate";

import { PATH } from "@constants/index";

const AppRouter = () => {
  return (
    <BrowserRouter>
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
            element={<div>article</div>}
          />
          <Route
            path={PATH.EDIT_ARTICLE(":articleId")}
            element={<ArticleWrite />}
          />
          <Route
            path={PATH.QUESTION(":questionId")}
            element={<div>question</div>}
          />
          <Route
            path={PATH.EDIT_QUESTION(":questionId")}
            element={<div>question edit</div>}
          />
          <Route path={PATH.SEARCH} element={<div>search</div>} />
          <Route path={PATH.USER(":userId")} element={<div>user info</div>} />
        </Route>
        <Route path={PATH.SIGNUP} element={<SignUpPage />} />
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={PATH.PASSWORD} element={<div>password</div>} />
        <Route path={PATH.ERROR} element={<div>404 error</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
