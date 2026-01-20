function processCascade(currentState: BoardState): BoardState {
  const matches = findMatches(currentState.Board);

  if (matches.length === 0) {
    return currentState;
  }

  return pipe<BoardState>(
    removeMatches(currentState, matches),
    fillEmptySpaces,
    processCascade
  );
}
