import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import {Helmet} from "react-helmet";


const Index = () => {
  const { user } = usePage().props;
  return (
      <div>
        <Helmet>
          <title>Index</title>
          <meta name="description" content="Index" />
        </Helmet>
      <h1>ssssssssss</h1>
        {user.email}
        <Link href="/about" method="get" as="a" type="button">About</Link>
      </div>
  );
};

export default Index;