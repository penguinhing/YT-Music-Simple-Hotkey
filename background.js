function runScript(filename) {
  chrome.tabs.query({ url: "https://music.youtube.com/*" }, (tabs) => {
    if (tabs.length > 0) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: [filename],
      });
    }
  });
}

chrome.commands.onCommand.addListener((command) => {
  if (command === "Play-Pause") {
    runScript("module/play-pause.js");
  } else if (command === "Next-Song") {
    runScript("module/next-song.js");
  } else if (command === "Prev-Song") {
    runScript("module/prev-song.js");
  }
});
