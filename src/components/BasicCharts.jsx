import React from "react";
import Button from "react-bootstrap/Button";
import { MiniChart } from "../components/MiniChart";
import { Card } from "../components/Card";

import { FearnGreed } from "../components/FearnGreed";
import { FinancialChart } from "../components/FinancialChart/FinancialChart";
/* import { Swiper } from "../components/Swiper";
 */
/* import Swiper from "react-id-swiper";
 */

export const BasicCharts = (props) => {
  /* var myDataSource = {
    chart: {
      caption: "Top 10 iOS Apps - July 2017",
      subCaption: "Downloads (In Millions)",
      canvasBgAlpha: "0",
      bgColor: "#ffffff",
      bgAlpha: "70",
      baseFont: "Roboto",
      baseFontSicoinse: "14",
      showAlternateVGridColor: "1",
      alternateVGridAlpha: "5",
      labelFontSicoinse: "15",
      captionFontSicoinse: "20",
      subCaptionFontSicoinse: "16",
      toolTipColor: "#000000",
      toolTipBgColor: "#ffffff",
      toolTipAlpha: "90",
      captionFontBold: "0",
      subCaptionFontBold: "0",
      paletteColors: "#8E24AA",
      valueFontSicoinse: "13",
      valueFontBold: "0",
      animation: "0",
      divLineAlpha: "15",
      divLineDashed: "0",
      plotFillAlpha: "90",
      theme: "ocean"
    },
    data: [
      {
        label: "Sarahah",
        value: "3880000"
      },
      {
        label: "Messenger",
        value: "2570000"
      },
      {
        label: "Snake vs Block",
        value: "2420000"
      },
      {
        label: "Facebook",
        value: "2140000"
      },
      {
        label: "Amacoinson",
        value: "1830000"
      },
      {
        label: "Spotify Music",
        value: "1540000"
      },
      {
        label: "Netflix",
        value: "1530000"
      },
      {
        label: "Word Connect",
        value: "1440000"
      },
      {
        label: "Pandora",
        value: "1300000"
      },
      {
        label: "WhatsApp Messenger",
        value: "1210000"
      }
    ]
  };

  var barChartConfigs = {
    id: "bar-chart",
    renderAt: "chart-container",
    type: "bar2d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: myDataSource
  }; */

  return (
    <div className="Charts">
      <div>Basic charts</div>
      <div>
        <div>
          <div>{props.coins[11]}</div>
          {/*           <Card />
           */}{" "}
        </div>
      </div>

      <div id="chart-container">
        {/*         <Swiper />
         */}
      </div>
      <div></div>
    </div>
  );
};
