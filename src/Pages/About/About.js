import React from 'react'

function About() {
    return (
        <>
            {/* <div
                className="w-full h-80 bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjWmiqweNJs456ZNquPcFecIqR8Z4iPS80KQ&s)`,
                }}
            >
                <h2 className="text-center text-white font-semibold text-4xl px-6 py-2 rounded-lg bg-black/40">
                    ABOUT US
                </h2>
            </div> */}
            <div className="text-center  pt-20">
                <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-xl">
                    Here are the text to know about Trav Chap
                </p>
            </div>
            <div className=" py-20">
                <p className=" p-5">The Travel Agency for</p>
                <p className=" p-5">Our passion is travelling !!!</p>
                <p className=" p-5">We believe in providing a personal touch beyond just making your reservations. all our agents have travelled extensively and have first-hand knowledge of the destinations we book for. weâ€™re in the business of making your travel arrangements hassle-free.</p>
                <p className=" p-5">As one of our most popular services, no matter what type of travel you need to plan, rest assured that we will provide all the resources and guidance you need for the perfect trip.</p>
                <p className=" p-5">Contact us today to learn more about our offerings.</p>
            </div>

        </>
    )
}

export default About
