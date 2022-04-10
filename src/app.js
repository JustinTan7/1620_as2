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
const template = `<textarea name="" class="textArea" cols="60" rows="30"></textarea>
                  <button class="saveBtn">save</button>
                  <button class="cancelBtn">cancel</button>`
const sideBar = document.querySelector(".notes-list")

addNoteBtn.addEventListener("click", (displayNote))

// function that displays the note
function displayNote() {
  newNoteArea.insertAdjacentHTML("beforeend", template)
  addNoteBtn.removeEventListener("click", displayNote)
  const cancelNoteBtn = document.querySelector('.cancelBtn')
  cancelNoteBtn.addEventListener('click', cancelNote) 
  const saveBtn = document.querySelector('.saveBtn')
  saveBtn.addEventListener("click", saveNote)
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
  const text = document.querySelector('.textArea')
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

// function that adds the notes to the side nav 
function addTitleToSideNav(){
  const selectNav = document.querySelector(".notes-list")
  const li = document.createElement("li")
  li.className = "noteTitle"
  li.appendChild(document.createTextNode(getTitle()))
  selectNav.append(li)
}

// function that adds the notes into notes array of objects
function getInitialNote(){
  const navSelected = document.querySelector('.notes-list')
  const li = document.createElement('li')
  li.className = 'noteTitle'
  li.appendChild(document.createTextNode(notes[0].title))
  navSelected.append(li)
}
getInitialNote()

// functionality for the save button
function saveNote() {
  getNote()
  getTitle()
  addTitleToSideNav()
  cancelNote()
  }

  

