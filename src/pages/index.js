import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <>
    <h1>Home</h1>
    <p>Hello friends</p>
    <Link to="/about">&larr; back to about me</Link>
  </>
);
