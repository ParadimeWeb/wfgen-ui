export function Header({ children }: { children: React.ReactNode; }) {
    return (
        <header className="bg-light/70 dark:bg-dark/70 sticky top-0 backdrop-blur shadow shrink-0">
            <div className="flex overflow-hidden">
                {children}
            </div>
        </header>
    );
}