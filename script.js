
// notizen anzeigen lassen
// ich brauche notizen
let notes = ['Banane', 'Apfel', 'Birne', 'Traube'];

// -> wann werden sie angezeigt?
function renderNotes() {
   let contentRef = document.getElementById("content");
   contentRef.innerHTML = "";
   
   for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = notes[indexNote];
    contentRef.innerHTML += getNoteTemplate(note);
   }
}

function getNoteTemplate(note) {
    return `<p>+ ${note}</p>`;
}

   // ich muss definieren wo sie angezeigt werden


// notizen hinzufügen
//eingabe vom user definieren
function addNote(note) {
    let noteInputRef = document.getElementById("note_input");
    let noteInput = noteInputRef.value;
    //eingabe auslesen
    //eingabe speichern
    notes.push(noteInput);
    //eingabe anzeigen lassen
    renderNotes();

    noteInputRef.value = "";
}

// notizen löschen
// notizen archivieren
