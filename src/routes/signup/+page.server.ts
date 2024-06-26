import { dev } from "$app/environment";
import { placemarkService } from "$lib/services/placemark-service";
import { currentSession } from "$lib/stores.js";
import { redirect } from "@sveltejs/kit";
import { sanitizeInput } from "$lib/services/placemark-utils";
import bcrypt from 'bcryptjs';


export const actions = {
  signup: async ({ request, cookies }) => {
    const form = await request.formData();
    const firstName = sanitizeInput(form.get("firstName") as string);
    const lastName = sanitizeInput(form.get("lastName") as string);
    const email = sanitizeInput(form.get("email") as string);
    const password = sanitizeInput(form.get("password") as string);
    if (email === "" || password === "") {
      throw redirect(307, "/");
    } else {
      console.log(`attempting to signup user ${firstName} ${lastName} email: ${email} with password: ${password}`);

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        admin: false,
      };
      const attempt = await placemarkService.signup(user);

      console.log("Signup attempt", attempt);

      if (attempt) {
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
  }
};
