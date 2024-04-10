const Component = (props) => {
  const { title } = props
  const rawData = localStorage.getItem('data')
  if (rawData === null) {
    throw new Error(`invalid title '${title}'`);
  }
  const data = JSON.parse(rawData)

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

const title = localStorage.getItem('studyTitle')
mainWrapper.innerHTML = Component({title})