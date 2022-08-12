import { useEffect, useState } from "react";
import client from "../../client";
const Home = () => {
	const [landing, setLanding] = useState([]);
	useEffect(() => {
		client
			.fetch(
				`
      *[_type == "uahome" ]{
        heading,
        description,
        bannerhref,
        buttontext,
      }
      `
			)
			.then((data) => {
				setLanding(data);
			})
			.catch(console.error);
	}, []);

  console.log(landing)
	return (
		<div>
			<h1 className="text-4xl">Home Page</h1>
			{/* <a href="/products/" className="text-2xl bg-black text-white hover:bg-slate-600 rounded w-[350px]">
			VIEW ALL PRODUCTS
			</a> */}
			<a href="/collections/" className="text-2xl ml-10 bg-black text-white hover:bg-slate-600 rounded w-[350px]">
			VIEW ALL COLLECTIONS
			</a>
		
			<div>
				{landing.map((data) => (
					<div className="relative text-black" key={data}>
						<video src={data.bannerhref}></video>
            <div className="absolute top-1/4 left-10">
            <h1 className="text-8xl bold w-3">{data.heading}</h1>
            <p className="w-1/2 ">{data.description}</p>
            <button className="btn btn-hero justify-center btn-dark bg-black text-white  w-full md:w-fit ">Shop Iso-Chill</button>
            </div>
           
					</div>
				))}
			</div>
			<div></div>
		
		</div>
	);
};

export default Home;
