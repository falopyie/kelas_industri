import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Booklist() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    });

    const deleteBook = async (id) => {
        await fetch(`http://localhost:3000/api/books/${id}`, {
            method: 'DELETE'
        });
        setBooks(books.filter((b) => b.id !== id));
    };

    return (
        <div style={{ textAlign: "center" }}>
            <Navbar />
            <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Daftar Buku</h1>
            <table style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse", marginBottom: "20px" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Judul</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Penulis</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Kategori</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}></th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((b) => (
                        <tr key={b.id}>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                <Link href={`/books/${b.id}`}>{b.title}</Link>
                            </td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{b.author}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{b.category}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                <button 
                                    onClick={() => window.location.href = `/books/${b.id}`} 
                                    style={{ marginRight: "10px", padding: "5px 10px", backgroundColor: "#2196F3", color: "white", border: "none", cursor: "pointer" }}
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => deleteBook(b.id)} 
                                    style={{ padding: "5px 10px", backgroundColor: "#f44336", color: "white", border: "none", cursor: "pointer" }}
                                >
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ textAlign: "left", width: "80%", margin: "0 auto" }}>
                <Link 
                    href="/books/add" 
                    style={{ 
                        padding: "10px 15px", 
                        backgroundColor: "#4CAF50", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "5px", 
                        display: "inline-block", 
                        marginTop: "10px" 
                    }}
                >
                    Tambah buku
                </Link>
            </div>
        </div>
    )
}