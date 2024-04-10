namespace Detail {
  const rawWrapper = document.getElementById("content-wrapper")
  if (rawWrapper === null) {
    throw new Error("cannot locate 'content-wrapper'");
  }
  export const mainWrapper = rawWrapper
}

const Component = (props: { title: string }): string => {
  const { title } = props
  const data = JSON.parse(localStorage.getItem('data'))

  const study: Study = data.filter((study: Study) => study.title === title)[0]
  const { imageSrc, level, campus, mentor, stack, description } = study
  
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
Detail.mainWrapper.innerHTML = Component({title})