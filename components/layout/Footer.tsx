
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="bg-[#F5F9FA] py-8 md:pt-16 border-t-1 border-[#CDCCCE]/20">
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
            <div>
              <div className="flex items-center gap-4 text-2xl">
                <Link href="https://www.facebook.com/polkcountybullyproject/"><FaFacebookF /></Link>
                <Link href="https://www.instagram.com/polkcountybullyproject/?hl=en"><FiInstagram />
                </Link>
                <Link href="https://www.youtube.com/"><FiYoutube />
                </Link>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          {/* <div>
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
          </div> */}

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/learn">Learn</Link></li>
                <li><Link href="/adoption">Adoption</Link></li>
                
              </ul>
              <ul className="space-y-2 text-gray-600">
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/donate">Donate</Link></li>
              </ul>
            </div>
          </div>
          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Other Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <ul className="space-y-2 text-gray-600">
              <li><Link href="/https://petstablished.com/adoptions/personal-information?application_type=Adopt&donation_section=false&form_id=24575&form_type=generic&generic_form_id=24575&pet_id=715879&section=1&selected_pets=false">Adoption Application</Link></li>
              <li><Link href="https://petstablished.com/adoptions/personal-information?application_type=Foster&donation_section=false&form_id=24574&form_type=generic&generic_form_id=24574&pet_id=715879&section=1&selected_pets=false">Foster Application</Link></li>
              <li><Link href="https://www.giveffect.com/charities/27544-polk-county-bully-project/volunteer_application">Volunteer Application</Link></li>
              <li><Link href="https://www.giveffect.com/charities/27544-polk-county-bully-project/volunteer">Volunteer Calendar</Link></li>
              <li><Link href="https://linktr.ee/PolkCountyBullyProject">Other Links</Link></li>
              
                
                
              </ul>
              <ul className="space-y-2 text-gray-600">
              <li><Link href="https://app.giveffect.com/charities/27544-polk-county-bully-project">One-Time Donations</Link></li>
              <li><Link href="https://account.venmo.com/u/Polkcountybullyproject">Venmo</Link></li>
              <li><Link href="https://www.paypal.com/paypalme/PolkCountyBullyProje">Paypal</Link></li>
              <li><Link href="https://cash.app/$pcbp">Cash App</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <p className="font-medium text-sm  flex items-center gap-2 mb-4">
              <span className="text-2xl text-primary"><TfiLocationPin />

              </span>5840 W Brannen Rd, Lakeland, FL 33813, United States
            </p>
            <p className="font-medium text-sm  flex items-center gap-2 mb-4">
              <span className="text-xl text-primary"><FaPhone />
              </span> 863-816-6995
            </p>
            <p className="font-medium text-sm  flex items-center gap-2">
              <span className="text-2xl text-primary"><MdOutlineEmail />
              </span> polkcountybullyproject@gmail.com
            </p>
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
            <Link href="https://www.bayshorecommunication.com/" target='_blank' className="text-primary">BayShore Communication</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
