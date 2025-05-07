import { useState, useEffect } from "react";
import  Link  from "next/link"; // Use Link for navigation

export default function BookForm({ onSubmit, initialData }) {
    // Initialize with empty values or from initialData
    const [title, setTitle] = useState(initialData?.title || '');
    const [author, setAuthor] = useState(initialData?.author || '');
    const [category, setCategory] = useState(initialData?.category || '');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setAuthor(initialData.author);
            setCategory(initialData.category);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, author, category });
    };

    return (
        <div 
            style={{ 
                backgroundImage: "url('/img/buku2.avif')", 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                minHeight: "100vh", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
            }}
        >
            <form 
                onSubmit={handleSubmit} 
                style={{ 
                    maxWidth: "800px", 
                    padding: "50px", 
                    border: "1px solid #ddd", 
                    borderRadius: "8px", 
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
                    backgroundColor: "rgba(255, 255, 255, 0.9)" 
                }}
            >
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Judul Buku</label>
                    <input 
                        type="text" 
                        value={title} 
                        placeholder="Masukkan judul buku"
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                        style={{ 
                            width: "100%", 
                            padding: "10px", 
                            border: "1px solid #ccc", 
                            borderRadius: "4px", 
                            fontSize: "1rem" 
                        }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Nama Penulis</label>
                    <input 
                        type="text" 
                        value={author} 
                        placeholder="Masukkan nama penulis"
                        onChange={(e) => setAuthor(e.target.value)} 
                        required 
                        style={{ 
                            width: "100%", 
                            padding: "10px", 
                            border: "1px solid #ccc", 
                            borderRadius: "4px", 
                            fontSize: "1rem" 
                        }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Kategori</label>
                    <select 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        required 
                        style={{ 
                            width: "100%", 
                            padding: "10px", 
                            border: "1px solid #ccc", 
                            borderRadius: "4px", 
                            fontSize: "1rem" 
                        }}
                    >
                        <option value="" disabled>Pilih kategori</option>
                        <option value="Fiksi">Fiksi</option>
                        <option value="Non-Fiksi">Non-Fiksi</option>
                        <option value="Edukasi">Edukasi</option>
                        <option value="Biografi">Biografi</option>
                    </select>
                </div>
                <button 
                    type="submit" 
                    style={{ 
                        width: "100%", 
                        padding: "10px", 
                        backgroundColor: "#4CAF50", 
                        color: "white", 
                        border: "none", 
                        borderRadius: "4px", 
                        fontSize: "1rem", 
                        cursor: "pointer" 
                    }}
                >
                    Simpan
                </button>
                <Link 
                    href="/books" // Navigate to /books
                    style={{ 
                        display: "block", 
                        textAlign: "center", 
                        width: "100%", 
                        padding: "10px", 
                        backgroundColor: "#f44336", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "4px", 
                        fontSize: "1rem", 
                        marginTop: "10px" 
                    }}
                >
                    Kembali
                </Link>
            </form>
        </div>
    );
}