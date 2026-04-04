import React, { useEffect, useState } from "react";
import axios from "axios";

const Index = () => {
  const [customers, setCustomers] = useState([]);

  const API = "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1/customers/{id}";

  // fetch customers
  const fetchCustomers = async () => {
    try {
      const res = await axios.get(API);
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
    if (!window.confirm("Are you sure you want to delete this customer?")) {
      return;
    }

    try {
      await axios.delete(`${API}/${id}`);
      alert("Customer deleted successfully!");
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