"use client";
import { cn } from "@/lib/utils";
import type { Container, SingleOrMultiple } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";
import React, { useId, useEffect, useState } from "react";

/**
 * ParticlesProps type definition
 */
type ParticlesProps = {
	id?: string; // Unique ID for the particle container
	className?: string; // Additional class names for styling
	background?: string; // Background color for the particle effect
	minSize?: number; // Minimum size for the particles
	maxSize?: number; // Maximum size for the particles
	speed?: number; // Speed of the particles
	particleColor?: string; // Color of the particles
	particleDensity?: number; // Density of the particles
};

/**
 * SparklesCore component to render particle effects
 */
export const SparklesCore = (props: ParticlesProps) => {
	const {
		id,
		className,
		background,
		minSize,
		maxSize,
		speed,
		particleColor,
		particleDensity,
	} = props;

	const [init, setInit] = useState(false); // State to track if particles have been initialized
	const controls = useAnimation(); // Animation controls for framer-motion

	// Initialize particles engine and load slim version
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine); // Load slim version of the particles engine
		}).then(() => {
			setInit(true); // Set initialization state to true once loading is complete
		});
	}, []);

	// Animate opacity once particles are initialized
	useEffect(() => {
		if (init) {
			controls.start({
				opacity: 1, // Fade in effect for the particles
				transition: {
					duration: 1, // Duration of the fade in transition
				},
			});
		}
	}, [init, controls]);

	const particlesLoaded = async (container?: Container) => {
		if (container) {
			// Placeholder for future functionality when particles are loaded
		}
	};

	// Generate a unique ID for the particle container
	const generatedId = useId();

	return (
		<motion.div animate={controls} className={cn("opacity-0", className)}>
			{init && (
				<Particles
					id={id || generatedId} // Unique identifier for the particles component
					className={cn("h-full w-full")} // Classes to set the height and width of the particles container
					particlesLoaded={particlesLoaded} // Callback to handle when particles are fully loaded
					options={{
						background: {
							color: {
								value: background || "#0d47a1", // Background color for the particles container
							},
						},
						fullScreen: {
							enable: false, // Disable full-screen mode for the particles
							zIndex: 1, // Set z-index for the particles layer
						},
						fpsLimit: 120, // Set the maximum frames per second for rendering particles
						interactivity: {
							events: {
								onClick: {
									enable: true, // Enable click interactions
									mode: "push", // Mode for click interaction
								},
								onHover: {
									enable: false, // Disable hover interactions
									mode: "repulse", // Mode for hover interaction if enabled
								},
								resize: {
									enable: true, // Enable resizing of particles on window resize
								},
							},
							modes: {
								push: {
									quantity: 4, // Number of particles to push on click
								},
								repulse: {
									distance: 200, // Distance for repulsion effect
									duration: 0.4, // Duration of the repulsion effect
								},
							},
						},
						particles: {
							bounce: {
								horizontal: {
									value: 1, // Bounce value for horizontal movement
								},
								vertical: {
									value: 1, // Bounce value for vertical movement
								},
							},
							collisions: {
								absorb: {
									speed: 2, // Speed at which particles absorb each other
								},
								bounce: {
									horizontal: {
										value: 1, // Bounce value for horizontal collisions
									},
									vertical: {
										value: 1, // Bounce value for vertical collisions
									},
								},
								enable: false, // Disable collision detection
								maxSpeed: 50, // Maximum speed of particles
								mode: "bounce", // Mode for particle collision behavior
								overlap: {
									enable: true, // Allow overlapping of particles
									retries: 0, // Number of retries for collision detection
								},
							},
							/**
							 * Color properties for particles.
							 */
							color: {
								value: particleColor || "#ffffff", // Default color of particles
								animation: {
									h: {
										count: 0, // Number of hue animation iterations
										enable: false, // Disable hue animation
										speed: 1, // Speed of hue animation
										decay: 0, // Decay of hue animation
										delay: 0, // Delay before starting hue animation
										sync: true, // Synchronize hue animation across particles
										offset: 0, // Offset for hue animation
									},
									s: {
										count: 0, // Number of saturation animation iterations
										enable: false, // Disable saturation animation
										speed: 1, // Speed of saturation animation
										decay: 0, // Decay of saturation animation
										delay: 0, // Delay before starting saturation animation
										sync: true, // Synchronize saturation animation across particles
										offset: 0, // Offset for saturation animation
									},
									l: {
										count: 0, // Number of lightness animation iterations
										enable: false, // Disable lightness animation
										speed: 1, // Speed of lightness animation
										decay: 0, // Decay of lightness animation
										delay: 0, // Delay before starting lightness animation
										sync: true, // Synchronize lightness animation across particles
										offset: 0, // Offset for lightness animation
									},
								},
							},
							/**
							 * Effect properties for particles.
							 */
							effect: {
								close: true, // Enable closing effect for particles
								fill: true, // Fill the particles with color
								options: {}, // Additional effect options
								type: {} as SingleOrMultiple<string> | undefined, // Type of effect (single/multiple)
							},
							groups: {}, // Particle grouping properties
							/**
							 * Particle movement properties.
							 */
							move: {
								angle: {
									offset: 0, // Offset for movement angle
									value: 90, // Movement angle in degrees
								},
								attract: {
									distance: 200, // Distance at which particles attract each other
									enable: false, // Disable particle attraction
									rotate: {
										x: 3000, // Rotation speed around X-axis
										y: 3000, // Rotation speed around Y-axis
									},
								},
								center: {
									x: 50, // X position for movement center
									y: 50, // Y position for movement center
									mode: "percent", // Center mode (percent or pixels)
									radius: 0, // Radius of the center area
								},
								decay: 0, // Decay value for particle movement
								distance: {}, // Distance properties for movement
								direction: "none", // Direction of movement
								drift: 0, // Drift value for particles
								enable: true, // Enable particle movement
								gravity: {
									acceleration: 9.81, // Gravity acceleration
									enable: false, // Disable gravity effect
									inverse: false, // Inverse gravity effect
									maxSpeed: 50, // Maximum speed under gravity
								},
								path: {
									clamp: true, // Clamp path movement
									delay: {
										value: 0, // Delay for path movement
									},
									enable: false, // Disable path movement
									options: {}, // Additional path options
								},
								outModes: {
									default: "out", // Default behavior for particles exiting the canvas
								},
								random: false, // Disable random movement
								size: false, // Disable size variations in movement
								speed: {
									min: 0.1, // Minimum speed of particles
									max: 1, // Maximum speed of particles
								},
								spin: {
									acceleration: 0, // Spin acceleration
									enable: false, // Disable spin effect
								},
								straight: false, // Disable straight movement
								trail: {
									enable: false, // Disable trail effect
									length: 10, // Length of the trail
									fill: {}, // Fill options for the trail
								},
								vibrate: false, // Disable vibration effect
								warp: false, // Disable warp effect
							},
							number: {
								density: {
									enable: true, // Enable density configuration
									width: 400, // Width of the density area
									height: 400, // Height of the density area
								},
								limit: {
									mode: "delete", // Mode for limiting particle numbers
									value: 0, // Maximum number of particles allowed
								},
								value: particleDensity || 120, // Number of particles to spawn
							},
							opacity: {
								value: {
									min: 0.1, // Minimum opacity of particles
									max: 1, // Maximum opacity of particles
								},
								animation: {
									count: 0, // Number of animation iterations for opacity
									enable: true, // Enable opacity animation
									speed: speed || 4, // Speed of opacity changes
									decay: 0, // Decay for opacity animation
									delay: 0, // Delay before starting opacity animation
									sync: false, // Disable synchronized animation
									mode: "auto", // Automatic mode for opacity animation
									startValue: "random", // Random starting value for opacity
									destroy: "none", // Action to take on destroy
								},
							},
							reduceDuplicates: false, // Disable reduction of duplicate particles
							shadow: {
								blur: 0, // Blur effect for shadows
								color: {
									value: "#000", // Color of the shadow
								},
								enable: false, // Disable shadow effect
								offset: {
									x: 0, // X offset of the shadow
									y: 0, // Y offset of the shadow
								},
							},
							shape: {
								close: true, // Enable closing of the shape
								fill: true, // Enable filling of the shape
								options: {}, // Shape-specific options
								type: "circle", // Shape type (e.g., circle, square)
							},
							size: {
								value: {
									min: minSize || 1, // Minimum size of particles
									max: maxSize || 3, // Maximum size of particles
								},
								animation: {
									count: 0, // Number of animation iterations for size
									enable: false, // Disable size animation
									speed: 5, // Speed of size changes
									decay: 0, // Decay for size animation
									delay: 0, // Delay before starting size animation
									sync: false, // Disable synchronized animation
									mode: "auto", // Automatic mode for size animation
									startValue: "random", // Random starting value for size
									destroy: "none", // Action to take on destroy
								},
							},
							stroke: {
								width: 0, // Width of the stroke around particles
							},
							zIndex: {
								value: 0, // Z-index of particles
								opacityRate: 1, // Opacity rate based on z-index
								sizeRate: 1, // Size rate based on z-index
								velocityRate: 1, // Velocity rate based on z-index
							},
							destroy: {
								bounds: {}, // Boundaries for particle destruction
								mode: "none", // Mode for particle destruction
								split: {
									count: 1, // Number of particles to split into
									factor: {
										value: 3, // Factor for split size
									},
									rate: {
										value: {
											min: 4, // Minimum rate of split
											max: 9, // Maximum rate of split
										},
									},
									sizeOffset: true, // Enable size offset for split particles
								},
							},
							roll: {
								darken: {
									enable: false, // Disable darkening effect on roll
									value: 0, // Value for darkening
								},
								enable: false, // Disable roll effect
								enlighten: {
									enable: false, // Disable enlightening effect on roll
									value: 0, // Value for enlightening
								},
								mode: "vertical", // Roll mode (e.g., vertical, horizontal)
								speed: 25, // Speed of roll effect
							},
							tilt: {
								value: 0, // Tilt value for particles
								animation: {
									enable: false, // Disable tilt animation
									speed: 0, // Speed of tilt animation
									decay: 0, // Decay for tilt animation
									sync: false, // Disable synchronized animation
								},
								direction: "clockwise", // Direction of tilt (clockwise or counterclockwise)
								enable: false, // Disable tilt effect
							},
							twinkle: {
								lines: {
									enable: false, // Disable twinkle effect on lines
									frequency: 0.05, // Frequency of twinkle effect
									opacity: 1, // Opacity of twinkle effect
								},
								particles: {
									enable: false, // Disable twinkle effect on particles
									frequency: 0.05, // Frequency of twinkle effect
									opacity: 1, // Opacity of twinkle effect
								},
							},
							wobble: {
								distance: 5, // Distance for wobble effect
								enable: false, // Disable wobble effect
								speed: {
									angle: 50, // Speed of angle wobble
									move: 10, // Speed of movement wobble
								},
							},
							life: {
								count: 0, // Number of life iterations for particles
								delay: {
									value: 0, // Delay before life iteration starts
									sync: false, // Disable synchronized life iteration
								},
								duration: {
									value: 0, // Duration of life for particles
									sync: false, // Disable synchronized duration
								},
							},
							rotate: {
								value: 0, // Rotation value for particles
								animation: {
									enable: false, // Disable rotation animation
									speed: 0, // Speed of rotation animation
									decay: 0, // Decay for rotation animation
									sync: false, // Disable synchronized rotation animation
								},
								direction: "clockwise", // Direction of rotation
								path: false, // Disable path rotation
							},
							orbit: {
								animation: {
									count: 0, // Number of orbit animation iterations
									enable: false, // Disable orbit animation
									speed: 1, // Speed of orbit animation
									decay: 0, // Decay for orbit animation
									delay: 0, // Delay before starting orbit animation
									sync: false, // Disable synchronized orbit animation
								},
								enable: false, // Disable orbit effect
								opacity: 1, // Opacity of orbit particles
								rotation: {
									value: 45, // Rotation angle for orbit
								},
								width: 1, // Width of orbit path
							},
							links: {
								blink: false, // Disable blinking effect for links
								color: {
									value: "#fff", // Color of the links
								},
								consent: false, // Consent required for link connections
								distance: 100, // Distance for link connection
								enable: false, // Disable link connections
								frequency: 1, // Frequency of link connections
								opacity: 1, // Opacity of links
								shadow: {
									blur: 5, // Blur effect for link shadows
									color: {
										value: "#000", // Color of link shadows
									},
									enable: false, // Disable shadow effect for links
								},
								triangles: {
									enable: false, // Disable triangle link connections
									frequency: 1, // Frequency of triangle connections
								},
								width: 1, // Width of links
								warp: false, // Disable warp effect for links
							},
							repulse: {
								value: 0, // Repulse value for particles
								enabled: false, // Disable repulse effect
								distance: 1, // Distance for repulsion
								duration: 1, // Duration of repulsion effect
								factor: 1, // Factor for repulsion strength
								speed: 1, // Speed of repulsion effect
							},
						},
						detectRetina: true, // Enable retina detection for particle rendering
					}}
				/>
			)}
		</motion.div>
	);
};
