function getNoteTemplate(index) {
    return `<button class="btn_template" onclick="noteToArchiv(${index})">A</button> 
            <p><b>${titles[index]}</b>: ${notes[index]}</p>
            <button class="btn_template" onclick="noteToTrash(${index})">X</button> 
           `;
}

function getArchivNoteTemplate(index) {
    return `<button class="btn_template" onclick="archivToNote(${index})">N</button>
            <p><b>${archivTitles[index]}</b>: ${archivNotes[index]}</p>
            <button class="btn_template" onclick="archivToTrash(${index})">X</button> 
            `;
}

function getTrashNoteTemplate(index) {
    return `<button class="btn_template" onclick="trashToArchiv(${index})">A</button>
            <p><b>${trashTitles[index]}</b>: ${trashNotes[index]}</p>
            <button class="btn_template" onclick="deleteFinal(${index})">Löschen</button> 
            `;
}