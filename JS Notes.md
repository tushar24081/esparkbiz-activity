# Bind method is JS:

```
let person = {
  firstName: "Tushar",
    lastName: "Rupani",
    fullName: function(){
        return this.firstName + this.lastName
    }
}

let member = {
  firstName: "Chirag",
    lastName: "Joshi"
} 
```
Here, we have 2 objects named; person and member: Member object doesn't have fullName property. We shall borrow that function property from person object. 

`let data = person.fullName.bind(member)`

now, data is a method. When we call it; it shall provide us the result.

`ChiragJoshi`