var elh1 = document.querySelector("[data-heading]");
var elOption1 = document.querySelector("[data-option1]");
var elOption2 = document.querySelector("[data-option2]");
var elOption3 = document.querySelector("[data-option3]");
var elButton = document.querySelector("[data-button]");
var elSelect = document.querySelector("[data-select]");
var elInput = document.querySelector("[data-input]");
var elForm = document.querySelector("[data-form]");
    //  FIRST MASALA IF
// var promptenter = +prompt("son kiriting");
// var ten = 10
// if (promptenter > ten ) {
//   console.log(elh1.textContent=tenFirst(promptenter))
// }
// else if (promptenter < ten) {
//   console.log(elh1.textContent=tenSecond(promptenter))
// }
// else if (tenThree(promptenter)) (
//   console.log(elh1.textContent=22)
// )

// function tenFirst(a){
//     return a + 3;
// }
// function tenSecond(a){
//     return a * 2;
// }
// function tenThree(a){
//     return 22;
// }
    //    SECOND butun qism
// var a = +prompt("son kiriting");
// var b = 3
// var c = butunqism(a , b)
// console.log(Math.round(c))
// console.log(elh1.textContent=promptenter)
// function butunqism(num , num2) {
//     return num / num2;
// }
    // THREE qoldiq nechi
// var a = +prompt("son kiriting");
// var b = 3
// var c = butunqism(a , b)
// console.log(Math.floor(c))
// function butunqism(num , num2) {
//     return num % num2;
// }
    //    FOUR juft yoki toq
// var a = +prompt("son kiriting");
// var qoldiq = juft(a , 2)
// var two = 2
// if( qoldiq == 0){
//   console.log(elh1.textContent="juft")
// }
// else{
//   console.log(elh1.textContent="toq")
// }
// function juft(num , num2) {
//     return num % num2
// }
    //  FIVE qaysi son katta
// var a = +prompt("1-sonni kiriting");
// var b = +prompt("2-sonni kiriting");
// if (katta1(a , b)) {
//   console.log(elh1.textContent=a)
// }
// else if(katta2(a , b)) {
//   console.log(elh1.textContent=b)
// }
// else if (katta3(a , b)) {
//   console.log(elh1.textContent="teng")
// }
// function katta1(num , num2) {
//     return num > num2
// }
// function katta2(num , num2) {
//     return num < num2
// }
// function katta3(num , num2) {
//     return num = num2
// }
    // six uchta sondan qaysi biri katta
// var a = +prompt("1-sonni kiriting");
// var b = +prompt("2-sonni kiriting");
// var c = +prompt("3-sonni kiriting");
// if (katta1(a , b , c)) {
//   console.log (elh1.textContent=a)
// }
// else if(katta2(a , b , c)) {
//   console.log (elh1.textContent=b)
// }
// else if (katta3(a , b , c)){
//   console.log (elh1.textContent=c)
// }
// else if(katta4(a , b , c)) {
//   console.log(elh1.textContent="teng")
// }
// function katta1(num , num2 , num3) {
//     return num > num2 && num2>num3
// }
// function katta2(num , num2 , num3) {
//     return num3<num2 && num2>num
// }
// function katta3(num , num2 , num3) {
//     return num<num3 && num3>num2
// }
// function katta4(num , num2 , num3) {
//     return num = num2 = num3
// }
    // seven musbat vs manfiy
// var a = +prompt("son kiriting");
// var zero = 0
// if (musbat(zero , a))(
//   console.log (elh1.textContent="musbat")
// )
// else if (zero , a)(
//   console.log (elh1.textContent="manfiy")
// )
// else {
//   console.log (0)
// }
// function musbat(num , num2) {
//     return num < num2
// }
// function katta4(num , num2) {
//     return num > num2
// }
    //    eight 5 ga bolinadimi
// var a = +prompt("son kiriting");
// var qoldiq = five(a , 5)
// if(qoldiq == 0){
//   console.log(elh1.textContent="bo'linadi")
// }
// else if(qoldiq == 1){
//   console.log(elh1.textContent="bo'linmaydi")
// }
// else{
// console.log(elh1.textContent="bo'linmaydi")
// }
// function five(num , num2) {
// return num % num2
// }
    //    nine 3ga va 4 ga bir paytda bolinadimi
// var a = +prompt("son kiriting");
// var qoldiq = four(a , 3)
// var qoldiq2 = four(a , 4)
// if( qoldiq == 0 && qoldiq2 == 0){
//   console.log(elh1.textContent="true")
// }
// else{
//   console.log(elh1.textContent="false")
// }
// function four(num , num2) {
// return num % num2
// }
    //    ten kabisa yili
// var a = +prompt("son kiriting");
// var qoldiq = four(a , 4)
// var qoldiq2 = four(a , 100)
// var qoldiq3 = four(a , 400)
// if ( qoldiq3 == 0){
//   console.log(elh1.textContent="kabisa")
// }
// else if( qoldiq2 == 0){
//   console.log(elh1.textContent="kabisa emas")
// }
// else if( qoldiq == 0){
//   console.log(elh1.textContent="kabisa")
// }
// else{
//     console.log(elh1.textContent="kabisa emas")
// }
// function four(num , num2) {
// return num % num2
// }
		// 11  char sonmi
// var a = +prompt("son kiriting");
// if (0<a && a<9){
//   console.log(elh1.textContent="number")
// }
// else{
//   console.log(elh1.textContent="alpha")
// }
		// 12 hafta kunlari
// var a = +prompt("son kiriting");
// if (kun(a , 1)) {
//   console.log(elh1.textContent="Dushanba");
// }
// else if (kun(a , 2)){
//   console.log(elh1.textContent="Seshanba");
// }
// else if (kun(a , 3)){
//   console.log(elh1.textContent="Chorshanba");
//   console.log("Chorshanba")
// }
// else if (kun(a , 4)){
//   console.log(elh1.textContent="Payshanba");
// }
// else if (kun(a , 5)){
//   console.log(elh1.textContent="Juma");
// }
// else if (kun(a , 6)){
//   console.log(elh1.textContent="Shanba");
// }
// else if (kun(a , 7)){
//   console.log(elh1.textContent="Yakshanba");
// }
// else{
//   console.log(elh1.textContent="Hafta 7 kundan iborat");
// }
// function kun(num , num2) {
//     return num == num2
// }
    //  13 uchburchak burchak boyicha togrimi
// var a = +prompt("1-sonni kiriting");
// var b = +prompt("2-sonni kiriting");
// var c = +prompt("3-sonni kiriting");
// var d = plus(a , b , c)
// if (d == 180){
//   console.log(elh1.textContent="true");
// }
// else{
//   console.log(elh1.textContent="false");
// }
// function plus(num , num2 , num3) {
//     return num + num2 + num3
// }
    //  14 uchburchak togrimi
// var a = +prompt("1-sonni kiriting");
// var b = +prompt("2-sonni kiriting");
// var c = +prompt("3-sonni kiriting");
// if ( a + b > c && a + c > b && c + b > a || a == b == c){
//   console.log(elh1.textContent="true");
// }
// else{
//   console.log(elh1.textContent="false");
// }
    //  15 qanaqa uchburchak
// var a = +prompt("1-sonni kiriting");
// var b = +prompt("2-sonni kiriting");
// var c = +prompt("3-sonni kiriting");
// if (two(a , b)  && two(c , b)){
//     console.log(elh1.textContent="equilateral");
// }
// else if (two(a , c)||two(a , b)||two(c , b)){
//     console.log(elh1.textContent="isoscoles");
// }
// else{
//   console.log(elh1.textContent="scalane");
// }
// function two(num , num2) {
//     return num === num2
// }
    //  16 kichik son
// var a = +prompt("1-sonni kiriting");
// var b = +prompt("2-sonni kiriting");
// if (a<b){
// console.log(elh1.textContent=a);
// }
// else if (a>b){
// console.log(elh1.textContent=b);
// }
    //  17 orta qiymat
// var a = +prompt("1-sonni kiriting");
// var b = +prompt("2-sonni kiriting");
// var c = +prompt("3-sonni kiriting");
// if (orta(a , b , c , 3)){
//   console.log(elh1.textContent=orta(a , b , c , 3));
// }
// function orta(num , num2 , num3 , num4) {
//     return (num + num2 + num3)/num4
// }
		// 18 OSISH YOKI KAMAYISH
// var a = +prompt("1-sonni kiriting");
// var b = +prompt("2-sonni kiriting");
// var c = +prompt("3-sonni kiriting");
// if (massive(a , b) && (massive(b , c))){
//   console.log(elh1.textContent= 1 );
// }else if ((massive(b , a)) && (massive(c , b))){
//   console.log(elh1.textContent= 2 );
// }else if ((massive(a , b)) && (massive(c , b))){
//   console.log(elh1.textContent=b);
// }else if  (two(a , b) && two(c , b)){
//   console.log(elh1.textContent= 5 );
// }
// else{
//   console.log(elh1.textContent= 0 );
// }
// function two(num , num2) {
//     return num === num2
// }
// function massive(num , num2) {
//     return num < num2
// }
		//  19 ikkita teng emas uchinchisi teng emas
// var a = +prompt("1-sonni kiriting");
// var b = +prompt("2-sonni kiriting");
// var c = +prompt("3-sonni kiriting");
// if (two(a , b)){
//   console.log(elh1.textContent=c);
// }
// else if (two(a , c)){
//   console.log(elh1.textContent=b);
// }
// else if  (two(c , b)){
//   console.log(elh1.textContent=a);
// }
// else{
//   console.log(elh1.textContent="0");
// }
// function two(num , num2) {
//     return num === num2
// }
    // 20 necha xonali son
// var a = +prompt("son kiriting");
// var b = massive(a , 100) && massive(9 , a)
// var d = massive(0 , a) && massive(a , 10)
// var e = massive(a , 1000) && massive(100 , a)
// if (b){
//   console.log(elh1.textContent=2);
// }else if (d){
//   console.log(elh1.textContent=1);
//   console.log(1)
// }
// else if (e){
//   console.log(elh1.textContent=3);
// }
// else{
//   console.log(elh1.textContent=false);
// }
// function massive(num , num2) {
//     return num < num2
// }
		//  21	son yasang
// var a = +prompt("necha yuz");
// var b = +prompt("necha o'n");
// var c = +prompt("necha birlik");
// var d = kopay(a , 100) + kopay(b , 10) + c;
// if (d) {
//     console.log((elh1.textContent = d));
// }
// else{
//   console.log((elh1.textContent = false));
// }
// function kopay(num , num2) {
//     return num * num2
// }
// function two(num , num2) {
//     return num >= num2
// }
// function three(num , num2) {
//     return num2 <= num
// }
		//	22	2 ta juft yoki 2 ta toq
// var a = +prompt("1-sonni kiriting ");
// var b = +prompt("2-sonni kiriting ");
// var c = +prompt("3-sonni kiriting");
// var qoldiq =  four(a , 2)
// var qoldiq2 = four(b , 2)
// var qoldiq3 = four(c , 2)
// if (qoldiq==0 && qoldiq2==0 || qoldiq==0 && qoldiq3==0 || qoldiq2==0 && qoldiq3==0) {
//   console.log((elh1.textContent = 1));
// }else{
//   console.log((elh1.textContent = 2));
// }	
// function four(num , num2) {
// return num % num2
// }	
		//	23 hammasi musbatmi
// var a = +prompt("1-sonni kiriting ");
// var b = +prompt("2-sonni kiriting ");
// var c = +prompt("3-sonni kiriting");
// var d = +prompt("4-sonni kiriting");
// var e = massive(0 , a) && massive(0 , b) && massive(0 , c) && massive(0 , d)
// if (e) {
//   console.log((elh1.textContent = 1));
// }else if (massive(0 , a)){
//   console.log((elh1.textContent = a));
// }else if (massive(0 , b)){
//   console.log((elh1.textContent = b));
// }else if (massive(0 , c)){
//   console.log((elh1.textContent = c));
// }else if (massive(0 , d)){
//   console.log((elh1.textContent = d));
// }else {
//   console.log((elh1.textContent = false));
// }
// function massive(num , num2) {
//     return num > num2
// }
		//	24 sonlar o'qidagi masofa
// var a = +prompt("a ni kiriting ");
// var b = +prompt("b ni kiriting ");
// var musbat       = massive(a , 0) && massive(b , 0)
// var Katta  = massive(a , b)
// var Kichik = massive(b , 0)
// var manfiy       = massive(0 , a) && massive(0 , b)
// var aralash      = massive(0 , a) && massive(b , 0)
// var aralash1     = massive(a , 0) && massive(0 , b)
// var aAralash     = a * -1
// var aAralash1     = b * -1
// if (musbat && Katta) {
//   console.log((elh1.textContent = a-b));
//   console.log(a-b);
// }else if (musbat && Kichik){
//   console.log((elh1.textContent = b-a));
// }else if (manfiy && Katta){
//   console.log((elh1.textContent = aAralash1-aAralash));
// }else if (manfiy && Kichik){
//   console.log((elh1.textContent = aAralash-aAralash1));
// }else if (aralash){
//   console.log((elh1.textContent = aAralash+b));
// }else if (aralash1){
//   console.log((elh1.textContent = aAralash1+a));
// }else {
//   console.log((elh1.textContent = false));
// }
// function minus(num , num2 , num3) {
//     return num + num2 + num3
// }
// function massive(num , num2) {
//     return num > num2
// }	
		//	25	sonlar o'qidagi a nuqta
// var a = +prompt("a ni kiriting ");
// var b = massive( a , 0)
// var d = massive(0 , a)
// var e = kopay(a , -1)
// if (b) {
//   console.log((elh1.textContent = a));
// }else if (d){
//   console.log((elh1.textContent = e));
// }else{
//   console.log((elh1.textContent = false));
// }	
// function kopay(a , b) {
//     return a * b
// }
// function massive(a , b) {
//     return a > b
// }
    // 26 katta yoki kichik alfavit 
// var a = prompt("a ni kiriting ");
// if (a === a.toUpperCase()) {
//   console.log((elh1.textContent ="uppercase" ));
// }else  {
//   console.log((elh1.textContent = "lower case"));
// } 
      //  27  talaba masalasi
// var a =  prompt("Ismingizni  kiriting kiriting ");     
// var b =  prompt("Familiyangizni kiriting  kiriting ");     
// var e = alert("maksimal ball 100 ball")
// var c =  +prompt("ballingizni kiriting  kiriting "); 
// var d =  prompt("tankangiz bormi bor bo'lsa ha deb yozing bo'lmasa yo'q"); 
// if(c>100){
//     console.log(`xurmatli ${a} ${b} siz mashenniksiz mashenniklik o'tmaydi`)
//     elh1.textContent =`xurmatli ${a} ${b} siz mashenniksiz mashenniklik o'tmaydi`
// }else if (c<=70 ){
// }else if (c<=70 && d=="ha"){
//     console.log(`xurmatli ${a} ${b} siz mashenniksiz mashenniklik o'tmaydi`)
//     elh1.textContent =`xurmatli ${a} ${b} siz mashenniksiz mashenniklik o'tmaydi`
// }
// else if (c>=70 && c<100){
//     console.log(`xurmatli ${a} ${b} siz o'tdingiz tabriklayman`)
//     elh1.textContent =`xurmatli ${a} ${b} siz o'tdingiz tabriklayman`
// }else if (c>=40 && d=="ha"){
//     console.log(`xurmatli ${a} ${b} siz o'tdingiz`)
//     elh1.textContent =`xurmatli ${a} ${b} siz o'tdingiz`
// }else {
//     console.log(`xurmatli ${a} ${b} siz yiqildingiz keyingi safar urining`)
//     elh1.textContent =`xurmatli ${a} ${b} siz yiqildingiz keyingi safar urining`
// }
		// 28 converter money
// var dollar = 11200
// var rubl = 189
// var euro = 11800
// elForm.addEventListener("submit" , function(evt){
//     evt.preventDefault()
//     if(elSelect.value === "usd"){
//         elh1.textContent = `sizda taqriban ${(elInput.value / dollar).toFixed(2)} dollar bor`
//     }else if(elSelect.value === "rubl"){
//         elh1.textContent = `sizda taqriban ${(elInput.value / rubl  ).toFixed(2)} rubl bor`
//     }else if(elSelect.value === "euro"){
//         elh1.textContent = `sizda taqriban ${(elInput.value / euro  ).toFixed(2)} euro bor`
//     }
// })
		//	29 kim birinchi boradi
var piyoda = 3.6
var velosiped = 20.1
var mashina = 70
var samolyot = 800
elForm.addEventListener("submit" , function(evt){
    evt.preventDefault()
    if(elSelect.value === "piyoda"){
        elh1.textContent = `siz piyoda bo'lsangiz taqriban ${(elInput.value / piyoda).toFixed(2)} soatda borasiz`
    }else if(elSelect.value === "velosiped"){
        elh1.textContent = `siz velosipedda bo'lsangiz taqriban ${(elInput.value / velosiped  ).toFixed(2)} soatda borasiz`
    }else if(elSelect.value === "mashina"){
			elh1.textContent = `siz mashinada bo'lsangiz taqriban ${(elInput.value / mashina  ).toFixed(2)} soatda borasiz`
	  }else if(elSelect.value === "samolyot"){
		elh1.textContent = `siz samolyotda bo'lsangiz taqriban ${(elInput.value / samolyot  ).toFixed(2)} soatda borasiz`
		}
})		
        //  30 Fizbuz
// var four = 4
// var three = 3
// var qoldiq = 0
// elForm.addEventListener("submit" , function(evt){
//     evt.preventDefault()
//     if(fiz(elInput.value , 3)==qoldiq && fiz(elInput.value , 4)==qoldiq){
//         elh1.textContent = ` bu ${elInput.value} soni 3 va 4 ga bo'linadi`
//     }
//     else if(fiz(elInput.value , 3)==qoldiq){
//         elh1.textContent = ` bu ${elInput.value} soni 3 ga bo'linadi`
//     } else if(fiz(elInput.value , 4)==qoldiq){
//         elh1.textContent = ` bu ${elInput.value} soni 4 ga bo'linadi`
//     }
//     else {
//         elh1.textContent = ` bu ${elInput.value} soni 3ga ham 4 ga ham  bo'linmaydi`  
//     }
// })	
// function fiz (a , b){
//     return a % b 
// }