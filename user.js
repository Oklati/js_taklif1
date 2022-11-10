const users = [
    {
    id: 1,
    firstName: "Ali",
    lastName: "Jobs",
    address: "Tehran",
    phone: "9981763494",
    },
];
function AddNewUser(id, firstName, lastName, address, phone){
    const user = {
        id,
        firstName,
        lastName,
        address,
        phone,
    };
    users.push(user) ;
}
function DeleteUser(id){
    const index_delete = users.findIndex((user) => user.id === id) ;
    users.splice(index_delete,1) ; 
}

function userOrder(){
    const order = prompt("What is your order my lord?", "add")
    if(order === "add"){
        const id = prompt("enter id")
        const firstName = prompt("enter first name")
        const lastName = prompt("enter last name")
        const address = prompt("enter address")
        const phone = prompt("enter phone")
        AddNewUser(id,firstName,lastName,address,phone)
        alert("COMPLETE!")
        console.log(users) 
    }
    else if(order === "delete"){
        const id = prompt("enter id to initiate the elimination process")
        DeleteUser(id)
        alert("COMPLETE!")
        console.log(users) ;
    }
    else if(order === "find"){
        const field = prompt("enter the field you want to search on")
        if(field === "id"){
            const id = prompt("enter an id")
            const userindex = users.findIndex((user) => user.id === id) ;
            console.log(users[userindex]) ;
        }
        if(field === "first name"){
            const firstName = prompt("enter a first name")
            const userindex = users.findIndex((user) => user.firstName === firstName) ;
            console.log(users[userindex]) ;
        }
        if(field === "last name"){
            const lastName = prompt("enter a last name")
            const userindex = users.findIndex((user) => user.lastName === lastName) ;
            console.log(users[userindex]) ;
        }
        if(field === "address"){
            const address = prompt("enter an address")
            const userindex = users.findIndex((user) => user.address === address) ;
            console.log(users[userindex]) ;
        }
        if(field === "phone"){
            const phone = prompt("enter a phone number")
            const userindex = users.findIndex((user) => user.phone === phone) ;
            console.log(users[userindex]) ;
        }
    }
}
const btn=document.querySelector(".btn")
btn.addEventListener("click",function(){
    userOrder()
})