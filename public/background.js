// background.js

// Listener for messages from the content script.
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === 'CLEAR_CANVAS') {
      // Handle the clear canvas request here.
      // You can implement your canvas clearing logic or any other background-related tasks.
      // For example:
      clearCanvas();
    }
  });
  
  function clearCanvas() {
    // Implement your canvas clearing logic here.
    // This function can communicate with your content script or perform other extension-related tasks.
    // For now, we'll just log a message.
    console.log('Canvas cleared from background.js');
  }
  