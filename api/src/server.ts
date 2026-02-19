import app from "./app";

const PORT = process.env.PORT || 8000;

export const startServer = async () => {
  app.listen(PORT, () => {
    console.log(`App is running in: http://localhost:${PORT}`);
  });

  process.on("uncaughtException", async (err) => {
    console.log(err);
    process.exit(1);
  });
};

startServer();
