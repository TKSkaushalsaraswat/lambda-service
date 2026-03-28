exports.handler = async (event) => {
  console.log("Event received:", event);

  const data = JSON.parse(event.body || "{}");

  const body = {
    message: "User added event triggered",
    user: data.user || "demo-user",
  };

  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
};
