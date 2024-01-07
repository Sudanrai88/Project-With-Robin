import React from 'react'

function PlayButton() {
  return (
    <div className="button-play active">
    <button id='play-button' onClick={startPlay}>
        Play
    </button>
    </div>
  )
}


async function startPlay() {
  fetch('https://localhost:3000/API/getSound', {
    method: 'GET',
  })
  .then(response => {
    // Check if response status is OK
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then(blob => {
    const audio = new Audio();
    const blobUrl = URL.createObjectURL(blob);
    audio.src = blobUrl;
    audio.play();
  })
  .catch(error => {
    console.error('Error:', error)
  });
};

export default PlayButton