import type { Stack, Level, Package } from "./types";

export const Log = async (
  stack: Stack,
  level: Level,
  pkg: Package,
  message: string
) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.warn("No token found. Logging skipped.");
    return;
  }

  try {
    const res = await fetch("http://20.207.122.201/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message,
      }),
    });

    const data = await res.json();
    console.log("✅ Log success:", data);
  } catch (err) {
    console.error("❌ Logging failed:", err);
  }
};