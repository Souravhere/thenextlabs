import { ServicesGrid } from '@/src/components/services-grid'
import ServicesHero from '@/src/components/servicescomps/services-hero'
import { MeshGradient } from '@/src/components/ui/mesh-gradient'
import React from 'react'

function page() {
  return (
    <div className='h-fit relative'>
        <MeshGradient/>
        <ServicesHero/>
        <ServicesGrid/>
    </div>
  )
}

export default page
