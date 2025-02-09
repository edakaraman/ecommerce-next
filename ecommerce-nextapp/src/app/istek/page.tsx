const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    console.log("GET isteği başarılı!");
    console.log(response.data);
  })
  .catch(function (error) {
    console.error("GET isteği başarısız oldu:", error);
  });