import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Flex from "@components/atoms/Flex";
import { FloatingButtons } from "@components/organisms/FloatingButtons";
import { Sidebar } from "@components/organisms/Sidebar";
import SidebarAppearButton from "@components/organisms/Sidebar/SidebarAppearButton";
import {
  pageInnerWrapperStyle,
  pageTemplateWrapperStyle
} from "@components/templates/PageTemplate/PageTemplate.styles";

import { WIDTH_MAP } from "@constants/media";

const PageTemplate = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [outerWidth, setOuterWidth] = useState(0);
  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);
  const handleResize = useCallback(() => {
    setOuterWidth(window.outerWidth);
  }, []);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);
  // useEffect(() => {
  //   console.log(outerWidth);
  //   console.log(scrollPosition);
  // }, [outerWidth, scrollPosition]);
  return (
    <>
      <Flex css={pageTemplateWrapperStyle}>
        <SidebarAppearButton
          appearButton={WIDTH_MAP.sm > outerWidth ? true : false}
          Rtl={false}
        />
        <Sidebar outerWidth={outerWidth} />
        <div css={pageInnerWrapperStyle}>
          <Outlet />
        </div>
        <FloatingButtons scrollPosition={scrollPosition} />
      </Flex>
    </>
  );
};

export default PageTemplate;
