console.log('Person 1 shows the ticket and entered the Movie hall');
console.log('Person 2 shows the ticket and entered the Movie hall');

const gettingTicketFromWife = async () => {

    let wifeWithTicket = await new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('ticket')},1000)});

    console.log('Wife : I got the ticket');
    console.log('Husband: Okay then lets go');
    console.log('Wife : I am hungry , i need popcorn');
    
    let addPopcorn =  await new Promise((resolve, reject) =>{
        setTimeout( () =>{
            resolve('popcorn')},2000)});

    console.log(`Husband: Okay i got ${addPopcorn}`);
    console.log('Wife : I need Butter');

    let addButter =  await new Promise((resolve, reject) =>{
        setTimeout( ()=>{
            resolve('Butter')},3000)});
    console.log(`Husband: Okay i got ${addButter}`);
    console.log('Wife : I need cold drinks');

    let getColdDrinks =  await new Promise((resolve, reject) =>{
        setTimeout( ()=>{
            resolve('Cold Drinks')},2000)});

    console.log(`Husband: Okay i got ${getColdDrinks}`);
    console.log('Wife : okay let enter the hall');
    return wifeWithTicket;
};

gettingTicketFromWife().then((a)=> console.log('let enter the Movie Hall'));

console.log('Person 3 shows the ticket and entered the Movie hall');
console.log('Person 4 shows the ticket and entered the Movie hall');
console.log('Person 5 shows the ticket and entered the Movie hall');