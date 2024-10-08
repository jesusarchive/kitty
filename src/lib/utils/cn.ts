import { twMerge } from "tailwind-merge";
import { clsx, ClassArray } from "clsx";

export function cn(...args: ClassArray): string {
  return twMerge(clsx(args));
}
