import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, message } = body

        // Burada EmailJS veya başka bir servis kullanılabilir
        // Şimdilik sadece konsola yazdırıyoruz
        console.log('Contact form submission:', { name, email, message })

        // Gerçek uygulamada burada email gönderimi yapılacak

        return NextResponse.json(
            { message: 'Mesajınız başarıyla gönderildi!' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Mesaj gönderilirken bir hata oluştu' },
            { status: 500 }
        )
    }
}