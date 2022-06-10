import { IOddsBin } from "./types";
import { ITournamentGame } from "../../../specification/types/mongo/tournament-game";
import { ITournamentPlayer } from "../../../specification/types/mongo/tournament-player";

/**
 * Gauss error function implementation for JavaScript
 *
 * @param {number} x
 * @returns {number}
 *
 * Approximation from wikipedia
 * https://stackoverflow.com/questions/1906064/gauss-error-function-implementation-for-javascript
 */
const erf = (x: number): number => {
    let z: number;
    const ERF_A = 0.147;
    let theSignOfX: number;
    if (0 === x) {
        theSignOfX = 0;
        return 0;
    } else if (x > 0) {
        theSignOfX = 1;
    } else {
        theSignOfX = -1;
    }

    const onePlusAxsqrd = 1 + ERF_A * x * x;
    const fourOvrPiEtc = 4 / Math.PI + ERF_A * x * x;
    let ratio = fourOvrPiEtc / onePlusAxsqrd;
    ratio *= x * -x;
    const expofun = Math.exp(ratio);
    const radical = Math.sqrt(1 - expofun);
    z = radical * theSignOfX;
    return z;
};

/**
 * The erfc functions return the complementary Gauss error function of x.
 * The complementary Gauss error function is defined as 1 - erf(x).
 *
 * @param {number} x
 * @returns {number}
 *
 * https://docs.microsoft.com/en-us/cpp/c-runtime-library/reference/erf-erff-erfl-erfc-erfcf-erfcl?view=msvc-160
 */
const erfc = (x: number): number => {
    return 1 - erf(x);
};


/**
 * Estimate provided by the author
 * @param {number} elo - A estimate of the rating loss when donating a pawn
 * @returns {number}
 *
 */
const eloPerPawnAtElo = (elo: number): number => {
    return Math.exp(elo / 1020) * 26.59;
};


/**
 * A FIDE function
 * @param {number} eloDiff - rating 1 - rating2, where rating 1 <= rating2
 * @returns {number}
 */
const eloNormal = (eloDiff: number): number => {
    return erfc(-eloDiff / ((2000.0 / 7) * Math.sqrt(2))) / 2;
};

const getOddBins = (rating1: number, rating2: number): IOddsBin[] => {
    let oddBins: Array<IOddsBin> = [];
    let binVal: number = 0;
    const diff: number = rating1 - rating2;
    const ave: number = (rating1 + rating2) / 2;
    const expectedScore: number = eloNormal(diff);
    const eloPerPawn: number = eloPerPawnAtElo(ave);
    const eloShift: number = eloPerPawn * 0.6;

    const playerOneWinProbability = eloNormal(diff - eloShift);
    binVal += playerOneWinProbability;
    oddBins.push({binValue: binVal, binOutcome: "lower"});
    console.log(`playerOneWinProbability: ` + playerOneWinProbability);

    const drawProbability = (expectedScore - playerOneWinProbability) * 2;
    binVal += drawProbability;
    oddBins.push({binValue: binVal, binOutcome: "draw"});
    console.log(`drawProbability: ` + drawProbability);

    const playerTwoWinProbability = 1 - (playerOneWinProbability + drawProbability);
    binVal += playerTwoWinProbability;
    oddBins.push({binValue: binVal, binOutcome: "higher"});
    console.log(`playerTwoWinProbability: ` + playerTwoWinProbability);

    return oddBins;
};

const simulateGameResult = (game:ITournamentGame, winPoints: number, drawPoints: number): ITournamentGame => {
    // get the white pieces rate, wpr
    let wpr = game.whitePiecesPlayer.rate
    // get the black pieces rate, bpr
    let bpr = game.blackPiecesPlayer.rate
    // if they are the same rate, add 5 points to the while pieces rate, wpr =+ 6
    if (wpr === bpr) {
         wpr += 0
    }
    // calculate the oddsbins for this game
    let oddsBins: IOddsBin[] = getOddBins(Math.min(wpr, bpr), Math.max(wpr, bpr));
    const random: number = Math.random();
    console.log(`random number: ` + random);
    // use the oddsBins to simulate the result
    let result: string = "";
    oddsBins.forEach((oddsbin: IOddsBin) => {
        if (random <= oddsbin.binValue) {
            result = oddsbin.binOutcome
        }
    });
    if (result === "draw") {
        game.whitePiecesPlayerScore = drawPoints;
        game.blackPiecesPlayerScore = drawPoints;
    }
    else {
        if (result === "higher") {
            if ( wpr > bpr ) {
                game.whitePiecesPlayerScore = winPoints;
                game.blackPiecesPlayerScore = 0;
            } else {
                game.whitePiecesPlayerScore = 0;
                game.blackPiecesPlayerScore = winPoints;
            }
        }
        else {
            if ( wpr > bpr ) {
                game.whitePiecesPlayerScore = 0;
                game.blackPiecesPlayerScore = winPoints;
            } else {
                game.whitePiecesPlayerScore = winPoints;
                game.blackPiecesPlayerScore = 0;
            }
        }
    }
    return game;
}

export default simulateGameResult;