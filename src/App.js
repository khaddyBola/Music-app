import { useEffect, useState } from "react";
import Player from "./components/Player";


function App() {
  const [songs] = useState([
    {
      title: "Bandana",
      artist: "Fireboy DML & Asake",
      img_src: "./images/Bandana.jpg",
      src: "./songs/Fireboy_DML_ft_Asake_Bandanna.mp3"
    },
    {
      title: "Terminator",
      artist: "Asake",
      img_src: "./images/Terminator.jpg",
      src: "./songs/Asake_-_Terminator.mp3"
    },
    {
      title: "Emi lo kan",
      artist: "Qdot",
      img_src: "./images/qdot.jpg",
      src: "./songs/Emi-Lo-Kan.mp3"
    },
    {
      title: "Buga (Lo Lo Lo)",
      artist: "Kizz-Daniel, TEkno",
      img_src: "./images/Buga.jpg",
      src: "./songs/Tekno-ft-Kizz-Daniel-Buga.mp3"
    },
    {
      title: "Feel-Good",
      artist: "Mohbad",
      img_src: "./images/Mohbad-Feel-Good.jpg",
      src: "./songs/Mohbad-Feel-Good.mp3"
    },
    {
      title: "Loving-You",
      artist: "Zinoleesky",
      img_src: "./images/Zinoleesky-Loving.jpg",
      src: "./songs/Zinoleesky-Loving-You.mp3"
    },
    {
      title: "Peace-be-upon-you-PBUY",
      artist: "Asake",
      img_src: "./images/Asake-PBUY.jpg",
      src: "./songs/Asake-PBUY.mp3"
    },
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex, songs.length])



  return (
    <div className="App">
      <Player 
        currentSongIndex = {currentSongIndex}
        setCurrentSongIndex = {setCurrentSongIndex}
        nextSongIndex = {nextSongIndex}
        songs = {songs}
      />
     
    </div>
  );
}

export default App;
