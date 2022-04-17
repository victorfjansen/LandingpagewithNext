export type TechIcon = {
  id: string
  title: string
  icon: {
    url: string
  }
}

export type AboutUs = {
  id: string
  name: string
  role: string
  description: string
  photo: {
    alternativeText: string
    url: string
  }
  socialLinks: Array<{
    slug: string
    link: string
  }>
}

export type LogoProps = {
  url: string
  alternativeText: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }

  image: {
    alternativeText: string
    url: string
  }
}

export type AboutProjectProps = {
  title: string
  description: string
  image: {
    url: string
    alternativeText
  }
}

export type sectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type sectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
    id: string
  }>
}

export type sectionModulesProps = {
  title: string
  modules: Array<{
    id: string
    title: string
    subtitle: string
    description: string
  }>
}

export type sectionAgendaProps = {
  title: string
  description: string
}

export type pricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type sectionAboutUsProps = {
  title: string
  authors: AboutUs[]
}

export type sectionReviewsProps = {
  title: string
  reviews: Array<{
    name: string
    text: string
    photo: {
      alternativeText
      url
    }
  }>
}

export type sectionFaqProps = {
  title: string
  questions: Array<{
    question: string
    answer: string
  }>
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
  sectionTech: sectionTechProps
  sectionConcepts: sectionConceptsProps
  sectionModules: sectionModulesProps
  sectionAgenda: sectionAgendaProps
  pricingBox: pricingBoxProps
  sectionAboutUs: sectionAboutUsProps
  sectionReviews: sectionReviewsProps
  sectionFaq: sectionFaqProps
}
