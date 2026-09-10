/* for a given array with prices of 5 items -> [250,645,300,400,500]. All the items have an offer of 10% off 
on them. change the array to store the final price after applying offer.*/

let items = [250,645,300,400,500];

for(let i=0; i<items.length;i++){

    let offer = items[i]/10 ;
    items[i]-=offer;

}
console.log(`After offer the prices will be ${items} rupees`);

