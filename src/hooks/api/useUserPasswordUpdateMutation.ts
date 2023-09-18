import { useMutation } from "@tanstack/react-query";

import { updatePassword } from "@apis/user/updatePassword";

export const useUserPasswordUpdateMutation = () => {
  return useMutation({
    mutationFn: updatePassword
  });
};
