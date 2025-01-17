import CompetitorComparison from '@/src/components/competitor-comparison'
import { CTAPage } from '@/src/components/servicescomps/services-cta'
import { ServicesGridPage } from '@/src/components/servicescomps/services-grid'
// import ServicesHero from '@/src/components/servicescomps/services-hero'
import { MeshGradient } from '@/src/components/ui/mesh-gradient'
import React from 'react'

function Servicespage() {
  return (
    <div className='h-fit relative'>
        <MeshGradient/>
        <div>
            {/* <ServicesHero/> */}
            <ServicesGridPage/>
            <CompetitorComparison/>
            <CTAPage/>
        </div>
    </div>
  )
}

export default Servicespage;
