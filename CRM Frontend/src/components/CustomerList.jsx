function CustomerList({
  customers,
  onEdit,
  onDelete,
}) {
  if (customers.length === 0) {
    return (
      <p className="text-center mt-6">
        No customers found
      </p>
    );
  }

  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full bg-white shadow rounded-xl">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Company</th>
            <th className="p-3">Address</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer._id}
              className="border-t"
            >
              <td className="p-3">
                {customer.name}
              </td>

              <td className="p-3">
                {customer.email}
              </td>

              <td className="p-3">
                {customer.phone}
              </td>

              <td className="p-3">
                {customer.company}
              </td>

              <td className="p-3">
                {customer.address}
              </td>

              <td className="p-3 flex gap-2">
                <button
                  onClick={() =>
                    onEdit(customer)
                  }
                  className="bg-yellow-300 hover:bg-yellow-500 text-white px-3 py-1 rounded-2xl"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    onDelete(customer._id)
                  }
                  className="bg-red-300 hover:bg-red-600 text-white px-3 py-1 rounded-2xl"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;