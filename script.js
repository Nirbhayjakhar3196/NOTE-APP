let notes = []

const noteInput = document.getElementById('noteInput')
const addbtn = document.getElementById('addbtn')
const noteContainer = document.getElementById('noteContainer')

function addNote(noteText, isNew = true) {
    
    const storedNote = noteText || noteInput.value

    if(storedNote.trim() == ""){
        return 
    }

    const div = document.createElement('div')
    const p = document.createElement('p')
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'


    div.classList.add("note")

    

    p.textContent = storedNote
    
    if(isNew) {
        notes.push(storedNote)
        storeNotes()
    }

    div.appendChild(p)

    div.appendChild(deleteBtn)

    deleteBtn.addEventListener('click' , () => {
        notes.splice(notes.indexOf(storedNote) , 1)
        div.remove()
        storeNotes()
    })

    noteContainer.appendChild(div)

    noteInput.value = ""

    

}

addbtn.addEventListener('click' , () => {
    addNote()
})

function storeNotes(){
    localStorage.setItem('notes' , JSON.stringify(notes))
}

function loadNotes(){
    const storedNotes = JSON.parse(localStorage.getItem('notes'))
    notes = storedNotes || []
    if(storedNotes){
        storedNotes.forEach((note) => {
            addNote(note, false)
        });
    }
}

loadNotes()







