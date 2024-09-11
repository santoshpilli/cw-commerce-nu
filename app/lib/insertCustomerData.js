import axios from 'axios';
import {generateCustomerId} from './generateCustomerId'

const insertCustomerData = async (Details) => {
  const customerId=generateCustomerId()
  const customerData = {
   "customer": [
      {
        "customer_id": customerId,
        "customer_code": "Emp-3850",
        "first_name": Details?.given_name || null,
        "last_name": Details?.family_name || null,
        "full_name": Details?.name,
        "customer_segment": "Healthy_1 Friend",
      "country_code": "+971",
      "phone_no": "0505258494",
      "email": Details?.email,
      "pincode": 45,
      "active": true,
      "credit_applicable": true,
      "credit_limit": 64.59,
      "loyalty_level": "Healthy_2 Friend",
      "loyalty_balance": 123,
      "created": "2024-03-29",
      "addresses": [
        {
          "address_line1": "Dubai",
          "address_line2": "Dubai",
          "city": "Dubai",
          "region": "Dubai",
          "country": "United Arab Emirates",
          "pincode": "45",
          "phone": "0505258494"
        }
      ],
      "other_details": {
        "birthday": "1982-03-29",
        "anniversary": "2012-04-09",
        "gender": "M"
      }
    }
  ]
}

  try {
    console.log('Trying to insert customer data:', customerData);

    const response = await axios.post(
      'https://dev-api.cwcloud.in/catalog/v1/customers',
      customerData,
      {
        headers: {
          'accept': 'application/json',
          'api_key': 'ud9u9de93302',
        },
      }
    );

    console.log('Response data:', response.data);
    const newCustomer = response.data;
    console.log('New customer created:', newCustomer);
    return newCustomer;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
};

export default insertCustomerData;
