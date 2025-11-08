export interface Project {
    id: string
    title: string
    description: string
    longDescription?: string
    category: 'mobile' | 'web' | 'ai' | 'game' | 'embedded'
    technologies: string[]
    features?: string[]
    thumbnail: string
    images?: string[]
    videoUrl?: string
    githubUrl?: string
    liveUrl?: string
    featured: boolean
    completedAt: string
    aiPowered?: boolean
}

export interface Service {
    id: string
    title: string
    description: string
    price: string
    rating: number
    reviewCount: number
    deliveryTime: string
    icon: string
}

export interface Testimonial {
    id: string
    name: string
    username: string
    content: string
    rating: number
    date: string
    projectType: string
}

export interface Experience {
    id: string
    title: string
    company: string
    location: string
    duration: string
    description: string[]
    technologies: string[]
    type: 'work' | 'education' | 'internship'
}

export interface Research {
    id: string
    title: string
    conference: string
    date: string
    type: 'paper' | 'presentation' | 'certificate'
    pdfUrl: string
    thumbnailUrl?: string
    abstract?: string
}

export interface Stat {
    label: string
    value: string | number
    prefix?: string
    suffix?: string
    decimals?: number
    icon?: string
    color?: string
}

export interface ContactForm {
    name: string
    email: string
    subject?: string
    message: string
}