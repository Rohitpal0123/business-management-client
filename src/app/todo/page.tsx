import { getAllCustomer } from "@/utility/actions/customer/getAllCustomer";

export default async function Todo() {
  let customers = [
    {
      id: 1,
      name: "Pankaj",
      address: "123 Main St, Springfield",
      contactNumber: "9312378390",
      quantity: 4,
      agreedRate: 15,
      isSpecialOrder: true,
      createdAt: "2024-08-20T19:04:52.577Z",
      updatedAt: "2024-08-20T19:04:52.577Z",
    },
    {
      id: 4,
      name: "Rahul",
      address: "456 Elm St, Springfield",
      contactNumber: "9845632109",
      quantity: 2,
      agreedRate: 20,
      isSpecialOrder: false,
      createdAt: "2024-08-20T19:12:34.500Z",
      updatedAt: "2024-08-20T19:12:34.500Z",
    },
    {
      id: 5,
      name: "Neha",
      address: "789 Oak St, Springfield",
      contactNumber: "9954671234",
      quantity: 3,
      agreedRate: 18,
      isSpecialOrder: true,
      createdAt: "2024-08-20T19:12:34.500Z",
      updatedAt: "2024-08-20T19:12:34.500Z",
    },
    {
      id: 6,
      name: "Amit",
      address: "101 Maple St, Springfield",
      contactNumber: "9123456780",
      quantity: 6,
      agreedRate: 25,
      isSpecialOrder: false,
      createdAt: "2024-08-20T19:12:34.500Z",
      updatedAt: "2024-08-20T19:12:34.500Z",
    },
    {
      id: 7,
      name: "Sakshi",
      address: "234 Pine St, Springfield",
      contactNumber: "9387654321",
      quantity: 8,
      agreedRate: 22,
      isSpecialOrder: true,
      createdAt: "2024-08-20T19:12:34.500Z",
      updatedAt: "2024-08-20T19:12:34.500Z",
    },
    {
      id: 8,
      name: "Vikram",
      address: "567 Birch St, Springfield",
      contactNumber: "9876543212",
      quantity: 7,
      agreedRate: 19,
      isSpecialOrder: false,
      createdAt: "2024-08-20T19:12:34.500Z",
      updatedAt: "2024-08-20T19:12:34.500Z",
    },
    {
      id: 9,
      name: "Priya",
      address: "890 Cedar St, Springfield",
      contactNumber: "9345678901",
      quantity: 5,
      agreedRate: 16,
      isSpecialOrder: true,
      createdAt: "2024-08-20T19:12:34.500Z",
      updatedAt: "2024-08-20T19:12:34.500Z",
    },
    {
      id: 10,
      name: "Anjali",
      address: "345 Walnut St, Springfield",
      contactNumber: "9456781230",
      quantity: 4,
      agreedRate: 20,
      isSpecialOrder: false,
      createdAt: "2024-08-20T19:12:34.500Z",
      updatedAt: "2024-08-20T19:12:34.500Z",
    },
    {
      id: 11,
      name: "Rajesh",
      address: "678 Ash St, Springfield",
      contactNumber: "9654321870",
      quantity: 6,
      agreedRate: 21,
      isSpecialOrder: true,
      createdAt: "2024-08-20T19:12:34.500Z",
      updatedAt: "2024-08-20T19:12:34.500Z",
    },
    {
      id: 12,
      name: "Mohan",
      address: "901 Cherry St, Springfield",
      contactNumber: "9765432108",
      quantity: 2,
      agreedRate: 14,
      isSpecialOrder: false,
      createdAt: "2024-08-20T19:12:34.500Z",
      updatedAt: "2024-08-20T19:12:34.500Z",
    },
    {
      id: 13,
      name: "Nisha",
      address: "112 Oakridge St, Springfield",
      contactNumber: "9867543219",
      quantity: 3,
      agreedRate: 23,
      isSpecialOrder: true,
      createdAt: "2024-08-20T19:12:34.500Z",
      updatedAt: "2024-08-20T19:12:34.500Z",
    },
    {
      id: 14,
      name: "Manish",
      address: "223 Pinecrest St, Springfield",
      contactNumber: "9987654320",
      quantity: 7,
      agreedRate: 17,
      isSpecialOrder: false,
      createdAt: "2024-08-20T19:12:34.500Z",
      updatedAt: "2024-08-20T19:12:34.500Z",
    },
    {
      id: 15,
      name: "Kavita",
      address: "334 Maplewood St, Springfield",
      contactNumber: "9321654789",
      quantity: 9,
      agreedRate: 25,
      isSpecialOrder: true,
      createdAt: "2024-08-20T19:12:34.500Z",
      updatedAt: "2024-08-20T19:12:34.500Z",
    },
    {
      id: 16,
      name: "Suresh",
      address: "445 Evergreen St, Springfield",
      contactNumber: "9213456780",
      quantity: 5,
      agreedRate: 22,
      isSpecialOrder: false,
      createdAt: "2024-08-20T19:12:34.500Z",
      updatedAt: "2024-08-20T19:12:34.500Z",
    },
    {
      id: 17,
      name: "Rina",
      address: "556 Willow St, Springfield",
      contactNumber: "9567890123",
      quantity: 8,
      agreedRate: 18,
      isSpecialOrder: true,
      createdAt: "2024-08-20T19:12:34.500Z",
      updatedAt: "2024-08-20T19:12:34.500Z",
    },
    {
      id: 18,
      name: "Atul",
      address: "Gala Nagar",
      contactNumber: "1234567890",
      quantity: 10,
      agreedRate: 30,
      isSpecialOrder: false,
      createdAt: "2024-08-21T16:38:09.455Z",
      updatedAt: "2024-08-21T16:38:09.455Z",
    },
    {
      id: 19,
      name: "Asmita",
      address: "Fair Field Nagar",
      contactNumber: "1234567890",
      quantity: 10,
      agreedRate: 30,
      isSpecialOrder: false,
      createdAt: "2024-08-22T16:08:45.749Z",
      updatedAt: "2024-08-22T16:08:45.749Z",
    },
    {
      id: 20,
      name: "Karan",
      address: "Fair Field Nagar",
      contactNumber: "1234567890",
      quantity: 7,
      agreedRate: 5,
      isSpecialOrder: true,
      createdAt: "2024-08-24T08:42:31.348Z",
      updatedAt: "2024-08-24T08:42:31.348Z",
    },
    {
      id: 21,
      name: "ABC",
      address: "Fair Field Nagar",
      contactNumber: "1234567890",
      quantity: 7,
      agreedRate: 5,
      isSpecialOrder: false,
      createdAt: "2024-08-24T12:55:30.689Z",
      updatedAt: "2024-08-24T12:55:30.689Z",
    },
    {
      id: 22,
      name: "ABCDEF",
      address: "Fair Field Nagar",
      contactNumber: "1234567890",
      quantity: 7,
      agreedRate: 5,
      isSpecialOrder: false,
      createdAt: "2024-08-24T12:59:50.027Z",
      updatedAt: "2024-08-24T12:59:50.027Z",
    },
    {
      id: 23,
      name: "ABCDEF",
      address: "Fair Field Nagar",
      contactNumber: "1234567890",
      quantity: 7,
      agreedRate: 5,
      isSpecialOrder: false,
      createdAt: "2024-08-24T12:59:55.311Z",
      updatedAt: "2024-08-24T12:59:55.311Z",
    },
    {
      id: 24,
      name: "ABCDEF",
      address: "Fair Field Nagar",
      contactNumber: "1234567890",
      quantity: 7,
      agreedRate: 5,
      isSpecialOrder: false,
      createdAt: "2024-08-24T13:00:09.853Z",
      updatedAt: "2024-08-24T13:00:09.853Z",
    },
    {
      id: 25,
      name: "Rekha",
      address: "Fair Field Nagar",
      contactNumber: "1234567890",
      quantity: 7,
      agreedRate: 5,
      isSpecialOrder: false,
      createdAt: "2024-08-24T13:00:17.614Z",
      updatedAt: "2024-08-24T13:00:17.614Z",
    },
    {
      id: 26,
      name: "Tara",
      address: "Fair Field Nagar",
      contactNumber: "1234567890",
      quantity: 7,
      agreedRate: 5,
      isSpecialOrder: false,
      createdAt: "2024-08-25T08:58:32.860Z",
      updatedAt: "2024-08-25T08:58:32.860Z",
    },
  ];
  const data: any = await getAllCustomer()
  return (
    <>
      <h1>get all customers</h1>
      {data.map((customer:any) => (
        <p className=" w-44 mb-3 p-2 border-2 border-red-600 flex" key={customer.id}>{customer.name}</p>
      ))}
    </>
  );
}
