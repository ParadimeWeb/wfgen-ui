import "./globals.css";
import type { Metadata } from "next";
import { FluentRenderer } from "@/components";

export const metadata: Metadata = {
    title: {
        template: '%s | WorkflowGen',
        default: 'Portal | WorkflowGen'
    }
}

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en" className="h-full">
            <body className="h-full">
                <FluentRenderer>
                    {children}
                </FluentRenderer>
            </body>
        </html>
    );
}