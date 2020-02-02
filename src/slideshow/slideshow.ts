declare const sandbox: ReturnType<typeof import('../vendor/sandbox').createTypeScriptSandbox>;

import reveal from "reveal.js"
export const revealJS = reveal as import("./reveal").RevealStatic

export const startSlides = (url: string) => {
  // Expects a URL like https://gist.github.com/orta/d7dbd4cdb8d1f99c52871fb15db620bc
  // Convert to: https://gist.githubusercontent.com/orta/d7dbd4cdb8d1f99c52871fb15db620bc/raw/index.md
  //
  const rawURL = url.replace("https://gist.github.com", "https://gist.githubusercontent.com")
  return fetch(rawURL + "/raw/index.md").then(r => {
    return r.text()
  }).then(markdown => {
      const main =  document.body 
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
            sandbox.editor.focus()
          },
        },
        controlsTutorial: false,
        overview: false,
        fragments: false,
      })
      
      // All this faff is because the viewport will  be at the bottom briefly during initialization, 
      // which means the first slide is way off, so we force it to the top, make it invisivle, delay a
      // few ms do a re-layout and show the slides in the right position
      window.scrollTo({ top: 0 })
      const element = revealJS.getRevealElement() as HTMLElement
      element.style.opacity = "0" 
      setTimeout(() => {
        revealJS.layout()
        element.style.opacity = "100"
      }, 300)

      // Hook into the reveal JS slide changed notifications so that we can update monaco underneath
      revealJS.addEventListener("slidechanged", (deets: SlideChanged) => {
        if (deets.currentSlide && deets.currentSlide.getElementsByTagName("playground")) {
          const code = deets.currentSlide.getElementsByTagName("playground")[0]!
          if (code && code.textContent) {
            sandbox.setText(code.textContent.trim())
          }
        }
      })
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
