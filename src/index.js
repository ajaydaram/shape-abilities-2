import React from "react";
import { createRoot } from "react-dom/client";
import SurveyPdfComponent from "./SurveyPdfComponent";

const root = createRoot(document.getElementById("surveyElement"));
root.render(<SurveyPdfComponent />);