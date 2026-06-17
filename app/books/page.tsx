import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BooksGrid from "@/components/BooksGrid";

export const metadata: Metadata = {
  title: "Books — Rev. Acheampong E.S. Builderman",
  description:
    "Six transformational books by Rev. Acheampong E.S. Builderman on faith, leadership, and purpose.",
};

export default function BooksPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F8F6F1" }}>
        <BooksGrid />
      </main>
      <Footer />
    </>
  );
}
