import Axios from "axios";
import { Response } from "./types";
import { useMutation } from "react-query";

const axios = Axios.create({
  baseURL: `${import.meta.env.VITE_API_ENDPOINT}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

const subscribe = async (
  endpoint: string,
  p256dh: any,
  auth: any
): Promise<any> => {
  const response = await axios.post<Response<any>["data"]>("/subscribe", {
    endpoint,
    p256dh,
    auth,
  });

  return response.data;
};

export function useSubscribe() {
  return useMutation(
    (props: { endpoint: string; p256dh: any; auth: any }) =>
      subscribe(props.endpoint, props.p256dh, props.auth),
    {
      mutationKey: "subscribe",
      onSuccess: () => {
        alert("You have successfully subscribed to push notifications.");
      },
    }
  );
}
