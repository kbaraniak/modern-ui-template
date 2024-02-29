export default function Defence() {
    return (
        <section className="bg-white" id="defence">
            <div className="hero min-h-[70vh]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://images.pexels.com/photos/10875880/pexels-photo-10875880.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="rounded-lg shadow-2xl" />
                    <div className="mx-4 max-md:text-center">
                        <h1 className="text-5xl font-bold">Site protection</h1>
                        <p className="py-6 max-w-md">If you need, We offer free update for your website for 1 year. In addition, we offer immediate free updates in case of serious security vulnerabilities</p>
                        <button className="btn btn-primary bg-cyan-700 border-cyan-700 text-white mx-auto !block lg:mx-0 lg:unset">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
}