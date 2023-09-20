// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props
  console.log(score)

  const playAgainGame = () => playAgain()

  return (
    <div className="first-con">
      {score === 12 ? (
        <div className="fourth-con">
          <div className="sec-con">
            <h1>You Won</h1>
            <div className="third-con">
              <p>Best Score</p>
              <p>{score}/12</p>
              <button onClick={playAgainGame} className="button" type="button">
                Play Again
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
            className="image-win"
          />
        </div>
      ) : (
        <div className="fourth-con">
          <div className="sec-con">
            <h1>You Lose</h1>
            <div className="third-con">
              <p>Score</p>
              <p>{score}/12</p>
              <button onClick={playAgainGame} className="button" type="button">
                Play Again
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
            className="image-loss"
          />
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
