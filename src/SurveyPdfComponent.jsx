import React from "react";
import { Model } from "survey-core";
import { SurveyPDF } from "survey-pdf";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";

function createSurveyPdfModel(surveyModel) {
    let pdfWidth = !!surveyModel && surveyModel.pdfWidth ? surveyModel.pdfWidth : 210;
    let pdfHeight = !!surveyModel && surveyModel.pdfHeight ? surveyModel.pdfHeight : 297;
    let options = {
        fontSize: 14,
        margins: {
            left: 10,
            right: 10,
            top: 10,
            bot: 10
        },
        
        
        format: [pdfWidth, pdfHeight]
    };
    const surveyPDF = new SurveyPDF(json, options);
    if (surveyModel) {
        surveyPDF.data = surveyModel.data;
    }
    
    return surveyPDF;
}
function saveSurveyToPdf(filename, surveyModel) {
    createSurveyPdfModel(surveyModel).save(filename);
}
function SurveyPdfComponent() {
    const survey = new Model(json);
    survey.data = {
      "qualities": {
        "affordable": 3,
        "does-what-it-claims": 4,
        "better-than-others": 3,
        "easy-to-use": 5
      },
      "satisfaction-score": 4,
      "recommend": 5,
      "suggestions": "24/7 support would help a lot.",
      "price-comparison": "Not sure",
      "current-price": "correct",
      "price-limits": {
        "highest": 450,
        "lowest": 200
      },
      "email": "john.doe@example.com"
    };
    const savePdf = function () {
        saveSurveyToPdf("surveyResult.pdf", survey);
    };
    const btnStyle = { marginLeft: "20px", marginTop: "20px", marginBottom: "20px" };
    return (<>
        <button className={"sd-btn"} style={btnStyle} onClick={savePdf}>Save as PDF</button>
        <Survey model={survey} />
    </>);
}

export default SurveyPdfComponent;