
// notizen anzeigen lassen
// ich brauche notizen
let notes = ['Banane', 'Apfel', 'Birne', 'Traube'];

let trashNotes = [];

// -> wann werden sie angezeigt?
function renderNotes() {
   let contentRef = document.getElementById("content");
   contentRef.innerHTML = "";
   
   for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
   }
}

function renderTrashNotes() {
   let trashContentRef = document.getElementById("trash_content");
   trashContentRef.innerHTML = "";
   
   for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
   }
}

function getNoteTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]} <button onclick="deleteNote(${indexNote})">X</button> </p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ ${trashNotes[indexTrashNote]} <button onclick="deleteNote(${indexTrashNote})">X</button> </p>`;
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

// welche notiz muss gelöscht werden
// wann muss die notiz gelöscht werden
// anzeige updaten

function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);
    renderNotes();
    renderTrashNotes();

}

// notizen archivieren
