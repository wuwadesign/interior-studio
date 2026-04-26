export interface Project {
  id: string
  title: string
  location: string
  category: string
  coverImage: string
  images: string[]
  description?: string
  details: {
    scope: string
    area: string
  }
}

export const projects: Project[] = [
  {
    id: 'puchonglegenda',
    title: 'Legenda Residence',
    location: 'puchong',
    category: 'Residential',
    coverImage: '/images/Legenda/legenda-bedroom2.jpg',
    images: [
      '/images/Legenda/DSCF7008.jpg',
      '/images/Legenda/legenda-bedroom.jpg',
      '/images/Legenda/DSCF8004.jpg',
      '/images/Legenda/DSCF8002.jpg',
      '/images/Legenda/legenda-island.jpg',
      '/images/Legenda/legenda-tvwall.jpg',
      '/images/Legenda/legenda-dressing.jpg',
      '/images/Legenda/legenda-display.jpg',
    ],
    details: {
      scope: 'Full interior design',
      area: '2000 sqft',
    },
  },
  {
    id: 'elminagreen',
    title: 'Mr Z Residence',
    location: 'elmina green, shah alam',
    category: 'Residential',
    coverImage: '/images/Elmina Green3/LIVING-4.jpg',
    images: [
      '/images/Elmina Green3/LIVING-3.jpg',
      '/images/Elmina Green3/LIVING-2.jpg',
      '/images/Elmina Green3/LIVING-7.jpg',
      '/images/Elmina Green3/LIVING-8.jpg',
      '/images/Elmina Green3/LIVING-10.jpg',
      '/images/Elmina Green3/BEDROOM-3.jpg',
      '/images/Elmina Green3/BEDROOM-2.jpg',
      '/images/Elmina Green3/BEDROOM-4.jpg',
      '/images/Elmina Green3/MASTERBED-2.jpg',
      '/images/Elmina Green3/MASTERBED-5.jpg',
      '/images/Elmina Green3/MASTERBED-3.jpg',
      '/images/Elmina Green3/MASTERBED-4.jpg',
      '/images/Elmina Green3/KITCHEN-2.jpg',
      '/images/Elmina Green3/KITCHEN-3.jpg',
    ],
    details: {
      scope: 'concept to completion',
      area: '2,200 sqft',
    },
  },
  {
    id: 'damansararesidence',
    title: 'The Vale',
    location: 'damansara',
    category: 'Residential',
    coverImage: '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07414-7.jpg',
    images: [
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07414-7.jpg',
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07434-8.jpg',
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07499-11.jpg',
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07254-1.jpg',
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07294-2.jpg',
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07394-6.jpg',
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07354-4.jpg',
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07384-5.jpg',
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07444-9.jpg',
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07449-10.jpg',
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07629-15.jpg',
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07644-16.jpg',
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07619-14.jpg',
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07614-13.jpg',
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07714-18.jpg',
      '/images/TheVale/Wuwa_The Vale_Deliverables_260423_07679-17.jpg',

    ],
    description: 'A duplex for a couple who collects art. The brief was clear: the space must recede so the art can speak. We designed a restrained backdrop of blackened steel, raw concrete, and aged leather — a living gallery that breathes.',
    details: {
      scope: 'Concept to completion',
      area: '2,000 sqft',
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
