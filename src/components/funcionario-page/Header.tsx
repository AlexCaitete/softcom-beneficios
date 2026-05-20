export default function Header() {
    return (
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <img
                src="/src/assets/logo.png"
                alt="Softcom"
                className="h-10 object-contain"
                />
            </div>
        </header>
    )
}