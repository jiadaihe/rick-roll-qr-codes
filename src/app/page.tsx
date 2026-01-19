"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { classes, ROOM_CODE_LETTERS } from "@/lib/util";
import Image from "next/image";

export default function RoomsPage() {
  const router = useRouter();

  const createRoom = () => {
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += ROOM_CODE_LETTERS.charAt(
        Math.floor(Math.random() * ROOM_CODE_LETTERS.length)
      );
    }
    router.push(`/room/${code}`);
  };

  return (
    <div className={styles.pageOuterContainer} style={y2kStyles.outer}>

      <div style={y2kStyles.retroSun} />
      <div style={y2kStyles.gridOverlay} />

      <div className={styles.pageInnerContainer} style={y2kStyles.inner}>
        
        {/* Title with Chrome/Neon Effect */}
        <div className={styles.centerContent}>
          <h1 className={styles.title} style={y2kStyles.title}>
            QRICK QROLL
          </h1>
        </div>

        {/* GIF Container with "Monitor" Frame */}
        <div className={styles.centerContent} style={y2kStyles.monitorFrame}>
          <Image
            src="/rick-roll.gif"
            alt="Rick roll"
            width={300}
            height={300}
            loading="eager"
            style={{ filter: "contrast(1.2) brightness(1.1)", border: "2px solid #000" }}
          />
        </div>

        {/* Glossy Web 2.0 / Y2K Button */}
        <div className={styles.centerContent}>
          <button
            onClick={createRoom}
            className={classes(styles.button, styles.largeButton)}
            style={y2kStyles.button}
          >
            [ CREATE_SESSION ]
          </button>
        </div>

        {/* Description Box with Windows 95 feel */}
        <div className={styles.description} style={y2kStyles.descriptionBox}>
          <div style={y2kStyles.descHeader}>BET.TXT</div>
          <p>
            A bespoke website created by{" "}
            <a href="https://marcos.ac" target="_blank" style={y2kStyles.link}>
              MARCOS ACOSTA
            </a>{" "}
            to win a bet he made with JIADAI HE that he could discriminate Rick
            Roll QR codes from non-Rick Roll QR codes from sight alone with 95%
            accuracy. 
          </p>
          <p>
            Read the exact terms{" "}
            <a
              href="https://docs.google.com/document/d/1oJakuWIx8AXTyerasxtlfZZnxzDXphE85znXyTfuHXI/edit?tab=t.0"
              target="_blank"
              style={y2kStyles.link}
            >
              LOCATED_HERE
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

const y2kStyles = {
  outer: {
    backgroundColor: "#000080", // Classic Navy Blue
    backgroundImage: `linear-gradient(180deg, #000080 0%, #ff00ff 100%)`,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: '"Courier New", Courier, monospace',
    overflow: "hidden",
    position: "relative" as const,
  },
  gridOverlay: {
    position: "absolute" as const,
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), 
                      linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
    backgroundSize: "30px 30px",
    pointerEvents: "none" as const,
  },
  retroSun: {
    position: "absolute" as const,
    top: "15%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "linear-gradient(to bottom, #ffcc00 0%, #ff007f 100%)",
    boxShadow: "0 0 50px #ff007f",
    zIndex: 0,
    WebkitMaskImage: "repeating-linear-gradient(to bottom, black 0px, black 15px, transparent 20px, transparent 25px)",
  },
  inner: {
    zIndex: 2,
    maxWidth: "600px",
    padding: "40px",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "clamp(3rem, 10vw, 5rem)",
    color: "#fff",
    textShadow: "4px 4px #ff00ff, -2px -2px #00ffff",
    fontWeight: "900",
    letterSpacing: "-2px",
    margin: "0",
    fontStyle: "italic",
  },
  subtitle: {
    color: "#00ff00",
    fontSize: "0.8rem",
    marginBottom: "20px",
    letterSpacing: "4px",
  },
  monitorFrame: {
    border: "12px solid #c0c0c0",
    borderTopColor: "#ffffff",
    borderLeftColor: "#ffffff",
    borderRightColor: "#808080",
    borderBottomColor: "#808080",
    backgroundColor: "#000",
    padding: "5px",
    display: "inline-block",
    boxShadow: "10px 10px 0px rgba(0,0,0,0.5)",
    marginBottom: "30px",
  },
  button: {
    backgroundColor: "#00ffff",
    color: "#000",
    border: "4px outset #fff",
    padding: "15px 30px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "5px 5px 0px #000",
    textTransform: "uppercase" as const,
    transition: "transform 0.1s",
  },
  descriptionBox: {
    marginTop: "40px",
    backgroundColor: "#c0c0c0", // Windows 95 Grey
    border: "2px solid #000",
    boxShadow: "inset 2px 2px #fff, inset -2px -2px #808080",
    color: "#000",
    padding: "15px",
    fontSize: "0.9rem",
    textAlign: "left" as const,
    lineHeight: "1.4",
  },
  descHeader: {
    backgroundColor: "#000080",
    color: "#fff",
    padding: "2px 8px",
    fontSize: "0.7rem",
    marginBottom: "10px",
    display: "inline-block",
  },
  link: {
    color: "#0000ff",
    textDecoration: "underline",
    fontWeight: "bold",
  }
};