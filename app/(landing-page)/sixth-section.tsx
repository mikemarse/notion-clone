"use client";
import Image from "next/image";
import { useState } from "react";
import { TbSwitch3 } from "react-icons/tb";
import { PiArrowRight } from "react-icons/pi";
import { Lora } from "next/font/google";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const font = Lora ({
	subsets: ['latin'],
	weight: ['400'],
})

const tabs = [
	"/assets/svg/SprintingDoodle.svg",
	"/assets/svg/StrollingDoodle.svg",
	"/assets/svg/SwingingDoodle.svg",
	"/assets/svg/UnboxingDoodle.svg",
]

const tabDesc = [
	"Community meet-up in Tokyo",
	"IpsumLab ambassador event in New York",
	"Sharing IpsumLab setups in san Francisco",
	"Coffee pop-up in London",
]

const SixthSection = () => {
  return <div className="mt-20 flex flex-col justify-center items-center">
		<div className="text-3xl w-3/4 xl:text-5xl font-medium xl:w-1/2 text-center">
			Join a global movement.<br />Unlease your creativity.		
		</div>
		<div className="text-center mt-3">
			Our vibrant community produces content, teaches courses, and leads events all over <br /> the world.
		</div>
		<div className="flex items-center justify-center text-sky-600 cursor-pointer hover:underline text-lg mt-4">
			Learn more <PiArrowRight className="ml-2" />
		</div>
		<div className="grid grid-cols-12 grid-row-6 md:row-span-2 gap-4 xl:gap-6 mt-8 px-8 md:px-16 xl:px-0 xl:w-[990px] 2xl:w-[70%] mx-auto md:w-full">
			<div className="col-span-12 md:col-span-4 bg-[#f6f5f4] flex flex-col justify-center items-start p-8 rounded-xl">
				<div className="text-[#0A85D1] text-6xl">1M+</div>
				<div>community members</div>
			</div>
			<div className="col-span-12 md:col-span-4 bg-[#f6f5f4] flex flex-col justify-center items-start p-8 rounded-xl">
				<div className="text-[#0A85D1] text-6xl">150+</div>
				<div>community groups</div>
			</div>
			<div className="col-span-12 md:col-span-4 bg-[#f6f5f4] flex flex-col justify-center items-start p-8 rounded-xl">
				<div className="text-[#0A85D1] text-6xl">50+</div>
				<div>countries represented</div>
			</div>
			<div className="col-span-12 md:col-span-6 bg-[#f6f5f4] flex flex-col justify-center items-start p-4 rounded-xl">
				<div className="p-4">
					<div className="font-medium">An always-on support network</div>
					<div className="text-md max-w-[350px]">Swap setups and share tips in over 149 online communities.</div>
				</div>
				<div className="w-full flex items-center justify-center">
					<Image src={"/assets/svg/SleekDoodle.svg"} alt="IpsumLab" height={400} width={400} className="mt-2" />
				</div>
			</div>
			<div className="col-span-12 md:col-span-6 bg-[#f6f5f4] flex flex-col justify-center items-start p-4 rounded-xl">
				<div className="p-4">
					<div className="font-medium">Choose your language</div>
					<div className="text-md max-w-[425px]">IpsumLab currently supports English, Korean, Japanese, French, German, Spanish, and Portuguese. With more to come!</div>
				</div>
				<div className="w-full flex items-center justify-center">
					<Image src={"/assets/svg/ZombieingDoodle.svg"} alt="IpsumLab" height={400} width={400} className="mt-2" />
				</div>
			</div>
			<div className="col-span-12 lg:col-span-8 row-span-1 md:row-span-3 bg-[#f6f5f4] flex flex-col justify-center items-center p-4 rounded-xl">
				<Carousel className="w-full" opts={{ align: "start", loop: true, }} >
					<CarouselContent>
						{Array.from({ length: 4 }).map((_, index) => (
							<CarouselItem key={index}>
								<div className="p-1">
									<Card>
										<CardContent className="flex aspect-square items-center justify-center p-4">
											<div className="flex flex-col items-center text center justify-center space-y-8">
												<Image src={tabs[index]} alt="IpsumImage" width={500} height={500} className="" />
												<p className="text-lg">{tabDesc[index]}</p>
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
			<div className="xl:col-start-9 md:col-span-4 col-span-12 lg:col-span-4 row-span-1 bg-[#f6f5f4] flex flex-col p-4 rounded-xl">
				<div className="flex flex-col space-y-4 w-full">
					<div className="flex items-center space-x-2 w-full">
						<Image src={"/assets/svg/SelfieDoodle.svg"} alt="headshot" width={100} height={100} className="w-12 h-12 rounded-full border border-gray-200" />
						<div className="flex flex-col">
							<p className="font-medium">Jessica Simpson</p>
							<p className="text-[#00000099]">@JessSimp</p>
						</div>
					</div>
					<div className="text-[#121212]">
						I used to HATE documenting things. And then I started using <span className="text-[#1B95E0]">@IpsumLab</span> and I document a lot. A LOT A LOT. Now I just realize that it wasn't that I hated documenting, I just hated Google Docs.
					</div>
				</div>
			</div>
			<div className="xl:col-start-9 md:col-span-4 col-span-12 lg:col-span-4 row-span-1 bg-[#f6f5f4] flex flex-col p-4 rounded-xl">
				<div className="flex flex-col space-y-4 w-full">
					<div className="flex items-center space-x-2 w-full">
						<Image src={"/assets/svg/MoshingDoodle.svg"} alt="headshot" width={100} height={100} className="w-12 h-12 rounded-full border border-gray-200" />
						<div className="flex flex-col">
							<p className="font-medium">Theodor Sues</p>
							<p className="text-[#00000099]">@DrSuess</p>
						</div>
					</div>
					<div className="text-[#121212]">
						One of the most incredible things about <span className="text-[#1B95E0]">@IpsumLab</span> the dynamic community being built - creating and sharing at its best.
					</div>
				</div>
			</div>
			<div className="xl:col-start-9 md:col-span-4 col-span-12 lg:col-span-4 row-span-1 bg-[#f6f5f4] flex flex-col p-4 rounded-xl">
				<div className="flex flex-col space-y-4 w-full">
					<div className="flex items-center space-x-2 w-full">
						<Image src={"/assets/svg/DoogieDoodle.svg"} alt="headshot" width={100} height={100} className="w-12 h-12 rounded-full border border-gray-200" />
						<div className="flex flex-col">
							<p className="font-medium">Jimmy Neutron</p>
							<p className="text-[#00000099]">@Neutron</p>
						</div>
					</div>
					<div className="text-[#121212]">
						<span className="text-[#1B95E0]">@IpsumLab</span> Truly impressed by the velocity and quality of your work. Making using Notion even more fun week after week!
					</div>
				</div>
			</div>
		</div>
	</div>;
};

export default SixthSection;
