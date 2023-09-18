import { useLoggedIn } from "@hooks/useLoggedIn";

const HomePage = () => {
  const { isLoggedIn } = useLoggedIn();

  return <div>home loggedIn: {JSON.stringify(isLoggedIn)}</div>;
};

export default HomePage;
