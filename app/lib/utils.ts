import type { ClassArray } from "clsx";
import clsx from "clsx";
import { twMerge } from "tw-merge";

export const formatBytes = (bytes: number) => {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

export const generateUUID = () => {
  return crypto.randomUUID();
};

export const cn = (...classes: ClassArray) => {
  return twMerge(clsx(classes));
};
