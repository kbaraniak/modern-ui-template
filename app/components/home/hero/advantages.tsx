export default function Advantages() {
    return (
        <section className="bg-white" id="advantages">
            <div className="hero min-h-[85vh]">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://images.pexels.com/photos/20130305/pexels-photo-20130305/free-photo-of-natura-krzew-ogrod-lisc.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="min-w-72 rounded-lg shadow-2xl" />
                    <div className="mx-4 max-md:text-center">
                        <h1 className="text-5xl font-bold">We create quickly</h1>
                        <p className="py-6">Despite the quick creation, our products will be accurate</p>
                        <button className="btn btn-primary bg-cyan-700 border-cyan-700 mx-auto !block lg:mx-0 lg:unset">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
}