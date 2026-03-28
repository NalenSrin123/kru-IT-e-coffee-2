import React, { useEffect, useState } from "react";
import axios from "axios";

const Index = () => {
  const [customers, setCustomers] = useState([]);

  const API = "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api";

  // fetch customers
  const fetchCustomers = async () => {
    try {
      const res = await axios.get(`${API}/customers`);
      setCustomers(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // delete function
  const deleteCustomer = async (id) => {
    try {
      await axios.delete(`${API}/customers/${id}`);
      fetchCustomers(); // refresh list after delete
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  return (
    <div>
      <h2>Customer List</h2>

      {customers.map((customer) => (
        <div key={customer.id}>
          {customer.name}
          <button onClick={() => deleteCustomer(customer.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Index; 