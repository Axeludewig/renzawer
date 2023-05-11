"use client";

import React, { useState } from "react";

function Caru() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const prevSlide = () => {
		setCurrentSlide((currentSlide - 1 + 3) % 3);
	};

	const nextSlide = () => {
		setCurrentSlide((currentSlide + 1) % 3);
	};

	return (
		<div className="flex w-[310px] h-[200px] max-h-[200px] max-w-[400px] md:w-[800px] md:max-w-[800px] relative md:max-h-[400px] md:h-[400px] mt-20 md:mt-0 items-center justity-center">
			<div className="carousel mx-auto relative flex items-center justify-center place-content-center">
				<img
					className={`slide shadow-2xl w-[300px] ${
						currentSlide === 0 ? "visible" : "hidden"
					} transition-opacity duration-500`}
					src="/hongo000.png"
					alt="Slide 1"
				/>
				<img
					className={`slide shadow-2xl w-[300px] ${
						currentSlide === 1 ? "visible" : "hidden"
					} transition-opacity duration-500`}
					src="ventana.png"
					alt="Slide 2"
				/>
				<img
					className={`slide shadow-2xl w-[300px] md:max-w-[500px] ${
						currentSlide === 2 ? "visible" : "hidden"
					} transition-opacity duration-500`}
					src="./verde2.png"
					alt="Slide 3"
				/>
			</div>
			<div className="absolute inset-0 flex items-center justify-between">
				<button
					onClick={prevSlide}
					className="prev-btn z-10 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-gray-900"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>
				<button
					onClick={nextSlide}
					className="next-btn z-10 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-gray-900"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default Caru;
