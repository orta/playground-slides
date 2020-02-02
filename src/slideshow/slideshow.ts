declare const sandbox: ReturnType<typeof import('../vendor/sandbox').createTypeScriptSandbox>;

import reveal from "reveal.js"

export const revealJS = reveal as import("./reveal").RevealStatic

export const startSlides = () => {

  const markdown = `
### hi

hello world
---

OK then!

<Playground>
// changed
</Playground>
---

# Here's some code

\`\`\`ts
hello
\`\`\`

<Playground>
// code inside the playground
</Playground>

---

Sure

`

  const main =  document.body //document.getElementsByTagName("main")[0].parentNode!
  const divReveal = document.createElement("div")
  divReveal.className = "reveal"
  main.insertBefore(divReveal, main.firstChild)

  const div = document.createElement("div")
  div.className = "slides"
  divReveal.appendChild(div)

  const section = document.createElement("section")  
  section.setAttribute("data-markdown", "")
  section.setAttribute("data-separator", "---")
  div.appendChild(section)

  const textarea = document.createElement("textarea")
  textarea.setAttribute("data-template", "")
  textarea.textContent = markdown 
  section.appendChild(textarea)

  
  const addCSS = (href: string) => {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link)
  }

  const isDev = document.location.host.includes("localhost")
  const unpkgURL = "https://unpkg.com/browse/typescript-playground-presentation-mode@0.0.1/dist/slideshow.css"
  const href2 = isDev ? "http://localhost:5000/slideshow.css" : unpkgURL
  addCSS(href2)

  revealJS.initialize({
    keyboard: {
      27: function() {
        const top = document.getElementsByClassName("raised")[0]
        top.scrollIntoView(true)
      },
    },
    controlsTutorial: false,
    overview: false,
    fragments: false,
  })

  revealJS.addEventListener("slidechanged", (deets: SlideChanged) => {
    console.log(deets)
    if (deets.currentSlide && deets.currentSlide.getElementsByTagName("playground")) {
      const code = deets.currentSlide.getElementsByTagName("playground")[0]!
      console.log(code)
      if (code && code.textContent) {
        sandbox.setText(code.textContent.trim())
      }
    }
  })
  // rElement.focus()/

}

interface SlideChanged {
    indexh: number
    indexv: number
    previousSlide: Element
    currentSlide: Element
    origin: any
}
