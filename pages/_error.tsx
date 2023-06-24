import Link from "next/link";

const Error = () => {
  const navHeight = 160;
  return (
    <section
      className="flex flex-col items-center justify-center"
      style={{ height: `calc(100vh - ${navHeight}px)` }}
    >
      <p className="text-base font-semibold text-orange">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
        🙏 Page not found 🙏
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600 dark:text-white">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="rounded-md bg-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
