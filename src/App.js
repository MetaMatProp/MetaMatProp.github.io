import React from "react"
import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "./GlobalStyle"
import theme from "./theme"

import ScrollToTop from "./Components/ScrollToTop"
import Contact from "./Pages/Contact"
import Root from "./Pages/Root"

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App
