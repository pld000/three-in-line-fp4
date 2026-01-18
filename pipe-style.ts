const InitializeGame = (boardSize = 8): BoardState => {
  return pipe<BoardState>(
    () => new BoardState(new Board(boardSize), 0),
    FillEmptySpaces,
    ProcessCascade
  )();
};
