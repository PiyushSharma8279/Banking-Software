import React, { useState } from "react";
import { useParams } from "react-router-dom";

const hotels = [
    {
        name: ` Gardenia`,
        address: "No 1 Residency Road, Bengaluru 560025 India",
        img: "https://media.istockphoto.com/id/472899538/photo/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab.jpg?s=612x612&w=0&k=20&c=rz-WSe_6gKfkID6EL9yxCdN_UIMkXUBsr67884j-X9o=",
        rating: 5,
    },
    {
        name: "ITC Grand Bharat",
        address: "Hasanpur Tauru Mewat District, Bissar Akbarpur 122105 India",
        img: "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=",
        rating: 4,
    },
    {
        name: "ITC Grand Central",
        address: "287 Dr Babasaheb Ambedkar Road Parel, Mumbai 400012 India",
        img: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg",
        rating: 4,
    },
    {
        name: "ITC Grand Chola",
        address: "No 63 Mount Road Guindy, Chennai (Madras) 600032 India",
        img: "https://img.freepik.com/premium-photo/popular-resort-amara-dolce-vita-luxury-hotel_146671-19410.jpg?semt=ais_incoming&w=740&q=80",
        rating: 4,
    },
    {
        name: "ITC Gardenia",
        address: "No 1 Residency Road, Bengaluru 560025 India",
        img: "https://media.istockphoto.com/id/472899538/photo/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab.jpg?s=612x612&w=0&k=20&c=rz-WSe_6gKfkID6EL9yxCdN_UIMkXUBsr67884j-X9o=",
        rating: 5,
    },
    {
        name: "ITC Grand Bharat",
        address: "Hasanpur Tauru Mewat District, Bissar Akbarpur 122105 India",
        img: "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=",
        rating: 4,
    },
    {
        name: "ITC Grand Central",
        address: "287 Dr Babasaheb Ambedkar Road Parel, Mumbai 400012 India",
        img: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg",
        rating: 4,
    },
    {
        name: "ITC Grand Chola",
        address: "No 63 Mount Road Guindy, Chennai (Madras) 600032 India",
        img: "https://img.freepik.com/premium-photo/popular-resort-amara-dolce-vita-luxury-hotel_146671-19410.jpg?semt=ais_incoming&w=740&q=80",
        rating: 4,
    },
    {
        name: "ITC Gardenia",
        address: "No 1 Residency Road, Bengaluru 560025 India",
        img: "https://media.istockphoto.com/id/472899538/photo/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab.jpg?s=612x612&w=0&k=20&c=rz-WSe_6gKfkID6EL9yxCdN_UIMkXUBsr67884j-X9o=",
        rating: 5,
    },
    {
        name: "ITC Grand Bharat",
        address: "Hasanpur Tauru Mewat District, Bissar Akbarpur 122105 India",
        img: "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=",
        rating: 4,
    },
    {
        name: "ITC Grand Central",
        address: "287 Dr Babasaheb Ambedkar Road Parel, Mumbai 400012 India",
        img: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg",
        rating: 4,
    },
    {
        name: "ITC Grand Chola",
        address: "No 63 Mount Road Guindy, Chennai (Madras) 600032 India",
        img: "https://img.freepik.com/premium-photo/popular-resort-amara-dolce-vita-luxury-hotel_146671-19410.jpg?semt=ais_incoming&w=740&q=80",
        rating: 4,
    },
];


function HotelCard({ name, address, img, rating }) {
    const [showModal, setShowModal] = useState(false);
    const { category } = useParams();
    const categoryName = category.replace(/-/g, " ").toUpperCase();

    return (
        <>
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
                <img src={img} alt={name} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h2 className="text-lg font-semibold">{categoryName}{name}</h2>
                    <div className="flex items-center text-yellow-500 my-1">
                        {"★".repeat(rating)}
                        {"☆".repeat(5 - rating)}
                    </div>
                    <p className="text-sm text-gray-600 flex items-center">
                        <span className="mr-2">📍</span>
                        {address}
                    </p>
                    <button className="mt-3 w-full bg-[#246e73] text-white py-2 rounded hover:bg-[#02a9b5] transition"
                        onClick={() => setShowModal(true)}
                    >
                        BOOK NOW
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start md:items-center z-50 overflow-y-auto">
                    
                    <div className="bg-[#083d56] text-white p-6 rounded-lg w-[95%] md:w-[90%] max-w-4xl relative mt-6 md:mt-20 overflow-y-auto max-h-[90vh]">
                        
                        <button
                            className="absolute top-2 right-2 text-white text-xl font-bold"
                            onClick={() => setShowModal(false)}
                        >
                            ✖
                        </button>

                        <h2 className="text-center text-lg md:text-2xl font-bold mb-6">
                            Booking Now
                        </h2>

                        
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            <div className="flex flex-col gap-1">
                                <label>Booking code*</label>
                                <input type="text" className="p-2 rounded text-black" />
                            </div>

                            
                            <div className="flex flex-col gap-1">
                                <label>First Guest Name *</label>
                                <input type="text" className="p-2 rounded text-black" />
                            </div>

                           
                            <div className="flex flex-col gap-1">
                                <label>Total No. of Person *</label>
                                <select className="p-2 rounded text-black">
                                    <option>Select</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>

                           
                            <div className="flex flex-col gap-1">
                                <label>Room Type *</label>
                                <select className="p-2 rounded text-black">
                                     <option>Select Room Type</option>
                                    <option>Base</option>
                                    <option>Second</option>
                                    <option>Third</option>
                                </select>
                            </div>

                            
                            <div className="flex flex-col gap-1">
                                <label>No of Rooms *</label>
                                <input type="number" className="p-2 rounded text-black" />
                            </div>

                            
                            <div className="flex flex-col gap-1">
                                <label>Check In Date *</label>
                                <input type="date" className="p-2 rounded text-black" />
                            </div>

                            
                            <div className="flex flex-col gap-1">
                                <label>Check Out Date *</label>
                                <input type="date" className="p-2 rounded text-black" />
                            </div>

                            
                            <div className="flex flex-col gap-1">
                                <label>Extra Bed / Child with Bed *</label>
                                <select className="p-2 rounded text-black">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>

                            
                            <div className="flex flex-col gap-1">
                                <label>Meal Plan *</label>
                                <select className="p-2 rounded text-black">
                                    <option>Room with no meal</option>
                                    <option>Breakfast</option>
                                    <option>Breakfast and Dinner</option>
                                    <option>Breakfast with lunch dinner</option>
                                </select>
                            </div>

                            
                            <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
                                <label>Mobile No *</label>
                                <input type="text" className="p-2 rounded text-black" />
                            </div>

                            
                            <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
                                <label>Additional Information</label>
                                <textarea className="p-2 rounded text-black"></textarea>
                            </div>

                            
                            <button
                                type="submit"
                                className="col-span-1 md:col-span-2 bg-[#246e73] py-2 rounded text-white font-bold hover:bg-white hover:text-[#246e73] transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>



            )}
        </>
    );
}

export default function HotelsGrid() {
    const { category } = useParams();
    const categoryName = category.replace(/-/g, " ").toUpperCase();
    return (
        <>
            <div>
                <div
                    className="w-full h-96 bg-cover bg-center flex items-center justify-center"
                    style={{
                        backgroundImage: `url(https://cf.bstatic.com/xdata/images/hotel/max1024x768/385388071.jpg?k=de0b51f296a3d9431866b51b974921c9ebb50cacf08eb55c1eec1d468849ffe2&o=&hp=1)`,
                    }}
                >
                    <div className="text-center text-white font-bold text-4xl px-6 py-2 rounded-lg bg-black/40"> {categoryName}</div>
                </div>
            </div>
            <div className="p-6">
                <h1 className="text-center text-2xl font-bold mb-6">
                    PAN INDIA <span className="text-blue-500">HOTEL BOOKING</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {hotels.map((hotel, index) => (
                        <HotelCard key={index} {...hotel} />
                    ))}
                </div>
            </div>



        </>

    );
}
