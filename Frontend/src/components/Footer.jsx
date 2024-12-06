import React from 'react';

function Footer() {
  return (
<>
    {/* Main Content Placeholder */}
      <div className="flex-grow">
        {/* Other content of your application goes here */}
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-300 dark:border-slate-600 w-full" />

      {/* Footer */}
      <footer className="footer footer-center text-gray-700 dark:text-gray-300 rounded p-8">
        {/* <nav className="grid grid-flow-col gap-2">
          <a className="link link-hover dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400">
            About us
          </a>
          <a className="link link-hover dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400">
            Contact
          </a>
          <a className="link link-hover dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400">
            Jobs
          </a>
          <a className="link link-hover dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400">
            Press kit
          </a>
        </nav> */}
        <nav>
          <div className="grid grid-flow-col gap-4 -mb-4">
            <a href="https://www.linkedin.com/in/faizansheikh5/" target="_blank" className="hover:fill-pink-500 dark:hover:fill-pink-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-1.019 0-1.5-.66-1.5-1.482 0-.837.497-1.482 1.529-1.482s1.5.645 1.5 1.482c0 .822-.482 1.482-1.529 1.482zm13.5 11.268h-3v-5.604c0-1.339-.479-2.256-1.678-2.256-.914 0-1.457.621-1.697 1.221-.088.215-.111.515-.111.816v5.823h-3s.04-9.451 0-10.421h3v1.476c.398-.615 1.108-1.488 2.701-1.488 1.972 0 3.475 1.288 3.475 4.054v6.379z"></path>
            </svg>

            </a>
            <a href="https://www.instagram.com/devcoders.incorp?igsh=MXh1bnBrdHpjMjR3dQ==" target="_blank" className="hover:fill-pink-500 dark:hover:fill-pink-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0c-3.03 0-3.43.01-4.62.07-1.17.06-1.98.24-2.69.51-.73.28-1.35.65-1.95 1.24-.6.59-.97 1.22-1.25 1.94-.26.71-.45 1.52-.51 2.69-.06 1.19-.07 1.59-.07 4.61s.01 3.43.07 4.62c.06 1.17.24 1.98.51 2.69.28.73.65 1.35 1.24 1.95.59.6 1.22.97 1.94 1.25.71.26 1.52.45 2.69.51 1.19.06 1.59.07 4.62.07s3.43-.01 4.62-.07c1.17-.06 1.98-.24 2.69-.51.73-.28 1.35-.65 1.95-1.24.6-.59.97-1.22 1.25-1.94.26-.71.45-1.52.51-2.69.06-1.19.07-1.59.07-4.62s-.01-3.43-.07-4.62c-.06-1.17-.24-1.98-.51-2.69-.28-.73-.65-1.35-1.24-1.95-.59-.6-1.22-.97-1.94-1.25-.71-.26-1.52-.45-2.69-.51-1.19-.06-1.59-.07-4.62-.07zm0 2.16c2.95 0 3.36.01 4.55.06 1.1.05 1.7.23 2.09.39.53.21.9.46 1.29.84.38.39.63.76.84 1.29.16.39.34.99.39 2.09.05 1.19.06 1.6.06 4.55s-.01 3.36-.06 4.55c-.05 1.1-.23 1.7-.39 2.09-.21.53-.46.9-.84 1.29-.39.38-.76.63-1.29.84-.39.16-.99.34-2.09.39-1.19.05-1.6.06-4.55.06s-3.36-.01-4.55-.06c-1.1-.05-1.7-.23-2.09-.39-.53-.21-.9-.46-1.29-.84-.38-.39-.63-.76-.84-1.29-.16-.39-.34-.99-.39-2.09-.05-1.19-.06-1.6-.06-4.55s.01-3.36.06-4.55c.05-1.1.23-1.7.39-2.09.21-.53.46-.9.84-1.29.39-.38.76-.63 1.29-.84.39-.16.99-.34 2.09-.39 1.19-.05 1.6-.06 4.55-.06zm0 3.84a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 1 0 0-9.6zm0 7.84a3.04 3.04 0 1 1 0-6.08 3.04 3.04 0 1 1 0 6.08zm6.4-8.4a1.12 1.12 0 1 0 0-2.24 1.12 1.12 0 1 0 0 2.24z"></path>
            </svg>

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg> */}
            </a>
            <a href='https://www.facebook.com/faizansh1may' target="_blank" className="hover:fill-pink-500 dark:hover:fill-pink-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M22.675 0h-21.35c-0.732 0-1.325 0.593-1.325 1.325v21.351c0 0.73 0.593 1.324 1.325 1.324h11.495v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.893-4.785 4.655-4.785 1.325 0 2.464 0.099 2.796 0.143v3.24h-1.917c-1.505 0-1.797 0.715-1.797 1.764v2.309h3.588l-0.467 3.622h-3.121v9.293h6.116c0.73 0 1.323-0.593 1.323-1.324v-21.35c0-0.732-0.593-1.325-1.325-1.325z"></path>
            </svg>

            </a>
          </div>
        </nav>
        <aside>
          <p className="dark:text-gray-400 font-semibold">
            Copyright © {new Date().getFullYear()} - All rights reserved by
            Learnify.
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
