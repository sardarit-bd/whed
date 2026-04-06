import Link from "next/link";

const DonationPage = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
            <div className="w-[400px] bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="font-bold text-2xl">Donation Page</h1>
                <p className="my-4 text-gray-400">Thank you for considering a donation! Your support helps us continue our mission and make a positive impact. Please choose your preferred method of donation below.</p>
                {/* Add donation options here */}

                <h2 className="text-lg font-semibold text-gray-700 mb-7">This page is Under Development. will be updated soon</h2>


                <Link href="/" className="text-blue-500 hover:underline bg-[var(--primary-color)] text-white px-4 py-2 rounded">
                    Go Back to Home
                </Link>

            </div>
        </div>
    );
};

export default DonationPage;