const btn=document.getElementById("btn");
btn.addEventListener("click", getUsers);


function getUsers(e){
    e.preventDefault();

    fetch("users2.json")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data)
        let output = "";
        data.forEach(function(user) {
            output += `
                <hr>
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.firstName}</li>
                    <li>Email: ${user.email}</li>

                </ul>
            `;
        })

        document.getElementById("users").innerHTML = output;
    });
}