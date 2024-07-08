import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <>
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <HandPlatterIcon className="w-8 h-8" />
                    <span className="text-2xl font-bold">Gastronomy</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/menu" className="text-lg font-medium hover:underline">Menu</Link>
                    <Link to="/reservation" className="text-lg font-medium hover:underline">Réservations</Link>
                    <Link to="/apropos" className="text-lg font-medium hover:underline">À propos</Link>
                    <Link to="/contact" className="text-lg font-medium hover:underline">Contactez-nous</Link>
                </nav>
                <button className="md:hidden">
                    <MenuIcon className="w-6 h-6" />
                    <span className="sr-only">Toggle navigation</span>
                </button>
            </header>
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

function MenuIcon(props) {
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
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );
}