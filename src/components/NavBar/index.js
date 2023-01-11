import './index.css'

const NavBar = props => {
  const {Score, TopScore, isContainerVisible} = props
  // console.log(props, Score, TopScore)
  return (
    <>
      <div className="navbar-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {isContainerVisible ? (
          <div className="score-container">
            <p>Score: {Score}</p>
            <p>Top Score: {TopScore}</p>
          </div>
        ) : (
          ''
        )}
      </div>
      <hr />
    </>
  )
}

export default NavBar
