import { PlaygroundPlugin } from "./vendor/playground";

const slidePlugin: PlaygroundPlugin = {
  id: "present",
  displayName: "Presnt",
  shouldBeSelected: () => {
    return false;
  },
  didMount: () =>{
    console.log("Present mounted")
  },
  didUnmount: () => {
    console.log("unmounted")
  }
}


declare const playground: ReturnType<typeof import('./vendor/playground').setupPlayground>;
// @ts-ignore
playground.registerPlugin(slidePlugin)
