import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button"
import Link from "next/link"

import { BarChart, Code, DollarSign, Headphones, PaintBucket, Settings, UserPlus } from "lucide-react"
import { PiBookOpenTextLight, PiCalendar, PiFileThin, PiSparkleLight, PiTargetLight } from "react-icons/pi";

interface DropDownMenuProps {
	onClose: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {

	const handleLinkClick = () => {
		onClose();
	}

	return (<div className="w-screen h-screen bg-white px-2 items-center justify-center absolute right-0 lg:hidden" style={{ top: '3.5rem' }}>
		<Accordion defaultValue={"item-1"} className="pl-2" type="single" collapsible>
			<AccordionItem className="border-b" value="item-1">
				<AccordionTrigger>Product</AccordionTrigger>
				<AccordionContent defaultValue={"item-1"} className="">
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiSparkleLight className="h-6 w-6 mr-2 text-purple-600" />
						</div>
						<div>AI</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiFileThin className="h-6 w-6 mr-2 text-yellow-600" />
						</div>
						<div>Docs</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiBookOpenTextLight className="h-6 w-6 mr-2 text-red-600" />
						</div>
						<div>Wikis</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiTargetLight className="h-6 w-6 mr-2 text-blue-600" />
						</div>
						<div>Projects</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiCalendar className="h-6 w-6 mr-2 text-orange-600" />
						</div>
						<div>Calendar</div>
					</div>
				</AccordionContent>
				<AccordionContent>
					<div className="mb-2 cursor-pointer">Template gallery</div>
					<div className="mb-2 cursor-pointer">Customer stories</div>
					<div className="cursor-pointer">Connections</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem className="border-b" value="item-2">
				<AccordionTrigger>Solutions</AccordionTrigger>
				<AccordionContent defaultValue={"item-1"} className="">
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiSparkleLight className="h-6 w-6 mr-2 text-purple-600" />
						</div>
						<div>AI</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiFileThin className="h-6 w-6 mr-2 text-yellow-600" />
						</div>
						<div>Docs</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiBookOpenTextLight className="h-6 w-6 mr-2 text-red-600" />
						</div>
						<div>Wikis</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiTargetLight className="h-6 w-6 mr-2 text-blue-600" />
						</div>
						<div>Projects</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiCalendar className="h-6 w-6 mr-2 text-orange-600" />
						</div>
						<div>Calendar</div>
					</div>
				</AccordionContent>
				<AccordionContent>
					<div className="mb-2 cursor-pointer">Template gallery</div>
					<div className="mb-2 cursor-pointer">Customer stories</div>
					<div className="cursor-pointer">Connections</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem className="border-b" value="item-3">
				<AccordionTrigger>Resources</AccordionTrigger>
				<AccordionContent defaultValue={"item-1"} className="">
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiSparkleLight className="h-6 w-6 mr-2 text-purple-600" />
						</div>
						<div>AI</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiFileThin className="h-6 w-6 mr-2 text-yellow-600" />
						</div>
						<div>Docs</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiBookOpenTextLight className="h-6 w-6 mr-2 text-red-600" />
						</div>
						<div>Wikis</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiTargetLight className="h-6 w-6 mr-2 text-blue-600" />
						</div>
						<div>Projects</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiCalendar className="h-6 w-6 mr-2 text-orange-600" />
						</div>
						<div>Calendar</div>
					</div>
				</AccordionContent>
				<AccordionContent>
					<div className="mb-2 cursor-pointer">Template gallery</div>
					<div className="mb-2 cursor-pointer">Customer stories</div>
					<div className="cursor-pointer">Connections</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem className="" value="item-4">
				<AccordionTrigger>Download</AccordionTrigger>
				<AccordionContent defaultValue={"item-1"} className="">
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiSparkleLight className="h-6 w-6 mr-2 text-purple-600" />
						</div>
						<div>AI</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiFileThin className="h-6 w-6 mr-2 text-yellow-600" />
						</div>
						<div>Docs</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiBookOpenTextLight className="h-6 w-6 mr-2 text-red-600" />
						</div>
						<div>Wikis</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiTargetLight className="h-6 w-6 mr-2 text-blue-600" />
						</div>
						<div>Projects</div>
					</div>
					<div className="flex items-center cursor-pointer h-8">
						<div>
							<PiCalendar className="h-6 w-6 mr-2 text-orange-600" />
						</div>
						<div>Calendar</div>
					</div>
				</AccordionContent>
				<AccordionContent>
					<div className="mb-2 cursor-pointer">Template gallery</div>
					<div className="mb-2 cursor-pointer">Customer stories</div>
					<div className="cursor-pointer">Connections</div>
				</AccordionContent>
			</AccordionItem>
			<div className="box-border border-b">
				<Link href={"/"} className="flex flex-1 items-center justify-between py-4 font-medium">Pricing</Link>
			</div>
			<div className="box-border border-b">
				<Link href={"/"} className="flex flex-1 items-penter justify-between py-4 font-medium">Request a demo</Link>
			</div>
		</Accordion>
		<div className="space-y-4 flex flex-col pt-6 pl-2">
			<Button className="w-full">Get Notion free</Button>
			<Button variant={"outline"} className="w-full">Log in</Button>
		</div>
	</div>)
}

export default DropDownMenu
