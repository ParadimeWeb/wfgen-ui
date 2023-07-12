export function Container({ children }: { children: React.ReactNode; }) {
    return (
        <div className="flex flex-col gap-y-2 min-h-screen">
            {children}
        </div>
    );
}