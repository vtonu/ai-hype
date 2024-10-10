// use client is required by React to work
"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
// Import the required dependencies
// biome-ignore lint/style/useImportType: <explanation>
import React, { useEffect, useId, useState } from "react";
import { useRef } from "react";

// Cover component handles an effect with sparkles and animated beams.
// It listens for mouse enter/leave events and triggers animation transitions.
export const Cover = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	const [hovered, setHovered] = useState(false); // State to track hover status
	const ref = useRef<HTMLDivElement>(null); // Ref for accessing the container div
	const [containerWidth, setContainerWidth] = useState(0); // State to store the width of the container
	const [beamPositions, setBeamPositions] = useState<number[]>([]); // State to store the positions of animated beams
	// Effect to calculate container dimensions and beam positions when the component mounts or updates
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (ref.current) {
			setContainerWidth(ref.current?.clientWidth ?? 0); // Set container width using the ref
			const height = ref.current?.clientHeight ?? 0; // Get container height
			const numberOfBeams = Math.floor(height / 3); // Controls the number of beams based on container height
			const positions = Array.from(
				{ length: numberOfBeams }, // Create an array of beam positions
				(_, i) => (i + 1) * (height / (numberOfBeams + 1)),
			); // Calculate each beam's Y position
			setBeamPositions(positions); // Update state with calculated beam positions
		}
	}, [ref]); // Re-run this effect whenever the ref changes

	return (
		<div
			onMouseEnter={() => setHovered(true)} // Trigger hover state on mouse enter
			onMouseLeave={() => setHovered(false)} // Reset hover state on mouse leave
			ref={ref} // Assign the ref to this div
			className="relative group/cover transition duration-200 rounded-lg"
		>
			{/* Animate sparkles when hovered */}
			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }} // Start animation with 0 opacity
						animate={{ opacity: 1 }} // Animate to full opacity
						exit={{ opacity: 0 }} // Fade out when exited
						transition={{
							opacity: {
								duration: 0.2, // Duration for opacity transition
							},
						}}
						className="h-full w-full overflow-hidden absolute inset-0"
					>
						{/* Animate sparkle effect inside the container */}
						<motion.div
							animate={{
								translateX: ["-50%", "0%"], // Slide sparkle effect horizontally
							}}
							transition={{
								translateX: {
									duration: 2, // Duration for the slide
									ease: "linear", // Linear easing for smooth animation
									repeat: Number.POSITIVE_INFINITY, // Repeat indefinitely
								},
							}}
							className="w-[100%] h-full flex"
						>
							<SparklesCore
								background="transparent" // Transparent background
								minSize={0.1} // Minimum particle size
								maxSize={0.8} // Maximum particle size
								particleDensity={500} // Number of particles
								className="w-full h-full" // Full width and height for coverage
								particleColor="#228B22" // Particle color (green)
							/>
							<SparklesCore
								background="transparent" // Additional sparkle layer
								minSize={0.1}
								maxSize={0.8}
								particleDensity={500}
								className="w-full h-full"
								particleColor="#50C878" // Lighter green color for contrast
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			{/* Render beams (sparkles droplets moving from left to right) dynamically based on calculated positions */}
			{beamPositions.map((position) => (
				<Beam
					key={`beam-${position}`} // Unique key using position value
					duration={Math.random() * 2 + 1}
					delay={Math.random() * 2 + 1}
					width={containerWidth}
					style={{
						top: `${position}px`,
					}}
				/>
			))}

			{/* Scale on hover effect */}
			<motion.span
				key={String(hovered)} // Unique key based on hover state
				animate={{
					scale: hovered ? 0.9 : 1, // Scale down when hovered
					x: hovered ? [0, -10, 10, -10, 10, 0] : 0, // Shake horizontally when hovered
					y: hovered ? [0, 10, -10, 10, -10, 0] : 0, // Shake vertically when hovered
				}}
				exit={{
					filter: "none", // Reset filter
					scale: 1, // Reset scale
					x: 0, // Reset horizontal position
					y: 0, // Reset vertical position
				}}
				transition={{
					duration: 0.2, // Duration for the hover effect
					x: {
						duration: 0.2, // Horizontal shake duration
						repeat: Number.POSITIVE_INFINITY, // Repeat horizontal shake
						repeatType: "loop", // Loop the shake
					},
					y: {
						duration: 0.2, // Vertical shake duration
						repeat: Number.POSITIVE_INFINITY, // Repeat vertical shake
						repeatType: "loop", // Loop the shake
					},
					scale: {
						duration: 0.2, // Scale transition duration
					},
					filter: {
						duration: 0.2, // Filter transition duration
					},
				}}
				className={cn(
					"dark:text-white inline-block text-neutral-900 relative  group-hover/cover:text-inherit transition duration-200",
					className,
				)}
			>
				{children}
			</motion.span>
		</div>
	);
};

// Beam component and animated SVG line that appears with an initial animation.
export const Beam = ({
	className, // Optional className for custom styling
	delay, // Optional delay for the animation (in seconds)
	duration, // Optional duration for the animation (in seconds)
	width = 600, // Default width of the SVG (600px if not provided)
	...svgProps // Spread any additional props to the motion.svg component
}: {
	className?: string; // Optional className type
	delay?: number; // Optional delay type
	duration?: number; // Optional duration type
	width?: number; // Optional width type (defaults to 600)
} & React.ComponentProps<typeof motion.svg>) => {
	const id = useId(); // Unique ID for each SVG to avoid conflicts (useId hook)

	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<motion.svg
			width={width ?? "600"} // Set the width of the SVG (default is 600px)
			height="1" // Fixed height for the SVG (1px tall)
			viewBox={`0 0 ${width ?? "600"} 1`} // SVG viewport based on the width and height
			fill="none" // No fill color for the SVG elements
			xmlns="http://www.w3.org/2000/svg" // Set the XML namespace for SVG
			className={cn("absolute inset-x-0 w-full", className)} // Optional classes for positioning and styling
			{...svgProps}
		>
			{/* Draws a horizontal line with an animated gradient stroke */}
			<motion.path
				d={`M0 0.5H${width ?? "600"}`}
				stroke={`url(#svgGradient-${id})`}
			/>
			<defs>
				{/* Define a linear gradient to be used in the stroke animation */}
				<motion.linearGradient
					id={`svgGradient-${id}`} // Use unique ID for each SVG instance
					gradientUnits="userSpaceOnUse" // Gradient coordinates are relative to the user space
					initial={{
						x1: "105%", // Initial X-axis starting position of the gradient
						x2: "100%", // Initial X-axis ending position of the gradient
						y1: 0,
						y2: 0,
					}}
					animate={{
						x1: "-105%", // X-axis starting position of the gradient for the animation
						x2: "-100%", // X-axis ending position of the gradient for the animation
						y1: 0,
						y2: 0,
					}}
					transition={{
						duration: duration ?? 1, // Set animation duration or default to 1 second
						ease: "linear", // Linear easing for smooth animation
						repeat: Number.POSITIVE_INFINITY, // Loop the animation indefinitely
						delay: delay ?? 1, // Set delay before the animation starts (default 1 second)
					}}
				>
					{/* Color stops for the gradient animation */}
					<stop stopColor="#6bf037" stopOpacity="0" />{" "}
					{/* Start with transparent green */}
					<stop stopColor="#37f096" /> {/* Midpoint with solid green */}
					<stop offset="1" stopColor="#42ff1ee0" stopOpacity="0" />{" "}
					{/* End with transparent */}
				</motion.linearGradient>
			</defs>
		</motion.svg>
	);
};

// Animated pulse circle component creating the effect of a live indicator.
export const CircleIcon = ({
	className,
	delay,
}: { className?: string; delay?: number }) => {
	return (
		<div
			className={cn(
				"pointer-events-none animate-pulse group rounded-full bg-green-500 dark:bg-green opacity-5  ml-2",
				className,
				delay,
			)}
		/>
	);
};
