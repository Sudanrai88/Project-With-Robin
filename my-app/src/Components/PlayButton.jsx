import React, { useState } from 'react';


function PlayButton() {
  const [message, setMessage] = useState('');

  const fetchData = () => {
    fetch('http://localhost:8080/api/sounds/getString')
      .then(response => response.text())  // Assuming the response is a plain text
      .then(data => {
        setMessage(data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };


  async function startPlay() {
    fetch('http://localhost:8080/api/sounds/getSound', {
      method: 'GET',
    })
      .then(response => response.blob())
      .then(blob => {
        // Create a URL for the blob
        const url = window.URL.createObjectURL(blob);
        // Create an audio element and set its source to the URL
        const audio = new Audio(url);
        audio.load();
        audio.play();
      })
      .catch(error => console.error('Error fetching audio:', error));
  }

  return (
    <div className="button-play active">
      <button id='play-button' onClick={startPlay}>
        Play
      </button>

      <button onClick={fetchData}>Fetch String</button>
      <p>{message}</p>


    </div>
  )
}





export default PlayButton