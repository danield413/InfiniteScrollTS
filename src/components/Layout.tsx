import React from 'react'

const Layout = ({children}: JSX.ElementChildrenAttribute): JSX.Element => {
    return (
        <div className="layout">
            {children}
        </div>
    )
}

export default Layout
