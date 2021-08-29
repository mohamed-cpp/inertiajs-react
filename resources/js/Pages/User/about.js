import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import {Helmet} from "react-helmet";


const About = () => {
  const { user } = usePage().props;
  return (
      <div>
        <Helmet>
          <title>About</title>
          <meta name="description" content="About" />
        </Helmet>
      <h1>sssssssss22222s</h1>
        {user}
        <Link href="/" method="get" as="a" type="as">Index</Link>
      </div>
  );
};

export default About;