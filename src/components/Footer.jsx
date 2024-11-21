
export const Footer = () => {
    return(
        <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap mb-5">
            <div className="w-full md:w-1/4 mb-6">
              <div className="mb-4">
                <h2 className="text-2xl font-bold">
                  <a href="#" className="logo">Car<span>book</span></a>
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className="flex space-x-4 mt-5">
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/4 mb-6">
              <div className="mb-4">
                <h2 className="text-xl font-bold">Information</h2>
                <ul className="list-none">
                  <li><a href="#" className="py-2 block hover:text-gray-400">About</a></li>
                  <li><a href="#" className="py-2 block hover:text-gray-400">Services</a></li>
                  <li><a href="#" className="py-2 block hover:text-gray-400">Terms and Conditions</a></li>
                  <li><a href="#" className="py-2 block hover:text-gray-400">Best Price Guarantee</a></li>
                  <li><a href="#" className="py-2 block hover:text-gray-400">Privacy &amp; Cookies Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/4 mb-6">
              <div className="mb-4">
                <h2 className="text-xl font-bold">Customer Support</h2>
                <ul className="list-none">
                  <li><a href="#" className="py-2 block hover:text-gray-400">FAQ</a></li>
                  <li><a href="#" className="py-2 block hover:text-gray-400">Payment Option</a></li>
                  <li><a href="#" className="py-2 block hover:text-gray-400">Booking Tips</a></li>
                  <li><a href="#" className="py-2 block hover:text-gray-400">How it works</a></li>
                  <li><a href="#" className="py-2 block hover:text-gray-400">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/4 mb-6">
              <div className="mb-4">
                <h2 className="text-xl font-bold">Have a Questions?</h2>
                <div className="mt-3">
                  <ul className="list-none">
                    <li className="flex items-center">
                      <span className="icon icon-map-marker mr-2"></span>
                      <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                    </li>
                    <li className="flex items-center">
                      <a href="#">
                        <span className="icon icon-phone mr-2"></span>
                        <span>+2 392 3929 210</span>
                      </a>
                    </li>
                    <li className="flex items-center">
                      <a href="#">
                        <span className="icon icon-envelope mr-2"></span>
                        <span>info@yourdomain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p>
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-red-500" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" className="hover:text-gray-400">Colorlib</a>
            </p>
          </div>
        </div>
      </footer>
    )
}