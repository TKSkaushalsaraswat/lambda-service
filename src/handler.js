export const handler = async (event) => {
  console.log("Event received:", event);

  let data;

  try {
    data =
      typeof event.body === "string"
        ? JSON.parse(event.body)
        : event.body || {};
  } catch (e) {
    data = {};
  }

  const body = {
    message: "User added event triggered!",
    user: data.user || "demo-user",
  };

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};
