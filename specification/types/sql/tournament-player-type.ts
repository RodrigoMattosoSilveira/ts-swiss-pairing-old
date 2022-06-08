import { TournamentGameT } from './tournament-game-type'

interface TournamentPlayerT {
    id: string,             // 8 chars, random string
    clubMemberId: string,
    tournamentId: string,
    games: TournamentGameT[],
    points: number
}

export { TournamentPlayerT }