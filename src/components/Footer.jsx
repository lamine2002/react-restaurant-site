export function Footer() {
    return (
        <>
            <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center gap-2">
                        <HandPlatterIcon className="w-6 h-6" />
                        <span className="text-lg font-bold">Gastronomy</span>
                    </div>
                    <nav className="flex items-center gap-6 mt-4 md:mt-0">
                        <a href="#" className="text-lg font-medium hover:underline">Politique de confidentialité</a>
                        <a href="#" className="text-lg font-medium hover:underline">Conditions d'utilisation</a>
                        <a href="#" className="text-lg font-medium hover:underline">Nous contacter</a>
                    </nav>
                </div>
            </footer>
        </>
    )
}

function HandPlatterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3V2" />
            <path d="M5 10a7.1 7.1 0 0 1 14 0" />
            <path d="M4 10h16" />
            <path d="M2 14h12a2 2 0 1 1 0 4h-2" />
            <path d="m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18" />
            <path d="M5 14v7H2" />
        </svg>
    );
}