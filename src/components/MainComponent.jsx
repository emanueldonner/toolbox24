"use client"

import { useState, useEffect, useRef } from "react"
import { Hammer, Drill, Wrench, Search, Menu } from "lucide-react"

function useIntersectionObserver(ref, options = {}) {
	const [isIntersecting, setIsIntersecting] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsIntersecting(entry.isIntersecting)
		}, options)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => {
			observer.disconnect()
		}
	}, [ref, options])

	return isIntersecting
}

function AnimatedSection({ children, className = "" }) {
	const ref = useRef < HTMLDivElement > null
	const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })

	return (
		<div
			ref={ref}
			className={`transition-all duration-1000 ${
				isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
			} ${className}`}
		>
			{children}
		</div>
	)
}

export default function Component() {
	return (
		<div className="flex flex-col min-h-[100dvh] bg-gray-50">
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
					<div className="container px-4 md:px-6">
						<AnimatedSection className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
									Mieten Sie die richtigen Werkzeuge für Ihr Projekt
								</h1>
								<p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
									Zugang zu professionellen Werkzeugen ohne hohe Kosten. Perfekt
									für DIY-Enthusiasten und Heimwerker.
								</p>
							</div>
							<div className="w-full max-w-sm space-y-2">
								<form className="flex space-x-2">
									<input
										className="flex-1"
										placeholder="Werkzeug suchen..."
										type="search"
									/>
									<button
										className="bg-[#fffa02] text-gray-900 hover:bg-[#fffa02]/90"
										type="submit"
									>
										<Search className="h-4 w-4 mr-2" />
										Suchen
									</button>
								</form>
							</div>
						</AnimatedSection>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-white">
					<div className="container px-4 md:px-6">
						<AnimatedSection>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">
								Beliebte Werkzeuge
							</h2>
						</AnimatedSection>
						<div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
							{[
								{
									icon: Drill,
									title: "Elektrobohrer",
									description:
										"Von einfachen DIY- bis hin zu schweren Bauarbeiten, finden Sie den perfekten Bohrer für Ihr Projekt.",
								},
								{
									icon: Wrench,
									title: "Elektroschleifer",
									description:
										"Glätten Sie Oberflächen mühelos mit unserer Auswahl an professionellen Schleifern.",
								},
								{
									icon: Hammer,
									title: "Presslufthammer",
									description:
										"Bewältigen Sie harte Abrissarbeiten mit unseren leistungsstarken und zuverlässigen Presslufthämmern.",
								},
							].map((tool, index) => (
								<AnimatedSection
									key={index}
									className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-gray-50 shadow-lg transition-all hover:shadow-xl"
								>
									<tool.icon className="h-12 w-12 text-[#fdd500]" />
									<h3 className="text-xl font-bold text-gray-900">
										{tool.title}
									</h3>
									<p className="text-gray-600 text-center">
										{tool.description}
									</p>
								</AnimatedSection>
							))}
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-[#fdd500]">
					<div className="container px-4 md:px-6">
						<div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
							<AnimatedSection className="space-y-4">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
									Warum WerkzeugTeilen wählen?
								</h2>
								<ul className="space-y-3">
									{[
										"Sparen Sie Geld bei teuren Werkzeugen",
										"Zugang zu professioneller Ausrüstung",
										"Flexible Mietzeiten",
										"Expertenberatung und Unterstützung",
									].map((item, index) => (
										<li
											key={index}
											className="flex items-center space-x-3 text-white"
										>
											<svg
												className="h-5 w-5 flex-shrink-0"
												fill="none"
												height="24"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
												width="24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<polyline points="20 6 9 17 4 12" />
											</svg>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</AnimatedSection>
							<AnimatedSection className="flex justify-center">
								<img
									alt="Glücklicher Kunde, der ein gemietetes Elektrowerkzeug benutzt"
									className="rounded-lg object-cover w-full max-w-[600px] shadow-lg"
									height="400"
									src="/placeholder.svg?height=400&width=600"
									style={{
										aspectRatio: "600/400",
										objectFit: "cover",
									}}
									width="600"
								/>
							</AnimatedSection>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-white">
					<div className="container px-4 md:px-6">
						<AnimatedSection className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
									Bereit, Ihr Projekt zu starten?
								</h2>
								<p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
									Treten Sie WerkzeugTeilen noch heute bei und erhalten Sie
									Zugang zu Tausenden von Werkzeugen für Ihr nächstes
									DIY-Abenteuer.
								</p>
							</div>
							<div className="space-x-4">
								<button className="bg-[#fdd500] text-white hover:bg-[#fdd500]/90">
									Jetzt anmelden
								</button>
								<button
									className="bg-gray-200 text-gray-900 hover:bg-gray-300"
									variant="outline"
								>
									Werkzeuge durchsuchen
								</button>
							</div>
						</AnimatedSection>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
				<p className="text-xs text-gray-700">
					© 2024 WerkzeugTeilen. Alle Rechte vorbehalten.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<a
						className="text-xs hover:underline underline-offset-4 text-gray-700"
						href="#"
					>
						Nutzungsbedingungen
					</a>
					<a
						className="text-xs hover:underline underline-offset-4 text-gray-700"
						href="#"
					>
						Datenschutz
					</a>
				</nav>
			</footer>
		</div>
	)
}
