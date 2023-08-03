import './App.scss';
import { useEffect, useState } from "react"

const audioBank = [{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Heater-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
}, {
  keyCode: 87,
  keyTrigger: "W",
  id: "Heater-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
}, {
  keyCode: 69,
  keyTrigger: "E",
  id: "Heater-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
}, {
  keyCode: 65,
  keyTrigger: "A",
  id: "Heater-4",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
}, {
  keyCode: 83,
  keyTrigger: "S",
  id: "Clap",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
}, {
  keyCode: 68,
  keyTrigger: "D",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
}, {
  keyCode: 90,
  keyTrigger: "Z",
  id: "Kick-n'-Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
}, {
  keyCode: 88,
  keyTrigger: "X",
  id: "Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
}, {
  keyCode: 67,
  keyTrigger: "C",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}];

function App() {

  const [currentKey, setCurrentKey] = useState("");

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      switch (e.key.toUpperCase()) {
        case "Q":
        case "W":
        case "E":
        case "A":
        case "S":
        case "D":
        case "Z":
        case "X":
        case "C":
          playSound(e.key.toUpperCase());
          break;
        default: 
        console.log("Not Valid Key")
          break;
      } 

    })

  }, [])

  function playSound(keyTrigger) {
    const audio = document.getElementById(keyTrigger);
    const result = audioBank.filter(obj => {
      return obj.keyTrigger === keyTrigger;
    })
    console.log(result[0].id)
    audio.play(keyTrigger);
    setCurrentKey(result[0].id)
  }

  return (
    <div className="App">
      <div className="drum-machine" id="drum-machine">
        <div className="display" id="display">
          {currentKey}
          <div className="drum-pads">
            {audioBank.map((clip) => (
              <div onClick={(e) => {
                playSound(clip.keyTrigger);
              }} className="drum-pad" id={clip.id} audioBank={clip} key={clip.keyTrigger}>
                {clip.keyTrigger}
                <audio className="clip" id={clip.keyTrigger} src={clip.url}></audio>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
