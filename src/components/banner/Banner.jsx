import React, { Fragment } from "react";
import style from "./Banner.module.scss";
const Banner = () => {
  return (
    <Fragment>
      <div className={style.wrapper}>
        <div className={style.container}>
          <span className={style.text}> &nbsp;we are ochi we are ochi</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
