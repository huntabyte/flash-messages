import type { LayoutServerLoad } from "./$types";
import { loadFlashMessage } from "sveltekit-flash-message/server";

export const load: LayoutServerLoad = loadFlashMessage(async (event) => {
	return {
		someData: "anything you want"
	};
});
