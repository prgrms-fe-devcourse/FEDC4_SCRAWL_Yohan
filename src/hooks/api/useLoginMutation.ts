import { useNavigate } from "react-router-dom";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login } from "@apis/user/login";

import { scrawlToast } from "@components/toast";

import { useTokenStore } from "@stores/token.store";

import { DOMAIN } from "@constants/api";

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess(token) {
      queryClient.clear();
      setAccessToken(token);
      navigate(DOMAIN.HOME);
      scrawlToast.success("로그인에 성공했습니다.");
    },
    onError() {
      scrawlToast.error("비밀번호 혹은 아이디가 잘못되었습니다.");
    }
  });
};
