import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Flex from "@components/atoms/Flex";
import { FloatingButtons } from "@components/organisms/FloatingButtons";
import { Sidebar } from "@components/organisms/Sidebar";
import {
  pageInnerWrapperStyle,
  pageTemplateWrapperStyle
} from "@components/templates/PageTemplate/PageTemplate.styles";

const PageTemplate = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [, setOuterWidth] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  const handleResize = () => {
    setOuterWidth(window.outerWidth);
  };
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
  }, []);
  // useEffect(() => {
  //   console.log(outerWidth);
  //   console.log(scrollPosition);
  // }, [outerWidth, scrollPosition]);
  return (
    <>
      <Flex css={pageTemplateWrapperStyle}>
        <Sidebar />
        <div css={pageInnerWrapperStyle}>
          <Outlet />
        </div>
        <FloatingButtons scrollPosition={scrollPosition} />
      </Flex>
    </>
  );
};

export default PageTemplate;
