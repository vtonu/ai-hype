"use client";

import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { Sparkle } from "lucide-react";

export function HypeToast() {
	const { toast } = useToast();

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => {
				toast({
					title: "Success!",
					description: "Company hype submitted.",
				});
			}}
		>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Sparkle className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
					</TooltipTrigger>
					<TooltipContent>
						<p>Hype Company</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</Button>
	);
}
