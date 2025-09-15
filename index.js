const axios = require('axios');

async function sendWhatsappMessage(phoneNumber, message, app = null) {
    try {
        const phoneNumberId = '639323635919894'; // Your WhatsApp business number ID
        const token = 'EAATpMvZAJA5oBPEhSNwN7MwG76VVPxTykrClLQnHbpzys4yD2okEHArzhUhdcBrotjm8wZArw5YIk9An6hjUvlCfTXA0ZADh2vIZBASRg9hJiAZAR5ZCRGISmeGKNLjkQ9nM6kDYx1X6k5r8yghPipOIiUKRkCa3gTZAnDxN3atm4h56JSlNCCZBxSeHgZCz6'; 
        const url = `https://graph.facebook.com/v17.0/${phoneNumberId}/messages`;

        const data = {
            messaging_product: 'whatsapp',
            to: phoneNumber, // International format without "+"
            type: 'text',
            text: { body: message }
        };

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        console.log("dfgdrsdrdfg");
        
        const response = await axios.post(url, data, { headers });
        console.log('✅ Message sent:', response.data);
        return { success: true, data: response.data };

    } catch (error) {
        console.error('❌ sendWhatsappMessage error:', error.response?.data || error.message);
        return { success: false, error: error.message };
    }
}

// Example usage:
sendWhatsappMessage('48794740269', 'Hello from WhatsApp Cloud API!');
