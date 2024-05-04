import { cookies } from "next/headers";

const About = () => {
	const cokkieStore = cookies();
	const theme = cokkieStore.get("theme");
	console.log(theme);

	console.log("about sever component");
	return <div>About page : {new Date().toLocaleTimeString()}</div>;
};

export default About;
