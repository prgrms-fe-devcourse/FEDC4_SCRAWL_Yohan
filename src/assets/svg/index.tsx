import { ReactComponent as Logo } from "./logo.svg";

export const SVGLogo = ({ ...props }) => {
  console.log(props);
  return <Logo {...props} />;
};
