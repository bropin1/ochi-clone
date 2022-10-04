import React, { Fragment } from "react";
import style from "./Home.module.scss";
import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import img from "../../ressources/images/parallax.jpg";
import Featured from "../../components/featured/Featured";
const Home = () => {
  return (
    <Fragment>
      <section className={style.hero}>
        <Hero />
      </section>

      <section className={style.movingBanner}>
        <Banner />
      </section>

      <section className={style.aboutUs}>
        <About />
      </section>
      <section className={style.parallax}>
        <img src={img} alt="" />
      </section>
      <section className={style.featuredProjects}>
        <Featured />
      </section>
      {/* <section className={style.clientReviews}></section>
      <section className={style.contact}></section>
      <section className={style.footer}></section> */}
    </Fragment>
  );
};

export default Home;
