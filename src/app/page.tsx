import QrCode from "@/components/QrCode";
import styles from "./page.module.css";
import { generateRandomRickRollQrCode } from "@/lib/randomRickRoll";

export default function Home() {
  const qrCodeData = generateRandomRickRollQrCode();
  return (
    <div>
      <div>URL: {qrCodeData.url}</div>
      <div>Error correction level: {qrCodeData.errorCorrectionLevel}</div>
      <div>Mask: {qrCodeData.mask}</div>
      <br />
      <div className={styles.qrCodeContainer}>
        <QrCode qrCodeData={qrCodeData} />
      </div>
    </div>
  );
}
