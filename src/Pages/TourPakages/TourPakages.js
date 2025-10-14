import React, { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HIMACHAL from "../../Images/himachal.jpg";
import KARNATAKA from "../../Images/karnataka.jpeg";
import KASHMIR from "../../Images/kashmir.jpeg";
import KERALA from "../../Images/kerala.webp";
import LADAKH from "../../Images/leh.jpg";
import SIKKIM from "../../Images/sikkim.jpeg";
import UTTARAKHAND from "../../Images/uttrakhand.jpeg";
import ANDAMAN from "../../Images/andman.jpg";

function TourPakages() {
    const navigate = useNavigate();
    const { category } = useParams();

    const categoryName = category.replace(/-/g, " ").toUpperCase();


    const images = {
        HIMACHAL,
        KARNATAKA,
        KASHMIR,
        KERALA,
        LADAKH,
        SIKKIM,
        UTTARAKHAND,
        ANDAMAN,
    };
    const bgImage = images[categoryName] || HIMACHAL;


    const sections = [
        { id: "sec1", label: "04 Nights 05 Days" },
        { id: "sec2", label: "05 Nights 06 Days" },
        { id: "sec3", label: "06 Nights 07 Days" },
        { id: "sec4", label: "07 Nights 08 Days" },
    ];


    const sectionRefs = useRef({});
    const [activeSection, setActiveSection] = useState(sections[0].id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) setActiveSection(visible.target.id);
            },
            { threshold: 0.3 }
        );

        sections.forEach((s) => {
            if (sectionRefs.current[s.id]) {
                observer.observe(sectionRefs.current[s.id]);
            }
        });

        return () => observer.disconnect();
    }, []);

    const packages = [
        { title: "Basic Packages", code: "TC05LA01", price: "7,499", img: "https://picsum.photos/400/250?random=1" },
        { title: "Deluxe Packages", code: "TC05LA02", price: "8,999", img: "https://picsum.photos/400/250?random=2" },
        { title: "Deluxe Plus Packages", code: "TC05LA03", price: "11,999", img: "https://picsum.photos/400/250?random=3" },
        { title: "Basic Packages", code: "TC05LA04", price: "8,999", img: "https://picsum.photos/400/250?random=4" },
        { title: "Deluxe Packages", code: "TC05LA05", price: "10,499", img: "https://picsum.photos/400/250?random=5" },
        { title: "Deluxe Plus Packages", code: "TC05LA06", price: "12,999", img: "https://picsum.photos/400/250?random=6" },
        { title: "Basic Packages", code: "TC05LA07", price: "11,499", img: "https://picsum.photos/400/250?random=7" },
        { title: "Deluxe Packages", code: "TC05LA08", price: "13,999", img: "https://picsum.photos/400/250?random=8" },
        { title: "Deluxe Plus Packages", code: "TC05LA09", price: "15,999", img: "https://picsum.photos/400/250?random=9" },
        { title: "Basic Packages", code: "TC05LA10", price: "12,499", img: "https://picsum.photos/400/250?random=10" },
        { title: "Deluxe Packages", code: "TC05LA11", price: "14,999", img: "https://picsum.photos/400/250?random=11" },
        { title: "Deluxe Plus Packages", code: "TC05LA12", price: "17,999", img: "https://picsum.photos/400/250?random=12" },
    ];

    return (
        <>

            <div
                className="relative w-full h-60 md:h-96 bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <h2 className="relative text-center text-white font-bold text-2xl md:text-4xl px-4 py-2 rounded-lg">
                    {categoryName} PACKAGES
                </h2>
            </div>


            <div className="p-4 shadow-md m-4 md:m-6">
                <h2 className="text-xl md:text-2xl font-bold py-2">About {categoryName}</h2>
                <p className="text-sm md:text-base leading-relaxed">
                    {categoryName} is a city in Indian-administered {categoryName}. It is the largest city and
                    the joint capital of {categoryName}, which is an Indian-administered union territory.
                    {categoryName} was also the historical capital of the Kingdom of {categoryName}.
                </p>
            </div>

            <div className="flex flex-col md:flex-row mt-10 px-4 md:px-6">

                <aside className="hidden md:block w-1/4 sticky top-24 h-fit bg-white shadow-md rounded-lg p-4">
                    <h2 className="font-bold text-lg mb-3">PACKAGES</h2>
                    <ul className="space-y-2 text-gray-700 font-medium">
                        {sections.map((s) => (
                            <li
                                key={s.id}
                                className={`cursor-pointer rounded p-1 ${activeSection === s.id ? "text-blue-600 font-semibold" : ""
                                    }`}
                                onClick={() => {
                                    sectionRefs.current[s.id]?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {s.label}
                            </li>
                        ))}
                    </ul>
                </aside>


                <div className="md:hidden sticky top-24 z-20 bg-white shadow-md overflow-x-auto whitespace-nowrap flex gap-4 px-4 py-2">
                    {sections.map((s) => (
                        <button
                            key={s.id}
                            className={`px-3 py-1 rounded-full text-sm ${activeSection === s.id ? "bg-blue-600 text-white" : "bg-gray-100"
                                }`}
                            onClick={() => {
                                sectionRefs.current[s.id]?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            {s.label}
                        </button>
                    ))}
                </div>


                <main className="w-full md:w-3/4 md:ml-6 space-y-12 mt-4 md:mt-0 ">
                    {sections.map((s, i) => (
                        <section
                            key={s.id}
                            id={s.id}
                            ref={(el) => (sectionRefs.current[s.id] = el)}
                            className="space-y-6"
                        >
                            <h2 className="text-center font-bold text-lg md:text-xl p-2">
                                <span className="text-blue-600">{s.label}</span>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {packages.slice(i * 3, i * 3 + 3).map((pkg, index) => (
                                    <div
                                        key={index}
                                        className="border rounded-lg shadow hover:shadow-lg transition p-3 md:p-4 bg-white"
                                    >
                                        <img
                                            src={pkg.img}
                                            alt={pkg.title}
                                            className="w-full h-36 md:h-40 object-cover rounded-md"
                                        />
                                        <h3 className="text-base md:text-lg font-semibold mt-3">{pkg.title}</h3>
                                        <p className="text-xs md:text-sm text-gray-500 mt-1">
                                            Booking Code: {pkg.code}
                                        </p>

                                        <div className="flex flex-wrap gap-2 md:gap-3 text-gray-600 mt-3 text-[11px] md:text-[12px]">
                                            <span>🍽 Meal</span>
                                            <span>🏨 Hotel</span>
                                            <span>🚗 Transport</span>
                                            <span>👓 Sightseeing</span>
                                        </div>

                                        <p className="mt-3 text-gray-500 text-xs md:text-sm">Starting Price</p>
                                        <h4 className="text-blue-600 font-bold text-lg md:text-xl">
                                            INR {pkg.price}/-*
                                        </h4>
                                        <p className="text-xs md:text-sm text-gray-500">Per Person</p>

                                        <button className="mt-3 md:mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm md:text-base"
                                            onClick={() => navigate(`/package/${pkg.code}`)}
                                        >
                                            VIEW DETAILS
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </main>
            </div>
        </>
    );
}

export default TourPakages;
