import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>Layout children:
        {children}
    </div>
  )
}

export default Layout