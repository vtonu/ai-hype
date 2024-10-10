"use client";
import { Badge } from "@/components/ui/badge";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";

export function SparklesAI() {
	return (
		<div className="h-[2rem] relative w-[6rem] flex flex-col items-center justify-center overflow-hidden rounded-lg">
			<div className="w-full absolute inset-0 h-screen">
				<SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.2}
					maxSize={1.2}
					particleDensity={1000}
					className="w-full h-full"
					particleColor="#228B22"
				/>
			</div>
			<Badge variant="outline">NotebookLM</Badge>
		</div>
	);
}
