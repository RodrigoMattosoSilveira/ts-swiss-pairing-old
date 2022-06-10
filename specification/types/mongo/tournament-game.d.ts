import {ITournamentPlayer} from "./tournament-player";

type ITournamentGame  = {
    id: string;                         // 8 chars, random string
    whitePiecesPlayer: ITournamentPlayer;
    whitePiecesPlayerScore: number;
    blackPiecesPlayer: ITournamentPlayer;
    blackPiecesPlayerScore: number;
    status: string;                      // Planned(default), Underway, Completed
}

export  { ITournamentGame }