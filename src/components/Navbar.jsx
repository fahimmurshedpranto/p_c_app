import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
         <>
      <nav>
        <ul className="flex items-center justify-center mt-5 gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/posts">Posts</Link></li>
          <li></li>
        </ul>
      </nav>
    </>
    );
};

export default Navbar;