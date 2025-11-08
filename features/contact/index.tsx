'use client'

import { useState } from 'react'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import Button from '@/components/ui/Button'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'mobilteknolojileri@gmail.com'
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )

            toast.success('Mesajınız başarıyla gönderildi!')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('Email gönderme hatası:', error)
            toast.error('Mesaj gönderilemedi. Lütfen tekrar deneyin.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-dark-800">
            <Toaster position="top-right" />
            <div className="section-container section-padding">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-heading tracking-tight">İletişim</h2>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-dark-700">
                        <h3 className="text-2xl font-bold mb-6 text-heading">Mesaj Gönder</h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-body">Adınız</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 border-2 border-gray-200 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 text-heading focus:outline-none focus:border-primary-500 transition-colors"
                                    placeholder="İsminizi girin"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-body">E-posta</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 border-2 border-gray-200 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 text-heading focus:outline-none focus:border-primary-500 transition-colors"
                                    placeholder="ornek@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-body">Mesajınız</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2.5 border-2 border-gray-200 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 text-heading focus:outline-none focus:border-primary-500 transition-colors"
                                    placeholder="Mesajınızı yazın..."
                                />
                            </div>

                            <Button type="submit" className="w-full" isLoading={isSubmitting}>
                                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                            </Button>
                        </form>
                    </div>

                    <div className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-dark-700">
                        <h3 className="text-2xl font-bold mb-6 text-heading">Diğer İletişim</h3>
                        <div className="space-y-4">
                            <a href="mailto:mobilteknolojileri@gmail.com" className="flex items-center space-x-3 text-body hover:text-primary-600 transition-colors">
                                <FaEnvelope className="w-5 h-5" />
                                <span>mobilteknolojileri@gmail.com</span>
                            </a>

                            <a href="https://github.com/mobilteknolojileri" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-body hover:text-primary-600 transition-colors">
                                <FaGithub className="w-5 h-5" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact