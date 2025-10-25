import {useState } from "react";


export default function customerCard( {customer,onEdit,onDelete} ) {
   const[ edit, setEdit ] = useState(false);
   const [draft, setDraft ] = useState({
    name: customer.name,
    email: customer.email,
    phone: customer.phone
   });

    return (
        <div className="rounded xl shadow-md p-4 bg-white ">
            {edit ? (
                <div className="flex flex-col gap-4">
                    <div>
                    <h2 className="text-lg font-semibold">{customer.name}</h2>
                    <p className="text-gray-600 txt-sm">{customer.email}</p>
                    <p className="text-gray-600 txt-sm">{customer.phone}</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => setEdit(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Edit
                        </button>
                        <button onClick={() => onDelete(customer.id)} className="bg-red-500 text-white px-4 py-2 rounded">
                            Delete
                        </button>
                    </div>
                </div>
            ) : (
                <form>
                    <input
                        className="border rounded-l px-3 py-2"
                        value={draft.name}
                        onChange={e => setDraft({...draft, name:e.target.value})}
                    />
                    <input
                        className="border rounded-l px-3 py-2"
                        value={draft.email}
                        onChange={e => setDraft({...draft, email:e.target.value})}
                    />
                    <input
                        className="border rounded-l px-3 py-2"
                        value={draft.phone}
                        onChange={e => setDraft({...draft, phone:Number (e.target.value )})}
                    />
                    <div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm" >save</button>
                    <button type="button" onClick={() => setEdit(false)} className="bg-red-500 text-white px-4 py-2 rounded-lg">cancel</button>
                    </div>
                </form>
            )}
        </div>




    );
}
