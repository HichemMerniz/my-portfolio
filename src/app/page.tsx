"use client"

import {Header} from '@/components/organisms/Header'
import {Hero} from '@/components/organisms/Hero'
import {Services} from '@/components/organisms/Services'
import Image from 'next/image'
import {TooltipProvider} from "@/components/ui/tooltip";
import shoppey from '@/assets/projects/SHoppey-color.svg'
import efaciliti from '@/assets/projects/E-facilit-color.svg'
import pospro from '@/assets/projects/POS-Color.svg'
import oceanbridge from '@/assets/projects/OceanBridge-Color.svg'
import shoppeyGris from '@/assets/projects/Shoppey-Gris.png'
import efacilitiGris from '@/assets/projects/e-faciliti-gris.svg'
import posproGris from '@/assets/projects/POS-gris.svg'
import oceanbridgeGris from '@/assets/projects/OceanBridge-gris.png'
import { BrandsSection } from '@/components/organisms/BrandsSection';
import { motion } from 'framer-motion'

const brands = [
    {name: 'Shoppey', logoGris: shoppeyGris, logoColor: shoppey},
    {name: 'e-faciliti', logoGris: efacilitiGris, logoColor: efaciliti},
    {name: 'POS Pro', logoGris: posproGris, logoColor: pospro},
    {name: 'Ocean Bridge', logoGris: oceanbridgeGris, logoColor: oceanbridge},
]

export default function Home() {
  return (
      <div className="min-h-screen bg-background text-foreground">
          {/*<TooltipProvider>*/}
          {/*    <Header/>*/}
          {/*</TooltipProvider>*/}
          <main>
              <Hero/>
              <BrandsSection brands={brands} />
              <Services/>
          </main>
      </div>
  )
}



