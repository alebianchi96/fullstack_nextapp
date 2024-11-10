import Link from 'next/link'
import React from 'react'

function About() {
    return (
        <>
            <div>About</div>

            <ul className='mt-10'>
                <li><Link href="/about/1"> ---1--- </Link></li>
                <li><Link href="/about/2"> ---2--- </Link></li>
                <li><Link href="/about/3"> ---3--- </Link></li>
            </ul>
        </>
    )
}

export default About