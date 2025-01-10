import { CTA } from '@/src/components/cta'
import { ServicesGrid } from '@/src/components/services-grid'
import { CTAPage } from '@/src/components/servicescomps/services-cta'
import { ServicesGridPage } from '@/src/components/servicescomps/services-grid'
import ServicesHero from '@/src/components/servicescomps/services-hero'
import { MeshGradient } from '@/src/components/ui/mesh-gradient'
import React from 'react'

function page() {
  return (
    <div className='h-fit relative'>
        <MeshGradient/>
        <div>
        <ServicesHero/>
        <ServicesGridPage/>
        <CTAPage/>
        </div>
    </div>
  )
}

export default page
