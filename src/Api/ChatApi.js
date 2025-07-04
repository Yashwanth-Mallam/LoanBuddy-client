import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import axios from "axios";

const SOCKET_URL = "http://localhost:8080/ws";

let stompClient = null;

export const connectWebSocket = (onMessageReceived) => {
  const socket = new SockJS(SOCKET_URL); // ✅ Correct URL
  stompClient = new Client({
    webSocketFactory: () => socket,
    reconnectDelay: 5000, // Auto-reconnect every 5 seconds
    onConnect: () => {
      console.log("Connected to WebSocket");

      // Subscribe to message queue
      stompClient.subscribe("/queue/messages", (message) => {
        onMessageReceived(JSON.parse(message.body));
      });
    },
    onDisconnect: () => {
      console.log("Disconnected from WebSocket");
    },
  });

  stompClient.activate();
};

export const sendMessage = (message) => {
  if (stompClient && stompClient.connected) {
    stompClient.publish({
      destination: "/app/chat", // ✅ Correct STOMP destination
      body: JSON.stringify(message),
    });
  } else {
    console.warn("WebSocket is not connected. Message not sent.");
  }
};

export const disconnectWebSocket = () => {
  if (stompClient) {
    stompClient.deactivate();
    console.log("WebSocket connection closed.");
  }
};

export const getOnlineUsers = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/chat/online-users", {
      withCredentials: false, // Ensures credentials are sent
    });
    return response.data; // Return the list of online users
  } catch (error) {
    console.error("Error fetching online users:", error);
    return []; // Return an empty array in case of error
  }
};