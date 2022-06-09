# Introduction
This is a script to generate a random result from a game between ranked players with three possible outcomes: player 1 wins, player 1 and player 2 draw, player 2 wins.
This algorithm establishes the probability of each outcome based on the players' rankings, then using a `binning` technique to generate the outcome randomly.

To launch:

```bash
# Development
yarn watch

# Test
yarn test

# Production
yarn build
npm start
```

