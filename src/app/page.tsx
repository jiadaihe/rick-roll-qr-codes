"use client";

import QrCode from "@/components/QrCode";
import styles from "./page.module.css";
import { generateRandomRickRollQrCode } from "@/lib/randomRickRoll";
import { loadQrCodesFromFile } from "@/lib/qrCodeUpload";
import { useState, useEffect } from "react";
import { QrCodeData } from "@/types/interfaces";
import { selectRandom } from "@/lib/util";

export default function Home() {
  const [qrCodeData, setQrCodeData] = useState<QrCodeData | null>(null);
  const [uploadedQrCodes, setUploadedQrCodes] = useState<QrCodeData[]>([]);

  useEffect(() => {
    setQrCodeData(generateRandomRickRollQrCode());
  }, []);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const qrCodes = await loadQrCodesFromFile(file);
      setUploadedQrCodes(qrCodes);
    } catch (error) {
      alert("Error loading QR codes: " + error);
    }
  };

  const updateQrCodeData = () => {
    // If we have uploaded QR codes, 50% of the time use one from the list
    if (uploadedQrCodes.length > 0 && Math.random() < 0.5) {
      setQrCodeData(selectRandom(uploadedQrCodes));
    } else {
      setQrCodeData(generateRandomRickRollQrCode());
    }
  };

  if (!qrCodeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <label htmlFor="qr-upload">Upload QR Codes JSON: </label>
        <input
          id="qr-upload"
          type="file"
          accept="application/json"
          onChange={handleFileUpload}
          className={styles.qrCodesJsonUpload}
        />
        {uploadedQrCodes.length > 0 && (
          <span> ({uploadedQrCodes.length} QR codes loaded)</span>
        )}
      </div>
      <br />
      <div>URL: {qrCodeData.url}</div>
      <div>Error correction level: {qrCodeData.errorCorrectionLevel}</div>
      <div>Mask: {qrCodeData.mask}</div>
      <br />
      <div className={styles.qrCodeContainer}>
        <QrCode qrCodeData={qrCodeData} />
      </div>
      <button onClick={updateQrCodeData}>Shuffle</button>
    </div>
  );
}
