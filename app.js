let ticketIn$ = 350;
let livingIn$ = 680;
let tourInEuro = 230;

let $InSum = 11250;
let euroInSum = 12864;

let ticketInSum = ticketIn$ * $InSum;
let livingInSum = livingIn$ * $InSum;
let tourInSum = tourInEuro * euroInSum;

let total = ticketInSum + livingInSum + tourInSum; 

console.log(total);

let money = +prompt("O'zi nechpulingiz bor?");

if (money >= total) {
    console.log("Oq yo'l! Yoqimli parvoz!");
} else if (money < total){
    let day = Math.floor(Math.random() * (30 - 3 + 1)) + 3;
    console.log(`Pulingiz yetarli emas.Iltimos, ${day} kundan keyin xabar oling!`);
} else {
    console.log ("Noto'g'ri pul kiritdingiz. Qaytadan urinib ko'ring.");
}
