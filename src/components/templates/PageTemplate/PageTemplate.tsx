import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Flex from "@components/atoms/Flex";
import { FloatingButtons } from "@components/organisms/FloatingButtons";
import { Sidebar } from "@components/organisms/Sidebar";
import { sidebarAppearButton } from "@components/organisms/Sidebar/Sidebar.styles";
import SidebarAppearButton from "@components/organisms/Sidebar/SidebarAppearButton";
import {
  getPageTemplateWrapperStyle,
  pageInnerWrapperStyle
} from "@components/templates/PageTemplate/PageTemplate.styles";

const PageTemplate = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [sidebarAppearForce, setSidebarAppearForce] = useState(true);

  const handleSidebarAppear = () => {
    setSidebarAppearForce(!sidebarAppearForce);
  };

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <>
      <Flex css={getPageTemplateWrapperStyle(sidebarAppearForce)}>
        <SidebarAppearButton
          Rtl={false}
          handleSidebarAppear={handleSidebarAppear}
          css={sidebarAppearButton}
        />
        <Sidebar
          outerWidth={outerWidth}
          sidebarAppearForce={sidebarAppearForce}
          handleSidebarAppear={handleSidebarAppear}
        />
        <div css={pageInnerWrapperStyle}>
          <Outlet />
        </div>
        <FloatingButtons scrollPosition={scrollPosition} />
      </Flex>
    </>
  );
};

export default PageTemplate;
