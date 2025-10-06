import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#F5F9FA] py-8 md:py-16">
      <footer className="max-w-[1640px] px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b pb-8">
          {/* Logo & Contact */}
          <div>
            <Image
              src="/images/footer/logo.png"
              alt="PCBP Logo"
              width={80}
              height={80}
              className="mb-4"
            />
            <p className="text-gray-600 mb-4">
              Helping bully breed dogs find loving homes. Adopt, foster, or
              donate to save a life today.
            </p>
            <p className="font-bold text-lg text-primary flex items-center gap-2">
              <span className="text-xl">📞</span> 863-816-6995
            </p>
            <p className="text-sm text-gray-600">Got Questions? Call us 24/7</p>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Working Hours</h3>
            <ul className="bg-gray-50 p-4 rounded-lg text-sm">
              <li className="flex justify-between mb-2">
                <span>Mon - Fri:</span>{" "}
                <span className="font-semibold">7am - 6pm</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Saturday:</span>{" "}
                <span className="font-semibold">9am - 4pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>{" "}
                <span className="text-red-500 font-semibold">Closed</span>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <ul className="space-y-2 text-gray-600">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Shop</li>
              </ul>
              <ul className="space-y-2 text-gray-600">
                <li>FAQ</li>
                <li>Gallery</li>
                <li>Delivery</li>
                <li>Sales</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Be first in the queue! Get our latest news straight to your inbox.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-l-md px-3 py-2 focus:outline-none"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-r-md">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 pt-6">
          <p>
            © Copyrights{" "}
            <span className="text-primary">Polk County Bully Project</span> All
            rights reserved
          </p>
          <p>
            Design & Developed by{" "}
            <span className="text-primary">BayShore Communication</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
