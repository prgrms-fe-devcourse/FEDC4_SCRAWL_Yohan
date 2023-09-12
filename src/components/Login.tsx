import { useLayoutEffect } from "react";

import { getUserByToken } from "@apis/user/getUserByToken";

import { useLoggedIn } from "@hooks/useLoggedIn";

import { useMyInfoStore } from "@stores/myInfo.store";

const Login = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useLoggedIn();
  const setMyinfo = useMyInfoStore((state) => state.setMyinfo);

  useLayoutEffect(() => {
    if (isLoggedIn) {
      getUserByToken().then((data) => {
        if (data) {
          setMyinfo(data);
        }
      });
    }
  }, [isLoggedIn, setMyinfo]);

  return children;
};

export default Login;
