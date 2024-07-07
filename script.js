const notes = ['♪', '♫', '♩', '♬', '♭', '♯'];
const numberOfNotes = 50; // Adjust the number of falling notes
const body = document.body;

for (let i = 0; i < numberOfNotes; i++) {
    const note = document.createElement('div');
    note.className = 'musical-note';
    note.innerText = notes[Math.floor(Math.random() * notes.length)];
    note.style.left = Math.random() * 100 + 'vw';
    note.style.animationDuration = Math.random() * 5 + 5 + 's';
    note.style.fontSize = Math.random() * 10 + 30 + 'px'; // Increase minimum size
    note.style.animationDelay = Math.random() * 5 + 's';
    body.appendChild(note);
}

function playSound(note) {
    var audio = new Audio("sounds/" + note + ".mp3");
    audio.play();
}
