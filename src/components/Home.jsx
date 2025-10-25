import { useState, useEffect, use } from 'react';
import customerCard from "../components/customerCard";
import customerForm from "../components/customerForm";  
import { fetchCustomers, createCustomer, updateCustomer, deleteCustomer } from "../lib/api" 
import { set } from 'mongoose';




export default function Home() {
const [customers, setCustomers] = useState([]);
const [loading, setLoading] = useState (false);
const [error, setError] = useState("");

useEffect(() => {
    (async () => {
        try {
            setLoading (true);
            const data = await fetchCustomers();
            setCustomers(data);
        } catch (err) {
            setError("Failed to fetch customers");
        } finally {setLoading(false);}
    })();
}, []);
const handleAdd = async (customer) => {
    const newCustomer = await createCustomer(customer);
    setCustomers((prev) => [...prev, newCustomer]);
};
 async function handleEdit(id, updatedCustomer) {
    const customer = await updateCustomer(id, updatedCustomer);
    setCustomers((prev) =>
        prev.map((c) => (c.id === id ? customer : c))
    );
}
async function handleDelete(id) {
    await deleteCustomer(id);
    setCustomers((prev) => prev.filter(c => c.id !== id));
}
    return (
        <main>
            <studentForm onSubmit={handleAdd} />
            {loading && (
                <p>Loading customers...</p>
            )}
            {error && (
                <p className="text-red-500">{error}</p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {customers.map((customer) => (
                    <customerCard 
                        key={customer.id} 
                        customer={customer} 
                        onEdit={handleEdit} 
                        onDelete={handleDelete} 
                    />
                ))}
            </div>
        </main>
    );
}
