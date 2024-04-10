interface Study {
  imageSrc: string;
  title: string;
  mentor: string;
  level: string;
  stack: string[];
  campus: string;
  description: string;
}

const storedStudy = window.localStorage.getItem("study");
if (!storedStudy) {
  window.location.href = "/";
} else {
  const study: Study = JSON.parse(storedStudy);
  console.log(study);
  const main = document.querySelector("main");

  const image = document.createElement("img");
  image.src = study.imageSrc;
  image.alt = study.title;

  const title = document.createElement("h1");
  title.textContent = study.title;

  const infoWrapper = document.createElement("div");
  infoWrapper.setAttribute("id", "info-wrapper");

  const level = document.createElement("p");
  level.textContent = "📚  " + study.level;

  const campus = document.createElement("p");
  campus.textContent = "🏢  " + study.campus;

  const mentor = document.createElement("p");
  mentor.textContent = "👤  " + study.mentor;

  const stack = document.createElement("p");
  stack.textContent = "🔧  " + study.stack.join(", ");

  infoWrapper.append(level, campus, mentor, stack);

  const description = document.createElement("p");
  description.textContent = study.description;
  description.setAttribute("id", "description");

  main.append(image, title, infoWrapper, description);
}
