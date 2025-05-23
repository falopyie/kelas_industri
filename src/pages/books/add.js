import { useRouter } from "next/router";
import BookForm from "../../components/BookForm";

export default function AddBook() {
    const router = useRouter();

    const addBook = async (book) => {
        const res = await fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
            router.push('/books');
        
    };

    return (
        <div>
            <BookForm onSubmit={addBook} />
        </div>
    );
}