declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			flash?: {
				type: "success" | "error";
				message: string;
			};
		}
		// interface Platform {}
	}
}

export {};
