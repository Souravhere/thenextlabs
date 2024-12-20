import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='w-full h-screen bg-transparent'>
        <div>
            <h1>Components by the The Next Labs</h1>
            <Link href='/componets/Particles-Effect-Hero'>
                Particles Effet Hero
            </Link>
        </div>
    </div>
  )
}

export default page
