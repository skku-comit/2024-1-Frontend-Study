const Component = (props) => {
  const { imageSrc, title, level, campus, mentor, stack, description } = props

  return `
    <div class='text-center'>
      <img src=${imageSrc}>

      <h5>${title}</h5>

      📚&nbsp;${level}
      🏢&nbsp;${campus}
      👤&nbsp;${mentor}
      🔧&nbsp;${stack}

      ${description}
    </div>
  `
}

const wrapperElement = document.getElementById("content-wrapper")
wrapperElement.append(Component())