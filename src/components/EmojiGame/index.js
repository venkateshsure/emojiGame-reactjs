/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      emojiList: emojisList,
      score: 0,
      total: 0,
      initialEmojiId: [],
      isCard: true,
    }
  }
  /*
    emojiChanged = () => {
        const shuffledEmojisList = () => {
        const {emojisList} = this.props
        return emojisList.sort(() => Math.random() - 0.5)
  }
    
    console.log(shuffleEmoji)

    this.setState({emojiList: shuffleEmoji})
  } */

  emojiChanged = id => {
    const {initialEmojiId} = this.state
    const shuffledEmojis = this.shuffledEmojisList()
    const emojiIncludes = initialEmojiId.includes(id)
    // console.log(shuffledEmojis)
    console.log(initialEmojiId)

    if (emojiIncludes) {
      this.gameOver()
    }
    if (shuffledEmojis.length - 1 === initialEmojiId.length) {
      this.gameOver()
    }
    this.setState(pre => ({
      initialEmojiId: [...pre.initialEmojiId, id],
      score: pre.score + 1,
    }))
  }

  gameOver = () => this.setState({isCard: false})

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playAgain = () => {
    this.setState(pre => ({
      emojiList: this.shuffledEmojisList(),
      score: 0,
      total: pre.score > pre.total ? pre.score : pre.total,
      initialEmojiId: [],
      isCard: true,
    }))
  }

  render() {
    const {emojiList, score, total, isCard} = this.state

    return (
      <div className="con">
        <NavBar isCard={isCard} score={score} total={total} />
        <div className="ul-con">
          {isCard ? (
            <ul className="div-con">
              {emojiList.map(each => (
                <EmojiCard
                  emojiChanged={this.emojiChanged}
                  each={each}
                  key={each.id}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              playAgain={this.playAgain}
              score={score}
              total={total}
              isCard={isCard}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
