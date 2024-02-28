window.onload = function () {
    onceLoaded();

};

//https://reqres.in/ API de prueba
function onceLoaded() {
    fetch('https://reqres.in/api/users')
        .then(data => data.json())
        .then(users => {
            data = users.data;
            console.log(data);


            let lista = document.createElement("ul");
            for (var i = 0; i < data.length; i++) {
                let elem = document.createElement("li");
                elem.innerHTML = data[i].email;
                lista.appendChild(elem);
            }

            var body = document.getElementById("users");
            body.innerHTML = "";
            body.appendChild(lista);
        }
        )
        .catch((err) => console.error("error:", err));

}