export interface Foreword {
  title: string;
  subtitle: string;
  author: string;
  paragraphs: string[];
}

export interface BookReview {
  slug: string;
  reviewer: string;
  reviewerTitle: string;
  foreword?: Foreword;
  paragraphs: string[];
  recommendedFor: string[];
}

export const reviews: BookReview[] = [
  {
    slug: "oversalting-the-earth",
    reviewer: "Pastor Samuel Nkansah",
    reviewerTitle: "Book Review",
    paragraphs: [
      "There is a sentence tucked early into this book that could stand as its whole thesis. The world does not read the Bible, it reads Christians. Reverend Acheampong E. S. Builderman takes that old Spurgeon line and builds an entire, searching examination of what the watching world has actually been tasting and seeing from the church, and the verdict, delivered with remarkable honesty, is mixed.",
      "The book begins with the two most familiar words Jesus ever spoke to His followers. You are salt. You are light. Reverend Builderman is quick to point out what most sermons rush past, that Jesus did not tell His listeners to try harder or become something. He told them who they already were. The whole book flows from that reversal, identity before instruction, being before striving, and it gives the argument that follows a warmth that keeps it from ever feeling like a scolding.",
      "Where the book earns its title, and its courage, is in its refusal to flatter. Reverend Builderman names two failures with equal seriousness. The first is salt that has turned to scorch, faith expressed as harsh judgement, contempt mistaken for conviction, control reached for in place of the slower work of love. The second is light hidden under a basket, believers retreating into a comfortable subculture, so absorbed in Sunday performance that the weekday visit to the prisoner, the lonely, and the poor never happens. Over salting and under lighting, he argues, are not opposite errors. They are the same forgetting, wearing two different faces.",
      "What lifts the book beyond critique is its theological backbone. The author traces salt and light not as pleasant metaphors but as the modern shape of the dominion mandate given in Eden, the calling to tend and to keep, restored by Christ Himself when He said all authority had been given to Him and then handed that authority back to His followers. To be salt and light, in this reading, is dominion exercised through service rather than force, influence rather than domination, a towel and a basin rather than a throne.",
      "The book moves in three deliberate movements, an honest reckoning with where faith has caused harm, a clear-eyed look at where it has gone quiet when it was needed most, and finally a recovery, chapter by chapter, of what it actually means to preserve, to flavour, and to illuminate a hurting world. It closes not in despair but in invitation, asking every reader the same plain question the whole book exists to answer. What will they see when they look at us?",
      "This is a book written from inside the faith it examines, by someone who clearly loves the church too much to let her off easily, and it lands with both conviction and tenderness in equal measure.",
    ],
    recommendedFor: [
      "Pastors and church leaders reassessing their public witness",
      "Believers wrestling with how faith should look in public life",
      "Anyone who senses that something in the church's tone or presence has gone quietly wrong",
    ],
  },
  {
    slug: "charismatic-hoax",
    reviewer: "Mrs. Lydia Adjei",
    reviewerTitle: "Book Review — Executive Director, TBL KIDS Ministry International",
    paragraphs: [
      "There is a particular kind of courage required to criticise a movement you love, and Reverend Acheampong E. S. Builderman writes with exactly that courage in Charismatic Hoax: Unmasking the Deception Behind Superficial Spirituality. This is not a book written by an outsider taking cheap shots at Pentecostal and Charismatic Christianity. It is written by a pastor within that tradition, who believes in the gifts of the Spirit so deeply that he cannot bear to watch them counterfeited.",
      "The book opens with a confession rather than an accusation. Reverend Builderman has watched sincere believers hand over their wages and their dignity to men who trafficked in fear and called it anointing. He has seen mothers weep at altars where money changed hands but no truth was exchanged. That grief, not spite, is what drives every page that follows.",
      "His argument builds with real theological patience. He begins by tracing how colonialism conditioned the African mind toward dependency on external authority, then shows, with uncomfortable precision, how that same psychological pattern simply changed hosts. The colonial administrator has been replaced, in far too many pulpits, by the charismatic prophet. The consultation fee has replaced the shrine offering. The garment is new, he writes, but the body underneath is old.",
      "The book then shifts to more critical territory. The author criticises what he calls the Corinthian error; the tendency to hold up the church at Corinth, known as the most spiritually gifted church in the New Testament, as a model to follow. However, Paul himself described it as the most carnal church he had written to. Reverend Builderman emphasises that spiritual gifts do not equate to true godliness. For example, Judas cast out demons, and Balaam prophesied correctly despite being corrupt and hired. The author highlights that a church can be abundant in spiritual gifts yet still be immature, refusing to let readers overlook this complex reality.",
      "The chapters on the religious spirit and on proxy Christianity are the book's quiet centre. Reverend Builderman is less interested in exposing obvious frauds than in naming the subtler drift, the believer who cannot pray without a prophet's instruction, the congregation slowly trained to perform spirituality rather than live it. He offers four biblical tests for discernment, drawn straight from 1 John and 1 Corinthians, and a closing set of twenty searching questions that any reader could put to their own church without needing anyone else's permission.",
      "What keeps the book from becoming merely a work of demolition is its constant return to the cross. Time and again, when the argument reaches its most severe point, the author pulls back to Paul's own remedy for a spectacle-obsessed church: not more gifts, but Christ crucified. That refusal to let the critique become the whole message is what gives the book its integrity.",
      "This is not a comfortable read, and it is not meant to be. It is a fierce and closely reasoned defence of authentic charismatic faith against the very forces that have hollowed it out from within.",
    ],
    recommendedFor: [
      "Pastors wrestling with what they see but cannot yet name",
      "Believers who sense something is wrong in their own church",
      "Anyone seeking a biblically grounded framework for discernment in an age of spiritual spectacle",
    ],
  },
  {
    slug: "the-ministry-of-writing",
    reviewer: "Mr. Kofi A. B. Baidoo",
    reviewerTitle: "Book Review",
    paragraphs: [
      "There is a particular kind of book that does not simply ask to be read. It asks to be obeyed. The Ministry of Writing, The Power of Reading, and The Audacity of Listening by Reverend Acheampong E. S. Builderman is exactly that kind of book.",
      "It opens with a boy and a piece of chalk. His mother is guiding his small hand across a slate, and what looks like a lesson in penmanship is, we soon realise, the laying of a foundation. Then an uncle arrives and hands the same boy a newspaper every morning, demanding a summary. What emerges from these two ordinary acts of love is the architecture of an entire life, and eventually, the architecture of this book.",
      "Reverend Builderman's central claim is simple enough to fit on a placard and large enough to reorder how you think about civilisation itself. Writing, reading, and listening are not three separate skills competing for your time. They are one discipline wearing three faces, the hand, the eye, and the ear, and where one weakens, the others cannot compensate for long. Neglect all three, he warns, and a people begins to vanish, not through conquest but through forgetting.",
      "What makes this book more than another call to read more books is its theology. Reverend Builderman does not treat writing as a hobby attached to ministry. He treats it as ministry itself, tracing it back to a God who wrote the Law with His own finger before any prophet ever picked up a pen. Reading becomes an act of liberation, illustrated through Frederick Douglass, whose captors understood, as clearly as Douglass did, that a mind that can read cannot be easily owned. And listening, the discipline most books like this one tend to skip, is given equal and even primary weight. Faith, he reminds us, comes by hearing. The ear, he argues, is the root beneath the visible tree of writing and reading, and a world that has learned to hear everything while listening to almost nothing is a world in quiet danger.",
      "The book carries a distinctly African urgency without ever narrowing into a regional argument. Builderman walks readers through Timbuktu and Fez, through libraries that predate Oxford by centuries, insisting that Africa's story was never one of intellectual absence but of interrupted transmission. His challenge to a rising generation is blunt. Until the lion learns to write, every story will glorify the hunter.",
      "There is real tenderness here too, particularly in the chapter that lingers longest in the mind, the one about the people who die with books still inside them. The graveyard, Builderman writes, is the richest place on earth, filled not with gold but with testimonies never recorded, wisdom never passed on, songs never released. It reads less like criticism and more like a plea.",
      "By the final pages, the book has stopped being merely informative and has become something closer to a commission. Pick up the pen. Open the book. Incline the ear. Begin. It is not a suggestion so much as an inheritance being handed over, and the reader is left with the distinct sense that putting the book down without acting on it would be its own small tragedy.",
    ],
    recommendedFor: [
      "Pastors who have grown too comfortable",
      "Leaders who have stopped reading",
      "Parents raising children in noisy and busy homes",
      "Anyone who has ever suspected they were carrying something inside them that the world still needs to hear",
    ],
  },
  {
    slug: "size-steps-volume-1",
    reviewer: "Mrs. Abena Baidoo",
    reviewerTitle: "Book Review — Executive Member, Thanksgiving Place Ministries Incorporated",
    paragraphs: [
      "Every so often, a book arrives that does not simply add to the conversation but redirects it. SIZESTEPS is that book.",
      "Written by Ghanaian pastor, author, and leadership educator Acheampong E. S. Builderman, this volume speaks directly to a generation trapped between ambition and anxiety, between the pressure to perform and the quiet whisper of God saying, 'Not yet. Trust the process.'",
      "The premise is deceptively simple: God builds by sequence, not by speed. Every stage of life, no matter how small or hidden, carries divine purpose. Greatness is not found in skipping steps but in walking through them faithfully. Drawing from Scripture, the wisdom of voices such as Augustine, Spurgeon, Bonhoeffer, and C.S. Lewis, and grounded in the rich soil of African theological reflection, Reverend Builderman constructs an argument that is both ancient and urgent. He names speed as the unspoken idol of our time, then carefully, pastorally, dismantles it.",
      "What sets SIZESTEPS apart from the crowded shelf of Christian leadership books is its honesty. Reverend Builderman, the New Testament Type of prophetic voice, does not write from a podium. He writes from the trenches. He tells his own story: working at an insurance company at nineteen, at a radio station at twenty, serving a university president at twenty-three, and later finding himself at the United Nations. None of it happened overnight. All of it was process. All of it was God.",
      "The book is dedicated to his mentees Captain Frank Amoanyi Donkor and Elijah Ofori Donkor, two Ghanaian brothers who died in a microlight aircraft crash in March 2026. In his final moments, Captain Frank steered the failing aircraft away from a school full of children. That act of sacrificial courage, Reverend Builderman argues, was the ultimate SIZESTEP: a single decision, taken in divine order, that cost everything and gave others a future.",
      "This is not a self-help manual dressed in spiritual language. It is a prophetic address to students, entrepreneurs, ministers, professionals, and leaders across Africa and beyond who are tired of the noise and hungry for substance. It reads like a letter from a father who has walked the road and come back to say: slow down, the path is ordered, and the God who laid it is faithful.",
      "SIZESTEPS is required reading for any young person who has ever felt too small, too slow, or too hidden to matter. It will correct that lie with Scripture, with wisdom, and with the quiet authority of a life that proves the message.",
    ],
    recommendedFor: [
      "Young people who have ever felt too small, too slow, or too hidden to matter",
      "Students, entrepreneurs, ministers, and professionals across Africa and beyond",
      "Leaders hungry for substance over noise",
      "Anyone who needs to hear that the path is ordered and the God who laid it is faithful",
    ],
  },
  {
    slug: "africa-beware",
    reviewer: "Squadron Leader Kwaku Gyamfi Bediako-Dinkunim",
    reviewerTitle: "Book Review",
    paragraphs: [
      "It began, as the most honest books often do, with a child's homework. In Africa Beware: The Chains, the Choice, and the Christ Who Sets a Continent Free, Reverend Acheampong E. S. Builderman recounts an evening when his daughter brought her African History assignment to the table and asked ten questions he could not answer that night. Where do we truly belong? Where was God when the chains were fastened? Why do our people pray so much and still remain so poor? This book is the answer he owed her, and it took years to write.",
      "What makes this book unusual, and at times startling, is its refusal to settle into either of the two comfortable stories readers might expect. It will not let the coloniser off the hook, and it devotes some of its most powerful chapters to naming the transatlantic trade for exactly what Scripture calls it, theft, on an industrial and ledgered scale. But it also refuses to let African leadership off the hook. Builderman's central and most provocative claim is stark. Africa is not a poor continent. It is a plundered one. And the plunder, he argues, did not end with independence. It changed hands.",
      "The book's method is its strength. Each chapter takes one of his daughters' questions and follows it wherever the evidence and the Scripture lead, through the dungeons of Elmina, through the Mercator map that quietly taught a generation of children their continent was smaller than it is, through the comparison of Ghana and Singapore, two nations that started independence on opposite economic footing and arrived at opposite destinations because of leadership rather than resources. He introduces a simple, recurring frame, the steward and the thief, and applies it without favouritism to slave traders, colonial administrators, corrupt religious ministers or government officials, illegal miners, and silent pastors alike.",
      "The theology here is not decorative. Reverend Builderman writes as a pastor first, and his answer to where God was during the trade, delivered through his own testimony of standing in the dungeon beneath a chapel at Elmina Castle, is one of the most moving passages in the book. God was not in the chapel above the chains, he argues. He was in the dungeon, and later, on a cross, He took the dungeon into Himself.",
      "The book closes not with despair but with a charter and a challenge, calling a rising generation to choose stewardship over theft, in whatever office, however small, they hold. It ends the way it begins, at a father's table, handing the questions and the choice back to his daughters, and to every reader who has ever wondered whether history's verdict on a continent is final. Builderman's answer is that it is not.",
    ],
    recommendedFor: [
      "Anyone wrestling honestly with Africa's history and future",
      "Pastors and civic leaders",
      "Students of African schools and colleges",
      "Readers of faith who want theology that reaches all the way to the road, the school, and the river",
    ],
  },
  {
    slug: "thanksgiving-manifesto",
    reviewer: "Mrs. Faustina Agyemang Duah",
    reviewerTitle: "Book Review — Co-founder and Director, Future Jewels International School Group Ltd., Pokuase",
    paragraphs: [
      "Many books are written at a desk, usually in comfortable places. This one is partly written from a labour ward, at three in the morning, with a consent form on the table and a daughter's life hanging in the balance. The Thanksgiving Manifesto, co-authored by Reverend Acheampong E. S. Builderman and his wife, Lady Christabel Builderman, does not arrive at gratitude as a nice idea. It arrives at it the way survivors arrive at conviction, tested and proven.",
      "The book opens with their own testimony. A pregnancy, a pandemic, a stalled career, and then seventy-two hours of labour with no progress and a doctor's grave warning that Christabel might not survive. Their daughter was born safely, and they named her Ngosra, meaning The Anointing. From that ward, the couple made a decision that would shape the rest of their lives together. Thanksgiving would not be an occasional feeling. It would be their identity.",
      "What follows across ten chapters is less a self-help guide and more a manifesto in the proper sense, a public declaration with a spine. Reverend Builderman lays the theological foundation, tracing gratitude from the breath we did not earn through to the eternal worship awaiting believers at the throne. He is precise and pastoral in equal measure, unafraid to name the quiet sins that starve a grateful heart, forgetfulness, entitlement, scarcity thinking, and to show how each one is dismantled by a life postured in thanks.",
      "The book finds its most affecting register, however, in the three chapters written by Lady Christabel. As a nurse who has spent years beside incubators in a neonatal intensive care unit, she writes about thanksgiving offered not from strength but from a trembling body. Her chapter on gratitude in illness sits beside chapters on marriage, motherhood, and the long, unglamorous work of building a grateful home. Her final chapter, on thanksgiving after betrayal and loss, is the book's most courageous. She writes plainly about being wounded by people they trusted, about floodwaters that swept away what they had built, and about the slow, deliberate choice to forgive rather than let bitterness take root. There is no easy resolution offered here. Just the hard-won testimony of someone who chose gratitude anyway.",
      "Together the two voices form something rare, a marriage rendered in print, theology tested against the ordinary and extraordinary weight of a shared life. The book closes by inviting readers to write their own personal manifesto, turning what could have been a passive read into a signed commitment.",
      "This is not a book for those who want gratitude kept comfortable and seasonal. It is for anyone standing in a wilderness of their own, wondering whether thanksgiving can survive contact with real pain. The Buildermans answer with their own scars still visible, and the answer is yes.",
    ],
    recommendedFor: [
      "Believers walking through hardship",
      "Married couples seeking a shared spiritual language",
      "Healthcare workers and carers",
      "Anyone ready to trade an occasional gratitude for a defining one",
    ],
  },
];

export function getReview(slug: string): BookReview | undefined {
  return reviews.find((r) => r.slug === slug);
}
