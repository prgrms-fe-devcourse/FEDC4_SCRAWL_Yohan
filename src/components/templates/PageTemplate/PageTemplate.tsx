import { Outlet } from "react-router-dom";

import Flex from "@components/atoms/Flex";
import FloatingButtons from "@components/organisms/FloatingButtons/FloatingButtons";
import Sidebar from "@components/organisms/Sidebar";
import {
  pageInnerWrapperStyle,
  pageTemplateWrapperStyle
} from "@components/templates/PageTemplate/PageTemplate.styles";

const PageTemplate = () => {
  return (
    <>
      <Flex css={pageTemplateWrapperStyle}>
        <Sidebar />
        <div css={pageInnerWrapperStyle}>
          <Outlet />
        </div>
        <FloatingButtons />
      </Flex>
    </>
  );
};

export default PageTemplate;
