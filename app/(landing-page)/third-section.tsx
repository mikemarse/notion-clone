import Image from "next/image";
import { Lora } from "next/font/google";
import { cn } from "@lib/utils";

const font = Lora({
	subsets: ["latin"],
	weight: ["400"],
})

const ThirdSection = () => {
	return (<div className="relative flex justify-center items-center items-center xl:pt-30 pt-20">
		<div className="2xl:w-3/5 w-3/5 xl:1/3 text-3xl xl:text-5xl font-medium mx-auto text-center">
			Consolidate tools. <br /> Cut costs.
		</div>
		<Image src={"/assets/svg/cut-cost.svg"} alt={"logo"} width={700} height={700}/>
	</div>)
}

export default ThirdSection;
