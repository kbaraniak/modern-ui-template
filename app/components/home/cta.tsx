import React from 'react';

export default function CTA() {
    return(
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900">We invite you to join us</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg">We will certainly help you</p>
                    <a href="/contact" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Contact us</a>
                </div>
            </div>
        </section>
    );
}