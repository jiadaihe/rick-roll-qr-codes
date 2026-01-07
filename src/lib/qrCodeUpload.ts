import { QrCodeData } from "@/types/interfaces";

export const loadQrCodesFromFile = (
  file: File
): Promise<QrCodeData[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        if (Array.isArray(json)) {
          resolve(json as QrCodeData[]);
        } else {
          reject(new Error("Invalid JSON format. Expected an array of QrCodeData objects."));
        }
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => {
      reject(new Error("Error reading file"));
    };

    reader.readAsText(file);
  });
};
