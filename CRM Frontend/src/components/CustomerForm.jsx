import { useState, useEffect } from "react";

function CustomerForm({
  onSubmit,
  editCustomer,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
  });

  useEffect(() => {
    if (editCustomer) {
      setFormData({
        name: editCustomer.name,
        email: editCustomer.email,
        phone: editCustomer.phone,
        company: editCustomer.company,
        address: editCustomer.address,
      });
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        address: "",
      });
    }
  }, [editCustomer]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.company ||
      !formData.address
    ) {
      alert("All fields are required");
      return;
    }

    onSubmit(formData);

    if (!editCustomer) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        address: "",
      });
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">
        {editCustomer
          ? "Edit Customer"
          : "Add Customer"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 rounded-2xl"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-3 rounded-2xl"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-3 rounded-2xl"
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="border p-3 rounded-2xl"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-3 rounded-2xl"
        />

        <button
          type="submit"
          className="bg-blue-300  text-white p-3 rounded-2xl hover:bg-blue-700"
        >
          {editCustomer
            ? "Update Customer"
            : "Add Customer"}
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;