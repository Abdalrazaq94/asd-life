import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import FooterIcon from "./FooterIcon/FooterIcon";
import Welcome from "./Welcome/Welcome";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import WeSupportYou from "./WeSupportYou/WeSupportYou";
import FooterLogo from "./FooterLogo/FooterLogo";
import FooterNav from "./FooterNav/FooterNav";

export function Home() {
	return (
		<main role="main">
			<Welcome />
			<AboutUs />
			<WhatWeDo />
			<WeSupportYou />
			<FooterLogo />
			<FooterNav />
			<FooterIcon />
		</main>
	);
}

export default Home;
