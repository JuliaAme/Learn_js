import type { JSX } from 'react'
import { Nav } from '@/widgets/Nav'
import { Outlet } from 'react-router'

export function Layout(): JSX.Element {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}