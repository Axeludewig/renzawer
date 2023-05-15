"use client";

import React from "react";
import { ClerkProvider, useUser, SignIn, SignedOut } from "@clerk/nextjs";

function user() {
	const { isLoaded, isSignedIn, user } = useUser();

	if (!isLoaded || !isSignedIn) {
		return null;
	}
	return (
		<>
			<div className="text-center mt-24">
				<div className="font-semibold">Hola, {user.firstName}.</div>
			</div>
		</>
	);
}

export default user;
