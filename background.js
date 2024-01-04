// background.js

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.event === "problemSubmitted") {
      chrome
      chrome.runtime.sendMessage({ event: "openPopup", problemUrl: message.problemUrl });
    }
  });
  