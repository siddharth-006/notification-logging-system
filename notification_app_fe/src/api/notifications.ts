const BASE_URL = "http://20.207.122.201/evaluation-service";

export const fetchNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  const token = localStorage.getItem("token");

  let url = `${BASE_URL}/notifications?page=${page}&limit=${limit}`;
  if (type) url += `&notification_type=${type}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};