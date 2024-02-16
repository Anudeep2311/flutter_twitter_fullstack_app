import { Router } from "express";
import {
  getTweetController,
  createTweetController,
  updateTweetController,
  deleteTweetController,
} from "../controllers/tweet.controller";

const tweetRouter = Router();

// Define the route paths

tweetRouter.get("/:tweetId", getTweetController);
// tweetRouter.get("/:tweetId", getAllTweetsController);
tweetRouter.post("/", createTweetController);
tweetRouter.delete("/:tweetId", deleteTweetController);
tweetRouter.put("/", updateTweetController);

export default tweetRouter;
