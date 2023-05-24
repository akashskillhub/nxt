import React from 'react'

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>

        <div>
            <div className='bg-slate-400'>
                <h1>about navbar</h1>
            </div>
            {children}
        </div>
    </>
}
