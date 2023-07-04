export type Response<T = unknown> = {
  status: "success" | "fail" | "error";
  data: T;
};
