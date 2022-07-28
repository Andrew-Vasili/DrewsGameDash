import React from 'react'
import Profiles from './Profiles';
import { Leaderboard } from './Database';
import { Button } from "native-base";

export default function Board() {

  return (
    <div className="board">
        <h1 className='leaderboard text-light'>Robocode Leaderboard!</h1>

        <Profiles Leaderboard={Leaderboard}></Profiles>

    </div>
  )
}
