// JavaScript Object Notation(JSON)
const user={
    id:11,
    fullName:"Rakib Istiak",
    job:"Fornt end Web Developer",

};
const stringfied = JSON.stringify(user);
/* console.log(user);
console.log(stringfied); */
const shop = {
    names:"Alia Store",
    address:"Habibullah Road",
    products:['Laptop','Mobile','Pepsi'],
    isExoensive:false,
    profit:15000,
    owner:{
        names:"Alia Vaat",
        job:"WEB dev"
    }
}
const shopStringify = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringify);
const converted = JSON.parse(shopStringify);
console.log(converted);