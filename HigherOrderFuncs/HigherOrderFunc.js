/*
* JavaScript Higher Order Functions Doküman ve Örnekleri
*
*/

/*
    Genel olarak Higher Order Fonksiyonları, parametre olarak fonksiyon alan 
    veya fonksiyonu return eden fonksiyonlar olarak özetleyebiliriz.
*/

// İşlemler için kullanılacak diziler
let numbers = [1, 2, 3, 4, 5];
let products = [
    { name: 'Laptop', price: 1000, country: 'Turkey' },
    { name: 'Phone', price: 500, country: 'Turkey' },
    { name: 'Tablet', price: 750, country: 'Turkey' },
    { name: 'PC', price: 1500, country: 'Turkey' }
];


/* 1: Callback fonksiyonu
    Parametre olarak geçilen fonksiyonlara callbacak fonksiyon denir.
*/
const callback = (n) => {
    return n ** 2; // n^2
}

const cube = (callback, n) => {
    return callback(n) * n; // n^3
}

// console.log(kup(callback, 3)); // 27

/* 2: Map fonksiyonu
    Kullanıldığı dizinin her bir elemanı için belirtilen fonksiyonu çalıştırarak yeni bir dizi üretir.
*/
let square = numbers.map((n) => {
    return n * n;
});

// console.log(square); // [1, 4, 9, 16, 25]


/* 3: Filter fonksiyonu
*   Kullanılan dizideki filtrelenen elemanlardan yeni bir dizi oluşturur.
*/
let filteredProducts = products.filter((product) => {
    return product.price > 900;
});

// console.log(filteredProducts); // [{ name: 'Laptop', price: 1000 }, { name: 'PC', price: 1500 }]

/* 4: Reduce fonksiyonu
*    Bir diziyi tek bir değere indirgemeyi sağlar. 
*    Bir callback fonksiyonu ile isteğe bağlı bir başlangıç değeri alır.
*    Callback fonksiyonu ise bir accumulator(biriktirici) ve dizinin mevcut elemanını alır.
*/
let reducedNumbers = numbers.reduce((acc, number,) => acc * number, 20);
// console.log(reducedNumbers); // 20 * 1 * 2 * 3 * 4 * 5 = 2400
let reducedProducts = products.reduce((acc, product) => acc + product.price, 0);
// console.log(reducedProducts); // 3750


/* 5: Foreach fonksiyonu
*   Yapmak istenilen işlemi dizinin her bir elemanı için uygular. Bir callback fonksiyonu alır.
*/
// numbers.forEach((n) => { console.log(n * 2) }); // 2 4 6 8 10


/* 6: Every fonksiyonu
*   Dizideki tüm elemanlar için belirtilen koşulu sağlayıp sağlamadığını kontrol eder.
*   Eğer tüm elemanlar koşulu sağlarsa true, aksi halde false döner.
*/
let areAllProductsObjects = products.every((product) => typeof product === 'object');
// console.log(areAllProductsObjects); // true


/* 7: Some fonksiyonu
*   Dizideki en az bir elemanın belirtilen koşulu sağlayıp sağlamadığını kontrol eder.
*   Eğer en az bir eleman koşulu sağlarsa true, aksi halde false döner.
*/
let areSomeProductsExpensive = products.some((product) => product.price > 1000);
// console.log(areSomeProductsExpensive); // true


/* 8: Find fonksiyonu
*   Dizideki belirtilen koşulu sağlayan ilk elemanı döner.
*/
let firstEvenNumber = numbers.find((n) => n % 2 === 0);
// console.log(firstEvenNumber); // 2 


/* 9: FindIndex fonksiyonu
*   Dizideki belirtilen koşulu sağlayan ilk elemanın indexini döner.
*/
let indexOfFirstEvenNumber = numbers.find((n) => n % 2 === 0);
// console.log(indexOfFirstEvenNumber); // 1


/* 10: Sort fonksiyonu
*   Diziyi belirtilen koşula göre sıralar. Varsayılan olarak sıraladığı elemanları string 
*   olarak sıralar.  
*   !ÖNEMLİ!: Bu işlemi yaparken orijinal diziyi değiştirir!
*   Sayıları sıralamak için bir callback fonksiyonu kullanılmalıdır. sort((a, b) => a - b) gibi.
*/
const names = ["Fatih", "Yusuf", "Burak", "Mustafa", "Ahmet"];
let sortedNames = names.sort();
// console.log(sortedNames); // ["Ahmet", "Burak", "Fatih", "Mustafa", "Yusuf"]

let sortedNames2 = names.sort((a, b) => b.localeCompare(a)); // Z'den A'ya sıralama
// console.log(sortedNames2); // ["Yusuf", "Mustafa", "Fatih", "Burak", "Ahmet"]

const numbers2 = [3, 5, 13, 1, 4, 2, 6];
let sortedNumbers = numbers2.sort((a, b) => a - b);
// console.log(sortedNumbers); // [1, 2, 3, 4, 5, 6, 13]


/* 11: Includes fonksiyonu
*  Dizide belirtilen elemanın olup olmadığını kontrol eder.
*  Eğer eleman dizide varsa true, aksi halde false döner.
*  String dizilerde, eşleşmenin bir bütün olarak sağlanması gerekir.
*  Örneğin 'Mehmet' elemanı olan bir dizide, 'Meh' ararsak false döner.
*  Ancak stringin kendisinde 'Meh' aramasını yaparsak true döner.
*
*  array.includes(valueToFind, fromIndex)
*  İlk parametre: Aranacak eleman
*  İkinci parametre: Aramaya başlanacak index
*/
let isThereThree = numbers.includes(3);
// console.log(isThereThree); // true


/* 12: Concat fonksiyonu
*  Dizileri birleştirir ve yeni bir dizi döner.
*/
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
let newArr = arr1.concat(arr2, 'g', 'h');
// console.log(newArr); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

/* 13: Slice fonksiyonu
*   Diziyi belirtilen indexler arasında ayırır ve yeni bir dizi döner.
*/
let slicedArr = numbers.slice(2, 5);
console.log(slicedArr); // [3, 4, 5]

/* 14: Splice fonksiyonu
*   Diziye hem eleman eklemek için hem de eleman silmek için kullanılır. 
*   Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise 
*   kaç elemanın silineceğini belirtir.
*   arr.splice(2, 1) : 2. indexden başlayarak 1 eleman siler.
*/
const months = ['Ocak', 'Mart', 'Nisan', 'Temmuz'];
months.splice(1, 0, 'Şubat');
// 1. indexe ekler 
console.log(months); // ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'Mayıs');
// 4. indexe ekler ve temmuz elemenını siler.
console.log(months); // ["Jan", "Feb", "March", "April", "May"]



/* 15: setInterval fonksiyonu
* 
*/


/* 16: setTimeout fonksiyonu
* 
*/





