// notizen anzeigen lassen
// ich brauche notizen
let notes = [];
let titles = [];
let archivNotes = [];
let archivTitles = [];
let trashNotes = [];
let trashTitles = [];

function init() {
    getFromLocalStorage();
    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}

// -> wann werden sie angezeigt?
function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderArchivNotes() {
    let contentRef = document.getElementById("archiv_content");
    contentRef.innerHTML = "";

    for (let indexArchivNote = 0; indexArchivNote < archivNotes.length; indexArchivNote++) {
        contentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

// ich muss definieren wo sie angezeigt werden


// notizen hinzufügen
//eingabe vom user definieren
function addNote() {
    let noteInputRef = document.getElementById("note_input");
    let titleInputRef = document.getElementById("note_title");

    if (noteInputRef.value != "" || titleInputRef.value != "") {

        notes.push(noteInputRef.value);
        titles.push(titleInputRef.value);

        //eingabe auslesen
        //eingabe speichern
        //eingabe anzeigen lassen


        noteInputRef.value = "";
        titleInputRef.value = "";

        saveToLocalStorage();
        renderNotes();
    } else {
        alert("Bitte Felder ausfüllen")
    }
}

// notizen löschen

// welche notiz muss gelöscht werden
// wann muss die notiz gelöscht werden
// anzeige updaten

function noteToTrash(indexNote) {
    let note = notes.splice(indexNote, 1);
    trashNotes.push(note[0]);

    let title = titles.splice(indexNote, 1);
    trashTitles.push(title[0]);

    saveToLocalStorage();
    renderNotes();
    renderArchivNotes()
    renderTrashNotes();
}

function noteToArchiv(indexNote) {
    let note = notes.splice(indexNote, 1);
    archivNotes.push(note[0]);

    let title = titles.splice(indexNote, 1)
    archivTitles.push(title[0])

    saveToLocalStorage();
    renderNotes();
    renderArchivNotes()
    renderTrashNotes();
}

function archivToTrash(indexArchivNote) {
    let note = archivNotes.splice(indexArchivNote, 1);
    trashNotes.push(note[0]);

    let title = archivTitles.splice(indexArchivNote, 1);
    trashTitles.push(title[0]);

    saveToLocalStorage();
    renderNotes();
    renderArchivNotes()
    renderTrashNotes();
}

function archivToNote(indexArchivNote) {
    let note = archivNotes.splice(indexArchivNote, 1);
    notes.push(note[0]);

    let title = archivTitles.splice(indexArchivNote, 1);
    titles.push(title[0]);

    saveToLocalStorage();
    renderNotes();
    renderArchivNotes()
    renderTrashNotes();
}

function trashToArchiv(indexTrashNote) {
    let note = trashNotes.splice(indexTrashNote, 1);
    archivNotes.push(note[0]);

    let title = trashTitles.splice(indexTrashNote, 1);
    archivTitles.push(title[0]);

    saveToLocalStorage();
    renderNotes();
    renderArchivNotes()
    renderTrashNotes();
}

function deleteFinal(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    trashTitles.splice(indexTrashNote, 1);

    saveToLocalStorage();
    renderNotes();
    renderArchivNotes()
    renderTrashNotes();
}

// notizen archivieren
function saveToLocalStorage() {
    localStorage.setItem('myNotes', JSON.stringify(notes));
    localStorage.setItem('myTitles', JSON.stringify(titles));
    localStorage.setItem('myArchivNotes', JSON.stringify(archivNotes));
    localStorage.setItem('myArchivTitles', JSON.stringify(archivTitles));
    localStorage.setItem('myTrashNotes', JSON.stringify(trashNotes));
    localStorage.setItem('myTrashTitles', JSON.stringify(trashTitles));
}

function getFromLocalStorage() {
    let mySavedNotes = JSON.parse(localStorage.getItem('myNotes'));
    let mySavedTitles = JSON.parse(localStorage.getItem('myTitles'))

    if (mySavedNotes == null) {
        notes = [];
    } else {
        notes = mySavedNotes;
    }

    if (mySavedTitles == null) {
        titles = [];
    } else {
        titles = mySavedTitles;
    }

    let mySavedArchiv = JSON.parse(localStorage.getItem('myArchivNotes'));
    let mySavedArchivTitles = JSON.parse(localStorage.getItem('myArchivTitles'));

    if (mySavedArchiv == null) {
        archivNotes = [];
    } else {
        archivNotes = mySavedArchiv;
    }

    if (mySavedArchivTitles == null) {
        archivTitles = [];
    } else {
        archivTitles = mySavedArchivTitles;
    }

    let mySavedTrash = JSON.parse(localStorage.getItem('myTrashNotes'));
    let mySavedTrashTitel = JSON.parse(localStorage.getItem('myTrashTitles'));

    if (mySavedTrash == null) {
        trashNotes = [];
    } else {
        trashNotes = mySavedTrash;
    }

    if (mySavedTrashTitel == null) {
        trashTitles = [];
    } else {
        trashTitles = mySavedTrashTitel;
    }
}

/*Dialog*/
function showTrashDialog() {
    // Wir suchen das Element erst JETZT, wenn geklickt wird
    let dialog = document.getElementById("trash_dialog"); 
    
    if (dialog) {
        dialog.showModal();
    }
}

function closeTrashDialog() {
    console.log("Klick ist angekommen!"); // Das hier einfügen
    
    let dialog = document.getElementById("trash_dialog");
    
    if (dialog) {
        dialog.close();
    }
}