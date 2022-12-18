import React, { useState } from "react";
import "./motivation.css";

const Motivation = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="motivation section" id="motivation">
      <h2 className="section__title">Motivation</h2>
      <span className="section__subtitle">Why I chanege careers</span>

      <div className="motivation__container container grid">
        <div className="motivation__content">
          <div>
            <i className="uil uil-window motivation__icon"></i>
            <h3 className="motivation__title">
              WHY <br /> Front-end
            </h3>
          </div>

          {/* -----------------viewmore---------------- */}
          <span className="motivation__button" onClick={() => toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right motivation__button-icon"></i>
          </span>

          {/* 是否顯示viewmore */}
          <div
            className={
              toggleState === 1
                ? "motivation__modal active-modal"
                : "motivation__modal "
            }
            // onClick={() => toggleTab(0)}
          >
            <div className="motivation__modal-content">
              <i
                className="uil uil-times motivation__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="motivation__modal-title">為什麼選擇前端</h3>
              <ul className="motivation__modal-motivation">
                <p className="motivation__modal-description">主觀</p>

                <li className="motivation__modal-service">
                  <p className="motivation__modal-info">
                    <i className="uil uil-angle-double-right motivation__modal-icon"></i>
                    　　在從事3D動態設計時，發覺製作出的影像，大多只是影片或圖片的形式，互動性較不直覺與生動，一直希望可以找到讓
                    <b>使用者感受更深的面向</b>
                    ，而網頁相關的技術正好可以發揮這點，之後在公司期間也剛好接觸到製作WebGL的案子時，發覺
                    <b>前端領域的多元應用</b>，正是我所期望能夠發揮的最好媒材。
                  </p>
                </li>
                <p className="motivation__modal-description">客觀</p>

                <li className="motivation__modal-service">
                  {/* <i className="uil uil-check-circle motivation__modal-icon"></i> */}
                  <p className="motivation__modal-info">
                    <i className="uil uil-angle-double-right motivation__modal-icon"></i>
                    　　近來特殊形式的網頁發展越來越熱絡，隨著Web3.0、元宇宙等概念的興起，更加大了這方面需求與應用，如互動式、沉浸式、3D、VR等技術，而本身對於區塊鏈、NFT、網路科技等相關領域富有興趣，望工作內容能與相關技術發展有所關聯。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="motivation__content">
          <div>
            <i className="uil uil-arrow motivation__icon"></i>
            <h3 className="motivation__title">
              What <br /> Enginner
            </h3>
          </div>
          <span className="motivation__button" onClick={() => toggleTab(2)}>
            View more
            <i className="uil uil-arrow-right motivation__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "motivation__modal active-modal"
                : "motivation__modal "
            }
          >
            <div className="motivation__modal-content">
              <i
                className="uil uil-times motivation__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="motivation__modal-title">我想成為的前端工程師</h3>
              {/* <p className="motivation__modal-description">
           
              </p> */}
              <ul className="motivation__modal-motivation grid">
                <li className="motivation__modal-service">
                  <i className="uil uil-angle-double-right motivation__modal-icon"></i>
                  <p className="motivation__modal-info">
                    　重視使用者介面設計與互動的流暢性
                  </p>
                </li>

                <li className="motivation__modal-service">
                  <i className="uil uil-angle-double-right  motivation__modal-icon"></i>
                  <p className="motivation__modal-info">
                    　研究網頁效能優化的技術層面，讓使用者有良好的使用體驗。
                  </p>
                </li>

                <li className="motivation__modal-service">
                  <i className="uil uil-angle-double-right  motivation__modal-icon"></i>
                  <p className="motivation__modal-info">
                    　積極嘗試未來前端新趨勢，突破舊有網頁形式。
                  </p>
                </li>

                <li className="motivation__modal-service">
                  <i className="uil uil-angle-double-right  motivation__modal-icon"></i>
                  <p className="motivation__modal-info">
                    　探索Web3網頁相關技術，如智能合約，區塊鏈資料交互串接等。
                  </p>
                </li>

                <li className="motivation__modal-service">
                  <i className="uil uil-angle-double-right  motivation__modal-icon"></i>
                  <p className="motivation__modal-info">
                    　學習框架衍生的相關應用，如React
                    Native等，不只侷限在網頁上。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="motivation__content">
          <div>
            <i className="uil uil-edit motivation__icon"></i>
            <h3 className="motivation__title">
              How <br /> To be
            </h3>
          </div>
          <span className="motivation__button" onClick={() => toggleTab(3)}>
            View more
            <i className="uil uil-arrow-right motivation__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "motivation__modal active-modal"
                : "motivation__modal "
            }
          >
            <div className="motivation__modal-content">
              <i
                className="uil uil-times motivation__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="motivation__modal-title">如何成為前端工程師</h3>
              <ul className="motivation__modal-motivation">
                <p className="motivation__modal-description">自學</p>

                <li className="motivation__modal-service">
                  <p className="motivation__modal-info">
                    <i className="uil uil-angle-double-right motivation__modal-icon"></i>
                    　　目前主要依靠網路上Youtube、Bilibili以及Udemy的
                    <b>線上課程資源</b>
                    ，學習基礎的理論與原理，間接再到小項目的實作，並且閱讀JavaScript的工具書等，加強JavaScript的基礎。
                  </p>
                </li>

                <li className="motivation__modal-service">
                  <p className="motivation__modal-info">
                    　　加入前端相關的網路社群，讓自己每天都會看到一些，其他人提出的問題或知識，即使現在大多都看不太懂，但能夠知道未來，可能實際開發會遇到的狀況與難題。
                  </p>
                </li>

                <li className="motivation__modal-service">
                  <p className="motivation__modal-info">
                    　　追蹤關注期許能成為的工程師動態，如在Instagram、Twitter、Github等，藉由了解工程師真實的工作內容與環境，轉而成為學習效仿的動力。
                  </p>
                </li>
                <p className="motivation__modal-description">AppWorks School</p>

                <li className="motivation__modal-service">
                  {/* <i className="uil uil-check-circle motivation__modal-icon"></i> */}
                  <p className="motivation__modal-info">
                    <i className="uil uil-angle-double-right motivation__modal-icon"></i>
                    　　期望能夠加入AppWorks
                    School的培訓營，藉由同儕互助的關係，提早
                    <b>養成團隊溝通協作的經驗</b>
                    ，並且配合專業且循序的目標制定，訓練自己的自律性與扛壓性，
                    <b>提升解決問題與提出問題的能力</b>
                    ，以一定要成為前端工程師為目標前進
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
