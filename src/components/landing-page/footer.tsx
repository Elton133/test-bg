import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative py-8 px-4 lg:px-16 border-b border-b-border ">
      <div className="flex flex-col justify-center gap-16 max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-16 lg:flex-row items-center lg:justify-between">
          <div className="flex flex-col gap-2 max-w-sm">
            <Image
              src="https://res.cloudinary.com/dpyjjedao/image/upload/v1724163199/BSGLogo_v8mxaq.svg"
              width={200}
              height={70}
              alt="bsg logo"
            />
            <p>
              The Best Study Guide is a one-stop solution for the Ghana
              Bar Exams preparation
            </p>
          </div>
          <div className="max-w-sm flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Get in touch</p>
              <p>
                For all enquiries, contact us through{' '}
                <a
                  className="underline font-medium hover:text-gray-600"
                  href="mailto:thebeststudyguidegh@gmail.com"
                >
                  thebeststudyguidegh@gmail.com
                </a>
              </p>
            </div>
            <div className="flex gap-3">
              <a href="https://x.com">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.28 2.5957C3.42432 2.5957 1.92 4.10002 1.92 5.9557V19.3957C1.92 21.2514 3.42432 22.7557 5.28 22.7557H18.72C20.5757 22.7557 22.08 21.2514 22.08 19.3957V5.9557C22.08 4.10002 20.5757 2.5957 18.72 2.5957H5.28ZM6.28125 6.9157H10.0912L12.7969 10.7604L16.08 6.9157H17.28L13.3387 11.5301L18.1987 18.4357H14.3897L11.25 13.9751L7.44 18.4357H6.24L10.7081 13.2054L6.28125 6.9157ZM8.11875 7.8757L14.8903 17.4757H16.3612L9.58969 7.8757H8.11875Z"
                    fill="#0B111C"
                  />
                </svg>
              </a>
              <a href="https://x.com">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.68 2.5957H4.32C2.9952 2.5957 1.92 3.6709 1.92 4.9957V20.3557C1.92 21.6805 2.9952 22.7557 4.32 22.7557H19.68C21.0048 22.7557 22.08 21.6805 22.08 20.3557V4.9957C22.08 3.6709 21.0048 2.5957 19.68 2.5957ZM8.16 10.2757V19.3957H5.28V10.2757H8.16ZM5.28 7.6213C5.28 6.9493 5.856 6.4357 6.72 6.4357C7.584 6.4357 8.1264 6.9493 8.16 7.6213C8.16 8.2933 7.6224 8.8357 6.72 8.8357C5.856 8.8357 5.28 8.2933 5.28 7.6213ZM18.72 19.3957H15.84C15.84 19.3957 15.84 14.9509 15.84 14.5957C15.84 13.6357 15.36 12.6757 14.16 12.6565H14.1216C12.96 12.6565 12.48 13.6453 12.48 14.5957C12.48 15.0325 12.48 19.3957 12.48 19.3957H9.6V10.2757H12.48V11.5045C12.48 11.5045 13.4064 10.2757 15.2688 10.2757C17.1744 10.2757 18.72 11.5861 18.72 14.2405V19.3957Z"
                    fill="#0B111C"
                  />
                </svg>
              </a>
              <a href="https://x.com">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.68 2.11572C4.2384 2.11572 1.44 4.91412 1.44 8.35572V16.9957C1.44 20.4373 4.2384 23.2357 7.68 23.2357H16.32C19.7616 23.2357 22.56 20.4373 22.56 16.9957V8.35572C22.56 4.91412 19.7616 2.11572 16.32 2.11572H7.68ZM17.76 5.95572C18.288 5.95572 18.72 6.38772 18.72 6.91572C18.72 7.44372 18.288 7.87572 17.76 7.87572C17.232 7.87572 16.8 7.44372 16.8 6.91572C16.8 6.38772 17.232 5.95572 17.76 5.95572ZM12 7.39572C14.9136 7.39572 17.28 9.76212 17.28 12.6757C17.28 15.5893 14.9136 17.9557 12 17.9557C9.0864 17.9557 6.72 15.5893 6.72 12.6757C6.72 9.76212 9.0864 7.39572 12 7.39572ZM12 8.35572C9.6192 8.35572 7.68 10.2949 7.68 12.6757C7.68 15.0565 9.6192 16.9957 12 16.9957C14.3808 16.9957 16.32 15.0565 16.32 12.6757C16.32 10.2949 14.3808 8.35572 12 8.35572Z"
                    fill="#0B111C"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p className="text-left lg:text-center">
          © {currentYear} All rights reserved. The Best Study Guide
        </p>
      </div>
    </footer>
  );
}
