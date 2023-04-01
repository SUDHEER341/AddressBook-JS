class AddressBook
{
    firstName;
    LastName;
    address;
    city;
    state;
    zip;
    phonenumber;
    email;

    //constructor for class AddressBook
        constructor(firstName,LastName,address,city,state,zip,phonenumber,email){
        this.firstName = firstName;
        this.LastName= LastName;
        this.address= address;
        this.city= city;
        this.state = state;
        this.zip =zip;
        this.phonenumber= phonenumber;
        this.email= email;
    }

    get firstName(){
    return this.firstName;
   }
    set firstName(firstName){
    this.firstName =firstName;
   }
    get LastName(){
    return this.LastName;
   }
    set LastName(LastName){
    this.LastName = LastName;
   }
   get address(){
    return this.address;
   }
   set address(address){
    this.address = address;
   }
   get city(){
    return this._city;
   }
   set city(city){
    this.city = city;
   }
   get state(){
    return this.state;
   }
   set state(state){
    this.state = state;
   }
   get zip(){
    return this.zip;
   }
   set zip(zip){
    this.zip = zip;
   }
   get phonenumber(){
    return this.phonenumber;
   }
   set phonenumber(phonenumber){
    this.phonenumber = phonenumber;
   }
   get email(){
    return this.email;
   }
   set email(email){
    this.email = email;
   }

    toString(){
    return "firstName:"+
    this.firstName+"\nLastName:"
    +this.LastName+"\naddress:"
    +this.address+"\ncity:"
    +this.city+"\nstate:"
    +this.state+"\nzip:"
    +this.zip+"\nphone:"+this.phonenumber+"\nemail:"+this.email;
   }
}
let contactDetails = new AddressBook("sudheer","Kumar","WestGodavari","Attili","AP",123455,1234567890,234567,'xyz@gmail.com');
   console.log(contactDetails.toString());