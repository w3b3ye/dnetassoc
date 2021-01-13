//Using JSON data directly in JS code

myObj = {
    "People": [
        {
            "id": "1",
            "FirstName": "Bob",
            "LastName": "King",
            "Email": "bob.k@test.com"
        },
        {
            "id": "2",
            "FirstName": "Cob",
            "LastName": "Queen",
            "Email": "cob.q@test.com"
        },
        {
            "id": "3",
            "FirstName": "Dob",
            "LastName": "Prince",
            "Email": "dob.p@test.com"
        }
    ]
}


console.log(myObj.People[1].FirstName);
console.log(typeof myObj.People[1].FirstName);
