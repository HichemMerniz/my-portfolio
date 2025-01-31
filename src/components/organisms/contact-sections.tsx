export default function ContactSection() {
    return (
        <div id="contact-section" className="max-w-3xl mx-auto py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">Have a project idea? Contact with me!</h1>

            <div className="space-y-6 text-xl">
                <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-600">Email:</span>
                    <a href="mailto:hichemmerniz3@gmail.com" className="text-blue-500 hover:text-blue-600 transition-colors">
                        hichemmerniz3@gmail.com
                    </a>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-600">WhatsApp:</span>
                    <a href="https://wa.me/00213669525900" className="text-blue-500 hover:text-blue-600 transition-colors">
                        +213 6 69525900
                    </a>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-600">LinkedIn:</span>
                    <a href="https://www.linkedin.com/in/hichem-merniz-26809b154/" className="text-blue-500 hover:text-blue-600 transition-colors">
                        Hichem Merniz
                    </a>
                </div>
            </div>
        </div>
    )
}