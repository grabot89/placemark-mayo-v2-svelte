import { dbConnect, seed } from "$lib/models/db";
import type { Handle } from "@sveltejs/kit";

const initializeApp = async () => {
    await dbConnect();
    await seed();
  };
  
  initializeApp().catch((error) => {
    console.error("Error initializing app:", error);
  });

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  return response;
};
