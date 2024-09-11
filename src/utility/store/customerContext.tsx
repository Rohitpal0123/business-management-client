"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { createCustomer } from "../actions/customer/createCustomer";
import { getAllCustomer } from "../actions/customer/getAllCustomer";
import { useEffect } from "react";
import { updateCustomer } from "../actions/customer/updateCustomer";
import { deleteCustomer as deleteCustomerFetch} from "../actions/customer/deleteCustomer";

// Define the shape of your customer data
export type CustomerData = {
  id?: number;
  name: string;
  address: string;
  contactNumber: string;
  quantity: number;
  agreedRate: number;
  isSpecialOrder: boolean;
};

// Define the context type that holds customer data and actions
interface CustomerContextType {
  customers: CustomerData[];
  addCustomer: (customer: Omit<CustomerData, "id">) => void;
  updateCustomer: (customer: Omit<CustomerData, "id">) => void;
  deleteCustomer: (id: number) => void;
}

// Initialize a new context with an empty object (fix: removed namespace issue)
const CustomerContext = createContext<CustomerContextType | undefined>(
  undefined
);

// Create a provider component that wraps your app and provides the customer state
export const CustomerProvider = ({ children }: { children: ReactNode }) => {
  const [customers, setCustomers] = useState<CustomerData[]>([]);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const customerData = await getAllCustomer();
        setCustomers(customerData);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    }

    fetchCustomers();
  }, []);

  const addCustomer = async (customer: Omit<CustomerData, "id">) => {
    try {
      const newCustomer = await createCustomer(customer);
      setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  // Rename local function to avoid conflict
  const handleUpdateCustomer = async (updatedCustomer: CustomerData) => {
    try {
      const updatedResponse = await updateCustomer(
        updatedCustomer,
        updatedCustomer.id!
      ); // Use the ID from the object

      if (!updatedResponse) {
        throw new Error("Failed to update customer");
      }

      setCustomers((prevCustomers) =>
        prevCustomers.map((customer) =>
          customer.id === updatedCustomer.id ? updatedCustomer : customer
        )
      );
    } catch (error) {
      console.log("Error updating customer:", error);
    }
  };

  const deleteCustomer = (id: number) => {
    try {
      console.log("🚀 ~ id:", id);
      const response = deleteCustomerFetch(id);
      console.log("🚀 ~ deleteResponse:", response);
      setCustomers((prevCustomers) =>
        prevCustomers.filter((customer) => customer.id !== id)
      );
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        addCustomer,
        updateCustomer: handleUpdateCustomer, // Use renamed function
        deleteCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

// Create a custom hook to use the customer context
export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("useCustomer must be used within a CustomerProvider");
  }
  return context;
};
