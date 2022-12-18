import React, { useState } from "react";
import "./course.css";

const Course = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="course section" id="course">
      <h2 className="section__title">Course</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="course__container container">
        <div className="course__tabs">
          <div
            className={
              toggleState === 1
                ? "course__button course__active button--flex"
                : "course__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap course__icon"></i>
            So far
          </div>

          <div
            className={
              toggleState === 2
                ? "course__button course__active button--flex"
                : "course__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt course__icon"></i>
            Future
          </div>
        </div>

        <div className="course__sections">
          <div
            className={
              toggleState === 1
                ? "course__content course__content-active"
                : "course__content"
            }
          >
            <div className="course__data">
              <div>
                <h3 className="course__title">自學Front-end</h3>
                <span className="course__subtitle">HTML、CSS、JS、React</span>
                <div className="course__calender">
                  <i className="uil uil-calendar-alt"></i>2022 Oct-Present
                </div>
              </div>

              <div>
                <span className="course__rounder"></span>
                <span className="course__line"></span>
              </div>
            </div>

            <div className="course__data">
              <div></div>

              <div>
                <span className="course__rounder"></span>
                <span className="course__line"></span>
              </div>

              <div>
                <h3 className="course__title">3D動態設計</h3>
                <span className="course__subtitle">Yaga Animation</span>
                <div className="course__calender">
                  <i className="uil uil-calendar-alt"></i>2022 May-Sep
                </div>
              </div>
            </div>

            <div className="course__data">
              <div>
                <h3 className="course__title">自學3D設計</h3>
                <span className="course__subtitle">建模、 渲染、動態</span>
                <div className="course__calender">
                  <i className="uil uil-calendar-alt"></i>Sinece 2021 Jan
                </div>
              </div>
              <div>
                <span className="course__rounder"></span>
                <span className="course__line"></span>
              </div>
            </div>

            <div className="course__data">
              <div></div>

              <div>
                <span className="course__rounder"></span>
                <span className="course__line"></span>
              </div>
              <div>
                <h3 className="course__title">個人接案</h3>
                <span className="course__subtitle">拍攝、剪輯、後製</span>
                <div className="course__calender">
                  <i className="uil uil-calendar-alt"></i>2020-2021
                </div>
              </div>
            </div>

            <div className="course__data">
              <div>
                <h3 className="course__title">剪輯實習</h3>
                <span className="course__subtitle">超人氣新媒體</span>
                <div className="course__calender">
                  <i className="uil uil-calendar-alt"></i>2020 Jul-Sep
                </div>
              </div>
              <div>
                <span className="course__rounder"></span>
                <span className="course__line"></span>
              </div>
            </div>

            <div className="course__data">
              <div></div>

              <div>
                <span className="course__rounder"></span>
                <span className="course__line"></span>
              </div>
              <div>
                <h3 className="course__title">自學後製剪輯</h3>
                <span className="course__subtitle">PR、AE </span>
                <div className="course__calender">
                  <i className="uil uil-calendar-alt"></i>Since 2019 Jun
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "course__content course__content-active"
                : "course__content"
            }
          >
            <div className="course__data">
              <div>
                <h3 className="course__title">Senior Enginner</h3>
                <span className="course__subtitle">海外職涯機會</span>
                <div className="course__calender">
                  <i className="uil uil-calendar-alt"></i>2026
                </div>
              </div>

              <div>
                <span className="course__rounder"></span>
                <span className="course__line"></span>
              </div>
            </div>

            <div className="course__data">
              <div></div>

              <div>
                <span className="course__rounder"></span>
                <span className="course__line"></span>
              </div>

              <div>
                <h3 className="course__title">Junior Engineer</h3>
                <span className="course__subtitle">新創公司</span>
                <div className="course__calender">
                  <i className="uil uil-calendar-alt"></i>2023 Oct
                </div>
              </div>
            </div>

            <div className="course__data">
              <div>
                <h3 className="course__title">AppWorks School</h3>
                <span className="course__subtitle">Fighting！💪</span>
                <div className="course__calender">
                  <i className="uil uil-calendar-alt"></i>2023 Mar-Aug
                </div>
              </div>
              <div>
                <span className="course__rounder"></span>
                <span className="course__line"></span>
              </div>
            </div>

            <div className="course__data">
              <div></div>

              <div>
                <span className="course__rounder"></span>
                <span className="course__line"></span>
              </div>
              <div>
                <h3 className="course__title">自學Front-end</h3>
                <span className="course__subtitle">
                  React、JS <br /> 理論基礎提升 <br />
                  <br />
                  HTML、CSS <br /> 加強實作練習
                </span>
                <div className="course__calender">
                  <i className="uil uil-calendar-alt"></i>2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
