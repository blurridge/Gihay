import { atom } from "nanostores";

export const currentYear = atom(new Date().getFullYear());
