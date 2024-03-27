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

function biriktirish(massiv1, massiv2) {
    let qator = new Set([...massiv1, ...massiv2]);
    return Array.from(qator);
}

let massiv1 = [1, 2, 3, 4, 5];
let massiv2 = [4, 5, 6, 7, 8];

let yangi_massiv = biriktirish(massiv1, massiv2);
console.log(yangi_massiv);
