import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Flex from "@components/atoms/Flex";
import { FloatingButtons } from "@components/organisms/FloatingButtons";
import { Sidebar } from "@components/organisms/Sidebar";
import { sidebarAppearButton } from "@components/organisms/Sidebar/Sidebar.styles";
import SidebarAppearButton from "@components/organisms/Sidebar/SidebarAppearButton";
import {
  pageInnerWrapperStyle,
  pageTemplateWrapperStyle
} from "@components/templates/PageTemplate/PageTemplate.styles";

import { useViewportStore } from "@stores/resize.store";

import SidebarProvider from "@contexts/sidebar.context";

const PageTemplate = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [resizeWidth, setResizeWidth] = useState(0);
  const { setWidth } = useViewportStore();

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);
  const handleResize = useCallback(() => {
    let timer = null;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      setResizeWidth(window.innerWidth);
    }, 300);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: false });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);
  useEffect(() => {
    setWidth(resizeWidth);
  }, [resizeWidth, setWidth]);
  return (
    <>
      <Flex css={pageTemplateWrapperStyle}>
        <SidebarProvider>
          <SidebarAppearButton Rtl={false} css={sidebarAppearButton} />
          <Sidebar outerWidth={outerWidth} />
        </SidebarProvider>
        <div css={pageInnerWrapperStyle}>
          <Outlet />
        </div>
        <FloatingButtons scrollPosition={scrollPosition} />
      </Flex>
    </>
  );
};

export default PageTemplate;
