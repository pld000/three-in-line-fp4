function processCascade(currentState: BoardState): BoardState {
  const matches = findMatches(currentState.Board);

  if (matches.length === 0) {
    return currentState;
  }

  const stateAfterRemoval = removeMatches(currentState, matches);
  const stateAfterFill = fillEmptySpaces(stateAfterRemoval);

  return processCascade(stateAfterFill);
}
