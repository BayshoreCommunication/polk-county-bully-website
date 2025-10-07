export default function SimpleMap() {
    return (
        <section className="">
            <section className="">
            <div className="w-full h-[250px] md:h-[450px] overflow-hidden shadow-lg">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.132881057593!2d-81.96208492400147!3d27.959216414336797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd3bfa07960c2b%3A0xdfce74153cc12392!2s5840%20W%20Brannen%20Rd%2C%20Lakeland%2C%20FL%2033813%2C%20USA!5e0!3m2!1sen!2sbd!4v1759815896049!5m2!1sen!2sbdhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.1330349717095!2d-81.95951!3d27.959211699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd3b8bbb159ad5%3A0x59938e7ef0de4756!2sPolk%20County%20Bully%20Project!5e0!3m2!1sen!2sbd!4v1759835411286!5m2!1sen!2sbd" 
                width="100%"
                height={450} 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
        </section>
        </section>
    );
}
