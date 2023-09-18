// Write your code here.

// import {Component} from 'react'

import './index.css'

const EmojiCard = props => {
  const {each, emojiChanged} = props
  const {id, emojiName, emojiUrl} = each

  const emojiIsClicked = () => {
    emojiChanged(id)
  }

  return (
    <li onClick={emojiIsClicked} className="list-con">
      <button className="but-emoji-card" type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
