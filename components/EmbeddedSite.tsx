export default function EmbeddedSite() {
  return (
    <section className="bg-[#F5F9FA] lg:pt-[200px] pb-12">
      <div className="max-w-[1640px] px-8 mb-8 md:mb-16 mx-auto">
        <div className="textwidget">
          <p>
            <iframe
              loading="lazy"
              style={{ height: 800, width: "100%" }}
              src="https://www.wagtopia.com/search/org?id=1233589&iframe=normal"
            ></iframe>
          </p>
        </div>
      </div>
    </section>
  );
}
