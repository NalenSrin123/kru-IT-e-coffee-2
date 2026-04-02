import React, { useState, useEffect } from 'react'

const Menu_page = () => {
    const defaultCategories = [
        "All",
        "Hot Coffee",
        "Iced Coffee",
        "Non-Coffee Drinks",
        "Desserts",
    ];

    const [categories, setCategories] = useState(defaultCategories);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1/products');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // console.log();
            const data = await response.json();
            console.log('Products Response:', data);
            const productsList = data.data || data;
            setProducts(productsList);
            
            // Extract unique categories from products
            if (Array.isArray(productsList) && productsList.length > 0) {
                const uniqueCategories = [...new Set(productsList.map(p => p.category).filter(Boolean))];
                setCategories(["All", ...uniqueCategories]);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
            setError('Failed to load products. Please try again.');
            setProducts([]);
            setCategories(defaultCategories);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f5e6d3] py-10 px-4 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B5E3C]"></div>
                    <p className="mt-4 text-[#8B5E3C] font-semibold">Loading menu...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#f5e6d3] py-10 px-4 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-500 font-semibold mb-4">{error}</p>
                    <button 
                        onClick={fetchProducts}
                        className="bg-[#8B5E3C] hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f5e6d3] py-10 px-4">
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold ">Our Menu</h1>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                    Explore our carefully curated selection of premium coffee drinks and delicious treats.
                </p>
                <button 
                    onClick={fetchProducts}
                    className="mt-4 text-sm text-[#8B5E3C] hover:text-amber-700 underline"
                >
                    Refresh Menu
                </button>
            </div>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((cat, index) => (
                <button
                    key={cat}
                    className={`w-[45%] sm:w-[30%] md:w-auto 
                        px-6 py-3 
                        text-sm md:text-base 
                        rounded-full font-medium 
                        transition-all duration-300
                        cursor-pointer
                        ${
                        index === 0
                            ? "bg-[#8B5E3C] text-white shadow-md"
                            : "bg-gray-100 text-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-white"
                        }
                    `}
                    >
                    {cat}
                </button>
            ))}
        </div>
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-6 justify-center">
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <div
                            key={product.id}
                            className="group w-full sm:w-[48%] md:w-[31%] lg:w-[23%] 
                                    bg-white rounded-2xl shadow-md hover:shadow-2xl 
                                    transition duration-300 overflow-hidden flex flex-col"
                        >
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={product.image || product.photo || "https://via.placeholder.com/300?text=No+Image"}
                                    alt={product.name || "Product"}
                                    onError={(e) => e.target.src = "https://via.placeholder.com/300?text=Image+Error"}
                                    className="w-full h-full object-cover 
                                            transition duration-500 group-hover:scale-110"
                                />

                                <div className="absolute top-3 right-3 bg-[#8B5E3C] p-0.5 rounded-full shadow-md cursor-pointer hover:bg-amber-700 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" color='white' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"/></svg>
                                </div>
                            </div>

                            <div className="p-5 flex flex-col grow">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold text-lg text-[#8B5E3C] line-clamp-1">
                                        {product.name || "Unknown Product"}
                                    </h2>

                                    <div className="flex text-yellow-400 gap-0.1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-2 line-clamp-3 grow">
                                    {product.description || product.desc || "Premium quality product"}
                                </p>
                                <div className="flex justify-between items-center mt-4 pt-3 ">
                                    <span className="text-xl font-bold text-[#8B5E3C]">
                                        ${typeof product.price === 'number' ? product.price.toFixed(2) : parseFloat(product.price).toFixed(2)}
                                    </span>

                                    <button className="bg-[#8B5E3C] hover:bg-amber-700 
                                                    text-white px-4 py-2 rounded-xl 
                                                    text-sm transition cursor-pointer">
                                        + Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-10 w-full">
                        <p className="text-gray-500 text-lg">No products available</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Menu_page
