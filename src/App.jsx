import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;


/* 

  const handleSlideDown = () => {
    // Calcula la siguiente sección
    const nextSection = currentSlide < 4 ? currentSlide + 1 : 1;
    scrollingLoader()
    // Scroll a la siguiente sección
    handleScrollToSection(nextSection)
  };
  const handleSlideUp = () => {
    // Calcula la sección anterior
    const prevSection = currentSlide > 1 ? currentSlide - 1 : 4;
    scrollingLoader()
    // Scroll a la sección anterior
    handleScrollToSection(prevSection);

  }; */