import React from 'react';
import './index.css'
import './App.css'
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Store</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Shop</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <main className="flex-grow bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Product Listings</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </main>
  );
}

function ProductCard() {
  return (
    <div className="card w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <img src="https://via.placeholder.com/300x200" alt="Product" className="w-full h-48 object-cover" />
      <div className="card-body p-4">
        <h3 className="card-title text-xl font-semibold">Product Name</h3>
        <p className="text-gray-600 mt-2">This is a brief description of the product.</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-blue-600">$49.99</span>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2024 My Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App;
