const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });
console.log("✅ WebSocket Signaling Server running at ws://localhost:8080");

wss.on('connection', (ws) => {
  console.log("🟢 New client connected");

  ws.on('message', (data) => {
    try {
      const msg = JSON.parse(data);
      console.log("📩 Message:", msg);

      // Broadcast message to all clients except sender
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(msg));
        }
      });
    } catch (err) {
      console.error("❌ Invalid message format:", err);
    }
  });

  ws.on('close', () => {
    console.log("🔴 Client disconnected");
  });
});
