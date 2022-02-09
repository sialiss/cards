let cardList = null
let observer = null

function emitChange() {
  observer(cardList)
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

export function moveCard(listName) {
    cardList = listName
    emitChange()
}