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

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {TopScore: 0, isContainerVisible: true, previousList: []}

  shuffleEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {previousList} = this.state
    if (previousList.includes(id)) {
      console.log(true)
    } else {
      this.setState({previousList: previousList.push(id)})
      console.log(false)
    }
  }

  clickEmoji = id => {
    console.log(id)
    const {previousList} = this.state
    const isEmojiPresent = previousList.includes(id)
    console.log(isEmojiPresent)
    console.log(previousList.length, previousList.length === 12)
    if (isEmojiPresent) {
      const {TopScore} = this.state
      if (previousList.length >= TopScore) {
        this.setState({
          TopScore: previousList.length,
          isContainerVisible: false,
        })
      }
      this.setState({
        isContainerVisible: false,
      })
    } else if (previousList.length === 12) {
      this.setState({
        isContainerVisible: false,
      })
    } else {
      this.setState(prevState => ({
        previousList: [...prevState.previousList, id],
      }))
    }
    console.log(previousList)
  }

  resetGame = () => {
    this.setState({
      previousList: [],
      isContainerVisible: true,
    })
  }

  render() {
    const shuffledEmojiList = this.shuffleEmojisList()
    const {previousList, TopScore, isContainerVisible} = this.state
    return (
      <div className="emoji-game-container">
        <NavBar
          Score={previousList.length}
          TopScore={TopScore}
          isContainerVisible={isContainerVisible}
        />
        {isContainerVisible ? (
          <div className="emojis-container">
            {shuffledEmojiList.map(emojiObject => (
              <EmojiCard
                key={emojiObject.id}
                emojiObject={emojiObject}
                clickEmoji={this.clickEmoji}
              />
            ))}
          </div>
        ) : (
          <WinOrLoseCard
            isWon={shuffledEmojiList.length === previousList.length}
            score={previousList.length}
            resetGame={this.resetGame}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
