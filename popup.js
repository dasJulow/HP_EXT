// Add fetch API polyfill
//import 'isomorphic-fetch';

async function searchChannels(channelName) {
  const API_KEY = 'AIzaSyAzUeU1l9kfi_cmo02t1BRM8waNw8xMQcE';
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${channelName}&key=${API_KEY}`;

  try {
    const response = await fetch(searchUrl);
    const data = await response.json();

    // Check if there are any search results
    if (data.items.length > 0) {
      // Return true if there are search results
      return true;
    } else {
      // Return false if there are no search results
      return false;
    }
  } catch (error) {
    console.error(error);
  }
}

async function onSubmit() {
    // Get the value of the input field
    const channelName = document.querySelector('#channel-name').value;
    var messageDiv = document.getElementById("message");
  
    // Search for channels with the specified name
    const result = await searchChannels(channelName);
  
    // Display the appropriate message based on the search results
    if (result) {
     // document.querySelector('#result').textContent = 'Congratulations, we found a match!';
      messageDiv.innerHTML = "Found a match!" ;
      console.log(channelName)

    } else {
     //  document.querySelector('#result').textContent = 'Sorry, no match found';
      messageDiv.innerHTML = "Sorry, no match found!!";
      console.log("NO,NO,NO")
    }
  } 
  
  // Add an event listener to the search button
  document.querySelector('#search-button').addEventListener('click', onSubmit);
  





