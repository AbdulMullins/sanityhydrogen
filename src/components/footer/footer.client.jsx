const Footer = () =>{

    return (
        <footer>
  <div className="bg-ua-lighter-grey">
    <div className="hidden lg:block container mx-auto pt-4 pb-16 px-4">
      <div className="mb-6">
        <p className="h-8 w-8 text-black">
            logo
        </p>
      </div>

      <div className="flex w-full justify-between">
        <div
          className="grid grid-cols-4 text-xs text-ua-dark-grey gap-10 xl:gap-20"
        >
          <div>
            <h5 className="mb-4 text-black font-bold text-base">CONTACT DETAILS</h5>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col gap-1">
                <p>Phone Support</p>
                <a href="tel:+27212011349">+27 21 201 1349</a>
              </li>
              <li className="flex flex-col gap-1">
                <p>Mon-Thu: 8am - 4pm CAT</p>
                <p>Fri: 8am - 2pm CAT</p>
                <p>Closed Public Holidays</p>
              </li>
              <li className="flex flex-col gap-1">
                <a href="/pages/contact">Contact Us</a>
                <a href="/pages/stores">Store Locators</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-black font-bold text-base">ORDER & SUPPORT</h5>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col gap-1">
                <a href="/pages/returns-and-exchanges">Returns & Exchanges</a>
              </li>
              <li className="flex flex-col gap-1">
                <a href="/pages/shipping-and-delivery">Shipping & Delivery</a>
              </li>
              <li className="flex flex-col gap-1">
                <a href="/pages/help-and-faq">Help & FAQ</a>
              </li>
              <li className="flex flex-col gap-1">
                <a href="/a/track">Track Your Order</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-black font-bold text-base">ABOUT</h5>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col gap-1">
                <a href="/pages/about">Our Story</a>
              </li>
              <li className="flex flex-col gap-1">
                <a
                  target="_blank"
                  href="https://ares.mcidirecthire.com/under%20armour/External/CurrentOpportunities"
                >Careers</a>
              </li>
              <li className="flex flex-col gap-1">
                <a href="/sitemap.xml">Site Map</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-black font-bold text-base">SOCIAL MEDIA</h5>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col gap-1">
                <a
                  href="https://www.instagram.com/underarmour/"
                  target="_blank"
                  className="flex gap-1"
                >
                  Instagram,
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <a href="https://twitter.com/underarmourza" target="_blank" className="flex gap-1">
                  Twitter,
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <a
                  href="https://www.facebook.com/UnderArmourSouthAfrica"
                  target="_blank"
                  className="flex gap-1"
                >
                  Facebook,
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <a
                  href="https://www.youtube.com/user/underarmour"
                  target="_blank"
                  className="flex gap-1"
                >
                  Youtube,
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-right max-w-xs">
          <h5 className="mb-4 font-bold">CONNECT WITH UA SOUTH AFRICA</h5>

          <p className="text-xs font-semibold text-ua-dark-grey mb-6 leading-5">
            By providing your email, you agree to the Terms of Use and Privacy
            Policy. You may unsubscribe at any time
          </p>

          <form  className="omnisend-subscribe-form w-full mt-4">
          <div
            className="flex w-full relative rounded-lg border border-ua-silver p-2"
          >
            <label
              className="font-semibold text-xs absolute -top-2 left-4 bg-ua-lighter-grey px-1"
              >Email Address*</label
            >
            <input type="hidden" name="contact[tags]" value="newsletter" />
            <input
              id="contact-email"
              name="contact[email]"
              type="text"
              className="focus:outline-none w-full bg-transparent"
            />
            <button
              name="commit"
              type="submit"
              className="text-xs flex-shrink-0 font-semibold px-2"
            >
              Sign Up
            </button>
          </div>
          </form>

          <div className="flex justify-end gap-6 pr-4 mt-9">
            <a href="https://www.facebook.com/UnderArmourSouthAfrica" target="_blank"
              >facebook</a
            >
            <a href="https://twitter.com/underarmourza" target="_blank"
              >twitter</a
            >
            <a href="https://www.instagram.com/underarmour/" target="_blank"
              >insta</a
            >
            <a href="https://www.youtube.com/user/underarmour" target="_blank"
              >youtube</a
            >
          </div>
        </div>
      </div>
    </div>

    <div className="px-4 py-6 block lg:hidden">
      <div className="flex flex-col gap-4">
        <img
          className="w-32 ml-1.5"
          src="https://www.underarmour.com/on/demandware.static/-/Library-Sites-NASharedLibrary/default/dw7789fe42/images/footer/underarmour.svg"
          alt="Under Armour"
          loading="lazy"
        />
        <h4 className="font-semibold">Stay in the loop</h4>
        <p className="text-xs">Sign up for email updates today.</p>

        <div
          className="flex w-full relative rounded-lg border border-ua-silver p-2"
        >
          <label
            className="font-semibold text-xs absolute -top-2 left-4 bg-ua-lighter-grey px-1"
            >Email Address*</label
          >
          <input type="hidden" name="contact[tags]" value="newsletter" />
          <input
            id="contact-email"
            name="contact[email]"
            type="text"
            className="focus:outline-none w-full bg-transparent"
          />
          <button
            name="commit"
            type="submit"
            className="text-xs flex-shrink-0 font-semibold px-2"
          >
            Sign Up
          </button>
        </div>
    

        <p className="pb-6 text-xxs leading-5 text-ua-dark-grey">
          By providing your email, you agree to the
          <a className="underline" href="/pages/terms-of-use">Terms of Use</a> and
          <a className="underline" href="/pages/privacy-policy">Privacy Policy.</a> You may unsubscribe
          at any time
        </p>

        <div className="flex gap-2 pb-2">
          <img
            className="w-10"
            alt="Shop"
            src="https://www.underarmour.com/on/demandware.static/-/Library-Sites-NASharedLibrary/default/dwab247448/images/footer/shop.png"
            loading="lazy"
          />
          <img
            className="w-10"
            alt="Map My Run"
            src="https://www.underarmour.com/on/demandware.static/-/Library-Sites-NASharedLibrary/default/dwc3c8ee9f/images/footer/mmr.png"
            loading="lazy"
          />
        </div>

        <div>
          <p className="text-xs font-semibold">Accepted Payment Methods</p>
          <div className="pt-4 flex gap-1 justify-between">
            <img
              className="w-8"
              src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/instantEFT.png?v=1652270963"
              alt="Visa"
            />
            <img
              className="w-8"
              src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/mastercard.png?v=1652271161"
              alt="Mastercard"
            />
            <img
              className="w-8"
              src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/masterpass.png?v=1652271161"
              alt="Discover"
            />
            <img
              className="w-8"
              src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/mobicred.png?v=1652271161"
              alt="Amex"
            />
            <img
              className="w-8"
              src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/ozow.png?v=1652271161"
              alt="Pay Pal"
            />
            <img
              className="w-8"
              src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/payjustnow.png?v=1652271161"
              alt="Apple Pay"
            />
            <img
              className="w-8"
              src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/RCS.png?v=1652271161"
              alt="Apple Pay"
            />
            <img
              className="w-8"
              src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/snapscan.png?v=1652271161"
              alt="Apple Pay"
            />
            <img
              className="w-8"
              src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/visa.png?v=1652271161"
              alt="Apple Pay"
            />
          </div>
        </div>

        <div>
          <v-accordion>
            <div slot="header">
              <h4 className="font-semibold flex gap-4 items-center">
                <span className="pl-4 h-5 w-5 text-black"></span><span>Contact Us</span>
              </h4>
            </div>

            <div className="pl-4 flex flex-col gap-4" slot="content">
              <p className="flex flex-col">
                <span>Phone Support</span>
                <span><a href="tel:+27 21 201 1349">+27 21 201 1349</a></span>
              </p>
              <p className="flex flex-col">
                <span>Mon-Thu: 8am - 4pm CAT</span>
                <span>Fri: 8am - 2pm CAT</span>
                <span>Closed Public Holidays</span>
              </p>
              <p className="flex flex-col">
                <a className="flex items-center gap-2" href="/pages/contact">Contact Us </a>
                <a className="flex items-center gap-2" href="/pages/stores">Store Locators </a>
              </p>
            </div>
          </v-accordion>

          <v-accordion>
            <div slot="header">
              <h4 className="font-semibold flex gap-4 items-center">
                <span className="pl-4 h-5 w-5 text-black"></span><span>Customer Service</span>
              </h4>
            </div>

            <div className="pl-4 flex flex-col gap-4" slot="content">
              <a className="flex items-center gap-2" href="/pages/returns-and-exchanges">
                Returns & Exchanges 
              </a>
              <a className="flex items-center gap-2" href="/pages/shipping-and-delivery">
                Shipping & Delivery 
              </a>
              <a className="flex items-center gap-2" href="/pages/help-and-faq">
                Help & FAQ 
              </a>
              <a className="flex items-center gap-2" href="/accout">
                Track Your Order 
              </a>
            </div>
          </v-accordion>

          <v-accordion>
            <div slot="header">
              <h4 className="font-semibold flex gap-4 items-center">
                <span className="pl-4 h-5 w-5 text-black"></span><span>About Under Armour</span>
              </h4>
            </div>

            <div className="pl-4 flex flex-col gap-4" slot="content">
              <a className="flex items-center gap-2" href="/pages/about">
                Our Story 
              </a>
              <a className="flex items-center gap-2" href="https://ares.mcidirecthire.com/under%20armour/External/CurrentOpportunities">
                Careers 
              </a>
              <a className="flex items-center gap-2" href="/sitemap.xml">
                Site Map 
              </a>
            </div>
          </v-accordion>

          <v-accordion>
            <div slot="header">
              <h4 className="font-semibold flex gap-4 items-center">
                <span className="pl-4 h-5 w-5 text-black"> </span><span>UA Social</span>
              </h4>
            </div>

            <div className="pl-4 flex flex-col gap-4" slot="content">
              <a className="flex items-center gap-2" href="https://www.instagram.com/underarmour/">
                Instagram
              </a>
              <a className="flex items-center gap-2" href="https://twitter.com/underarmourza">
                Twitter
              </a>
              <a className="flex items-center gap-2" href="https://www.facebook.com/UnderArmourSouthAfrica">
                Facebook
              </a>
              <a className="flex items-center gap-2" href="https://www.youtube.com/user/underarmour">
                Youtube
              </a>
            </div>
          </v-accordion>
        </div>

        <p className="text-xxs text-ua-mid-grey">
          &copy; Apollo Brands (Pty) Ltd. Official distributer of Under Armour in South Africa.
          <a href="/pages/privacy-policy">Privacy Policy</a> /
          <a href="/pages/terms-of-use">Terms of Use</a> /
          <a href="/pages/cookie-policy">Cookie Policy</a>
        </p>
      </div>
    </div>
  </div>

  <div className="bg-black py-8 hidden lg:flex w-full flex-col items-center">
    <div
      className="container flex flex-col md:flex-row gap-4 w-full justify-between items-center"
    >
      <p className="text-tiny md:text-xs text-white">
        &copy; Apollo Brands (Pty) Ltd. Official distributer of Under Armour in South Africa.
        <a href="/pages/privacy-policy">Privacy Policy</a> /
        <a href="/pages/terms-of-use">Terms of Use</a> /
        <a href="/pages/cookie-policy">Cookie Policy</a>
      </p>

      <div className="flex gap-4">
        <img
          width="40"
          height="40"
          className="w-10"
          src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/instantEFT.png?v=1652270963"
          alt="Visa"
        />
        <img
          width="40"
          height="40"
          className="w-10"
          src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/mastercard.png?v=1652271161"
          alt="Mastercard"
        />
        <img
          width="40"
          height="40"
          className="w-10"
          src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/masterpass.png?v=1652271161"
          alt="Discover"
        />
        <img
          width="40"
          height="40"
          className="w-10"
          src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/mobicred.png?v=1652271161"
          alt="Amex"
        />
        <img
          width="40"
          height="40"
          className="w-10"
          src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/ozow.png?v=1652271161"
          alt="Pay Pal"
        />
        <img
          width="40"
          height="40"
          className="w-10"
          src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/payjustnow.png?v=1652271161"
          alt="Apple Pay"
        />
        <img
          width="40"
          height="40"
          className="w-10"
          src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/RCS.png?v=1652271161"
          alt="Apple Pay"
        />
        <img
          width="40"
          height="40"
          className="w-10"
          src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/snapscan.png?v=1652271161"
          alt="Apple Pay"
        />
        <img
          width="40"
          height="40"
          className="w-10"
          src="https://cdn.shopify.com/s/files/1/0267/2315/6143/files/visa.png?v=1652271161"
          alt="Apple Pay"
        />
      </div>
    </div>
  </div>
</footer>
    )
}
export default Footer