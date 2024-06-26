import { dev } from "$app/environment";
import { placemarkService } from "$lib/services/placemark-service";
import { currentSession } from "$lib/stores.js";
import { redirect } from "@sveltejs/kit";
import { sanitizeInput } from "$lib/services/placemark-utils";

export const actions = {
  login: async ({ request, cookies }) => {
    const form = await request.formData();
    const email = sanitizeInput(form.get("email") as string);
    const password = sanitizeInput(form.get("password") as string);
    if (email === "" || password === "") {
      throw redirect(307, "/");
    } else {
      console.log(`attempting to log in email: ${email} with password: ${password}`);

      const session = await placemarkService.login(email, password);

      if (session) {
        currentSession.set(session);
        const userJson = JSON.stringify(session);
        cookies.set("placemark-user", userJson, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: !dev,
          maxAge: 60 * 60 * 24 * 7 // one week
        });
        throw redirect(303, "/dashboard");
      } else {
        throw redirect(307, "/");
      }
    }
  }
};
