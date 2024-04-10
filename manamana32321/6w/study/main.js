var Detail;
(function (Detail) {
    var rawWrapper = document.getElementById("content-wrapper");
    if (rawWrapper === null) {
        throw new Error("cannot locate 'content-wrapper'");
    }
    Detail.mainWrapper = rawWrapper;
})(Detail || (Detail = {}));
var Component = function (props) {
    var title = props.title;
    var data = JSON.parse(localStorage.getItem('data'));
    var study = data.filter(function (study) { return study.title === title; })[0];
    var imageSrc = study.imageSrc, level = study.level, campus = study.campus, mentor = study.mentor, stack = study.stack, description = study.description;
    return "\n    <main class='container text-center'>\n      <img src=".concat(imageSrc, " class='study-image'>\n\n      <h1 class='fw-bold mb-4'>").concat(title, "</h1>\n\n      <div id='info-wrapper' class='mb-4 text-start d-flex flex-column g-1'>\n        <p>\uD83D\uDCDA&nbsp;").concat(level, "</p>\n        <p>\uD83C\uDFE2&nbsp;").concat(campus, "</p>\n        <p>\uD83D\uDC64&nbsp;").concat(mentor, "</p>\n        <p>\uD83D\uDD27&nbsp;").concat(stack.join(', '), "</p>\n      </div>\n\n      <p id='description'>\n        ").concat(description, "\n      </p>\n    </main>\n  ");
};
var title = localStorage.getItem('studyTitle');
Detail.mainWrapper.innerHTML = Component({ title: title });
