import React from "react";
export default function MapBox() {
    return (
        <section>
            <div className="relative h-[500px]">
            <iframe 
                title="map" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.780633857778!2d18.602602376778588!3d54.37852539699528!2m3!1f0!2\f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd749449c96f6f%3A0x2f9995f7ec87bb88!2sAleja%20Grunwaldzka%20104%2C%2080-244%20Gda%C5%84sk%2C%20Poland!5e0!3m2!1sen!2sse!4v1708768011036!5m2!1sen!2sse"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
        </section>
    );
}