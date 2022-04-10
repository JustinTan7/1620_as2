const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

// defining variables that will be used
const newNoteArea = document.querySelector(".write-note-area")
const addNoteBtn = document.querySelector(".fa-circle-plus")
const textArea = `<textarea name="" class="textArea" cols="60" rows="30"></textarea>`
const saveBtn = `<button class="saveBtn">save</button>`
const cancelBtn = `<button class="cancelBtn">cancel</button>`
const sideBar = document.querySelector(".notes-list")

addNoteBtn.addEventListener("click", (displayNote))

// function that displays the note
function displayNote() {
  newNoteArea.insertAdjacentHTML("beforeend", textArea)
  newNoteArea.insertAdjacentHTML("beforeend",saveBtn)
  newNoteArea.insertAdjacentHTML("beforeend",cancelBtn)
  addNoteBtn.removeEventListener("click", displayNote)
  const cancelNoteBtn = document.querySelector('.cancelBtn')
  cancelNoteBtn.addEventListener('click', cancelNote) 
}

// functionality for + button
addNoteBtn.addEventListener("click", (displayNote))

// functionality for the cancel button
function cancelNote() {
  addNoteBtn.addEventListener("click",displayNote)
  newNoteArea.innerHTML = ''
}

// function that takes the whole note and returns it
function getNote(){
  const text = document.getElementById("textArea")
  const noteText = text.value
  return noteText
}

// function that uses the text fron getNote and returns only the first line (title)
function getTitle(){
  const vanillaNote = getNote()
  const splitNote = vanillaNote.split("\n")
  const title = splitNote[0]
  return title
}
