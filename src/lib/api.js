const API = process.env.VITEST_API_URL || 'http://localhost:5000/api';

export async function fetchCustomers() {
    const response = await fetch(`${API}/customers`);
    if (!response.ok) {
        throw new Error('Failed to fetch customers');
    }
    return response.json();
}
export async function createCustomer(customer) {
    const response = await fetch(`${API}/customers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer),
    });
    if (!response.ok) {
        throw new Error('Failed to create customer');
    }
    return response.json();
}
export async function updateCustomer(id, customer) {
    const response = await fetch(`${API}/customers/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer),
    });
    if (!response.ok) {
        throw new Error('Failed to update customer');
    }
    return response.json();
}
export async function deleteCustomer(id) {
    const response = await fetch(`${API}/customers/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete customer');
    }
}   
