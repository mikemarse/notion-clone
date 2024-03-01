'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, AlignJustify } from "lucide-react"
import Link from "next/link"
import DropDownMenu from "./drop-down-menu"

const ActionButtons = () => {

	const [isDropdownVisible, setDropdownVisible] = useState(false)

	const toggleDropdown = () => {
		setDropdownVisible(!isDropdownVisible);
	}

	const closeDropdown = () => {
		setDropdownVisible(false)
	}

	return (
		<div className="pr-2">
			<div className="flex items-center justify-center">
				<div className="flex xl:space-x-2">
					<Link href={'/contact-sales'} className="hidden lg:flex items-center">
						<Button className="hidden lg:flex items-center border-none text-md" variant={'outline'}>Request a demo</Button>
					</Link>
					<div className="items-center lg:flex hidden font-thin">|</div>
				</div>
				<div className="flex lg:space-x-2 items-center pl-2">
					<div>
						<Button className="hidden lg:flex items-center border-none text-md" variant={'outline'}>Log in</Button>
					</div>
					<div>
						<Button className="hidden lg:block">Get Notion free</Button>
					</div>
				</div>
			</div>
			{isDropdownVisible && (
				<div onClick={toggleDropdown} className="rounded-full lg:hidden">
					<X className="h-6 w-6 items-center justify-center rounded-full" />
				</div>
			)}
			{!isDropdownVisible && (
				<div onClick={toggleDropdown} className="flex lg:hidden">
					<AlignJustify className="h-6 w-6 items-center justify-center" />
				</div>
			)}
			{isDropdownVisible && <DropDownMenu onClose={closeDropdown} />}
		</div>
	)
}

export default ActionButtons;
