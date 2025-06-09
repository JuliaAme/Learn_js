import type { JSX } from 'react'
import { NavLink } from 'react-router'

export function Nav(): JSX.Element {
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sign-in">Sign In</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
            <NavLink to="/tasks">Tasks</NavLink>
        </>
    )
}