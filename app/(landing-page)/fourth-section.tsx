"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TbSwitch3 } from "react-icons/tb";
import { PiEyeLight, PiPaletteLight } from "react-icons/pi";
import { Lora } from "next/font/google";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const tabs = [
  {
    icon: <TbSwitch3 className="text3xl mr-2 text-sky-600" />,
    header: "Vizualize, filter & sort any way you want",
    subheading:
      "Show only tasks assigned to you, or items marked as urgent. Break down any project in the way that's most helpful to you.",
    images: [
      { title: "Board", picture: "/assets/svg/FloatDoodle.svg" },
      { title: "Table", picture: "/assets/svg/GroovySittingDoodle.svg" },
      { title: "Timeline", picture: "/assets/svg/ReadingDoodle.svg" },
      { title: "Calendar", picture: "/assets/svg/LovingDoodle.svg" },
      { title: "Gallery", picture: "/assets/svg/MeditatingDoodle.svg" },
      { title: "List", picture: "/assets/svg/MessyDoodle.svg" },
    ],
  },
  {
    icon: <PiEyeLight className="text-3xl mr-2 text-sky-600" />,
    header: "Customize the info you track",
    subheading:
      "Create your own labels, tags, owners, and more, so everyone has context and everything stays organized.",
    image: "/assets/svg/MoshingDoodle.svg",
  },
  {
    icon: <PiPaletteLight className="text-3xl mr-2 text-sky-600" />,
    header: "Build any page, communicate any idea",
    subheading:
      "Everything is drag and drop in Notion - images, toggles, to-do's, even embedded databases.",
    image: "/assets/svg/PettingDoodle.svg",
  },
];

type Tab = {
  icon: JSX.Element;
  header: string;
  subheading: string;
  images?: { title: string; picture: string }[];
  image?: string;
};

const FourthSection = () => {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState<Tab>(tabs[2]);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  return (
    <>
      <div className="flex flex-col pt-20 xl:py-32 items-center justify-center">
        <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex">
          Powerful building blocks
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 md:row-span-1 gap-4 xl:gap-6 mt-8 px-8 md:px-16 xl:px-0 xl:w-3/4 2xl:w-[55%] mx-auto md:w-full">
          {tabs.map((tab, index) => (
            <div
              key={tab.header}
							className={`${index === 0 ? "xl:col-span-4 xl:row-span-3 md:col-span-2 flex-col" : "xl:col-span-2 xl:row-span-3 flex-col"} bg-[#f6f5f4] p-6 rounded-xl flex`}>
							<div className="flex flex-col">
								{tab.icon}
								<div className="text-lg font-medium mt-2">{tab.header}</div>
								<div className="mt-2">{tab.subheading}</div>
							</div>
							<>
								{index === 0 && tab.images && (
									<div className="">
										<Image src={tab.images[activeImageIdx].picture} alt="image" width={500} height={500} className="flex justify-center my-10 xl:my-16 rounded-xl mx-auto"/>
										<div className="grid grid-cols-5 xl:grid-cols-6 xl:w-1/2 mx-auto gap-1 xl:space-x-2">
											{tab.images.map((image, index) => (
												<div key={image.title} onClick={() => setActiveImageIdx(index)} className={`hover:bg-[#dbd9d9] ${index === activeImageIdx ? "rounded-md bg-[#dbd9d9] items-center justify-center flex p-1" : "rounded-md p-1 items-center justify-center bg-[#f6f5f4] hover:bg[#eae7e7]"}`}>
													<div className="text-sm items-center justify-center flex hover:cursor-pointer">
														{image.title}
													</div>
												</div>
											))}
									</div>
									</div>
								)}
							</>
							<>
								{index !== 0 && (
								<div className="mt-4">
										<Image src={tab?.image || ""} alt="image" width={500} height={500} className="mt-10 rounded-xl" />
								</div>
								)}
							</>
						</div>
					))}
				</div>

				<div className={cn("flex items-center justify-center text-xl xl:text-2xl pt-10 xl:py-4 px-8 text-center w-4/5 break-words max-w-[680px]", font.className)}>
					&quot;Notion adapts to your meeds. It's as minimal or as powerful as you need it to be.&quot;
				</div>
				<div className="flex space-x-4 items-center justify-center pl-10">
					<Image src={"/logos/logoipsum-253.svg"} alt={"logo"} width={200} height={200} className="w-24" />
					<div className="items-center justify-center">
						<div className="font-medium">Danny Johnson</div>
						<div>Director of Ops & Marketing, IpsumLab</div>
					</div>
				</div>
			</div>
		</>
		);
};

export default FourthSection;
