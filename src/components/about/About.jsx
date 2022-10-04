import React, { Fragment } from "react";
import style from "./About.module.scss";
import img from "../../ressources/images/Homepage-Photo-663x469.jpg";
const About = () => {
  return (
    <Fragment>
      <div className={style.wrapper}>
        <section className={style.description}>
          <div>
            <h2>
              {
                "Ochi is a strategic partner for fast-grow­ing tech businesses that need to "
              }
              <u>raise funds</u>
              {", "}
              <u>sell products</u>
              {", "}
              <u>explain complex ideas</u>
              {",  and "}
              <u>hire great people</u>.
            </h2>
          </div>
        </section>
        <section className={style.secondaryDescription}>
          <div className={style.grid}>
            <div className={style.text1}>What you can expect</div>
            <div className={style.text2}>
              <p className={style.paragraph1}>
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it’s live or digital,
                delivered for one or a hundred people.
              </p>
              <p className={style.paragraph2}>
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </p>
            </div>
            <div className={style.text3}>
              S:
              <div className={style.socials}>
                <a href="/">Instagram</a>
                <a href="/">Behance</a>
                <a href="/">Facebook</a>
                <a href="/">Linkedin</a>
              </div>
            </div>
          </div>
        </section>

        <section className={style.lastSection}>
          <div className={style.grid}>
            <div className={style.container}>
              <h2 className={style.title}>Our approach</h2>

              <a href="/" r>
                <span> read more</span>
                <i></i>
              </a>
            </div>
            <div className={style.zoom}>
              <picture>
                <img src={img} alt="" />
              </picture>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default About;
