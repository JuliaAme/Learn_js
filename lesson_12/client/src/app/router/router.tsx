import type { JSX } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { HomePage, SignInPage, SignUpPage, TaskPage } from '@/pages'
import { Layout } from '@/app/layout/Layout'

export function Router(): JSX.Element {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/tasks" element={<TaskPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}