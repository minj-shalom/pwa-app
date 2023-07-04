import { Router } from "express";
import { SubscribeService } from "./subscribe.service";
import { SubscribeController } from "./subscribe.controller";

const SubscribeRouter = Router();

const subscribeController = new SubscribeController(new SubscribeService());

SubscribeRouter.post("", (req, res) => subscribeController.subscribe(req, res));

export default SubscribeRouter;
