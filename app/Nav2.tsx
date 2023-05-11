"use client";

import React from "react";
import { Navbar } from "flowbite-react";
import Image from "next/image";

function Nav2() {
	return (
		<div>
			<Navbar
				fluid={true}
				rounded={true}
			>
				<Navbar.Brand href="/">
					<Image
						width={50}
						height={50}
						src="/zen44.png"
						className="mr-3 h-6 sm:h-9"
						alt="Flowbite Logo"
					/>
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white md:text-xl">
						Renzahuer Goth
					</span>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="md:text-xl">
					<Navbar.Link
						href="/navbars"
						active={true}
						className="md:text-xl"
					>
						Home
					</Navbar.Link>
					<Navbar.Link
						href="/navbars"
						className="md:text-xl"
					>
						Tienda
					</Navbar.Link>
					<Navbar.Link
						href="/navbars"
						className="md:text-xl"
					>
						Nosotros
					</Navbar.Link>
					<Navbar.Link
						href="/navbars"
						className="md:text-xl"
					>
						Galería
					</Navbar.Link>
					<Navbar.Link
						href="/navbars"
						className="md:text-xl"
					>
						Contacto
					</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Nav2;
