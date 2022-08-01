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
			<h1 className="text-xl">Home Page</h1>
			<div>
				{landing.map((data) => (
					<div key={data}>
						<video src={data.bannerhref}></video>
            <h1 className="text-8xl">{data.heading}</h1>
            <p>{data.description}</p>
					</div>
				))}
			</div>
			<div></div>
			<button className="btn bg-black text-cyan-500">Press</button>
		</div>
	);
};

export default Home;
