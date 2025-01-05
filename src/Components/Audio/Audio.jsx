import React from 'react';

function AudioPlayer() {
  return (
    <div>
      <audio controls>
        <source src="./audio.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
}

export default AudioPlayer;
