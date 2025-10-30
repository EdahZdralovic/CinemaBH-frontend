import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            <Footer />
        </div>
    );
}
