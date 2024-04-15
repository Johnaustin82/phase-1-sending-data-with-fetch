// Add your code here
function submitData(name, email) {
    const data = {
      name: name,
      email: email
    };
  
    const object = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    };
  
    return fetch("http://localhost:3000/users", object)
      .then(response => response.json())
      .then(data => {
        document.body.textContent = data.id;;
      })
      .catch(error => {
        document.body.textContent= error.message;
      });
  }
  