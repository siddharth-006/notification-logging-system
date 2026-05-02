import { useEffect, useState } from "react";
import { fetchNotifications } from "./api/notifications";
import { getTopNotifications } from "./utils/priority";
import { Log } from "./logging_middleware";

import {
  Container,
  Typography,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";

function App() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [type, setType] = useState("");

  // ✅ viewed state
  const [viewed, setViewed] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem("viewed") || "[]");
  });

  // ✅ pagination state
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  useEffect(() => {
    const loadData = async () => {
      try {
        Log("frontend", "info", "api", "Fetching notifications");

        const data = await fetchNotifications(page, limit);

        Log("frontend", "info", "api", "Notifications fetched");

        setNotifications(data.notifications || []);
      } catch (error) {
        Log("frontend", "error", "api", "Failed to fetch notifications");
      }
    };

    loadData();
  }, [page]); // ✅ important

  // ✅ mark viewed
  const markAsViewed = (id: string) => {
    const updated = [...new Set([...viewed, id])];
    setViewed(updated);
    localStorage.setItem("viewed", JSON.stringify(updated));

    Log("frontend", "info", "component", `Notification viewed: ${id}`);
  };

  // ✅ filtering
  const filtered = type
    ? notifications.filter((n) => n.Type === type)
    : notifications;

  // ✅ priority
  const topNotifications = getTopNotifications(filtered);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Campus Notifications
      </Typography>

      {/* Filter */}
      <Select
        value={type}
        onChange={(e) => setType(e.target.value)}
        displayEmpty
        sx={{ minWidth: 200 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Event">Event</MenuItem>
        <MenuItem value="Result">Result</MenuItem>
        <MenuItem value="Placement">Placement</MenuItem>
      </Select>

      {/* 🔥 Top Notifications */}
      <Typography variant="h6" sx={{ mt: 3 }}>
        Top Notifications
      </Typography>

      {topNotifications.map((n) => {
        const isViewed = viewed.includes(n.ID);

        return (
          <Card
            key={n.ID}
            sx={{
              my: 2,
              cursor: "pointer",
              opacity: isViewed ? 0.5 : 1,
            }}
            onClick={() => markAsViewed(n.ID)}
          >
            <CardContent>
              <Typography>
                {isViewed ? "✔️ " : "🟢 "}
                {n.Message}
              </Typography>
              <Typography variant="caption">
                {n.Type} • {n.Timestamp}
              </Typography>
            </CardContent>
          </Card>
        );
      })}

      {/* 🔥 All Notifications */}
      <Typography variant="h6" sx={{ mt: 4 }}>
        All Notifications
      </Typography>

      {filtered.map((n) => {
        const isViewed = viewed.includes(n.ID);

        return (
          <Card
            key={n.ID + "_all"}
            sx={{
              my: 2,
              cursor: "pointer",
              opacity: isViewed ? 0.5 : 1,
            }}
            onClick={() => markAsViewed(n.ID)}
          >
            <CardContent>
              <Typography>
                {isViewed ? "✔️ " : "🟢 "}
                {n.Message}
              </Typography>
              <Typography variant="caption">
                {n.Type} • {n.Timestamp}
              </Typography>
            </CardContent>
          </Card>
        );
      })}

      {/* 🔥 Pagination */}
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>
          Previous
        </button>

        <span>Page: {page}</span>

        <button onClick={() => setPage((p) => p + 1)}>
          Next
        </button>
      </div>
    </Container>
  );
}

export default App;