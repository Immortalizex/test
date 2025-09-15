const axios = require('axios');

async function sendWhatsappMessage(phoneNumber, message, app = null) {
    try {
        const phoneNumberId = '1810065506501128'; // Your business number ID
        const token = '1234'; // Load from .env
        const url = `https://graph.facebook.com/v17.0/${phoneNumberId}/messages`;

        const data = {
            messaging_product: 'whatsapp',
            to: phoneNumber, // Must be in international format, no +
            type: 'text',
            text: { body: message }
        };

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };

        const response = await axios.post(url, data, { headers });
        console.log('✅ Message sent:', response.data);
        return { success: true, data: response.data };

    } catch (error) {
        console.error('❌ sendWhatsappMessage error:', error.response?.data || error.message);
        return { success: false, error: error.message };
    }
}

sendWhatsappMessage('48794740269','test')