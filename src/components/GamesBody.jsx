
{/* import { useState, useEffect } from 'react' */}
{/*maybe import local styles */}
{/* GameDetails,GamesByConsole,GamesByYear components inserted in body dynamically */}


function GameCardBody(games) {

  console.log(games);

  //map all GameCards into body

  //else return GameCardDetails element

  if (games) {
    return (
      <>
        <div id="gameCardBodyContainer">
        {games.games.results.map((game) => {
            return <GameCard game={game} key={game.id}/> 
          })}
        </div>
      </>
    )
  }
}

function GameCard(game) {

  return (
    <>
      <div className="gameCardContainer">
        <div className="gameName">{game.game.name}</div>
        <div className="coverArt">
          <img className="coverArtImg" src={game.game.background_image} />
        </div>
      </div>
    </>
  )

}

function GameCardDetails() {

  //game details upon click or search, taking up GameCardBody

}


export default GameCardBody;