import { useState, useEffect } from "react";
import menuCollection from "../json/menu_collections.json";

console.log("collection", menuCollection);

const DtNav = () => {
	const [showMenMenu, setShowMenMenu] = useState(false);
	const [showWomenMenu, setShowWomenMenu] = useState(false);
	const [showKidMenu, setShowKidMenu] = useState(false);
	const [showShoeMenu, setShowShoeMenu] = useState(false);
	const [showOutletMenu, setShowOutletMenu] = useState(false);
	return (
		<header className="flex text-white bg-black  text-sm  top-0">
			<div className=" justify-between lg:grid grid-cols-header  place-items-center mx-auto px-4 py-2 lg:py-0 ">
				<div className="w-full ">
					<a href="/" clasName="block md:pl-0">
						<svg className="h-10 w-10 text-white"></svg>
					</a>
					<div className="menu-item  flex flex-row items-center justify-center ">
						{menuCollection.map((data, index) => {
							return (
								<>
									<li
										className="list-none px-6 "
										onMouseEnter={() => {
											if(index == 0)
												setShowMenMenu(true)
											if(index == 1)
												setShowWomenMenu(true)
											if(index == 2)
												setShowKidMenu(true)
											if(index == 3)
												setShowShoeMenu(true)
											if(index == 4)
												setShowOutletMenu(true)
										}}
										onMouseLeave={() => {
											setShowMenMenu(false)
											setShowWomenMenu(false)
											setShowKidMenu(false)
											setShowShoeMenu(false)
											setShowOutletMenu(false)
										}}
									>
										<a href={"/collections/" + data.handle}>
											<span>{data.title}</span>
										</a>
										{showMenMenu && index == 0 && (
											<div className="sub-menu">
												{console.log("collection",data.sub_collections[0])}
											</div>
										)}
										{showWomenMenu && index == 1 && (
											<div className="sub-menu">
												{console.log("collection",data.sub_collections[1])}
											</div>
										)}
										{showKidMenu && index == 2 && (
											<div className="sub-menu">
												{console.log("collection",data.sub_collections[2])}
											</div>
										)}
										{showShoeMenu && index == 3 && (
											<div className="sub-menu">
												{console.log("collection",data.sub_collections[3])}
											</div>
										)}
										{showOutletMenu && index == 4 && (
											<div className="sub-menu">
												{console.log("collection",data.sub_collections[4])}
											</div>
										)}
									</li>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</header>
	);
};

export default DtNav;
