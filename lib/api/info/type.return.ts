import { response } from "../../api";

export type info = {
  [key: string]: {
    maxVersion: number;
    minVersion: number;
    path: string;
  };
};

export type query = response<info[]>;
