const typeWeight: Record<string, number> = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const getTopNotifications = (notifications: any[], n = 10) => {
  return notifications
    .sort((a, b) => {
      const weightDiff = typeWeight[b.Type] - typeWeight[a.Type];

      if (weightDiff !== 0) return weightDiff;

      return (
        new Date(b.Timestamp).getTime() -
        new Date(a.Timestamp).getTime()
      );
    })
    .slice(0, n);
};