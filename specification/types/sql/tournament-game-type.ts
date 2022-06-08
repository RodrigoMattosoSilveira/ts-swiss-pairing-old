interface TournamentGameT {
    id: string,                         // 8 chars, random string
    whitePiecesPlayer: string,
    whitePiecesPlayerPoints: number,
    blackPiecesPlayer: string,
    blackPiecesPlayerPoints: number,
    state: string,                      // Planned(default), Underway, Completed
}

export  { TournamentGameT }