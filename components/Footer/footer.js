
const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10 pl-[35px]">
            <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Online Shopping Section */}
                <div>
                    <h2 className="text-lg font-bold mb-4">ONLINE SHOPPING</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <a href="/" className="hover:underline">Cloths</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline">Art Work</a>
                        </li>
                    </ul>
                </div>

                {/* Customer Policies Section */}
                <div>
                    <h2 className="text-lg font-bold mb-4">CUSTOMER POLICIES</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <a href="/" className="hover:underline">Contact Us</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline">FAQ</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline">Terms Of Use</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline">Track Orders</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline">Shipping</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline">Cancellation</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline">Return</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
