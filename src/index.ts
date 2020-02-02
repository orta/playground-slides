declare const playground: ReturnType<typeof import('./vendor/playground').setupPlayground>;

const slidePlugin: import("./vendor/playground").PlaygroundPlugin = {
  id: "present",
  displayName: "Present",
  didMount: (_sandbox, container) =>{
    const p = document.createElement("p")
    p.textContent = "Create a slideshow from Markdown"
    container.appendChild(p)

    const startButton = document.createElement("input")
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
            slides.startSlides()
            p.textContent = "In slideshow, scroll up to get back to your slides."
            startButton.disabled = true
          })
        })
      }
    }
    
    startButton.onclick = () => {
      firstRunSetup()
    }
  },
  didUnmount: () => {
    console.log("unmounted")
  }
}

export default slidePlugin
