// 1masala Raqamlar massivini oladigan va Set-dan foydalanib, faqat asl massivdagi noyob qiymatlarni o'z ichiga olgan yangi massivni qaytaradigan funksiyani yozing.
// function noyob_qiymatlar(massiv) {
//     let noyoblar = [];
//     let qator = new Set();

//     for (let i = 0; i < massiv.length; i++) {
//         if (!qator.has(massiv[i])) {
//             noyoblar.push(massiv[i]);
//             qator.add(massiv[i]);
//         }
//     }

//     return noyoblar;
// }

// // Misol massiv
// let mas = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 1, 9, 10, 5];
// let natija = noyob_qiymatlar(mas);
// console.log("Asl massiv:", mas);
// console.log("Noyob qiymatlar:", natija);

// 2masala Satrni oladigan va Map ob'ektini qaytaradigan funktsiyani yozing, bu erda kalitlar satrdagi noyob belgilar va qiymatlar har bir belgi satrda paydo bo'lish sonidir.
// function noyob_belgilar_va_qiymatlar_satrda(satr) {
//     let qator = new Set();
//     let mapObj = new Map();

//     for (let i = 0; i < satr.length; i++) {
//         let belgi = satr[i];
//         if (!qator.has(belgi)) {
//             let belgi_son = 1;
//             for (let j = i + 1; j < satr.length; j++) {
//                 if (satr[j] === belgi) {
//                     belgi_son++;
//                 }
//             }
//             mapObj.set(belgi, belgi_son);
//             qator.add(belgi);
//         }
//     }

//     return mapObj;
// }

// let satr = "salomdunyo";
// let mapObj = noyob_belgilar_va_qiymatlar_satrda(satr);
// console.log(mapObj);


// 3masal Massivni qabul qiladigan va agar massivning barcha elementlari yagona boвЂlsa, rost qiymatini qaytaradigan funksiyani yozing, aks holda Set dan foydalaning.
// function rost_qiymat(massiv) {
//     if (new Set(massiv).size === 1) {
//         return massiv[0];
//     } else {
//         return new Set(massiv);
//     }
// }
// let massiv1 = [5, 5, 5, 5, 5];
// let massiv2 = [1, 2, 3, 4, 5];

// console.log(rost_qiymat(massiv1));
// console.log(rost_qiymat(massiv2));


// 4masala Ikki massivni dublikatsiz birlashtirish:
// Ikki massivni oladigan va Set-dan foydalanib ikkala massivning barcha noyob elementlarini o'z ichiga olgan yangi massivni qaytaradigan funksiya yozing.
// function biriktirish(massiv1, massiv2) {
//     let qator = new Set([...massiv1, ...massiv2]);
//     return Array.from(qator);
// }

// let massiv1 = [1, 2, 3, 4, 5];
// let massiv2 = [4, 5, 6, 7, 8];

// let yangi_massiv = biriktirish(massiv1, massiv2);
// console.log(yangi_massiv);

// 5masala Bir qatordagi so'zlar sonini hisoblash:
// Satrni oladigan va Map ob'ektini qaytaradigan funktsiyani yozing, bu erda kalitlar satrdagi noyob so'zlar va qiymatlar har bir so'z satrda paydo bo'lish sonidir.

// function noyob_sozlar_va_qiymatlar_satrda(satr) {
//     let sozlar = satr.split(" ");
//     let qator = new Set(sozlar);
//     let mapObj = new Map();

//     for (let soz of qator) {
//         let paydo_bolish_son = 0;
//         for (let i = 0; i < sozlar.length; i++) {
//             if (sozlar[i] === soz) {
//                 paydo_bolish_son++;
//             }
//         }
//         mapObj.set(soz, paydo_bolish_son);
//     }
//     return mapObj;
// }
// let satr = "salom salom dunyo salom";
// let mapObj = noyob_sozlar_va_qiymatlar_satrda(satr);
// console.log(mapObj);

// // 6masala  Massivdan dublikatlarni olib tashlash:
// Set yordamida massivni oladigan va dublikatsiz yangi massivni qaytaruvchi funksiyani yozing.
// function dublikatlarniOlibTashlash(arr) {
//     return [...new Set(arr)];
// }
// let massiv = [1, 2, 3, 4, 5, 1, 2, 3, 6, 7, 8, 9, 9];
// let yangiMassiv = dublikatlarniOlibTashlash(massiv);
// console.log(yangiMassiv);

// 7masala Subset tekshiruvi:
// Ikki massivni qabul qiladigan va agar birinchi massiv ikkinchi massivning quyi toвЂplami (ichida) boвЂlsa, rost, aks holda вЂњyolgвЂonвЂќ qiymatini qaytaradigan funksiyani Set dan foydalanib yozing
// function ichigaTushadi(mi, ma) {
//     for (let i = 0; i < mi.length; i++) {
//         if (ma.indexOf(mi[i]) === -1) {
//             return false;
//         }
//     }
//     return true;
// }
// let birinchiMassiv = [1, 2, 3];
// let ikkinchiMassiv = [5, 4, 3, 2, 1];

// console.log(ichigaTushadi(birinchiMassiv, ikkinchiMassiv)); 

// let massivA = [10, 20, 30];
// let massivB = [1, 2, 3, 10, 20, 30, 40];

// console.log(ichigaTushadi(massivA, massivB));

// // Boshqa misol
// let massivX = [1, 2, 3];
// let massivY = [4, 5, 6];

// console.log(ichigaTushadi(massivX, massivY));
