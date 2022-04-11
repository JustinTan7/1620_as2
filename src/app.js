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

// function that closes a ready only note
function cancelReadOnly(){
  addNoteBtn.addEventListener('click', displayNote)
  const readOnlyArea = document.querySelector('.read-note-area')
  readOnlyArea.innerHTML = ''
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
  const lastNote = selectNav.lastChild
  lastNote.addEventListener('click', (evt) =>{
    newTitle = evt.target.innerHTML
    readNote(newTitle)
    console.log('hello')
  })
}

// function that adds the note into the array
function addNoteIntoArray(){
  const fullNote = getNote()
  const splitNote = fullNote.split("\n")
  const index = 0
  var finalNote = ""
  if (index > -1){
    splitNote.splice(index, 1);
  }
  for (const x of splitNote){
    finalNote += x;
    finalNote += "\n";
  }
  notes.push({
    title: getTitle(),
    noteBody: finalNote,
    id: notes.length + 1
  })
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
  getTitle()
  addNoteIntoArray()
  addTitleToSideNav()
  cancelNote()
  }

  // function that opens a saved noted and adds a button that can close the note
function readNote(title){
  const readOnlyTemplate = `<textarea name="" class="textArea" cols="60" rows="30"></textarea>
                            <button class="closeBtn">Close</button>`
  const readNoteTitle = document.querySelector(".noteTitle")
  var finalNote = ''
  console.log(readNoteTitle.innerHTML)
  for (x of notes){
    console.log(x.title)
    if (title == x.title){
      finalNote = x.title + '\n' + x.noteBody
      console.log(finalNote)
    }
  const readOnly = document.querySelector('.read-note-area')
  readOnly.innerHTML = readOnlyTemplate
  const readTextArea = document.querySelector('.textArea')
  readTextArea.innerHTML = finalNote
  const closeButton = document.querySelector('.closeBtn')
  closeButton.addEventListener('click', cancelReadOnly)
  addNoteBtn.removeEventListener("click", displayNote)
  }
}

  

