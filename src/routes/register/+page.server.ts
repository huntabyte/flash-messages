import { redirect } from "sveltekit-flash-message/server";
import type { Actions } from "./$types";

export const actions: Actions = {
	default: async (event) => {
		// Pretend registration logic is here...

		throw redirect(
			"/login",
			{ type: "success", message: "Confirm your email before logging in!" },
			event
		);
	}
};
