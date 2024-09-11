import { BASE_URL } from "../../constants" 
 
 export const importCustomers = async (payload:any) => {

  try {
    const response = await fetch(`${BASE_URL}/customer/bulk-upload`, {
      method: 'POST',
      body: payload,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Upload successful:', result);

    return result;
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

