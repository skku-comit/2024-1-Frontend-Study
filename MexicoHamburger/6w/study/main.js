const classInfo = document.getElementsByClassName('showClassInfo');
infoData = localStorage.getItem('courseInfo');

const courseInfo = JSON.parse(infoData);

console.log(infoData);
console.log(courseInfo.imageSrc);

classInfo[0].innerHTML = `      
    <div class="card-image">
        <img src="${courseInfo.imageSrc}" alt="${courseInfo.title}">
    </div>
    <h1>${courseInfo.title}</h1>
    <div class="class-details">
        <h3>수준: ${courseInfo.level}</h3>
        <h3>캠퍼스: ${courseInfo.campus}</h3>
        <h3>강의: ${courseInfo.mentor}</h3>
        <h3>스택: ${courseInfo.stack.join(', ')}</h3>
        <p>${courseInfo.description}</p>
    </div>
`