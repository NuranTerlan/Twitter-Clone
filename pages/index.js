import React, { useEffect } from "react";
import Home from "./home";
import { useRouter } from "next/router";

const FirstPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname == "/") {
      router.push("/home");
    }
  });
  return null;
};

export default FirstPage;
