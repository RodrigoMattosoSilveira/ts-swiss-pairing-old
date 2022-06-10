
import printf from "printf";
import simulateGameResult from "./simulate-game-result"
import { IOddsBin } from "./types"
import {ITournamentGame} from "../../../specification/types/mongo/tournament-game";
import * as gameJson  from "./game.json";

console.log(`Generate Random Chess Game Result@0.0.1`);

let game: ITournamentGame = {
    "id": gameJson.id,
    "whitePiecesPlayer": {
        "id": gameJson.whitePiecesPlayer.id,
        "name": gameJson.whitePiecesPlayer.name,
        "rate": gameJson.whitePiecesPlayer.rate,
        "colors": gameJson.whitePiecesPlayer.colors,
        "opponents": gameJson.whitePiecesPlayer.opponents,
        "score": gameJson.whitePiecesPlayer.score
    },
    "whitePiecesPlayerScore": 0,
    "blackPiecesPlayer": {
        "id": gameJson.blackPiecesPlayer.id,
        "name": gameJson.blackPiecesPlayer.name,
        "rate": gameJson.blackPiecesPlayer.rate,
        "colors": gameJson.blackPiecesPlayer.colors,
        "opponents": gameJson.blackPiecesPlayer.opponents,
        "score": gameJson.blackPiecesPlayer.score
    },
    "blackPiecesPlayerScore": gameJson.blackPiecesPlayerScore,
    "status": gameJson.id
}
let gameResult: ITournamentGame = simulateGameResult(game, 3, 1);
console.log(printf("%s%d%s%d", "White Pieces Player Rate: ", game.whitePiecesPlayer.rate, ", game score: ", gameResult.whitePiecesPlayerScore));
console.log(printf("%s%d%s%d", "Black Pieces Player Rate: ", game.blackPiecesPlayer.rate, ", game score: ", gameResult.blackPiecesPlayerScore));
