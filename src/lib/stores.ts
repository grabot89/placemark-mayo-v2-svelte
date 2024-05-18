import { writable } from "svelte/store";
import type { Placemark, Session } from "$lib/types/placemark-types";

export const currentSession = writable<Session>();
export const subTitle = writable<string>();
export const latestPlacemark = writable<Placemark>();
