function getNoteTemplate(index) {
    return `<div class="template_content"><button class="btn_template" onclick="noteToArchiv(${index})">Archiv</button> 
            <p><b>${titles[index]}</b>: ${notes[index]}</p>
            <button class="btn_template" onclick="noteToTrash(${index})">X</button> 
            </div>`;
}

function getArchivNoteTemplate(index) {
    return `<div class="template_content"><button class="btn_template" onclick="archivToNote(${index})">Notizen</button>
            <p><b>${archivTitles[index]}</b>: ${archivNotes[index]}</p>
            <button class="btn_template" onclick="archivToTrash(${index})">X</button> 
            </div>`;
}

function getTrashNoteTemplate(index) {
    return `<div class="template_content"><button class="btn_template" onclick="trashToArchiv(${index})">Archiv</button>
            <p><b>${trashTitles[index]}</b>: ${trashNotes[index]}</p>
            <button class="btn_template" onclick="deleteFinal(${index})">Löschen</button> 
            </div>`;
}