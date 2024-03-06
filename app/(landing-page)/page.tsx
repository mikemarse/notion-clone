import Navbar from "@/components/navbar/navbar";
import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<SecondSection />
			<ThirdSection />
		</div>
	);
}

export default LandingPage;
