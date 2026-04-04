import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/api/products/${id}`, product)
      .then(res => {
        console.log(res.data);
        alert("Updated Successfully ");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Update Coffee </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProduct;