import {TournamentPlayerT} from "./tournament-player-type";
import {TournamentRoundT} from "./tournament-round-type";

interface TournamentT {
    id: string,                     // 8 characters random string
    tournamentType: string,         // swiss as default, not others for the moment
    tournamentDirectorId: string,   // Tournament Director that created the tournament
    name: string,
    startDate: Date,
    endDate: Date,
    maxPlayers: number,
    players: TournamentPlayerT[],
    numberOfRounds: number,
    rounds: TournamentRoundT[]
    state: string                   // Planned(default), Underway, Completed
    winPoints: number,
    drawPoints: number,
    lossPoints: number
}

export type { TournamentT }