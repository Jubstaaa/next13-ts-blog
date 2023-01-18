import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
      <nav>
        <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
          <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
            <Link
              className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500"
              href="/"
            >
              Home
            </Link>
            <Link
              className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500"
              href="#"
            >
              About
            </Link>
            <Link
              className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500"
              href="#"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="#">
              <Image
                src={"/images/logo.png"}
                width={50}
                height={50}
                alt="logo"
              />
            </Link>
            <button
              aria-label="Toggle Menu"
              className="px-2 py-1 ml-auto text-gray-500 rounded-md md:hidden focus:text-blue-500 focus:outline-none"
              id="headlessui-disclosure-button-:R1f6:"
              type="button"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
            <Link
              className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500"
              rel=""
              href="#"
            >
              <span>World</span>
            </Link>
            <Link
              className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500"
              rel="noopener"
              href="#"
            >
              <span> Is</span>
            </Link>
            <Link
              className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500"
              rel="noopener"
              href="#"
            >
              <span> Yours</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
