import { hello } from './other';

declare const playground: ReturnType<typeof import('./vendor/playground').setupPlayground>;

const slidePlugin: import("./vendor/playground").PlaygroundPlugin = {
  id: "present",
  displayName: "Present",
  shouldBeSelected: () => {
    return false;
  },
  didMount: () =>{
    console.log("Present mounted")
    hello()
  },
  didUnmount: () => {
    console.log("unmounted")
  }
}

export default slidePlugin
