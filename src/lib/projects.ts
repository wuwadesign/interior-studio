export interface Project {
  id: string
  title: string
  location: string
  year: string
  category: string
  coverImage: string
  images: string[]
  description: string
  details: {
    scope: string
    area: string
    status: string
  }
}

export const projects: Project[] = [
  {
    id: 'the-meridian',
    title: 'Lagenda Residence',
    location: 'Puchong',
    year: '2023',
    category: 'Residential',
    coverImage: '/images/DSCF6015.jpg',
    images: [
      '/images/DSCF6013.jpg',
      '/images/DSCF6008.jpg',
      '/images/DSCF7002.jpg',
      '/images/DSCF7017.jpg',
    ],
    description: 'A calm, minimal home defined by warm beige and earthy tones, designed to feel both inviting and timeless. Soft curves around the house are subtly introduced in carpentry and ceiling details, adding organic flow to the space. Ambient lighting is seamlessly integrated within the built-ins, where minimalism meets warmth and comfort.',
    details: {
      scope: 'Full interior design',
      area: '2000 sqft',
      status: 'Completed 2023',
    },
  },
  {
    id: 'villa-selayang',
    title: 'Villa Selayang',
    location: 'Selangor',
    year: '2024',
    category: 'Residential',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=85',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=85',
    ],
    description: 'Set within a mature garden, this family home draws its language from the land itself — earthy pigments, raw teak, and locally sourced stone. The interiors blur the threshold between inside and outside, letting nature become the dominant material.',
    details: {
      scope: 'Interior design, landscape coordination',
      area: '6,800 sqft',
      status: 'Completed 2024',
    },
  },
  {
    id: 'obsidian-loft',
    title: 'Obsidian Loft',
    location: 'Bangsar, KL',
    year: '2023',
    category: 'Residential',
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=85',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=85',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85',
    ],
    description: 'A duplex for a couple who collects art. The brief was clear: the space must recede so the art can speak. We designed a restrained backdrop of blackened steel, raw concrete, and aged leather — a living gallery that breathes.',
    details: {
      scope: 'Concept to completion',
      area: '2,900 sqft',
      status: 'Completed 2023',
    },
  },
  {
    id: 'casa-putih',
    title: 'Casa Putih',
    location: 'Petaling Jaya',
    year: '2023',
    category: 'Residential',
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=85',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1400&q=85',
    ],
    description: 'An all-white bungalow reinterpreted. Rather than clinical whiteness, we layered whites — warm alabaster, cool linen, chalky plaster — creating depth and shadow that shifts across the day as tropical light moves through the home.',
    details: {
      scope: 'Interior design & styling',
      area: '5,100 sqft',
      status: 'Completed 2023',
    },
  },
  {
    id: 'the-copper-house',
    title: 'The Copper House',
    location: 'Mont Kiara, KL',
    year: '2022',
    category: 'Residential',
    coverImage: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&q=85',
    images: [
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1400&q=85',
      'https://images.unsplash.com/photo-1583845112203-29329902332e?w=1400&q=85',
    ],
    description: 'Named for the hand-beaten copper panels that line its kitchen and reading room, this terrace house renovation was an exercise in materiality. Every surface was chosen for how it ages — the goal was a home that looks more beautiful in ten years.',
    details: {
      scope: 'Renovation & interior design',
      area: '3,600 sqft',
      status: 'Completed 2022',
    },
  },
  {
    id: 'studio-bukit',
    title: 'Studio Bukit',
    location: 'Bukit Tunku, KL',
    year: '2022',
    category: 'Commercial',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=85',
    ],
    description: 'A creative studio for a photography practice. The brief demanded versatility — a space that works for client meetings, photoshoots, and quiet editing. We delivered a modular layout anchored by a dramatic exposed concrete ceiling and custom track lighting.',
    details: {
      scope: 'Commercial interior design',
      area: '1,800 sqft',
      status: 'Completed 2022',
    },
  },
]
