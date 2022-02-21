import { useCallback, useEffect, useState } from "react";
import { BestRecipes } from "../components/BestRecipes";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JoinMembership } from "../components/JoinMembership";
import { ReadBlog } from "../components/ReadBlog";
import { ServeYou } from "../components/ServeYou";
import { TryNewRecipe } from "../components/TryNewRecipe";
import Head from "next/head";

const Home = () => {
  const [scroll, setScroll] = useState(false);

  const handleClick = useCallback(() =>{
    setScroll(window.scrollY > 100);
  },[]);

  useEffect(() => {
    window.addEventListener("scroll", handleClick);
    return () => {
      window.removeEventListener("scroll", handleClick);
    };
  }, [handleClick]);

  return (
    <>
      <Head>
        <title>Healthy Food</title>
      </Head>
      <Header scroll={scroll} />
      <TryNewRecipe />
      <BestRecipes />
      <ServeYou />
      <ReadBlog />
      <JoinMembership />
      <Footer />
    </>
  );
};

export default Home;
