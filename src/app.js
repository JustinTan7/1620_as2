const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]
function noteTemplate(){
  const textTemplate = `<textarea name="" id=""cols="50" rows="20"></textarea>
                        <button class = "save">Save</button>
                        <button class= "cancel">Cancel</button>`
  return textTemplate
}

function blankTemplate(){
  const blankT = ``
  return blankT
}

function newTextArea(note){
  const newTextDisplay = document.querySelector('.write-note-area')
  newTextDisplay.innerHTML = ''
  newTextDisplay.insertAdjacentHTML('beforeend', note)
}

function noteGet(){
  const text = document.querySelector('.icons')
  const note = text.value
  return note
}

function deleteText(){
  const note = blankTemplate()
  newTextArea(note)
}

function displayNote(){
  const text = noteGet()
  const note = noteTemplate(text)
  newTextArea(note)
  const cancelBtn = document.querySelector(".cancel") 
  cancelBtn.addEventListener('click', deleteText)
}

plusButton = document.querySelector('.icons')
plusButton.addEventListener('click', displayNote)

