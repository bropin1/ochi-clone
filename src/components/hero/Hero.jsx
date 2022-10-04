import React, { Fragment } from "react";
import Navbar from "./navbar/Navbar";
import style from "./Hero.module.scss";
const Hero = () => {
  return (
    <Fragment>
      <div className={style.hero}>
        <Navbar />

        <div className={style.content}>
          {/*------------------ */}
          <h1 className={style.text}>
            <div className={style.parent}>
              <div>we create</div>
            </div>

            <div className={style.animation}>
              <div className={style.eye}>eye-opening</div>
            </div>
            <div className={style.parent}>
              <div>presentations</div>
            </div>
          </h1>
          {/*------------------ */}

          {/*------------------ */}
          <div className={style.grid}>
            <p>For public and private companies</p>
            <p>From the first pitch to IPO</p>
            <button>
              <div>
                <span>start the project</span>
              </div>
              <div></div>
            </button>
          </div>
          {/*------------------ */}

          {/*------------------ */}
          <div className={style.scrollDown}>
            <p>Scroll down</p>
          </div>
          {/*------------------ */}
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
