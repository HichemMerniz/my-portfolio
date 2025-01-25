"use client"

import {Hero} from "@/components/organisms/hero";
import {Navbar} from "@/components/organisms/navbar";
import {ServicesSection} from "@/components/organisms/services-section";
import {ProjectsSection} from "@/components/organisms/projects-section";

export default function Home() {
  return (
      <div className="min-h-screen bg-background text-foreground">
          <main>
              <Navbar/>
              <Hero/>
              <ServicesSection/>
              <ProjectsSection />
          </main>
      </div>
  )
}



