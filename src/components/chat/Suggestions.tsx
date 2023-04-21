import React, { useContext, useState, useEffect } from "react";
import Congratulations from "../../assets/icons/🎉.svg";
import Hey from "../../assets/icons/👋.svg";
import { ThemeContext } from "../ThemeProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import Select from "./Select";
function Suggestions() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <Select />
      <div className="container">
        <div
          className={`suggections  suggections_mob ${
            darkMode ? "sgstn_dark" : ""
          }`}
        >
          <div className="block_ block_two">
                <div className="icon_">
                  <img src={Congratulations} alt="Error" />
                </div>
                <div className="texts_ texts_two">
                  <div className="">
                    <span className="title_">Update available</span>
                    <p className="body_">
                      Update now available! Get the latest features and
                      improvements.
                    </p>
                  </div>
                  <button className="btn_update">Update now</button>
                </div>
              </div>
        </div>
        <div
          className={`suggections suggections_desktop  ${
            darkMode ? "sgstn_dark" : ""
          }`}
        >
          <div className="block_">
            <div className="icon_">
              <img src={Hey} alt="Error" />
            </div>
            <div className="texts_">
              <span className="title_">Hello!</span>
              <p className="body_">
                Enter your query in the chat, and I will try to provide you with
                the best answer.
              </p>
            </div>
          </div>
          <div className="block_ block_two">
            <div className="icon_">
              <img src={Congratulations} alt="Error" />
            </div>
            <div className="texts_ texts_two">
              <div className="">
                <span className="title_">Update available</span>
                <p className="body_">
                  Update now available! Get the latest features and
                  improvements.
                </p>
              </div>
              <button className="btn_update">Update now</button>
            </div>
          </div>
          <div className="block_">
            <div className="smile_">💡</div>
            <div className="texts_">
              <span className="title_">Want to learn more?</span>
              <p className="body_">
                Type your question in the chat, and I will try to give you the
                most useful answer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Suggestions;
