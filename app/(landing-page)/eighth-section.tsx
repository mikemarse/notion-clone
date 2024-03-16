import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";

const EighthSection = () => {
	return (<div className="mt-24 border-b border-gray-200">
		<div className="flex flex-col justify-center items-center text-center">
			<div className="text-6xl font-medium">
				Get started for free
			</div>
			<div className="mt-4 text-lg text-[#121212]">
				Play around with it first. Pay and add your team later.
			</div>
			<div className="flex items-center justify-center my-4">
				<Button className="">Try IpsumLab free</Button>
				<div className="flex items-center justify-center text-sky-500 hover:underline cursor-pointer ml-4">Request a demo <PiArrowRight className="ml-1" /></div>
			</div>
			<Image src={"/assets/svg/BikiniDoodle.svg"} alt="messy" width={400} height={400} />
		</div>
	</div>);
};

export default EighthSection;
