document.getElementById('submitBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;

    if (userInput) {
        fetchChatGPTResponse(userInput);
    }
});

function fetchChatGPTResponse(question) {
    const API_URL = 'https://api.openai.com/v1/engines/davinci/completions'; // Replace with the correct endpoint if different
    const API_KEY = 'YOUR_SECRET_KEY'; // Replace with your secret key

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: question,
            max_tokens: 150
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = data.choices[0].text.trim();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').innerText = 'Error fetching response.';
    });
}
