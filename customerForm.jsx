
import {useState } from "react";

export default function customerForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(f=>({...f,[name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.phone) 
        
            onSubmit({...form, phone: form.phone});
        setForm({ name: "", email: "", phone: "" });    

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white shadow-md rounded">
           <input  
                name="name"
                placeholder="Customer Name"
                value={form.name}
                onChange={handleChange}
                className="border rounded-l px-3 py-2"></input> 
           <input 
                name="email"
                placeholder="Customer Email"
                value={form.email}
                onChange={handleChange}
                className="border rounded-l px-3 py-2"></input>
           <input 
                name="phone"
                placeholder="Customer Phone"
                value={form.phone} 
                onChange={handleChange} 
                className="border rounded-l px-3 py-2"></input>
           <button className="bg-blue-500 text-white rounded-r px-3 py-2 hover:bg-blue-600">Submit</button>
        </form>
    );
} 

