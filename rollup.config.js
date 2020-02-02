import typescript from "@rollup/plugin-typescript";
import node from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import {copyFileSync} from "fs"

copyFileSync("src/slideshow/slideshow.css", "dist/slideshow.css")

export default ["index.ts", "slideshow/slideshow.ts", "slideshow/markdown.js"].map(name => ({
  input: `src/${name}`,
  output: {
    name,
    dir: "dist",
    format: "amd"
  },
  plugins: [typescript({ tsconfig: "tsconfig.json" }), commonjs(), node(), json()]
}));
