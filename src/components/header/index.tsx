import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-emerald-700/70 backdrop-blur-md text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold flex items-center">
                    <Image src="/next.svg" alt="Logo" className="mr-2 rounded-full" width={50} height={50} quality={100} />
                    <Link href="/">Hatim</Link>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/blog" className="hover:text-yellow-300">Blog</Link></li>
                        <li><a href="#features" className="hover:text-yellow-300">Özellikler</a></li>
                        <li><a href="#how-it-works" className="hover:text-yellow-300">Nasıl Çalışır</a></li>
                        <li><a href="#recent-hatims" className="hover:text-yellow-300">Son Hatimler</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;