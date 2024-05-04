"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const WhyChooseUs = () => {
	return (
		<div>
			<StickyScroll content={musicSchoolContent} />
		</div>
	);
};

export default WhyChooseUs;

const musicSchoolContent = [
	{
		title: "Guitar Basics",
		description:
			"Learn the fundamentals of playing guitar in this introductory course. Covering proper posture, basic chords, and strumming techniques, this class is designed for beginners with no prior experience. Through simple songs and exercises, you'll develop a solid foundation in guitar playing.",
	},
	{
		title: "Piano for Beginners",
		description:
			"Discover the beauty of piano playing with this beginner-level course. In this class, you'll learn basic piano techniques such as hand positioning, finger exercises, and reading sheet music. By the end of the course, you'll be able to play simple melodies and understand the basics of music theory.",
	},
	{
		title: "Songwriting Essentials",
		description:
			"Unleash your creativity and learn the art of songwriting in this comprehensive workshop. Explore lyric writing, melody composition, chord progressions, and song structure. Whether you're a budding songwriter or an experienced musician looking to expand your skills, this class offers valuable insights and practical techniques.",
	},
	{
		title: "Advanced Music Theory",
		description:
			"Take your understanding of music theory to the next level with this advanced course. Delve into complex topics such as harmonic analysis, modal interchange, and advanced chord progressions. Ideal for musicians with a solid foundation in music theory who want to deepen their knowledge and enhance their compositional skills.",
	},
	{
		title: "Vocal Performance Workshop",
		description:
			"Refine your vocal technique and stage presence in this interactive workshop. Led by experienced vocal coaches, you'll receive personalized feedback and guidance to improve your singing skills. From breath control to interpretation, this class covers essential aspects of vocal performance for singers of all levels.",
	},
];
