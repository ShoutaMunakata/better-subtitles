document.getElementById('caption-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const fontSize = document.getElementById('font-size').value + 'px';
    const fontColor = document.getElementById('font-color').value;
    const backgroundColor = document.getElementById('background-color').value;
  
    // Store user preferences in Chrome storage
    chrome.storage.sync.set({
      fontSize: fontSize,
      fontColor: fontColor,
      backgroundColor: backgroundColor
    }, function() {
      // Notify content script about the update
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: applyCaptionStyles,
        });
      });
    });
  });
  
  function applyCaptionStyles() {
    chrome.storage.sync.get(['fontSize', 'fontColor', 'backgroundColor'], function(items) {
      const captions = document.querySelectorAll('.ytp-caption-segment');
      if (captions.length > 0) {
        captions.forEach(caption => {
          caption.style.fontSize = items.fontSize || '18px';
          caption.style.color = items.fontColor || '#ffffff';
          caption.style.backgroundColor = items.backgroundColor || '#000000';
        });
      }
    });
  }
