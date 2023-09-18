// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, total, isCard} = props
  return (
    <div className="head">
      <div className="navbar-left">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="image"
        />
        <h1>Emoji Game</h1>
      </div>
      {isCard ? (
        <div className="navbar-right">
          <p>Score: {score}</p>
          <p>Top Score: {total}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default NavBar
