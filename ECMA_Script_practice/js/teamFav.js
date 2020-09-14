const team = {
  _players: [{

    firstName: 'Pet',
    lastName: 'Whee',
    age: 54

  }, {
    firstName: 'Mei',
    lastName: 'Sun',
    age: 24
  },
  {
    firstName: 'Bill',
    lastName: 'Wun',
    age: 14
  }],
  _games: [{
    opponent: 'Bron',
    teamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'Bio',
    teamPoints: 49,
    opponentPoints: 67
  }
    ,
  {
    opponent: 'Bronats',
    teamPoints: 20,
    opponentPoints: 23
  }]
  ,
  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this.players.push(player);
  },

  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addGame('Titans', 100, 98);
console.log(team.players)
console.log(team.games)