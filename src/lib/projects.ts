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
    id: 'elminagreen',
    title: 'Mr Z Residence',
    location: '4-bedroom landed house, Shah Alam',
    category: 'Residential',
    coverImage: '/images/elmina green3/LIVING-4.jpg',
    images: [
      '/images/elmina green3/LIVING-3.jpg',
      '/images/elmina green3/LIVING-2.jpg',
      '/images/elmina green3/LIVING-7.jpg',
      '/images/elmina green3/LIVING-8.jpg',
      '/images/elmina green3/LIVING-10.jpg',
      '/images/elmina green3/BEDROOM-3.jpg',
      '/images/elmina green3/BEDROOM-2.jpg',
      '/images/elmina green3/BEDROOM-4.jpg',
      '/images/elmina green3/MASTERBED-2.jpg',
      '/images/elmina green3/MASTERBED-5.jpg',
      '/images/elmina green3/MASTERBED-3.jpg',
      '/images/elmina green3/MASTERBED-4.jpg',
      '/images/elmina green3/KITCHEN-2.jpg',
      '/images/elmina green3/KITCHEN-3.jpg',
    ],
    details: {
      scope: 'concept to completion',
      area: '2,200 sqft',
    },
  },
  {
    id: 'damansararesidence',
    title: 'The Vale',
    location: '3-bedroom landed house, Damansara',
    category: 'Residential',
    coverImage: '/images/thevale/Wuwa_The Vale_Deliverables_260423_07414-7.jpg',
    images: [
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07414-7.jpg',
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07434-8.jpg',
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07499-11.jpg',
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07254-1.jpg',
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07294-2.jpg',
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07394-6.jpg',
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07354-4.jpg',
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07384-5.jpg',
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07444-9.jpg',
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07449-10.jpg',
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07629-15.jpg',
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07644-16.jpg',
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07619-14.jpg',
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07614-13.jpg',
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07714-18.jpg',
      '/images/thevale/Wuwa_The Vale_Deliverables_260423_07679-17.jpg',

    ],
    description: 'A duplex for a couple who collects art. The brief was clear: the space must recede so the art can speak. We designed a restrained backdrop of blackened steel, raw concrete, and aged leather — a living gallery that breathes.',
    details: {
      scope: 'Concept to completion',
      area: '2,000 sqft',
    },
  },
    {
    id: 'puchonglegenda',
    title: 'Legenda Residence',
    location: '5-bedroom landed house, Puchong',
    category: 'Residential',
    coverImage: '/images/legenda/legenda-bedroom2.jpg',
    images: [
      '/images/legenda/DSCF7008.jpg',
      '/images/legenda/legenda-bedroom.jpg',
      '/images/legenda/DSCF8004.jpg',
      '/images/legenda/DSCF8002.jpg',
      '/images/legenda/legenda-island.jpg',
      '/images/legenda/legenda-tvwall.jpg',
      '/images/legenda/legenda-dressing.jpg',
      '/images/legenda/legenda-display.jpg',
    ],
    details: {
      scope: 'concept to completion',
      area: '2000 sqft',
    },
  },
  {
    id: 'thongbowlioi',
    title: 'Thongbowl',
    location: 'Beef Noodle Restaurant, IOI Damansara',
    category: 'Commercial',
    coverImage: '/images/thongbowlioi/Enscape_2025-06-28-01-48-07.jpg',
    images: [
      '/images/thongbowlioi/Enscape_2025-06-28-01-48-07.jpg',
      '/images/thongbowlioi/Enscape_2025-06-28-01-17-54.jpg',
      '/images/thongbowlioi/Enscape_2025-06-28-01-18-40.jpg',
      '/images/thongbowlioi/Enscape_2025-06-28-01-19-39.jpg',
    ],
    details: {
      scope: 'concept to completion (completed 2025)',
      area: '2,200 sqft',
    },
  },
  {
    id: 'gownrentalshop',
    title: 'Tuilerie Gown',
    location: 'Gown Rental Shop, Kuala Lumpur',
    category: 'Commercial',
    coverImage: '/images/tuilerie/DSC_7379.jpg',
    images: [
      '/images/tuilerie/DSC_7328.jpg',
      '/images/tuilerie/DSC_7379.jpg',
      '/images/tuilerie/DSC_7572.jpg',
      '/images/tuilerie/DSC_7478.jpg',
      '/images/tuilerie/DSC_7541.jpg',
      '/images/tuilerie/DSC_7496.jpg',
      '/images/tuilerie/DSC_7511.jpg',
      '/images/tuilerie/DSC_7523.jpg',
      '/images/tuilerie/DSC_7502.jpg',
      '/images/tuilerie/DSC_7465.jpg',

    ],
    details: {
      scope: 'concept to completion',
      area: '1,200 sqft',
    },
  },
  {
    id: 'pjnoodleplace',
    title: 'BiangBiang Noodle Bar',
    location: 'Noodle Restaurant, Cheras',
    category: 'Commercial',
    coverImage: '/images/biangbiang cheras/DSCF4945.jpg',
    images: [
      '/images/biangbiang cheras/DSCF4904.jpg',
      '/images/biangbiang cheras/DSCF4927.jpg',
      '/images/biangbiang cheras/DSCF5176.jpg',
      '/images/biangbiang cheras/DSCF5168.jpg',
      '/images/biangbiang cheras/DSCF4964.jpg',
      '/images/biangbiang cheras/DSCF4945.jpg',
      '/images/biangbiang cheras/DSCF5074.jpg',
      '/images/biangbiang cheras/DSCF5165.jpg',
      '/images/biangbiang cheras/DSCF5016.jpg',
      '/images/biangbiang cheras/DSCF5006.jpg',
      '/images/biangbiang cheras/DSCF4953.jpg',
      '/images/biangbiang cheras/DSCF5013.jpg',
    ],
    details: {
      scope: 'concept to completion',
      area: '1,800 sqft',
    },
  },
  {
    id: 'officeconcept',
    title: 'Developer Office',
    location: 'Event Hall + Meeting Room, Kajang',
    category: 'Commercial',
    coverImage: '/images/fairview/entrance.jpg',
    images: [
      '/images/fairview/entrance.jpg',
      '/images/fairview/walkway.jpg',
      '/images/fairview/surau F.jpg',
      '/images/fairview/meeting room2.jpg',
      '/images/fairview/meeting room 3.jpg',

    ],
    details: {
      scope: 'Design concept',
      area: '1,500 sqft',
    },
  },  
  {
    id: 'mapleresidence',
    title: 'Maple Residence',
    location: '4-bedroom Dual-key, Kuala Lumpur',
    category: 'Residential',
    coverImage: '/images/maple residence/drykitchen2.png',
    images: [
      '/images/maple residence/drykitchen2.png',
      '/images/maple residence/tvwall (1).png',
      '/images/maple residence/sofa wall.png',
      '/images/maple residence/master tv (1).png',

    ],
    details: {
      scope: 'Design concept',
      area: '1,400 sqft',
    },
  },   
]
