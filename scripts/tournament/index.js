// Read a JSON file of users and issue HTTP calls to create users
// https://github.com/axios/axios
// Use Typescript next:https://www.digitalocean.com/community/tutorials/typescript-running-typescript-ts-node
const fs = require("fs");
const club_members = require("../club-members/club-members.json");
const shortid = require("shortid");
// const {ITournamentPlayer} = require("../../specification/types/mongo/tournament-player");
// const {ITournamentGame} = require("../../specification/types/mongo/tournament-game");

// console.log(users);
let stream = fs.createWriteStream("./tournament.json", {flags:'w+'});

let tournamentPlayers = []
for (let i = 0; i < 25; i++) {
    let tournamentPlayer = {
        id: club_members[i].id, // Club Member Id
        name: club_members[i].last + ", " + club_members[i].first,
        rate: club_members[i].rating,
        colors: [], // (W)hite, (B)lack, (B)ye
        opponents: [],
        score: 0
    }
    tournamentPlayers.push(tournamentPlayer)
}
let tournament = {
    id: shortid.generate(),
    director: "l7DWo44Nji8",     // Club Member ID
    name: "Cambridge-2022",
    start: new Date("7/1/22").toString(),
    end: new Date("7/4/22").toString(),
    maxPlayers: 25,
    type: "swiss",
    numberOfRounds: 5,
    winPoints: 3,
    drawPoints: 1,
    lossPoints: 0,
    players: tournamentPlayers,
    rounds: []
}
stream.write( "{");
stream.write( '"id": ' + JSON.stringify(tournament.id) + ",\n");
stream.write( '"director": ' + JSON.stringify(tournament.director) + ",\n");
stream.write( '"name": ' + JSON.stringify(tournament.name) + ",\n");
stream.write( '"start": ' + JSON.stringify(tournament.start) + ",\n");
stream.write( '"end": ' + JSON.stringify(tournament.end) + ",\n");
stream.write( '"maxPlayers": ' + JSON.stringify(tournament.maxPlayers) + ",\n");
stream.write( '"type": ' + JSON.stringify(tournament.type) + ",\n");
stream.write( '"numberOfRounds": ' +JSON.stringify( tournament.numberOfRounds) + ",\n");
stream.write( '"winPoints": ' + JSON.stringify(tournament.winPoints) + ",\n");
stream.write( '"drawPoints": ' + JSON.stringify(tournament.drawPoints) + ",\n");
stream.write( '"lossPoints": ' + JSON.stringify(tournament.lossPoints) + ",\n");
stream.write( '"players": ' + JSON.stringify(tournament.players) + ",\n");
stream.write( '"rounds": ' + JSON.stringify(tournament.rounds) + "\n");
stream.write( "}");
stream.end();
