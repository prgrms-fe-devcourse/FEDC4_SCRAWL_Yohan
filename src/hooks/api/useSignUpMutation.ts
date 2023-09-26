import { useNavigate } from "react-router-dom";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signUp } from "@apis/user/signUp";

import { scrawlToast } from "@components/toast";

import { useTokenStore } from "@stores/token.store";

import { DOMAIN } from "@constants/api";

export const useSignUpMutation = () => {
  const navigate = useNavigate();
  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signUp,
    onSuccess(token) {
      queryClient.clear();
      setAccessToken(token);
      navigate(DOMAIN.HOME);
      scrawlToast.success("회원가입에 성공했습니다.");
    },
    onError() {
      scrawlToast.error("이미 존재하는 이메일 입니다.");
    }
  });
};
