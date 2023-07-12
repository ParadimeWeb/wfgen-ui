"use client"
import { useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
    FluentProvider,
    RendererProvider,
    SSRProvider,
    createDOMRenderer,
    webLightTheme, webDarkTheme
} from "@fluentui/react-components";

export function FluentRenderer({ children }: { children: React.ReactNode; }) {
    const [renderer] = useState(createDOMRenderer());
    const [queryClient] = useState(new QueryClient());
    const [hasMounted, setHasMounted] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const mqListener = (e:MediaQueryListEvent) => setIsDarkTheme(e.matches);

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkTheme(darkThemeMq.matches);
        darkThemeMq.addEventListener('change', mqListener);
        setHasMounted(true);
        return () => darkThemeMq.removeEventListener('change', mqListener);
    }, []);

    console.log('Render FluentRenderer', hasMounted, isDarkTheme);
    if (!hasMounted) {
        return null;
    }
    return <RendererProvider renderer={renderer}>
        <SSRProvider>
            <FluentProvider theme={isDarkTheme ? webDarkTheme : webLightTheme}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </FluentProvider>
        </SSRProvider>
    </RendererProvider>;
}