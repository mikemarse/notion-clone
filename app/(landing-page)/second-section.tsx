import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";

const logos = [
	{image: "/logos/logoipsum-253.svg", Hello: "yes"},
	{image: "/logos/logoipsum-288.svg"},
	{image: "/logos/logoipsum-289.svg"},
	{image: "/logos/logoipsum-290.svg"},
	{image: "/logos/logoipsum-295.svg"},
	{image: "/logos/logoipsum-297.svg"},
	{image: "/logos/logoipsum-284.svg"},
	{image: "/logos/logoipsum-311.svg"},
	{image: "/logos/logoipsum-321.svg"},
	{image: "/logos/logoipsum-329.svg"},
	{image: "/logos/logoipsum-332.svg"},
	{image: "/logos/logoipsum-291.svg"}
]

const SecondSection = () => {
	return (<div className="pt-16 flex items-center justify-center flex-col">
		<div className="text-4xl w-3/4 text-center xl:text-5xl font-medium ">Millions run on IpsumLab every day</div>
		<div className="py-4 xl:1/4 px-8 text-center">Powering the world&apos;s best teams, from next-generation startups <br /> to established enterprises</div>
		<div className="text-blue-400 flex items-cetner hover:cursor-pointer hover:underline text-center">Read customer stories <PiArrowRight className="ml-2 mt-1"/></div>
		<div className="grid grid-cols-3 xl:grid-cols-4 items-center justify-center px-10 md:px-20 lg:px-0 lg:w-1/3 pt-10 gap-10 text-center mx-auto">
			{logos.map((logo, index) => (
				<div key={index}>
					<Image src={logo.image} alt="logo" width={100} height={200} className="cursor-pointer md:w-20 lg:w-28 xl:32"/>
				</div>
			))}
		</div>
				<div className="flex flex-col justify-center items-center mt-24 mb-32">
					<div className="font-medium text-xl lg:text-2xl">
						See what IpsumLab can do for your business
					</div>
					<div className="flex pt-4 space-x-4">
						<div>
							<Button className="py-1">
								<div className="flex items-center justify-center">
									<div className="text-lg">Get IpsumLab free</div>
								</div>
							</Button>
						</div>
						<div className="text-lg flex items-center justify-center text-center text-blue-500 hover:text-blue-400 hover:underline cursor-pointer">
							<div className="flex items-center justify-center text-center">
								Request a demo
							</div>
							<div>
								<PiArrowRight className="ml-1" />
							</div>
						</div>
					</div>
				</div>
	</div>)
}

export default SecondSection;
