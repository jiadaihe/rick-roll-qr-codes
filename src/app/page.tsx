"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { classes, ROOM_CODE_LETTERS } from "@/lib/util";
import Image from "next/image";

export default function RoomsPage() {
  const router = useRouter();

  // Generate a random 6-character room code
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
    <div className={styles.pageOuterContainer}>
      <div className={styles.pageInnerContainer}>
        <div className={styles.centerContent}>
          <h1 className={styles.title}>QRICK QROLL</h1>
        </div>
        <div className={styles.centerContent}>
          <Image
            src="/rick-roll.gif"
            alt="Rick roll"
            width={300}
            height={300}
            loading="eager"
          />
        </div>
        <div className={styles.centerContent}>
          <button
            onClick={createRoom}
            className={classes(styles.button, styles.largeButton)}
          >
            Create room
          </button>
        </div>
        <div className={styles.description}>
          A bespoke website created by{" "}
          <a href="https://marcos.ac" target="_blank">
            Marcos Acosta
          </a>{" "}
          to win a bet he made with Jiadai He that he could discriminate Rick
          Roll QR codes from non-Rick Roll QR codes from sight alone with 95%
          accuracy. Read the exact terms{" "}
          <a
            href="https://docs.google.com/document/d/1oJakuWIx8AXTyerasxtlfZZnxzDXphE85znXyTfuHXI/edit?tab=t.0"
            target="_blank"
          >
            here
          </a>
          .
        </div>
      </div>
    </div>
  );
}
