//    დავალება 2
//   მოცემულია რიცხვების ერეი [ 4, 5, 11, 2, 9, 99, 1092, 1 და ა.შ]; გევალებათ დაალაგოთ ამ მასივის ელემენტები ზრდადობით (დაგჭირდებათ ახალი ფუნქციის მოძიება)

const arr=[4, 5, 11, 2, 9, 99, 1092, 1];

arr.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(arr);


// 3) 2) - ე მაგალითში მიღებული ერეის გადაურეთ filter ფუნქციით და დააბრუნეთ მხოლოდ ლუწი ელემენტები.
// 4) 3) - ე მაგალითში მიღებულ ერეის გადაურეთ reduce ფუნქციით და დაითვალეთ ელემენტების ერთმანეთზე ნამრავლი
const newArray=arr.filter((value)=>{
    return value % 2===0; 
});

console.log(newArray);
const newArrayAgain=newArray.reduce(
    (item, newArray)=> item *newArray
)
console.log(newArrayAgain);


// 5) მოცემულია სტრინგების მასივი, სადაც ყველა სიმბოლო დაწერილია აფერქეისით [ 'HELLO', 'WORLD', 'JS', 'GEOLAB' და ა.შ.], თქვენ გევალებათ აღნიშნული ერეიდან მიიღოთ ერთი სტრიქონი
// capitalCase (ყოველი სიტყვის პირველი სიმბოლო იყოს აფერქეისი, დანარჩენი ლოვერქეისი) ით დაწერილი. შედეგი იქნება შემდეგი Hello World Js Geolab .....


 const names=['HELLO', 'WORLD', 'JS', 'GEOLAB'];


const capitalCase = names.map(name => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase());

console.log(capitalCase);




