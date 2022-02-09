import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Navigation:
import Navbar from "./components/Navbar/Navbar";

// Home dependant pages:
import Home from "./pages/Home/Home";
import WhatWeDoPage from "./pages/WhatWeDoPage/WhatWeDoPage";

// About:
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import WhatIsAutism from "./pages/WhatIsAutism/WhatIsAutism";
import SignsOfAutism from "./pages/SignsOfAutism/SignsOfAutism";
import AdditionalSupport from "./pages/AdditionalSupport/AdditionalSupport";
import OurEvents from "./pages/OurEvents/OurEvents";

// Resources:
import Resources from "./pages/Resources/Resources";
import TimetableNotRegistered from "~/pages/Resources/Timetable/NotRegistered/TimetableNotRegistered";

// Contacts:
import Contact from "./pages/Contact/Contact";

// User and Authorisation:
import SignUpPage from "./pages/User/SignUpPage";
import SignInPage from "./pages/User/SignInPage";
import PasswordResetPage from "./pages/User/PasswordResetPage";

// Footer:
import Footer from "./components/Footer/Footer";

//Not Found Page:
import NotFound from "./pages/NotFound/NotFound";

// Styling:
import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />

					{/* routes from home page: */}
					<Route path="/what-we-do" component={WhatWeDoPage} />

					{/* routes from nav bar: */}			
					<Route exact path="/about" component={AboutUsPage} />
						<Route path="/about/what-is-autism" component={WhatIsAutism} />
						<Route path="/about/signs-of-autism" component={SignsOfAutism} />
						<Route path="/about/additional-support" component={AdditionalSupport} />
						<Route path="/about/events" component={OurEvents} />

					<Route exact path="/resources" component={Resources} />
          <Route path="/resources/timetables" component={TimetableNotRegistered}/>

					<Route path="/contact" component={Contact} />

					{/* User Authantication: */}
					<Route path="/signin" component={SignInPage} />
 					<Route path="/signup" component={SignUpPage} />
					<Route path="/password-reset" component={PasswordResetPage} />

					{/* Default route for 'Not Found' page */}
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
