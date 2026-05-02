import { useEffect, useState } from "react";
import { Log } from "./logging_middleware";

function App() {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    Log("frontend", "info", "component", "App initialized");

    setTimeout(() => {
      Log("frontend", "debug", "hook", "Fetching notifications");

      setNotifications([
        "New message received",
        "Your order has been shipped",
        "System maintenance at 10 PM"
      ]);

      Log("frontend", "info", "api", "Notifications loaded");
    }, 1500);
  }, []);

  return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #1e293b, #0f172a)",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
    }}
  >
    <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
      Notification App
    </h1>

    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        width: "300px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      }}
    >
      {notifications.length === 0 ? (
        <p style={{ textAlign: "center" }}>Loading notifications...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {notifications.map((note, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                marginBottom: "10px",
                background: "#334155",
                borderRadius: "8px",
              }}
            >
              {note}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);
}

export default App;