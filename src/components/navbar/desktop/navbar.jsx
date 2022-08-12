import { useState, useEffect } from "react";
import menuCollection from "../json/menu_collections.json";
import NavSearch from "./search.client";

const DtNav = () => {
	// using useState to trigger different parts of the navbar when hover
	const [showMenMenu, setShowMenMenu] = useState(false);
	const [showWomenMenu, setShowWomenMenu] = useState(false);
	const [showKidMenu, setShowKidMenu] = useState(false);
	const [showShoeMenu, setShowShoeMenu] = useState(false);
	const [showOutletMenu, setShowOutletMenu] = useState(false);
	const [showSearchBar, setSearchBar] = useState(false);
	return (
		<>
		<header className="flex sticky text-white  bg-black top-0 text-sm  z-10" >
			<div className="w-full  justify-between lg:grid grid-cols-header  place-items-center mx-auto px-4 py-2 lg:py-0 "
			>
				<div className="flex ">
					<a href="/" clasName="block  md:pl-0 ">
						<svg
							className="h-10 w-10 text-white"
							viewBox="0 0 233 138"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<title>UA_Logo_Wht</title>
							<g id="5" stroke="currentColor" fill="none" fill-rule="evenodd">
								<g id="UA_Logo_Wht" fill="currentColor" fill-rule="nonzero">
									<path
										d="M154.68,68.52 C153.81,69.16 152.78,69.9 151.53,70.78 C143.53,76.45 131.92,80.33 116.82,80.33 L115.82,80.33 C100.73,80.33 89.11,76.45 81.11,70.78 C79.87,69.9 78.84,69.16 77.97,68.52 C78.84,67.87 79.87,67.13 81.11,66.25 C89.11,60.59 100.73,56.7 115.82,56.7 L116.82,56.7 C131.92,56.7 143.54,60.59 151.53,66.25 C152.78,67.13 153.81,67.87 154.68,68.52 M232.68,21.8 C232.68,21.8 225.81,16.55 204.08,8.57 C185,1.57 170.61,0 170.61,0 L170.67,41.14 C170.67,46.93 169.09,52.22 164.67,58.25 C148.46,52.34 133.13,48.71 116.38,48.71 L116.38,48.71 C99.63,48.71 84.31,52.34 68.1,58.25 C63.67,52.25 62.1,46.93 62.1,41.14 L62.17,0 C62.17,0 47.68,1.55 28.59,8.57 C6.87,16.57 0,21.8 0,21.8 C0.9,40.47 17.25,57.07 43,68.52 C17.23,79.96 0.88,96.52 0,115.24 C0,115.24 6.87,120.48 28.59,128.47 C47.67,135.47 62.07,137.04 62.07,137.04 L62,95.89 C62,90.1 63.59,84.81 68,78.79 C84.21,84.69 99.53,88.32 116.28,88.32 L116.28,88.32 C133.03,88.32 148.36,84.69 164.57,78.79 C169,84.79 170.57,90.1 170.57,95.89 L170.51,137.04 C170.51,137.04 184.9,135.48 203.98,128.47 C225.71,120.47 232.58,115.24 232.58,115.24 C231.68,96.56 215.33,79.96 189.58,68.52 C215.35,57.07 231.7,40.52 232.58,21.8"
										id="Shape"
									></path>
								</g>
							</g>
						</svg>
					</a>
					<div className="menu-item  flex flex-row items-center justify-center  ">
						{menuCollection.map((data, index) => {
							return (
								<>
									<li
										className="list-none px-6 "
										onMouseEnter={() => {
											// this sets the the state to true when hover on a specific index, the menu items is in json format
											index == 0 ? setShowMenMenu(true) : setShowMenMenu(false);
											index == 1
												? setShowWomenMenu(true)
												: setShowWomenMenu(false);
											index == 2 ? setShowKidMenu(true) : setShowKidMenu(false);
											index == 3
												? setShowShoeMenu(true)
												: setShowShoeMenu(false);
											index == 4
												? setShowOutletMenu(true)
												: setShowOutletMenu(false);
										}}
										
										onMouseLeave={() => {
											//sets everything to false when mouse leaves
											setShowMenMenu(false);
											setShowWomenMenu(false);
											setShowKidMenu(false);
											setShowShoeMenu(false);
											setShowOutletMenu(false);
										}}
									>
										<a className="" href={"/collections/" + data.handle}>
											<span>{data.title}</span>
										</a>
										{/* this shows the specific menu at the specific index when hover when both conditions is true */}
										{showMenMenu && index == 0 && (
											<div className="sub-menu absolute w-full left-0 pt-6  h-auto  bg-white z-10 text-black   flex flex-row  justify-center">
												{data.sub_collections.map((subcollection, index) => {
													return (
														<>
															<ul className="ml-6">
																<p className="font-semibold mb-4 text-base  text-left">
																	<span>{subcollection.menu_title}</span>
																</p>
																{subcollection.sub_collections.map(
																	(subsubcollection) => {
																		return (
																			<>
																				<a
																					href={
																						"/collections/" +
																						subsubcollection.handle
																					}
																					className="flex mb-4 flex-row  text-left hover:underline"
																				>
																					{subsubcollection.title}
																				</a>
																			</>
																		);
																	}
																)}
															</ul>
														</>
													);
												})}
											</div>
										)}
										{showWomenMenu && index == 1 && (
											<div className="sub-menu absolute w-full left-0 pt-6 h-auto  bg-white z-10 text-black   flex flex-row  justify-center">
												{data.sub_collections.map((subcollection, index) => {
													return (
														<>
															<ul className="ml-6">
																<p className="font-semibold mb-4 text-base  text-left">
																	<span>{subcollection.menu_title}</span>
																</p>
																{subcollection.sub_collections.map(
																	(subsubcollection) => {
																		return (
																			<>
																				<a
																					href={
																						"/collections/" +
																						subsubcollection.handle
																					}
																					className="flex mb-4 flex-row  text-left hover:underline"
																				>
																					{subsubcollection.title}
																				</a>
																			</>
																		);
																	}
																)}
															</ul>
														</>
													);
												})}
											</div>
										)}
										{showKidMenu && index == 2 && (
											<div className="sub-menu absolute w-full left-0 pt-6 h-auto  bg-white z-10 text-black   flex flex-row  justify-center">
												{data.sub_collections.map((subcollection, index) => {
													return (
														<>
															<ul className="ml-6">
																<p className="font-semibold mb-4 text-base  text-left">
																	<span>{subcollection.menu_title}</span>
																</p>
																{subcollection.sub_collections.map(
																	(subsubcollection) => {
																		return (
																			<>
																				<a
																					href={
																						"/collections/" +
																						subsubcollection.handle
																					}
																					className="flex mb-4 flex-row  text-left hover:underline"
																				>
																					{subsubcollection.title}
																				</a>
																			</>
																		);
																	}
																)}
															</ul>
														</>
													);
												})}
											</div>
										)}
										{showShoeMenu && index == 3 && (
											<div className="sub-menu absolute w-full left-0 pt-6 h-auto  bg-white z-10 text-black   flex flex-row  justify-center">
												{data.sub_collections.map((subcollection, index) => {
													return (
														<>
															<ul className="ml-6">
																<p className="font-semibold mb-4 text-base  text-left">
																	<span>{subcollection.menu_title}</span>
																</p>
																{subcollection.sub_collections.map(
																	(subsubcollection) => {
																		return (
																			<>
																				<a
																					href={
																						"/collections/" +
																						subsubcollection.handle
																					}
																					className="flex mb-4 flex-row  text-left hover:underline"
																				>
																					{subsubcollection.title}
																				</a>
																			</>
																		);
																	}
																)}
															</ul>
														</>
													);
												})}
											</div>
										)}
										{showOutletMenu && index == 4 && (
											<div className="sub-menu absolute w-full left-0 pt-6 h-auto  bg-white z-10 text-black   flex flex-row  justify-center">
												{data.sub_collections.map((subcollection, index) => {
													return (
														<>
															<ul className="ml-6">
																<p className="font-semibold mb-4 text-base  text-left">
																	<span>{subcollection.menu_title}</span>
																</p>
																{subcollection.sub_collections.map(
																	(subsubcollection) => {
																		return (
																			<>
																				<a
																					href={
																						"/collections/" +
																						subsubcollection.handle
																					}
																					className="flex mb-4 flex-row  text-left hover:underline"
																				>
																					{subsubcollection.title}
																				</a>
																			</>
																		);
																	}
																)}
															</ul>
														</>
													);
												})}
											</div>
										)}
									</li>
								</>
							);
						})}
						<div className="">

							<svg
								onClick={()=>{
									// this is to show the search bar on click and when u click the icon again it disables
									//  this needs some work as we need to be able to click anywhere else to close the search bar
									showSearchBar == true ? setSearchBar(false) : setSearchBar(true)
								}}

								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
								className="text-white h-6 w-6 xl:h-5 xl:w-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
			{
				// this is when the showSearchBar is true it will render that component to show
				showSearchBar == true && (
					<NavSearch />
				)
			}
			
		</header>

		</>
		
	);
};

export default DtNav;
