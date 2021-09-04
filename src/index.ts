import express, { Application, Request, Response } from "express";

const app: Application = express();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

const PORT: number = 5000;

try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(`Error occured: ${error.message}`);
  }
}
