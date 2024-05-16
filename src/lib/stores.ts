import { writable } from "svelte/store";
import type { Session, Placemark } from "$lib/types/placemark-types";

export const subTitle = writable<string>();
export const currentSession = writable<Session>();
export const latestPlacemark = writable<Placemark>();