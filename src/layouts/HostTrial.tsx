import { GameData, GameState } from "@/types/interfaces";
import styles from "./../app/page.module.css";
import QrCode from "@/components/QrCode";
import Image from "next/image";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

interface HostTrialProps {
  gameData: GameData;
}

export default function HostTrial(props: HostTrialProps) {
  const roundNumber = props.gameData.questionNumber || 1;
  const { width, height } = useWindowSize();

  const guessed =
    props.gameData.scanned !== null && props.gameData.correct !== null;
  const isRickRoll =
    guessed && props.gameData.scanned === !props.gameData.correct;

  return (
    <div>
      {guessed && props.gameData.correct && (
        <Confetti width={width} height={height} />
      )}
      <div className={styles.topLeftTitle}>QRICK QROLL</div>
      <div className={styles.centerContent}>
        <div className={styles.trialInnerContent}>
          <div className={styles.roundText}>ROUND {roundNumber}</div>
          <div className={styles.scoreContainer}>
            {props.gameData.score} for{" "}
            {roundNumber -
              (props.gameData.gameState === GameState.GUESSED ? 0 : 1)}
          </div>
          {guessed && isRickRoll ? (
            <div>
              <Image
                src="/rick-roll.gif"
                className={styles.rickBigScreen}
                alt="Rick roll"
                width={300}
                height={300}
              />
            </div>
          ) : guessed && !isRickRoll ? (
            <div className={styles.iframeContainer}>
              <iframe
                className={styles.safeWebsite}
                src={props.gameData.qrCodeData?.url}
              />
            </div>
          ) : (
            props.gameData.qrCodeData && (
              <div className={styles.trialQrCodeContainer}>
                <QrCode qrCodeData={props.gameData.qrCodeData} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
