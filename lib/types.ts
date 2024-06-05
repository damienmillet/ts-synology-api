export type response<T> = {
  data?: T;
  success: boolean;
  error?: {
    info: Record<string, unknown>;
    statusText: string;
    status: number;
  };
};
