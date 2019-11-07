// Add your code here
function submitData(name, email) {
  const formData = {
    name: name,
    email: email
  };

  const configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
