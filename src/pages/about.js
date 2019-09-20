import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <>
    <h1>About Me</h1>
    <p>This is my site.</p>
    <Link to="/">&larr; back to home</Link>
    <Layout />
  </>
);
