import Image from "next/image";
import {PiFacebookLogoFill, PiInstagramLogo, PiLinkedinLogoFill, PiTwitterLogoFill, PiYoutubeLogoFill, PiGlobe } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "./ui/button";



const Footer = () => {
	return (<div className="flex lg:items-center pb-10 flex-col px-8 lg:px-0 w-full">
		<div className="lg:flex lg:space-x-32 md:px-0 py-20">
			<div className="flex flex-col items-start mb-10">
				<Image src={"/logos/main-logo.svg"} alt="main" width={1025} height={500} className="w-28" />
				<div className="flex mt-4">
					<div className="hover:bg-[#eae7e7] rounded-md p-1 cursor-pointer hover:text-[#121212] text-gray-500">
						<PiInstagramLogo className="text-2xl" />
					</div>
					<div className="hover:bg-[#eae7e7] rounded-md p-1 cursor-pointer hover:text-[#1DA1F2] text-gray-500">
						<PiTwitterLogoFill className="text-2xl" />
					</div>
					<div className="hover:bg-[#eae7e7] rounded-md p-1 cursor-pointer hover:text-[#0077B5] text-gray-500">
						<PiLinkedinLogoFill className="text-2xl" />
					</div>
					<div className="hover:bg-[#eae7e7] rounded-md p-1 cursor-pointer hover:text-[#4267B2] text-gray-500">
						<PiFacebookLogoFill className="text-2xl" />
					</div>
					<div className="hover:bg-[#eae7e7] rounded-md p-1 cursor-pointer hover:text-[#FF0000] text-gray-500">
						<PiYoutubeLogoFill className="text-2xl" />
					</div>
				</div>
				<div className="flex justify-center items-center mt-3">
					<Button variant={"outline"} className="flex justify-center items-center">
						<PiGlobe className="mr-1"/> English <IoIosArrowDown className="ml-1"/>
					</Button>
				</div>
			</div>
			<div className="lg:flex lg:space-x-32">
				<ul className="space-y-1 mb-8">
					<li className="cursor-default">Product</li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">AI</span></li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">Docs</span></li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">Wikis</span></li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">Projects</span></li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">Calendar</span></li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">What&apos;s new</span></li>
				</ul>
				<ul className="space-y-2 mb-8">
					<li className="cursor-default">Download</li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">iOS &amp; Android</span></li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">Mac &amp; Windows</span></li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">Calendar</span></li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">Web Clipper</span></li>
				</ul>
				<ul className="space-y-2 mb-8">
					<li className="cursor-default">Get started</li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">Switch from Confluence</span></li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">Switch from Asana</span></li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">Switch from Evernote</span></li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">Compare vs Monday</span></li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">Compare vs Clickup</span></li>
					<li><span className="text-[#00000099] hover:underline cursor-pointer hover:text-blue-500">Compare vs Jira</span></li>
				</ul>
			</div>
		</div>
	</div>);
};

export default Footer;
