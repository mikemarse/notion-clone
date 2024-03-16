'use client'

import Image from "next/image";
import { PiArrowRight, PiHouseFill, PiFlagCheckeredFill, PiCheckCircleFill, PiClipboardText, PiAirplaneTiltFill, PiCalendarCheck, PiBriefcase } from "react-icons/pi";

const tabs = [
	{
		icon: (
			<PiFlagCheckeredFill className="text-3xl text-blue-600 fill-blue-600" />
		),
		title: "Product roadmap",
	},
	{
		icon: (
			<PiCheckCircleFill className="text-3xl text-orange-600 fill-orange-600" />
		),
		title: "OKRs",
	},
	{
		icon: (
			<PiClipboardText className="text-3xl text-yellow-600 fill-yellow-600" />
		),
		title: "Meeting notes",
	},
	{
		icon: (
			<PiAirplaneTiltFill className="text-3xl text-red-600 fill-red-600" />
		),
		title: "Vacation planner",
	},
	{
		icon: (
			<PiCalendarCheck className="text-3xl text-green-600 fill-green-600" />
		),
		title: "Editorial calendar",
	},
	{
		icon: (
			<PiBriefcase className="text-3xl text-purple-600 fill-purple-600" />
		),
		title: "Habit tracker",
	},
]

const SeventhSection = () => {
	return (<div className="mt-32 flex flex-col justify-center items-center">
		<div className="text-3xl xl:text-5xl font-medium text-center flex">
			Endless ways to use it
		</div>
		<div className="flex items-center justify-center text-sky-600 cursor-pointer hover:underline text-lg mt-4">
			Browse all templates <PiArrowRight className="ml-1" />
		</div>
		<div className="grid grid-cols-12 grid-row-3 md:row-span-2 gap-4 xl:gap-6 mt-8 xl:w-[990px] 2xl:w-[70%] mx-auto w-4/5">
			<div className="bg-[#f6f5f4] flex flex-col col-span-12 lg:col-span-6 row-span-3 rounded-xl shadow-md cursor-pointer hover:bg-[#EAE7E7]">
				<div className="py-6 px-8 flex flex-col">
					<div className="space-y-8 mb-4">
						<PiHouseFill className="text-red-400 text-2xl mb-3" />
						<span className="font-medium text-lg">Company wiki</span>
						<div className="flex items-center text-center text-sky-600 hover:underline cursor-pointer">
							Get template <PiArrowRight className="ml-1" />
						</div>
					</div>
					<div className="flex items-center justify-center">
						<Image src={"/assets/svg/IceCreamDoodle.svg"} alt="Dog" width={500} height={500} className="mt-6" />
					</div>
				</div>
			</div>		
			{tabs.map((tab, index) => (
				<div className="bg-[#f6f5f4] cursor-pointer hover:bg-[#EAE7E7] py-6 px-8 col-span-12 sm:col-span-6 lg:col-span-3 rounded-xl shadow-md" key={index}>
					<div className="flex flex-col justify-center">
						<div>{tab.icon}</div>
						<div className="text-lg font-medium mt-2 flex">{tab.title}</div>
						<div className="flex items-center text-center mt-8">
							<span className="text-sky-600 hover:underline cursor-pointer flex items-center">Get template <PiArrowRight className="ml-1" /></span>
						</div>
					</div>
				</div>
			))}
		</div>
	</div>);
};

export default SeventhSection;
