// const useStyles = makeStyles({
//     header: {
//         position: 'sticky',
//         top: 0,
//         zIndex: 1,
//         backgroundColor: tokens.colorNeutralBackground1,
//         flexShrink: 0
//     },
//     headerContent: {
//         boxShadow: tokens.shadow4,
//         display: 'flex',
//         ...shorthands.overflow('hidden')
//     }
// });
//bg-light/70 dark:bg-dark/70
export function Header({ children }: { children: React.ReactNode; }) {
    return (
        <header className="bg-light/70 dark:bg-dark/70 sticky top-0 backdrop-blur shadow shrink-0">
            <div className="flex overflow-hidden">
                {children}
            </div>
        </header>
    );
}