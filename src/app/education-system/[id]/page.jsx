import React from 'react'
import Accordion from './Accordion';


export default function page() {
    return (
        <main className='cs-container mx-auto py-10 px-4'>
             <div className="flex-col lg:flex-row gap-10 justify-between lg:items-center mb-6">
                <h2 className="lg:text-[30px] text-center text-2xl text-[var(--secondary-color)]  font-bold">
                    Canada - Alberta
                </h2>
            </div>
            <Accordion />
        </main>
    )
}
