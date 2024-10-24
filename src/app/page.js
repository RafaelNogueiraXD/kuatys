'use client';
import { useState } from "react";
import Menu from "./components/menu";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./components/mycomponent.js"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <Menu />
      <DynamicComponent />
    </>
  );
};

export default Home;