import { redirect } from "sveltekit-flash-message/server";
import type { Actions } from "./$types";

export const actions: Actions = {
	default: async (event) => {
		// Implement register logic here...

		// Registration complete
		throw redirect(
			"/login",
			{
				type: "error",
				message: "You have been banned!"
			},
			event
		);
	}
};
