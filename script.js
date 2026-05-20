const noteInput = document.getElementById('noteInput')
const addbtn = document.getElementById('addbtn')
const noteContainer = document.getElementById('noteContainer')

function addNote() {
    
    const storedNote = noteInput.value

    if(storedNote.trim() == ""){
        return 
    }

    const div = document.createElement('div')
    const p = document.createElement('p')
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'


    div.classList.add("note")

    

    p.textContent = storedNote
    
    div.appendChild(p)

    div.appendChild(deleteBtn)

    deleteBtn.addEventListener('click' , () => {
        div.remove()
    })

    noteContainer.appendChild(div)

    noteInput.value = ""

    

}

addbtn.addEventListener('click' , () => {
    addNote()
})






