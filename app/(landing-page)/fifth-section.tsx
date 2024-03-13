'use client';
import Image from "next/image";
import { useRef, useState } from "react";
import { PiCubeFill, PiCompassLight, PiPaletteFill, PiMegaphoneLight, PiRocketLaunchFill, PiHammerFill } from "react-icons/pi"
import { motion } from "framer-motion";

const tabs = [
	{
		icon: <PiHammerFill />,
		name: "Engineering",
		image: "/assets/svg/RollerSkatingDoodle.svg",
	},
	{
		icon: <PiPaletteFill />,
		name: "Design",
		image: "/assets/svg/RollingDoodle.svg",
	},
	{
		icon: <PiRocketLaunchFill />,
		name: "Product",
		image: "/assets/svg/RunningDoodle.svg",
	},
	{
		icon: <PiMegaphoneLight />,
		name: "Marketing",
		image: "/assets/svg/SelfieDoodle.svg",
	},
	{
		icon: <PiCompassLight />,
		name: "Operations",
		image: "/assets/svg/SitReadingDoodle.svg",
	},
	{
		icon: <PiCubeFill />,
		name: "HR",
		image: "/assets/svg/SittingDoodle.svg",
	},
]

const FifthSection = () => {
	const [activeTab, setActiveTab] = useState(tabs[0])


	return (<div className="flex justify-center items-center flex-col px-8 md:px-0 mx-auto xl:w-[990px] 2xl:w-[70%]">
		{/* I missed two "See what notion can do for you, Get Notion free, Request a demo. Make sure to do them here" */}
		{/* Look at transition: border-color, ease-in, and ease-out for border animations */}
		<div></div>
		<div className="text-3xl xl:text-5xl font-medium justify-center items-center flex pb-6 pt-20 lg:pt-0">
			Every team, side-by-side
		</div>
		<div className="grid grid-cols-5 md:grid-cols-6 gap-4 xl:gap-6 xl:px-0">
			{tabs.map((tab, index) => (
				<div key={tab.name} className={`${index === 5 && "col-start-3  md:col-start-6"} transition-colors ease-in-out lg:shadow-sm lg:rounded-xl lg:border flex p-1 lg:p-8 cursor-pointer rounded-md ${activeTab.name === tab.name ? "lg:bg-white bg-[#eae7e7] lg:border border-gray-200 items-center justify-center flex p-1" : "lg:bg-[#f6f5f4] bg-white p-1 items-center justify-center hover:bg-[#eae7e7] border-transparent"}`}
					onClick={() => setActiveTab(tab)}>
					<div className="flex flex-col items-center lg:justify-center mx-auto">
						<div className="hidden lg:flex text-5xl">{tab.icon}</div>
						<div className="font-medium text-sm xl:text-lg mt-1">{tab.name}</div>
					</div>
				</div>
			))}
		</div>
		<div className="my-4 px-8 lg:px-16 md:px-0 md:4/5 xl:w-[990px] xl:h-[638px] 2xl:w-[70%] rounded-xl bg-[#f6f5f4] shadow-md border border-gray-200 md:w-3/5 flex items-center justify-center">
			{activeTab && (<div className="flex items-center justify-center flex-col rounded-xl">
				<Image src={activeTab.image} alt="icon" width={1025} height={500} className="bg-[#f6f5f4] xl:w-[990px] xl:h-[638px]  md:p-10 p-20 xl:p-28" />
			</div>)}
		</div>
	</div>)
}

export default FifthSection;
