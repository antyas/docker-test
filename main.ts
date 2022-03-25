import { WebSocketClient, WebSocketServer } from "https://deno.land/x/websocket@v0.1.3/mod.ts";

const server = new WebSocketServer(8080);

server.on("connection", (ws: WebSocketClient) => { 
  ws.on("message", (m: string) => ws.send(`event ${m}`));
});