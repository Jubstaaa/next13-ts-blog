import Link from "next/link";

function Footer() {
  return (
    <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg mt-10 border-t border-gray-100 ">
      <div className="text-sm text-center">
        Copyright © 2023. All rights reserved.
      </div>
      <div className="flex justify-center gap-1 mt-1 text-sm text-center text-gray-500">
        <span>
          <Link
            href="https://www.winniesoft.com"
            rel="noopener"
            target="_blank"
          >
            Winniesoft
          </Link>
        </span>
        <span>·</span>
        <span>
          <Link
            href="https://github.com/jubstaaa"
            rel="noopener"
            target="_blank"
          >
            Github
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Footer;
