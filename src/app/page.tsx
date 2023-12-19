"use client";

import { lazy } from "react";

import "./App.css";

import AppLayout from "../components/AppLayout/AppLayout";
import HeroSection from "../components/HeroSection/HeroSection";
const BannerSection = lazy(
	() => import("../components/BannerSection/BannerSection")
);
const AboutUsSection = lazy(
	() => import("../components/AboutUsSection/AboutUsSection")
);
const ContactSection = lazy(
	() => import("../components/ContactSection/ContactSection")
);

const BenefitsSection = lazy(
	() => import("../components/BenefitsSection/BenefitsSection")
);

const ScrollToTop = lazy(
	() => import("../components/Generic/ScrollToTop/ScrollToTop")
);

function Home() {
	return (
		<AppLayout>
			<ScrollToTop />
			<HeroSection direction="left" />
			<BannerSection direction="right" />
			<AboutUsSection />
			<BenefitsSection />
			<ContactSection />
		</AppLayout>
	);
}

export default Home;
