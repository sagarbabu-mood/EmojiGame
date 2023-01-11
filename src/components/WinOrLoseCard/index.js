import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, resetGame} = props

  const reset = () => {
    resetGame()
  }

  return isWon ? (
    <div>
      <h1>You Won</h1>
      <p>Best Score</p>
      <p>{score}/12</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
      />
      <button onClick={reset} className="play-again-button" type="button">
        Play Again
      </button>
    </div>
  ) : (
    <div>
      <h1>You Lose</h1>
      <p>Score</p>
      <p>{score}/12</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
      />
      <button onClick={reset} className="play-again-button" type="button">
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
