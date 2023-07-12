export function Main({ children }: { children: React.ReactNode; }) {
    return (
        <main className="bg-light dark:bg-dark shadow grow pt-1 pb-6 px-2">
            {children}
        </main>
    );
}