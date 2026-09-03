import { useEffect, useState } from "react";

import API from "../api/axios";

import Navbar from "../components/Navbar";

import CustomerForm from "../components/CustomerForm";

import CustomerList from "../components/CustomerList";


function Dashboard() {
  const [customers, setCustomers] = useState([]);

  const [editCustomer, setEditCustomer] =
    useState(null);

  const [message, setMessage] = useState("");


  const getHeaders = () => {
    const token =
      localStorage.getItem("token");

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };


  const fetchCustomers = async () => {
    try {
      const response = await API.get(
        "/customers",
        getHeaders()
      );

      setCustomers(
        response.data.customers
      );
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Failed to fetch customers"
      );
    }
  };


  useEffect(() => {
    fetchCustomers();
  }, []);


  const handleCustomerSubmit = async (
    formData
  ) => {
    try {
      if (editCustomer) {
        await API.put(
          `/customers/${editCustomer._id}`,
          formData,
          getHeaders()
        );

        setMessage(
          "Customer updated successfully"
        );

        setEditCustomer(null);
      } else {
        await API.post(
          "/customers",
          formData,
          getHeaders()
        );

        setMessage(
          "Customer added successfully"
        );
      }

      fetchCustomers();
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Operation failed"
      );
    }
  };


  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(
        `/customers/${id}`,
        getHeaders()
      );

      setMessage(
        "Customer deleted successfully"
      );

      fetchCustomers();
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Delete failed"
      );
    }
  };


  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-6">
          Customer Management
        </h1>

        {message && (
          <p className="mb-4 text-center text-blue-600">
            {message}
          </p>
        )}

        <CustomerForm
          onSubmit={
            handleCustomerSubmit
          }
          editCustomer={editCustomer}
        />

        <CustomerList
          customers={customers}
          onEdit={setEditCustomer}
          onDelete={handleDelete}
        />

      </div>
    </>
  );
}

export default Dashboard;