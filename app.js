const fs = require("fs");
const EventEmitter = require("events");

const emitter = new EventEmitter();

let data1 = "";
let data2 = "";

fs.readFile("file1.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file1:", err);
    return;
  }

  data1 = data;
  checkFiles();
});

fs.readFile("file2.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file2:", err);
    return;
  }

  data2 = data;
  checkFiles();
});

function checkFiles() {
  if (data1 !== "" && data2 !== "") {
    emitter.emit("filesReady");
  }
}

emitter.on("filesReady", () => {
  const mergedData = data1 + "\n" + data2;

  fs.writeFile("merged.txt", mergedData, (err) => {
    if (err) {
      console.error("Error writing merged file:", err);
      return;
    }

    console.log("Files merged successfully!");
  });
});