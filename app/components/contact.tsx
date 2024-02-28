export default function Contact() {
    return (
        <section>
            <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-auto lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 z-[-10] w-full overflow-hidden bg-gray-100 shadow-none lg:w-1/2">
                            <svg className="absolute inset-0 h-full w-full stroke-gray-200" aria-hidden="true"><defs><pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse"><path d="M130 200V.5M.5 .5H200" fill="none"></path></pattern></defs><rect width="100%" height="100%" strokeWidth="0" fill="white"></rect><svg x="100%" y="-1" className="adh aoo"><path d="M-470.5 0h201v201h-201Z" strokeWidth="0"></path></svg><rect width="100%" height="100%" strokeWidth="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect></svg>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
                        </p>
                        <dl className="mt-10 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4 my-3">
                                <dt className="flex-none">
                                    <span className="txt">Address</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"></path></svg>
                                </dt>
                                <dd>Grunwaldzka 104/B<br />Gdańsk, PL 83-200</dd>
                            </div>
                            <div className="flex gap-x-4 my-3">
                                <dt className="flex-none">
                                    <span className="txt">Phone</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path></svg>
                                </dt>
                                <a className="bla" href="tel:+48504249999">+48 (504) 24-99-99</a>
                            </div>
                            <div className="flex gap-x-4 my-3">
                                <dt className="flex-none">
                                    <span className="txt">E-Mail</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg>
                                </dt>
                                <a className="bla" href="mailto:template@company.com">template@company.com</a>
                            </div>
                        </dl>
                    </div>
                </div>
                <form action="#SEND_URL" method="POST" className="px-6 pb-24 pt-20 md:pb-32 lg:px-8 lg:py-28">
                    <div className="mb yg aaj aau caq">
                        <div className="inline-block my-5">
                            <label htmlFor="first-name" className="font-bold text-sm leading-6 text-gray-700">First name</label>
                            <div className="lc">
                                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="appearance-none w-full border border-gray-300 rounded-md p-2 bg-white text-gray-800 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>
                        <div className="inline-block my-5">
                            <label htmlFor="last-name" className="font-bold text-sm leading-6 text-gray-700">Last name</label>
                            <div className="lc">
                                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="appearance-none w-full border border-gray-300 rounded-md p-2 bg-white text-gray-800 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>
                        <div className="my-5">
                            <label htmlFor="email" className="font-bold text-sm leading-6 text-gray-700">Email</label>
                            <div className="lc">
                                <input type="email" name="email" id="email" autoComplete="email" className="appearance-none w-full border border-gray-300 rounded-md p-2 bg-white text-gray-800 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>
                        <div className="my-5">
                            <label htmlFor="phone-number" className="font-bold text-sm leading-6 text-gray-700">Phone number</label>
                            <div className="lc">
                                <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="appearance-none w-full border border-gray-300 rounded-md p-2 bg-white text-gray-800 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>
                        <div className="my-5">
                            <div className="my-5">
                                <label htmlFor="message" className="font-bold text-sm leading-6 text-gray-700">Message</label>
                                <div className="lc">
                                    <textarea name="message" id="message" rows={4} className="appearance-none w-full border border-gray-300 rounded-md p-2 bg-white text-gray-800 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <button type="submit" className="button-form border-none border-transparent bg-blue-600 text-white font-semibold px-3 py-2 mt-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Send message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}