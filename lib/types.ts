export interface Book {
  id: string;
  slug: string;
  title: string;
  year: number;
  genre: string;
  description: string;
  longDescription: string;
  coverImage: string;
  featured?: boolean;
  debut?: boolean;
  price?: number;
}

export interface Event {
  id: string;
  date: string;
  title: string;
  venue: string;
  city: string;
  type: "reading" | "signing" | "talk" | "festival";
}

export interface PressQuote {
  id: string;
  quote: string;
  source: string;
  publication: string;
  book?: string;
}
