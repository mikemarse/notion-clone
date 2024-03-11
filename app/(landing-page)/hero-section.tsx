"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
	PiArrowRight,
	PiArrowRightBold,
	PiBookOpenTextLight,
	PiCalendar,
	PiFileThin,
	PiSparkleLight,
	PiTargetLight,
} from "react-icons/pi";

const tabs = [
	{
		icon: (
			<PiSparkleLight className="text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded-full fill-purple-600" />
		),
		name: "AI",
		description: "Ask literally anything. IpsumLab will answer.",
		more: (
			<div className="text-purple-600 flex items-center">
				Learn more <PiArrowRight className="text-sm ml-1" />
			</div>
		),
		image: "/assets/svg/DoogieDoodle.svg",
	},
	{
		icon: (
			<PiFileThin className="text-3xl mr-2 text-yellow-600 bg-yellow-100 p-1 rounded-full" />
		),
		name: "Docs",
		description: "Simple, powerful, beautiful. Next-gen notes & docs.",
		more: (
			<div className="text-yellow-600 flex items-center">
				Learn more <PiArrowRight className="text-sm ml-1" />
			</div>
		),
		image: "/assets/svg/BalletDoodle.svg",
	},
	{
		icon: (
			<PiBookOpenTextLight className="text-3xl mr-2 text-red-600 bg-red-100 p-1 rounded-full" />
		),
		name: "Wikis",
		description: "Centralize your knowledge. No more hunting for answers.",
		more: (
			<div className="text-red-600 flex items-center">
				Learn more <PiArrowRight className="text-sm ml-1" />
			</div>
		),
		image: "/assets/svg/CoffeeDoddle.svg",
	},
	{
		icon: (
			<PiTargetLight className="text-3xl mr-2 text-blue-600 bg-blue-100 p-1 rounded-full" />
		),
		name: "Projects",
		description: "Manage complex projects without the chaos.",
		more: (
			<div className="text-blue-600 flex items-center">
				Learn more <PiArrowRight className="text-sm ml-1" />
			</div>
		),
		image: "/assets/svg/DancingDoodle.svg",
	},
	{
		icon: (
			<PiCalendar className="text-3xl mr-2 text-orange-600 bg-orange-100 p-1 rounded-full" />
		),
		name: "Calendar",
		description: "Manage your time and projects, together.",
		more: (
			<div className="text-orange-600 flex items-center">
				Learn more <PiArrowRight className="text-sm ml-1" />
			</div>
		),
		image: "/assets/svg/DogJumpDoodle.svg",
	},
];

const HeroSection = () => {
	const [activeTab, setActiveTab] = useState(tabs[0]);

	const isSmallScreen = useMediaQuery({ maxWidth: 767 });

	return (
		<div className="md:items-center flex flex-col">
			<div className="font-medium 2xl:w-1/3 xl:w-1/2 md:w-2/3 lg:px-0 px-8 text-5xl xl:text-6xl flex justify-center xl:tp-14 text-center pt-6">
				Write, plan, share. <br /> With AI at your side.
			</div>
			<p className="font-medium text-2xl pt-4 text-center w-2/3 mx-auto">
				IpsumLab is the connected workspace where better, faster work happens.
			</p>
			<div className="flex gap-4 pt-6 items-center justify-center">
				<Link href="/">
					<Button className="py-1">
						<div className="flex items-center justify-center">
							<div className="text-lg">Get IpsumLab free</div>
							<div className="ml-2">
								<PiArrowRightBold />
							</div>
						</div>
					</Button>
				</Link>
				<Link href={"/"} className="group">
					<div className="text-lg flex items-center justify-center text-center text-blue-500 group-hover:text-blue-400 group-hover:underline">
						<div className="flex items-center justify-center text-center">
							Request a demo
						</div>
						<div>
							<PiArrowRight className="ml-1" />
						</div>
					</div>
				</Link>
			</div>
			<div className="pt-8 items-center justify-center">
				<Image
					src={"/assets/svg/DumpingDoodle.svg"}
					alt="Hero"
					width={1000}
					height={1000}
					className="flex items-center justify-center mx-auto w-60 xl:w-80"
				/>
			</div>
			{isSmallScreen ? (
				<div className="px-8">
					<div className="grid grid-cols-5 md:row-span-1 gap-4 xl:gap-6 mt-8 xl:px-0">
						{tabs.map((tab) => (
							<motion.div
								key={tab.name}
								className={`flex p-1 md:p-8 cursor-pointer ${activeTab.name === tab.name
										? "rounded-md md:rounded-xl bg-[#f6f5f4] md:bg-white border-gray-200 md:border items-center justify-center flex p-1"
										: "md-bg[#f6f5f4] rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7]"
									}`}
								onClick={() => setActiveTab(tab)}
							>
								<div className="flex flex-col items-center md:justify-center mx-auto">
									<div className="hidden md:flex text-4xl">{tab.icon}</div>
									<div className="font-medium text-sm xl:text-lg mt-1">
										{tab.name}
									</div>
								</div>
							</motion.div>
						))}
					</div>
					{/* content based on which tab is active */}
					<div className="pt-6 md:py-10 lg:px-16 xp:px-0 w-full">
						{activeTab && (
							<div className="flex justify-center items-center flex-col">
								<Image
									src={activeTab.image}
									alt="Hero"
									height={1000}
									width={1000}
									className="w-full border p-20 xl:p-40 rounded-xl"
								/>
							</div>
						)}
					</div>
				</div>
			) : (
				<div className="flex xl:space-x-4 items-center justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-[990px] 2xl:w-[70%]">
					{tabs.map((tab) => (
						<motion.div
							key={tab.name}
							className={`xl:flex justify-center space-x-4 xl:pt-4 sm:my-10 xl:py-0 w-60 h-40 min-w-40 ${activeTab === tab
									? "border rounded-xl pt-2 bg-white"
									: "shadow-md rounded-xl pt-2 bg-[#f6f5f4]"
								}`}
							onMouseEnter={() => setActiveTab(tab)}
						>
								{/* I changed this one to have h-full to try to fix the learn more not being aligned properly on all the boxes*/}
							<div className="px-2 h-full">
								<div className="flex items-center">
									<div>{tab.icon}</div>
									<div className="text-2xl font-medium">{tab.name}</div>
								</div>
								{/* HAD TO COMMENT THIS OUT. 
								<motion.div className="flex flex-col text-sm" initial={{ y: 0 }} animate={{ y: activeTab === tab ? 10 : 25 }}
									transition={{ duration: 0.2 }}
								>*/}
								<div className="flex flex-col text-sm mt-2"> {/*I added items-start to try to get the learn more to line up*/}
									<div className="h-[70px]">
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.3 }}
										>
											{tab.description}
										</motion.div>
									</div>
										{activeTab === tab && (
											<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.0 }} className="text-sm mt-2 font-semibold">
												{tab.more}
											</motion.div>
										)}
										{/*
								</motion.div>*/}
							</div>
							</div>
						</motion.div>
					))}
				</div>
			)}
			<div className="hidden md:flex py-1 px-8 md:px-0 md:w-3/4 xl:w-[990px%] 2xl:w-[70%]">
				{activeTab && (
					<div className="md:flex items-center justify-center space-x-6 hover:cursor-pointer w-full">
						<Image src={activeTab.image} alt="Hero" width={500} height={500} className="xl:w-[1022px] xl:h-[638px] lg:w-4/5 p-10 xl:p-20 border rounded-xl shadow-md"/>	
					</div>
				)}
			</div>
		</div>
	);
};

export default HeroSection;
