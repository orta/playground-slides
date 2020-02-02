// @ts-check

// Grab CSS

const nodeFetch = require("node-fetch").default;
const { writeFileSync } = require("fs");
const { join } = require("path");

const getFileAndStoreLocally = async (url, path, editFunc) => {
  const editingFunc = editFunc ? editFunc : text => text;
  const packageJSON = await nodeFetch(url);
  const contents = await packageJSON.text();
  writeFileSync(join(__dirname, "..", path), editingFunc(contents), "utf8");
};

const go = async () => {
  await getFileAndStoreLocally(
    "https://raw.githubusercontent.com/hakimel/reveal.js/master/css/reveal.css",
    "dist/reveal.css"
  );
  await getFileAndStoreLocally(
    "https://raw.githubusercontent.com/hakimel/reveal.js/master/css/theme/white.css",
    "dist/reveal-theme.css"
  );
};

go();
