import {TournamentGameT} from "./tournament-game-type";

interface TournamentRoundT {
    id: string,                     // 8 characters random string
    tournamentId: string,
    roundNumber: number,
    state: string,                  // Planned(default), Underway, Completed
    games: TournamentGameT[]
}

export { TournamentRoundT }