// Codes by mahdi tasha
// Forcing nextjs to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import {pageType} from "@/type";
import Container from "@/component/ui/container";
import {motion} from 'framer-motion';
import Footer from "@/component/footer";

// Creating and exporting page component as default
export default function Page({children}:pageType):ReactNode {
    // Returning JSX
    return (
        <motion.div
            variants={{
                "hidden": {y: 20, opacity: 0},
                "visible": {y: 0, opacity: 100}
            }}
            initial={'hidden'}
            animate={'visible'}
        >
            <Container>
                {children}
            </Container>
            <Footer />
        </motion.div>
    );
}