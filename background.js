chrome.webRequest.onBeforeReques.addListener(
    function(details){
        //Code to redirect request
        return{redirectUrl: "http://youtube.com"};
    },
    {urls: ["*://*.amazon.com/*"]},
    ["blocking"]
);