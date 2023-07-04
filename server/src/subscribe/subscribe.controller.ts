import { Request, Response } from "express";
import webpush from "web-push";
import { SubscribeService } from "./subscribe.service";

export class SubscribeController {
  constructor(private subscribeService: SubscribeService) {}

  subscribe = async (req: Request, res: Response) => {
    try {
      const { endpoint, p256dh, auth } = req.body;
      setTimeout(() => {
        webpush.sendNotification(
          {
            endpoint,
            keys: {
              p256dh,
              auth,
            },
          },
          JSON.stringify({
            title: "PWA App",
            body: "This is a push notification.",
          })
        );
      }, 3000);

      return res.status(200).json({
        data: {
          message: "You have successfully subscribed to push notifications.",
        },
        status: "success",
      });
    } catch (e) {
      if (e instanceof Error) {
        return res.status(500).json(e);
      }
      return res.status(500).json({
        message: "A server error has occurred.",
        status: "error",
      });
    }
  };
}
