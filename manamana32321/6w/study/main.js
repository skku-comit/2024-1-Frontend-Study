"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../main");
var Component = function (props) {
    var title = props.title;
    var rawData = localStorage.getItem('data');
    if (rawData === null) {
        throw new Error("invalid title '".concat(title, "'"));
    }
    var data = JSON.parse(rawData);
    var studyData = data.filter(function (study) { return study.title === title; })[0];
    var imageSrc = studyData.imageSrc, level = studyData.level, campus = studyData.campus, mentor = studyData.mentor, stack = studyData.stack, description = studyData.description;
    return "\n    <main class='container text-center'>\n      <img src=".concat(imageSrc, " class='study-image'>\n\n      <h1 class='fw-bold mb-4'>").concat(title, "</h1>\n\n      <div id='info-wrapper' class='mb-4 text-start d-flex flex-column g-1'>\n        <p>\uD83D\uDCDA&nbsp;").concat(level, "</p>\n        <p>\uD83C\uDFE2&nbsp;").concat(campus, "</p>\n        <p>\uD83D\uDC64&nbsp;").concat(mentor, "</p>\n        <p>\uD83D\uDD27&nbsp;").concat(stack.join(', '), "</p>\n      </div>\n\n      <p id='description'>\n        ").concat(description, "\n      </p>\n    </main>\n  ");
};
var title = localStorage.getItem('studyTitle');
main_1.mainWrapper.innerHTML = Component({ title: title });
