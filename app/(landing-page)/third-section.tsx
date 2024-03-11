import Image from "next/image";
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Lora({
	subsets: ["latin"],
	weight: ["400"],
})

const ThirdSection = () => {
	return (<div className="flex flex-col justify-center items-center xl:pt-30 pt-28">
		<div className="2xl:w-3/5 w-3/5 xl:1/3 text-3xl xl:text-5xl font-medium mx-auto text-center">
			Consolidate tools. <br /> Cut costs.
		</div>
		<Image src={"/assets/svg/cut-cost.svg"} alt={"logo"} width={700} height={700} className="pt-10"/>
		<div className={cn("flex items-center justify-center text-xl xl:text-2xl pt-10 xl:py-4 px-8 text-center w-4/5 break-words max-w-[680px]", font.className)}>
			&quot;We got rid of nearly a dozen different tools because of what IpsumLab does for us.&quot;
		</div>
		<div className="flex space-x-4 items-center justify-center pl-10">
			<Image src={"/logos/logoipsum-253.svg"} alt={"logo"} width={200} height={200} className="w-24" />
			<div className="items-center justify-center">
				<div className="font-medium">Danny Johnson</div>
				<div>Director of Ops & Marketing, IpsumLab</div>
			</div>
		</div>
	</div>)
}

export default ThirdSection;
