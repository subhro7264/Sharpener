
/*-------------PROMISE CODE----------*/


console.log("per1: shows ticket");
console.log("per2: shows ticket");

const promiseWifeBtingTickets=new Promise((resolve, reject)=>{
setTimeout(()=>{
resolve("ticket")
},3000)
});
const getPopcorn=promiseWifeBtingTickets.then((t)=>{
    console.log('wife: i have tickets');
    console.log('husband: we should go in');
    console.log('wife: no iam hungry');
    return new Promise((resolve, reject) => resolve(`${t} popcorn`))

});
const getButter=getPopcorn.then((t)=>{
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');
    return new Promise((resolve, reject) => resolve(`${t} butter`))

});
const getColdDrinks = getButter.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife: i need colddrink');
    console.log('husband: i got some butter on popcorn and cock');
    console.log('husband: any thing else my darling');
    console.log('wife: lets go we are getting late');
    console.log('husband: thanyou for the reminder *grins*');
    return new Promise((resolve, reject) => resolve(`${t} coldDrink`))

})
getColdDrinks.then((t)=>{
    console.log(t)
})

console.log("per4: shows ticket");
console.log("per5: shows ticket");


/*------async await code------*/

console.log("per1: shows ticket");
console.log("per2: shows ticket");
const preMOvie = async () => {
    const promiseWifeBtingTickets = new Promise((resolve, reject) => {
        setTimeout(() => resolve('tickets'), 3000)
    });
    const getPopcorn=new Promise((resolve, reject) => resolve(`popcorn`));

    const addButter=new Promise((resolve, reject) => resolve(`butter`));

    const addCock=new Promise((resolve, reject) => resolve(`Cock`));




    let tickets = await promiseWifeBtingTickets;

    console.log(`wife: i have${tickets}`);
    console.log('husband: we should go in');
    console.log('wife: no iam hungry');
    let popcorn=await getPopcorn;



    console.log(`husband: i got some  ${popcorn}`);
     console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');




 

    let colddrink=await addCock;
    console.log(`wife: i need ${colddrink}`)


    let butter=await addButter;
    console.log(`husband: i got some ${butter} on popcorn and cock`);
    console.log('husband: any thing else my darling');
   
    console.log('wife: lets go we are getting late');
    console.log('husband: thanyou for the reminder *grins*');

    return tickets
}
preMOvie().then((m) => {
    console.log(`per3: shows ${m}`)
})
console.log("per4: shows ticket");
console.log("per5: shows ticket");


// promise all//

console.log("per1: shows ticket");
console.log("per2: shows ticket");
const preMOvie = async () => {
    const promiseWifeBtingTickets = new Promise((resolve, reject) => {
        setTimeout(() => resolve('tickets'), 3000)
    });
    const getPopcorn=new Promise((resolve, reject) => resolve(`popcorn`));

    const addButter=new Promise((resolve, reject) => resolve(`butter`));

    const addCock=new Promise((resolve, reject) => resolve(`cock`));




    let tickets = await promiseWifeBtingTickets;

 let [popcorn,butter,cock] =await Promise.all([getPopcorn,addButter,addCock])

 console.log(`${popcorn}, ${butter},${cock}`);
  
    return tickets
}
preMOvie().then((m) => {
    console.log(`per3: shows ${m}`)
})
console.log("per4: shows ticket");
console.log("per5: shows ticket");


