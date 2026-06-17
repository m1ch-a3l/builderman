import type { Book, Event, PressQuote } from "./types";

export const books: Book[] = [
  {
    id: "1",
    slug: "africa-beware",
    title: "Africa Beware",
    year: 2026,
    genre: "Christian Social Commentary",
    description: "Reclaiming our humanity and resisting the cycle of oppression.",
    longDescription:
      "Africa Beware is a rigorous historical reckoning and a prophetic call to arise. Drawing on theology, African history, and cultural analysis, Rev. Builderman exposes the cycles of oppression that have kept a continent from its God-given destiny — and sounds a clarion call for reclaiming humanity, identity, and divine purpose.",
    coverImage: "/books/africa-beware-hc.png",
    featured: true,
    price: 24.99,
  },
  {
    id: "2",
    slug: "charismatic-hoax",
    title: "Charismatic Hoax",
    year: 2026,
    genre: "Christian Living",
    description: "Unmasking the deception behind superficial spirituality.",
    longDescription:
      "Charismatic Hoax is a bold defence of the Spirit — not a rejection of the gifts, but a fearless exposé of how spiritual truth can be distorted. It confronts a culture where appearance overshadows authenticity, where signs replace substance, and where dependence on men can quietly take the place of devotion to Christ. An invitation to rediscover what is true.",
    coverImage: "/books/charismatic-hoax-hc.png",
    price: 22.99,
  },
  {
    id: "3",
    slug: "the-ministry-of-writing",
    title: "The Ministry of Writing",
    year: 2026,
    genre: "Theology & Writing",
    description: "Writing as sacred duty — from Genesis to the digital age.",
    longDescription:
      "In the beginning, God spoke. Then He commanded that His words be written down. Drawing from the breadth of Scripture and the wisdom of Augustine, Aquinas, Calvin, Luther, and Sayers, Rev. Builderman traces the theology of the written word from Genesis to the digital age — examining why biblical writers risked everything to record what God had spoken, and what it means to take up the pen today as an act of obedient love.",
    coverImage: "/books/the-ministry-of-writing-hc.png",
    price: 19.99,
  },
  {
    id: "4",
    slug: "oversalting-the-earth",
    title: "Oversalting the Earth",
    year: 2026,
    genre: "Christian Living",
    description: "Underlighting the world — a crisis of Christian witness.",
    longDescription:
      "Drawing from Matthew 5:13–16, this compelling work unveils what it truly means to be salt and light in the twenty-first century. From the distortions of prosperity theology to the illusions of political power, from the silence of Christian witness to the seductions of digital performance, Rev. Builderman navigates the complex terrain where faith meets culture with prophetic clarity and pastoral warmth.",
    coverImage: "/books/oversalting-the-earth-hc.png",
    price: 19.99,
  },
  {
    id: "5",
    slug: "size-steps",
    title: "Size Steps",
    year: 2026,
    genre: "Christian Leadership",
    description: "The beauty of growth in every measure of life.",
    longDescription:
      "A prophetic call to a generation that has forgotten how to grow. Drawing from the depths of Scripture, the wisdom of history's greatest Christian voices, and the vibrant faith of the African church, Size Steps reveals a transformative truth: every stage of life, no matter how small or hidden, carries God's prophetic DNA. Greatness is not found in skipping steps but in embracing them.",
    coverImage: "/books/size-steps-hc.png",
    price: 19.99,
  },
  {
    id: "6",
    slug: "thanksgiving-manifesto",
    title: "Thanksgiving Manifesto",
    year: 2026,
    genre: "Devotional",
    description: "The living declaration of gratitude and recognition of God's sovereignty.",
    longDescription:
      "In an age overshadowed by anxiety, entitlement, and spiritual forgetfulness, Rev. Builderman sounds a clarion call to return to the ancient Christian posture of gratitude — not as an occasional act, but as a defining identity. Thanksgiving is less a feeling and more a framework; less a reaction and more a revelation. Less an optional virtue and more a way of seeing God in all things.",
    coverImage: "/books/thanksgiving-manifesto-hc.png",
    debut: true,
    price: 17.99,
  },
];

export const events: Event[] = [
  {
    id: "1",
    date: "2026-07-19",
    title: "Leadership & Faith Conference",
    venue: "Thanksgiving Place Chapel",
    city: "Accra, Ghana",
    type: "festival",
  },
  {
    id: "2",
    date: "2026-08-09",
    title: "Book Launch — Africa Beware",
    venue: "National Theatre",
    city: "Accra, Ghana",
    type: "signing",
  },
  {
    id: "3",
    date: "2026-09-20",
    title: "African Christian Writers Summit",
    venue: "Kigali Convention Centre",
    city: "Kigali, Rwanda",
    type: "festival",
  },
  {
    id: "4",
    date: "2026-10-11",
    title: "Ministry of Writing Workshop",
    venue: "Walsh College",
    city: "Michigan, USA",
    type: "reading",
  },
];

export const pressQuotes: PressQuote[] = [
  {
    id: "1",
    quote:
      "Rev. Builderman writes with prophetic urgency and pastoral care. Africa Beware is the kind of book the continent has been waiting for.",
    source: "African Christian Review",
    publication: "African Christian Review",
    book: "Africa Beware",
  },
  {
    id: "2",
    quote:
      "Charismatic Hoax is a courageous act of love — clear, deeply researched, and desperately needed in today's church.",
    source: "Faith & Culture Quarterly",
    publication: "Faith & Culture Quarterly",
    book: "Charismatic Hoax",
  },
  {
    id: "3",
    quote:
      "The Ministry of Writing is both an invitation and a summons. Every Christian who has ever felt called to write should read it.",
    source: "Leadership Africa",
    publication: "Leadership Africa",
    book: "The Ministry of Writing",
  },
  {
    id: "4",
    quote:
      "Size Steps will challenge every reader to stop despising the day of small beginnings and trust God's pace of formation.",
    source: "Transformational Leadership Journal",
    publication: "Transformational Leadership Journal",
    book: "Size Steps",
  },
  {
    id: "5",
    quote:
      "Oversalting the Earth asks the hardest questions about Christian witness in the modern world — and answers them with grace.",
    source: "Theology & Society",
    publication: "Theology & Society",
    book: "Oversalting the Earth",
  },
  {
    id: "6",
    quote:
      "Thanksgiving Manifesto is a timely, Spirit-breathed corrective to a generation raised on entitlement and distracted from worship.",
    source: "Ghana Christian Post",
    publication: "Ghana Christian Post",
    book: "Thanksgiving Manifesto",
  },
];
