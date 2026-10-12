import type { JournalEntry } from "../types";
import calmLivingRoom from "../assets/calm-living-room.avif";
import diningRoom from "../assets/dining-room.avif";
import woodCare from "../assets/dining-chair-guide.jpg";
import wood from "../assets/wood-care.jpg";
import diningChair from "../assets/dining-chair-guide.avif";
import LivingRoom from "../assets/small-living-room.avif";

export const journalEntries: JournalEntry[] = [
  {
    id: "creating-a-calmer-living-room",
    category: "Living Spaces",
    readTime: "5 min read",
    title: "Creating a calmer living room",
    excerpt:
      "Simple ways to bring comfort, warmth, and a sense of balance into your living space.",
    publishedAt: "October 12, 2026",
    comments: 0,
    image: calmLivingRoom,
  },
  {
    id: "choosing-a-dining-table",
    category: "Buying Guides",
    readTime: "4 min read",
    title: "How to choose a dining table for your home",
    excerpt:
      "Think about your space, everyday routines, and the people who gather around your table.",
    publishedAt: "October 8, 2026",
    comments: 2,
    image: diningRoom,
  },
  {
    id: "caring-for-wood-furniture",
    category: "Care & Materials",
    readTime: "3 min read",
    title: "A simple guide to caring for wood furniture",
    excerpt:
      "Keep wooden furniture looking its best with a few thoughtful everyday care habits.",
    publishedAt: "October 2, 2026",
    comments: 1,
    image: woodCare,
  },
  {
  id: "small-living-room-layout",
  category: "Living Spaces",
  readTime: "4 min read",
  title: "Make a small living room feel more open",
  excerpt:
    "A few careful furniture and layout choices can help a compact room feel calmer and easier to move through.",
  publishedAt: "October 11, 2026",
  comments: 0,
  image: LivingRoom,
},
{
  id: "dining- chair-height-guide",
  category: "Buying Guides",
  readTime: "5 min read",
  title: "A practical guide to dining chair height",
  excerpt:
    "Learn what to consider when pairing chairs with your dining table for comfortable everyday meals.",
  publishedAt: "October 7, 2026",
  comments: 0,
  image: diningChair,
},
{
  id: "cleaning-wood-furniture",
  category: "Care & Materials",
  readTime: "3 min read",
  title: "How to clean wood furniture gently",
  excerpt:
    "Simple care habits can help protect a wooden finish from dust, spills, and everyday marks.",
  publishedAt: "October 1, 2026",
  comments: 0,
  image: wood,
},
];