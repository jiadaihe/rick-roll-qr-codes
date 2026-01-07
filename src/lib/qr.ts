import { ErrorCorrectionLevel } from "@/types/interfaces";
import qrcodegen from "nayuki-qr-code-generator";

export const errorCorrectionCodeToInternalObject = (
  errorCorrectionLevel: ErrorCorrectionLevel
) => {
  switch (errorCorrectionLevel) {
    case ErrorCorrectionLevel.LOW:
      return qrcodegen.QrCode.Ecc.LOW;
    case ErrorCorrectionLevel.MEDIUM:
      return qrcodegen.QrCode.Ecc.MEDIUM;
    case ErrorCorrectionLevel.HIGH:
      return qrcodegen.QrCode.Ecc.HIGH;
    case ErrorCorrectionLevel.QUARTILE:
      return qrcodegen.QrCode.Ecc.QUARTILE;
    default:
      return qrcodegen.QrCode.Ecc.LOW;
  }
};
