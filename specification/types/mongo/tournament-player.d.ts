/**
 * When a Club Member enters a tournament, the application sets:
 * - ITournamentPlayer.id to the ClubMember.id;
 * - ITournamentPlayer.id to the string consisting of the club member ClubMemberT.Last + "," ClubMemberT.first;
 * - ITournamentPlayer.rate to the ClubMemberT.Last.rate;
 *
 * When the Tournament Director creates a TournamentT.round, the application appends:
 * - The color of each players' pieces to their ITournamentPlayer.colors array,(W)hite, (B)lack, (B)ye
 * - The ClubMemberT.id  of each players' opponents to their ITournamentPlayer.opponents array;
 *
 * When the Tournament Director closes a ITournamentGame, the application:
 * - Adds the TournamentT.winPoints or drawPoints, to each players ITournamentPlayer score, based on the game result;
 */

interface ITournamentPlayer {
    id: string,             // Club Member Id
    name: string,
    rate: string,
    colors: string[],       // (W)hite, (B)lack, (B)ye
    opponents: string[],
    score: number
}

export { ITournamentPlayer }