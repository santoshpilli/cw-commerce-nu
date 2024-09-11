import axios from "axios";

async function checkCustomerData() {
      
    try {
      const response = await axios.get(`https://dev-api.cwcloud.in/catalog/v1/customers`,{
        headers:{
        'api_key': 'ud9u9de93302',
        'Content-Type': 'application/json',
        }
      });
      // console.log('respoooo',response)
      
      const customer = await response.data;
      // console.log('details',customer)
      return customer;
    } catch (error) {
      console.error('Error in checkCustomerData:', error);
      throw error;
    }
  }
  
  export default checkCustomerData;
  