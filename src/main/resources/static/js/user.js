function user(firstName, lastName, address, phoneNumber, email, password, isAdmin)
{
   this.firstName = firstName;
    this.lastName =lastName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
};

//----------------------------------------------------------------------------------------------------------------------------------------------------------------//

var a = new User("jim","bob","123 Fake Street", "5142220000", "fork@hotmail.com","123abc",true);



console.log(a.isAdmin);