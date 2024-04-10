const Component = (props) => {
  const { title } = props
  const data = JSON.parse(localStorage.getItem('data'))

  const studyData = data.filter((study) => study.title === title)[0]
  const { imageSrc, level, campus, mentor, stack, description } = studyData
  
  return `
    <main class='container text-center'>
      <img src=${imageSrc} class='study-image'>

      <h1 class='fw-bold mb-4'>${title}</h1>

      <div id='info-wrapper' class='mb-4 text-start d-flex flex-column g-1'>
        <p>📚&nbsp;${level}</p>
        <p>🏢&nbsp;${campus}</p>
        <p>👤&nbsp;${mentor}</p>
        <p>🔧&nbsp;${stack.join(', ')}</p>
      </div>

      <p id='description'>
        ${description}
      </p>
    </main>
  `
}

const wrapperElement = document.getElementById("content-wrapper")
const title = localStorage.getItem('studyTitle')
wrapperElement.innerHTML = Component({title})