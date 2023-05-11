import Image from "next/image";
import Caru from "./Caru";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<div className="font-extrabold text-2xl w-full text-center p-12 bg-gradient-to-br from-slate-500 via-purple-400 to-slate-500 text-white flex items-center justify-center">
				<h1 className="bg-gradient-to-r from-slate-300 via-purple-200 to-slate-200 inline-block text-transparent bg-clip-text"></h1>
				<Image
					width={350}
					height={350}
					src="/zen44.png"
					className="text-center"
					alt="Renzahuer Goth logo"
				/>
			</div>
			<div className="">
				<div>
					<UserButton />
				</div>
				<div>
					<p className="text-center text-2xl text-slate-600 font-semibold mt-12">
						Productos recientes
					</p>
					<Caru />
				</div>
			</div>
		</main>
	);
}
