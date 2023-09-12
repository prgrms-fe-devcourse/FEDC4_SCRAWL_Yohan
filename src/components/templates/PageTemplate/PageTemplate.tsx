import { Outlet } from "react-router-dom";

import Flex from "@components/atoms/Flex";
import Sidebar from "@components/organisms/Sidebar";
import {
  pageInnerWrapperStyle,
  pageTemplateWrapperStyle
} from "@components/templates/PageTemplate/PageTemplate.styles";

const PageTemplate = () => {
  return (
    <Flex css={pageTemplateWrapperStyle}>
      <Sidebar />
      <div css={pageInnerWrapperStyle}>
        <Outlet />
      </div>
    </Flex>
  );
};

export default PageTemplate;
