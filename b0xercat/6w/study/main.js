var storedStudy = window.localStorage.getItem("study");
if (!storedStudy) {
  window.location.href = "../";
} else {
  var study = JSON.parse(storedStudy);
  console.log(study);
  var main = document.querySelector("main");
  var image = document.createElement("img");
  image.src = study.imageSrc;
  image.alt = study.title;
  var title = document.createElement("h1");
  title.textContent = study.title;
  var infoWrapper = document.createElement("div");
  infoWrapper.setAttribute("id", "info-wrapper");
  var level = document.createElement("p");
  level.textContent = "📚  " + study.level;
  var campus = document.createElement("p");
  campus.textContent = "🏢  " + study.campus;
  var mentor = document.createElement("p");
  mentor.textContent = "👤  " + study.mentor;
  var stack = document.createElement("p");
  stack.textContent = "🔧  " + study.stack.join(", ");
  infoWrapper.append(level, campus, mentor, stack);
  var description = document.createElement("p");
  description.textContent = study.description;
  description.setAttribute("id", "description");
  main.append(image, title, infoWrapper, description);
}
