import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
  <nav className="w-full py-4 bg-primary-600 text-white shadow-lg">
    <div className="container mx-auto flex flex-wrap gap-6 items-center justify-center">
      <Link className="font-bold text-lg hover:underline" to="/">Home</Link>
      <Link className="hover:underline" to="/about">About Us</Link>
      <Link className="hover:underline" to="/services">Services</Link>
      <Link className="hover:underline" to="/appointment">Book Appointment</Link>
      <Link className="hover:underline" to="/contact">Contact</Link>
      <Link className="hover:underline" to="/testimonials">Testimonials</Link>
    </div>
  </nav>
);

export default NavBar;