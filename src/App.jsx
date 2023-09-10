import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';

// * Styles
import './scss/style.scss';

// * Components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import ServiceDisplay from './components/Services/ServiceDisplay';
import Statistics from './components/Statistics/Statictics';
import Cta from './components/UI/Cta';
import ProjectDisplay from './components/Projects/ProjectDisplay';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// * Dates
import { services } from './dates/services';
import { projects } from './dates/projects';
import AboutUs from './components/AboutUs/AboutUs';
import Reputation from './components/Reputation/Reputation';
import Projects from './components/Projects/Projects';
import ScrollToTop from './utils/ScrollToTop';

function App() {
	return (
		<>
			<Router>
				<ScrollToTop></ScrollToTop>
				<Header></Header>
				<Routes>
					<Route
						path="/"
						element={
							<main className="page">
								<Hero></Hero>
								<Reputation></Reputation>
								<AboutUs></AboutUs>
								<Services
									title={'Services'}
									services={services}
								></Services>
								<Statistics></Statistics>
								<Cta></Cta>
								<Projects
									title={'Projects'}
									projects={projects}
								></Projects>
							</main>
						}
					></Route>
					<Route
						path="/services/:id"
						element={<ServiceDisplay services={services} />}
					></Route>
					<Route
						path="/projects/:id"
						element={<ProjectDisplay projects={projects} />}
					></Route>
				</Routes>
				<Contact></Contact>
				<Footer></Footer>
			</Router>
		</>
	);
}

export default App;
