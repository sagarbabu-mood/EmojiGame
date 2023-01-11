import './index.css'

const EmojiCard = props => {
  const {emojiObject, clickEmoji} = props

  const {id, emojiName, emojiUrl} = emojiObject

  const changeState = () => {
    //  console.log(id)
    clickEmoji(id)
  }

  return (
    <div className="emoji-card">
      <li>
        <button type="button" onClick={changeState}>
          <img src={emojiUrl} className="emoji-image" alt={emojiName} />
        </button>
      </li>
    </div>
  )
}

export default EmojiCard
