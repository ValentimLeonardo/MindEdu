const AudioButton = () => {
  const handleClick = () => {
    const audioPath = '/src/assets/audio.mp3';
    window.location.href = audioPath;
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Ouvir Áudio
    </button>
  );
};

export default AudioButton;

