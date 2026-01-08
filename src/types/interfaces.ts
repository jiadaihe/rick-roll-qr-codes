export enum ErrorCorrectionLevel {
  LOW = "L",
  MEDIUM = "M",
  HIGH = "H",
  QUARTILE = "Q",
}

export enum GameState {
  WAITING_FOR_PLAYER,
  WAITING_TO_START,
  PENDING,
  GUESSED,
  GAME_OVER,
}

export interface QrCodeData {
  url: string;
  mask: number;
  errorCorrectionLevel: ErrorCorrectionLevel;
}

export interface GameData {
  count: number;
  questionNumber: number | null;
  score: number;
  creator: string | null;
  qrCodeData: QrCodeData | null;
  gameState: GameState;
  scanned: boolean | null;
}
