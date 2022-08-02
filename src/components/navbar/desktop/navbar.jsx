import { useState, useEffect } from "react";
import menuCollection from "../json/menu_collections.json";

console.log("collection", menuCollection);

const DtNav = () => {
	return (
		<header className="text-white bg-black relative text-sm  top-0">
			<div className="flex justify-between lg:grid grid-cols-header place-items-center mx-auto container px-4 py-2 lg:py-0 ">
				<div className="flex w-full">
					<a href="/" clasName="block md:pl-0">
						<svg className="h-10 w-10 text-white"></svg>
					</a>
					<div className="menu-item">
						{menuCollection.map((data) => {
							return (
								<>
									<li className="list-none ">
										<a href={"/collections/"+ data.handle}>
											<span>{data.title}</span>
										</a>
										<div className="sub-menu">
											<slot></slot>
										</div>
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
