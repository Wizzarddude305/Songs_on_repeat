import SongCard from "./SongCards";
import { useRef } from "react";
import TheOneImage from './images/The_one.png';
import StrongestImage from './images/strongest.jpg';
import OtonokeImage from './images/Otonoke.jpeg';

const songs = {
  The_One: {
    title: "The One",
    artists: "DizzEight and Mix Williams",
    image: TheOneImage,
    summary:
      "I like this song due to its overall message that being strong isn't about being gifted, but the mindset someone has towards the darkest of times.",
    audio: "audio/The_One.mp3",
  },
  Strongest: {
    title: "Strongest",
    artists: "DizzEight, Errol Allen, and Musicality",
    image: StrongestImage,
    summary:
      "This song portrays fiction's strongest characters, and even in competition, they lift each other up.",
    audio: "audio/Strongest.mp3",
  },
  Otonoke: {
    title: "Otonoke",
    artists: "CreepyNuts",
    image: OtonokeImage,
    summary:
      "This song has a really catchy beat that captures the wild energy of the anime it’s from.",
    audio: "audio/Otonoke.mp3",
  },
};

function SongList() {
  const audioRef = useRef(null);
  const sourceRef = useRef(null);

  const handlePlay = (songKey) => {
    if (sourceRef.current && audioRef.current) {
      sourceRef.current.src = songs[songKey].audio;
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  return (
    <>
      <div id="Songs_Grouped">
        {Object.entries(songs).map(([key, song]) => (
          <SongCard key={key} {...song} onClick={() => handlePlay(key)} />
        ))}
      </div>
      <audio id="audio_player" ref={audioRef} loop>
        <source id="audio_source" ref={sourceRef} type="audio/mp3" />
      </audio>
    </>
  );
}

export default SongList;