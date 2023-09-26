import { useNavigate } from "react-router-dom";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updatePassword } from "@apis/user/updatePassword";

import { scrawlToast } from "@components/toast";

import { DOMAIN } from "@constants/api";

export const useUserPasswordUpdateMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatePassword,
    onSuccess() {
      queryClient.clear();
      navigate(DOMAIN.HOME);
      scrawlToast.success("비빌번호 변경에 성공했습니다.");
    },
    onError() {
      scrawlToast.error("비밀번호 변경 중 오류가 발생하였습니다.");
    }
  });
};
