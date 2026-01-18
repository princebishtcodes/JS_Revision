fetch('https://api.github.com/users/princebishtcodes')
    .then((response) => {
        return response.json();
    })
    .then((data)=> console.log(data))
    .catch((error)=>console.log("Error!"));