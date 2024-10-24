import Link from 'next/link';
import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <section className="py-4 border-t">
      <div className="container  px-6 py-10 text-gray-700">
        <div className="flex flex-wrap max-[768px]:justify-center justify-between items-center">
          <p className="text-[15px] max-[768px]:text-center">
            &copy; {year} Inscribe. All Right Reserved
          </p>
          <div>
            <p className="text-primary">
              Made with 🖤 by{" "}
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/sodiqmakinde/"
              >
                {" "}
                Sodiq Makinde
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer