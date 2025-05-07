import Link from "next/link";

export default function Navbar() {
    return (
        <nav style={{ padding: "1rem", backgroundColor: "#f8f9fa", borderBottom: "1px solid #ddd", textAlign: "center" }}>
            <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Perpustakaan Kelas Industri</h1>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", gap: "1rem", marginTop: "0.5rem", justifyContent: "center" }}>
                <li><Link href="/">Beranda</Link></li>
                <li><Link href="/books">Koleksi Buku</Link></li>
            </ul>
        </nav>
    );
}