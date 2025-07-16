import React from 'react';
import { Home, LayoutGrid, Tv, Leaf, Glasses } from 'lucide-react';

import workspace from '../../../../assets/images/workspace.png';
import screen from '../../../../assets/images/screen1.png';
import house from '../../../../assets/images/house.png';
import eco from '../../../../assets/images/eco.png';
import vr from '../../../../assets/images/vr.png';

import TextBlocks from '../../../../components/TextBlocks';

export default function BentoGrid() {
	return (
		<div id='features' className="text-white p-6">
			<TextBlocks
				eyebrow="BUSINESS SOLUTIONS"
				title="Scale Your Business, Maximize Efficiency, Drive Results."
				description="Transform your operations with cutting-edge automation tools designed to streamline workflows and boost productivity across your entire organization."
			/>
			<div className="max-w-7xl mx-auto">
				{/* Main Grid Layout */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:grid-rows-5">
					{/* Let Your Home Work for You */}
					<div className="bg-[#2C2C2C] rounded-2xl row-span-1 sm:row-span-3">
						<div className="p-6">
							<div className='mb-5'>
								<Home className="w-8 h-8" />
							</div>
							<h2 className="text-2xl font-semibold mb-3">
								Let Your Home Work for You.
							</h2>
							<p className="text-gray-400 text-sm leading-relaxed">
								Automate lights, appliances, and security.
							</p>
						</div>
						<div>
							<img src={house} alt="Smart Home" className="w-full h-auto mt-4 hover:scale-110 transition-all duration-200"  />
						</div>
					</div>

					{/* Samsung Smart TV */}
					<div className="bg-[#2C2C2C] relative rounded-2xl p-6 row-span-1 sm:row-span-2 sm:col-start-1 sm:row-start-4">
						<div className="flex items-center justify-between mb-4">
							<div className="">
								<Tv className="w-8 h-8" />
							</div>
						</div>
						<h3 className="text-lg font-medium mb-3">Transform your smart workspace</h3>
						<div className="flex items-center justify-center">
							<img src={workspace} alt="Smart Home" className="w-full hover:scale-[1.4] transition-all duration-200 scale-[1.28] sm:scale-[1.35] h-auto" />
						</div>
					</div>

					{/* Center Column - Easy to Use App */}
					<div className="bg-[#fff] rounded-3xl p-4 text-black relative overflow-hidden row-span-1 sm:row-span-4 sm:col-start-2 sm:row-start-1">
						<div className="text-center mb-6">
							<div className="py-3 rounded-lg inline-block">
								<LayoutGrid className="w-6 h-6 text-gray-700" />
							</div>
							<h3 className="text-xl font-semibold mb-2">Easy to Use Interface</h3>
							<p className="text-gray-600 text-sm">
								An easy-to-use app starts with your smartphone.
							</p>
						</div>

						{/* Phone Mockup */}
						<div className="relative w-64 h-96 mx-auto">
							<img
								src={screen}
								alt="Phone Screen"
								className="w-full object-cover hover:scale-110 transition-all duration-200"
							/>
						</div>
					</div>

					{/* Leaf Icon */}
					<div className="bg-[#2C2C2C] rounded-2xl p-6 flex flex-col items-center justify-center row-span-1 sm:col-start-2 sm:row-start-5">
						<h3 className="text-xl font-semibold mb-2">Want a customised UI as per your wish?</h3>
						<a
							href="https://demo.asbionix.in" target='_blank'
							className='px-4 py-3 sm:py-2 w-full rounded-full bg-white button text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
						>
							Customised UI Demo
						</a>
					</div>

					{/* Energy Saved */}
					<div className="bg-[#2C2C2C] mb-2 rounded-2xl p-6 row-span-1 sm:row-span-2 sm:col-start-3 sm:row-start-1">
						<div className="flex items-center justify-between mb-4">
							<div className="p-3 ">
								<Glasses className="w-8 h-8" />
							</div>
						</div>
						<h3 className="font-medium mb-2 text-2xl">Experience Live Demo in VR</h3>
						<p className="text-sm text-gray-400 mb-4">Step into our smart home showcase in immersive virtual reality.</p>

						{/* Progress Bar */}
						<div className="h-16 sm:h-22 w-full flex items-center justify-center mt-8">
							<img src={vr} alt="VR Demo" className='translate-y-3 sm:translate-y-5 scale-125 sm:scale-110 w-full hover:scale-125 transition-all duration-200' />
						</div>
					</div>

					{/* Energy Efficiency */}
					<div className="bg-[#2C2C2C] rounded-2xl p-6 row-span-1 sm:row-span-3 sm:col-start-3 sm:row-start-3">
						<div className='mb-5'>
							<Leaf className="w-8 h-8" />
						</div>

						<div>
							<h3 className="text-2xl font-medium mb-3">Energy Efficiency & Sustainability</h3>
							<p className="text-gray-400 text-sm leading-relaxed">
								Smart thermostats optimize heating & cooling based on weather & occupancy.
							</p>
							<div className="flex justify-center">
								<img src={eco} alt="Smart Home" className="w-3/4 h-auto mt-4 hover:scale-110 transition-all duration-200" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}