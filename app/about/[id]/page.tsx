import React from 'react'

function Page({ params }: { params: { id: string } }) {
    return (
        <div>About detail of {params.id}</div>
    )
}

export default Page