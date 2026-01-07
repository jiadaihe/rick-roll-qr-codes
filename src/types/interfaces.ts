export enum ErrorCorrectionLevel {
  LOW = "L",
  MEDIUM = "M",
  HIGH = "H",
  QUARTILE = "Q",
}

export interface QrCodeData {
  url: string;
  mask: number;
  errorCorrectionLevel: ErrorCorrectionLevel;
}
