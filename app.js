// 1
// function yagona(number) {
//     let yagonaSet = new Set(number);
//     let yagonaArray = Array.from(yagonaSet);
//     return yagonaArray;
// }
// let masala_number = [1, 2, 3, 6, 5, 9, 2, 3, 9];
// let result = yagona(masala_number);
// console.log(result);

// 2
// function satrniMapgaOlgan(satr) {
//     let map = new Map();
//     for (let i = 0; i < satr.length; i++) {
//         let belgi = satr.charAt(i);
//         if (!map.has(belgi)) {
//             map.set(belgi, 1);
//         } else {
//             let hozirgiQiymat = map.get(belgi);
//             map.set(belgi, hozirgiQiymat + 1);
//         }
//     }
//     return map;
// }

// let testSatr = "HELLO";
// let mapNatija = satrniMapgaOlgan(testSatr);
// console.log(mapNatija);

// 3
// function rostQiymatniTop(massiv) {
//     if (new Set(massiv).size === 1) {
//         return massiv[0];
//     } else {
//         return false; 
// }
// }
// let testMassiv1 = [5, 5, 5, 5, 5];
// let testMassiv2 = [1, 2, 3, 4, 5];

// console.log(rostQiymatniTop(testMassiv1));
// console.log(rostQiymatniTop(testMassiv2));

// 4
// function birleshtir(massiv1, massiv2) {
//     let yagonaElementlar = new Set([...massiv1, ...massiv2]);
//     return Array.from(yagonaElementlar);
// }
// let massiv2 = [3, 4, 5, 6, 7];
// let massiv1 = [1, 5, 3, 4, 5];
// console.log(massiv1, massiv2);


// 5
// function noyobSozlarSoniniTop(satr) {
//     let sozlar = satr.split(" ");
//     let map = new Map();
//     sozlar.forEach(function(soz) {
//         if (!map.has(soz)) {
//             map.set(soz, 1);
//         } else {
//             let hozirgiQiymat = map.get(soz);
//             map.set(soz, hozirgiQiymat + 1);
//         }
//     });
//     let noyobSozlarSon = map.size;
    
//     return noyobSozlarSon;
// }
// let testSatr = "bugun bugun kelgan bugun";
// console.log(noyobSozlarSoniniTop(testSatr)); 

// 6
// function dublikatsiz(massiv) {
//     let noyobElementlar = new Set(massiv);
//     return Array.from(noyobElementlar);
// }
// let result = [1, 2, 3, 4, 5, 4, 2, 3];
// console.log(dublikatsiz(result));

// 7
// function subset(massiv1, massiv2) {
//     let set1 = new Set(massiv1);
//     let set2 = new Set(massiv2);
//     for (var element of set1) {
//         if (!set2.has(element)) {
//             return "yolg'on";
//         }
//     }
//     return "rost";
// }
// let massiv1 = [1, 2, 3];
// let massiv2 = [1, 2, 3, 4, 5];
// let massiv3 = [4, 5, 6];

// console.log(subset(massiv1, massiv2));
// console.log(subset(massiv1, massiv3));


// 8
// function noyobBelgilar(satr1, satr2) {
//     let set1 = new Set(satr1);
//     let set2 = new Set(satr2);
//     let noyobBelgilarSet = new Set([...set1].filter(x => !set2.has(x)));
//     noyobBelgilarSet = new Set([...noyobBelgilarSet, ...[...set2].filter(x => !set1.has(x))]);
//     return Array.from(noyobBelgilarSet).join('');
// }

// let satr1 = "abcdef";
// let satr2 = "defghij";
// console.log(noyobBelgilar(satr1, satr2));


// 9
// function qiymatlarYigindisi(raqamliQiymatlar) {
//     let qiymatlarMap = new Map();
//     for (let i = 0; i < raqamliQiymatlar.length; i++) {
//         let qiymat = raqamliQiymatlar[i];
//         if (!qiymatlarMap.has(qiymat)) {
//             qiymatlarMap.set(qiymat, 1);
//         } else {
//             let hozirgiQiymat = qiymatlarMap.get(qiymat);
//             qiymatlarMap.set(qiymat, hozirgiQiymat + 1);
//         }
//     }
//     let yigindi = 0;
//     for (let qiymat of qiymatlarMap.values()) {
//         yigindi += qiymat;
//     }
//     return yigindi;
// }
// let raqamliQiymatlar = [1, 2, 3, 4, 5, 1, 2, 3, 4];
// console.log(qiymatlarYigindisi(raqamliQiymatlar));

// 10

