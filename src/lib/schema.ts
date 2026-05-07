export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  "name": "Wuwa Design Studio",
  "url": "https://www.wuwadesignstudio.com",
  "description": "We craft interiors that are deeply considered, beautifully restrained, and built to endure.",
  "telephone": "+60175002582",
  "email": "wuwadesign@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Puchong",
    "addressRegion": "Selangor",
    "addressCountry": "MY"
  },
  "areaServed": "Klang Valley, Malaysia",
  "sameAs": [
    "https://www.instagram.com/wuwadesign/"
  ]
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does interior design cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Design fees for residential projects typically start from RM5,000 depending on the size and scope of work. Renovation costs are separate and vary by finish level. We will give you a clear, honest estimate in our very first conversation before you commit to anything."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical renovation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential projects take between 12–20 weeks from design sign-off to handover, depending on scope of work."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to manage the contractors myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. We manage all contractors and site visits throughout the build. You get regular updates without having to chase anyone."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate are your 3D designs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our visuals are created with real-world execution in mind. What you see is designed to be achievable — not just for presentation, but for actual build."
      }
    },
    {
      "@type": "Question",
      "name": "What if I don't like the initial design concept?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We revise the concept until you are happy — at no extra cost. You will never be pressured to approve something you are unsure about."
      }
    },
    {
      "@type": "Question",
      "name": "Do you only work in Puchong?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are based in Puchong but we take on interior design and renovation projects across Klang Valley and beyond. Drop us a message and we'll let you know if we can serve your area."
      }
    }
  ]
}