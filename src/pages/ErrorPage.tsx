import { useEffect } from "react";
import { toast } from "react-hot-toast";

const ErrorPage = ({ error }: { error: Error }) => {
  useEffect(() => {
    toast.error(error.message);
  }, [error]);

  return <div>홈으로</div>;
};

export default ErrorPage;
