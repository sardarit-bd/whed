import Image from "next/image";
export default function ContactUsPage() {
    return (
        <main className="min-h-screen bg-white text-gray-700 font-sans">
            <div className="cs-container mx-auto px-6 md:px-0 py-12">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-2xl font-extrabold text-[#1a4f7a] uppercase tracking-wide mb-2">
                        Contact Us
                    </h1>
                    <p className="text-sm text-gray-500">
                        Get in touch with the IAU/UNESCO Information Centre for support and inquiries
                    </p>
                </div>

                {/* Top 3 Cards */}
                <div className="grid grid-cols-3 gap-4 mb-10">
                    {/* Email Us */}
                    <div className="border border-gray-200 rounded-xl bg-[#f0f8fc] p-5 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-[#1a7a8a] flex items-center justify-center mb-3">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="font-bold text-gray-800 mb-1">Email the WHED Team</p>
                        <a href="mailto:centre@iau.global" className="text-[#1a7a8a] text-sm hover:underline mb-1">centre@iau.global</a>
                        <p className="text-xs text-gray-500">For general inquiries about the WHED Portal</p>
                    </div>

                    {/* IAU Membership */}
                    <div className="border border-gray-200 rounded-xl bg-[#f0f8fc] p-5 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-[#1a7a8a] flex items-center justify-center mb-3">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <p className="font-bold text-gray-800 mb-1">IAU Membership</p>
                        <a href="https://iau.global/membership" className="text-[#1a7a8a] text-sm hover:underline mb-1">iau.global/membership</a>
                        <p className="text-xs text-gray-500">Learn more about membership</p>
                    </div>

                    {/* Social Media */}
                    <div className="border border-gray-200 rounded-xl bg-[#f0f8fc] p-5 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-[#1a7a8a] flex items-center justify-center mb-3">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </div>
                        <p className="font-bold text-gray-800 mb-3">Social Media</p>
                        <div className="flex gap-2">
                            {/* Facebook */}
                            <a href="#" className="w-8 h-8 rounded-full bg-[#1a1a2e] flex items-center justify-center hover:opacity-80 transition">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="w-8 h-8 rounded-full bg-[#1a1a2e] flex items-center justify-center hover:opacity-80 transition">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="w-8 h-8 rounded-full bg-[#1a1a2e] flex items-center justify-center hover:opacity-80 transition">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Form + Right Cards */}
                <div className="grid grid-cols-2 gap-6">

                    {/* Contact Form */}
                    <div className="border border-gray-200 rounded-xl p-6">
                        <h3 className="font-bold text-gray-800 mb-5">Send us a Message</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-semibold text-gray-700 mb-1 block">
                                    Your Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1a7a8a] bg-gray-50"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-700 mb-1 block">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1a7a8a] bg-gray-50"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-700 mb-1 block">
                                    Subject <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="What is your inquiry about?"
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1a7a8a] bg-gray-50"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-700 mb-1 block">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Please provide details about your inquiry..."
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1a7a8a] bg-gray-50 resize-none"
                                />
                            </div>
                            <button className="w-full bg-[#1a7a8a] hover:bg-[#155f6e] transition-colors text-white text-sm font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                Send Message
                            </button>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col gap-4">
                        {/* Building Image */}
                        <div className="rounded-xl overflow-hidden h-48 bg-gray-200">
                            <Image
                                src="https://res.cloudinary.com/dg83pvgls/image/upload/v1773307349/4eb42537281b9ba8c29e529ba9a12c5996b1f9cc_a1b3y6.jpg"
                                alt="UNESCO House Paris"
                                className="w-full h-full object-cover"
                                height={500}
                                width={500}
                            />
                        </div>

                        {/* Office Address */}
                        <div className="border border-gray-200 rounded-xl p-4 flex gap-3">
                            <div className="mt-0.5">
                                <div className="w-8 h-8 rounded-full bg-[#e8f4f8] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-[#1a7a8a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 mb-1">Office Address</p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    IAU/UNESCO Information Centre on Higher Education<br />
                                    UNESCO House<br />
                                    1 rue Miollis<br />
                                    75732 Paris Cedex 15<br />
                                    France
                                </p>
                            </div>
                        </div>

                        {/* Website */}
                        <div className="border border-gray-200 rounded-xl p-4 flex gap-3">
                            <div className="mt-0.5">
                                <div className="w-8 h-8 rounded-full bg-[#e8f4f8] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-[#1a7a8a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 mb-1">Website</p>
                                <a href="https://www.iau.global" className="text-[#1a7a8a] text-sm hover:underline font-medium">www.iau.global</a>
                                <p className="text-xs text-gray-500 mt-1">Visit our main website for more information about IAU and our programs</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}