import "./App.css";
import LofiPlaylist from "./lofiPlaylist.js";
//import PartyPlaylist from "./partyPlaylist.";
var toggleButton;
document.addEventListener("DOMContentLoaded", () => {
  toggleButton = document.getElementById("toggleButton");
});
toggleButton.addEventListener("click", () => {
  this.classList.toggle("active");
});

function App() {
  return (
    <>
      <h1>Are you ready to chill? or are you ready to PARTY?</h1>
      <div className="container">
        <LofiPlaylist />
        {/* <PartyPlaylist /> */}
      </div>
    </>
  );
}

export default App;
