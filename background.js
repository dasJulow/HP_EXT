chrome.declarativeNetRequest.addRule({
    id: 'redirect-to-youtube',
    priority: 100,
    condition: {
      urlFilter: '*://amazon.com/*'
    },
    action: {
      type: 'redirect',
      redirectUrl: 'https://www.youtube.com/'
    }
  }, function() {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
      return;
    }
  
    // Update the dynamic rules to apply the new rule to all active tabs
    chrome.declarativeNetRequest.updateDynamicRules(function() {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        return;
      }
  
      console.log('Successfully added declarative rule');
    });
  });
  