import express from "express";

const app = express();

const PORT = 500;

app.listen(PORT, () => {
  console.log(`Timezones by location application is running on port ${PORT}.`);
});
