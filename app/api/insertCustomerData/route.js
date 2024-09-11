export  async function POST(req, res) {
    if (req.method === 'POST') {
      try {
        const customerData = req.body;
        console.log('Trying to insert customer data:', customerData);
  
        const response = await fetch('https://dev-api.cwcloud.in/catalog/v1/customers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api_key': 'ud9u9de93302' 
          },
          body: JSON.stringify(customerData)
        });
  
        if (!response.ok) {
          throw new Error('Failed to create customer');
        }
  
        const newCustomer = await response.json();
        console.log('New customer created:', newCustomer);
  
        res.status(201).json({ message: 'Customer data inserted successfully', result: newCustomer });
      } catch (error) {
        console.error('Error inserting customer data:', error);
        res.status(500).json({ message: 'Failed to insert customer data', error: error.message });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} not allowed`);
    }
  }
  