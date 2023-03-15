// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzUeU1l9kfi_cmo02t1BRM8waNw8xMQcE",
  authDomain: "affiliatelinksext.firebaseapp.com",
  projectId: "affiliatelinksext",
  storageBucket: "affiliatelinksext.appspot.com",
  messagingSenderId: "679100910256",
  appId: "1:679100910256:web:0739f5e553590d9235c975"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    if (details.url === "https://www.amazon.com/") {
        chrome.storage.local.get('redirectUrl', function(result) {
            chrome.tabs.update(details.tabId, {url: result.redirectUrl});
        });
    }
        
        
    
    //chrome.tabs.update(details.tabId, {url: "https://www.youtube.com/"});
    
}, {url: [{urlMatches : 'https://www.amazon.com/'}]});
