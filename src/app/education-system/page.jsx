"use client"
import EducationSystemList from '@/components/education-system/EducationSystemList'
import React from 'react'

export default function page() {
    return (
        <main className="cs-container mx-auto py-10 px-4">

            <div className="flex flex-col lg:flex-row gap-10 justify-between lg:items-center mb-6">
                <h2 className="lg:text-[30px] text-2xl text-[var(--secondary-color)]  font-bold">
                    Education System Result + Credentials
                </h2>

                <div className="flex gap-4 items-center">
                    <p className="text-[var(--text-primary)] text-sm">
                        148 Results Found For (Country = Canada)
                    </p>
                </div>
            </div>

            <EducationSystemList />
        </main>
    )
}
