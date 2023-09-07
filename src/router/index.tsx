import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PATH } from "@constants/index";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<div>home</div>} />
        <Route path={PATH.CHANNEL(":channelId")} element={<div>channel</div>} />
        <Route path={PATH.ARTICLE(":articleId")} element={<div>article</div>} />
        <Route
          path={PATH.EDIT_ARTICLE(":articleId")}
          element={<div>article edit</div>}
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
        <Route path={PATH.SIGNUP} element={<div>signup</div>} />
        <Route path={PATH.LOGIN} element={<div>login</div>} />
        <Route path={PATH.PASSWORD} element={<div>password</div>} />
        <Route path={PATH.ERROR} element={<div>404 error</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
