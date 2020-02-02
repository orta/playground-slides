declare const playground: ReturnType<typeof import('./vendor/playground').setupPlayground>;

const el = (str: string, el: string,container: Element) => {
  const para = document.createElement(el)
  para.innerHTML = str
  container.appendChild(para)
} 

const slidePlugin: import("./vendor/playground").PlaygroundPlugin = {
  id: "present",
  displayName: "Present",
  didMount: (_sandbox, container) =>{
    const p = (str: string) => el(str, "p", container)
    const h4 = (str: string) => el(str, "h4", container)

    h4("Create a Slideshow")
    p("Use Markdown powered by GitHub Gists")
    p("This plugin adds <a href='https://github.com/hakimel/reveal.js'>Reveal.js</a> support to the TypeScript Playground, slides have the ability to change the code inside the playground.")

    h4("Get Started")
    p(`Create a gist with an <code>index.md</code> using a set of <code>---</code>s to split between slides. You can find out more about the syntax <a href="https://github.com/orta/playground-slides">here</a>. If you want to demo the slides, click here to try <a href="#" onclick='document.getElementById("gist-input").value = "https://gist.github.com/orta/d7dbd4cdb8d1f99c52871fb15db620bc"'>an existing deck</a>.`)

    const startButton = document.createElement("input")
    
    const gistForm = createGistInputForm(startButton)
    container.appendChild(gistForm)

    p(`Then when you're ready, hit start below. This will start the slides and scroll you to the top of the page. You can scroll (down with the mouse, or press escape) to get back to the code below it.`)


    startButton.type = "button"
    startButton.value = "Start slideshow"
    container.appendChild(startButton) 

    const firstRunSetup = () => {
      const re = window.require as any
      const isDev = document.location.host.includes("localhost")

      // https://unpkg.com/browse/typescript-playground-presentation-mode@0.0.1/dist/x.js => unpkg/browse/typescript-playground-presentation-mode@0.0.1/dist/x
      const prefix = isDev ? "local" : "unpkg/browse/typescript-playground-presentation-mode@latest/dist"

      if (isDev) {
        re([prefix + "/slideshow"], (slides: typeof import("./slideshow/slideshow")) => {
          // @ts-ignore sets the window.Reveal for the upcoming plugins
          window.Reveal = slides.revealJS

          re([prefix + "/markdown"], ( ) => {
            slides.startSlides(localStorage.getItem("playground-slides-gist-href"))
            // p.textContent = "In slideshow, scroll up to get back to your slides."
            startButton.disabled = true
          })
        })
      }
    }
    
    startButton.onclick = () => {
      firstRunSetup()
    }
  }
}

const createGistInputForm = (startButton: HTMLInputElement) => {
  const form = document.createElement("form")

  const gistHref = document.createElement("input")
  gistHref.type = "url"
  gistHref.id = "gist-input"
  gistHref.placeholder = "https://gist.github.com/.../..."
  const storedGistHref = localStorage.getItem("playground-slides-gist-href")
  gistHref.value = storedGistHref

  const updateState = ({ enable }) => {
    if (enable) {
      gistHref.classList.add("good")
      startButton.disabled = false

    } else {
      gistHref.classList.remove("good")
      startButton.disabled = true
    }
  }

  const textUpdate = (e) => {
    const href =  e.target.value.toLowerCase().trim()
    localStorage.setItem("playground-slides-gist-href", href)
    updateState({ enable: isGist(href) })
  }

  gistHref.onkeydown = textUpdate
  gistHref.onpaste = textUpdate
  gistHref.onchange = textUpdate
  form.appendChild(gistHref)

  updateState({ enable: isGist(storedGistHref) })
  return form
}

const isGist = (str: string) => {
  return str.startsWith("https://gist.github.com/") && str.split("/").length === 5
}

export default slidePlugin

