<script lang="ts">
	import "../app.css";
	import { page } from "$app/stores";
	import { initFlash } from "sveltekit-flash-message/client";
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, Button } from "flowbite-svelte";
	import toast, { Toaster } from "svelte-french-toast";
	import { beforeNavigate } from "$app/navigation";
	const navigation = [
		{ label: "Home", href: "/" },
		{ label: "Pricing", href: "/pricing" },
		{ label: "Contacts", href: "/contacts" },
		{ label: "Account", href: "/account" }
	];

	const flash = initFlash(page);

	beforeNavigate((nav) => {
		if ($flash && nav.from?.url.toString() !== nav.to?.url.toString()) {
			$flash = undefined;
		}
	});

	// $: if ($flash) {
	// 	switch ($flash.type) {
	// 		case "success":
	// 			toast.success($flash.message);
	// 			break;
	// 		case "error":
	// 			toast.error($flash.message);
	// 			break;
	// 	}
	// }

	$: console.log($flash);
</script>

<svelte:head>
	<title>Contactly</title>
</svelte:head>
<Toaster />
<div class="flex h-full flex-col">
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<img src="/images/logo.png" class="mr-3 h-6 sm:h-9" alt="Contactly Logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				Contactly
			</span>
		</NavBrand>
		<div class="flex md:order-2">
			<div class="flex items-center gap-2">
				<Button href="/login" size="sm">Login</Button>
				<Button href="/register" size="sm" color="alternative">Register</Button>
			</div>
			<NavHamburger on:click={toggle} />
		</div>
		<NavUl {hidden}>
			{#each navigation as nav}
				<NavLi href={nav.href} active={$page.url.pathname === nav.href}>{nav.label}</NavLi>
			{/each}
		</NavUl>
	</Navbar>
	<div class="w-full flex-grow px-2 sm:px-4">
		<div class="container mx-auto">
			<slot />
		</div>
	</div>
</div>
