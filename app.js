console.log("HI!");

fetch("http://localhost:8080/customer/get-all")
.then(res => res.json())  
.then(data => {
    console.log(data);

    let body=`<tr>
            <td>ID</td>
            <td>Name</td>
            <td>Address</td>
            <td>Age</td>
            <td>Contact Number</td>
        </tr>`;

    data.forEach((element) => {
        body+=`<tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.address}</td>
            <td>${element.age}</td>
            <td>${element.contactNumber}</td>
        </tr>`
    });
    document.getElementById("tblCustomers").innerHTML=body;
})