const fetchHealthCheck = async () => {
  const response = await fetch("api/check", {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch health check");
  }
  const result = await response.json();
  return result;
};

export { fetchHealthCheck };
