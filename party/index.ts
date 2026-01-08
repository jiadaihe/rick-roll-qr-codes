import { GameData, GameState, QrCodeData } from "@/types/interfaces";
import type * as Party from "partykit/server";

const INITIAL_GAME_DATA: GameData = {
  count: 0,
  questionNumber: null,
  score: 0,
  creator: null,
  qrCodeData: null,
  gameState: GameState.WAITING_FOR_PLAYER,
  scanned: false,
};

// This is the server that runs on PartyKit's edge infrastructure
// Each room gets its own instance of this class
export default class Server implements Party.Server {
  // Room state - stored in memory for this room
  gameData: GameData;

  constructor(readonly room: Party.Room) {
    // Create a new copy of the initial game data for this room
    this.gameData = { ...INITIAL_GAME_DATA };
  }

  onConnect(conn: Party.Connection, ctx: Party.ConnectionContext) {
    console.log(`Connected: ${conn.id} to room ${this.room.id}`);

    // If this is the first connection, they become the creator
    console.log(this.gameData.creator);
    if (this.gameData.creator === null) {
      this.gameData.creator = conn.id;
      conn.send(JSON.stringify({ type: "role", role: "creator" }));
    } else {
      conn.send(JSON.stringify({ type: "role", role: "joiner" }));
    }

    // Send current count to the new connection
    conn.send(JSON.stringify({ type: "count", count: this.gameData.count }));
  }

  onMessage(message: string, sender: Party.Connection) {
    const data = JSON.parse(message);

    // Handle increment message
    if (data.type === "increment") {
      this.gameData.count++;
      // Broadcast new count to ALL connections in the room
      this.room.broadcast(
        JSON.stringify({ type: "count", count: this.gameData.count })
      );
    }
  }
}

Server satisfies Party.Worker;
