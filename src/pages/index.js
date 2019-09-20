import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <>
    <h1>Home</h1>
    <p>Hello friends</p>
    <Link to="/about">&larr; back to about me</Link>
    <Layout />
  </>
);
