import React, { useEffect, useState } from "react";
import ModelViewer from "@metamask/logo";

const Logo = () => {
  const viewer = ModelViewer({
    pxNotRatio: true,
    width: 200,
    height: 200,
    followMouse: true,
  });

  useEffect(() => {
    const container = document.getElementById("LOGO");
    console.log("Los hijos de container => ", container);
    viewer.container.id = "svg-logo";
    if (container != null) {
      container.appendChild(viewer.container);
    }
    return () => {
      viewer.stopAnimation();
    };
  }, [viewer]);

  return <div id="LOGO" />;
};
export default Logo;
