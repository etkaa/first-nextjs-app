import { Fragment } from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/news/why-nextjs-is-good">Why Next.js is Good?</Link>
        </li>
        <li>
          <Link href="/news/react-and-nextjs">React and Next.js</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default HomePage;
