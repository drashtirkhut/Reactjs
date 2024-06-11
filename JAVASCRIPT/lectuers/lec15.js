// javascript array method

/*
shift
filter
map
indexof
lastindexof
slice
splice
sort
copywithin
entries()
keys()
values()



// filter method in array

// let array=["a","b","c","d","e","f","g","h","i"]

// let filter=array.filter((any)=>any=="a")

// console.log(filter);

// let arrayobject=[
//     {id:1,item:"mobile",name:"iphone13",color:"gary",prich:"89000",discount:"10%"},
//     {id:1,item:"mobile",name:"iphone13",color:"gary",prich:"89000",discount:"10%"},
//     {id:1,item:"mobile",name:"iphone14",color:"pink",prich:"89000",discount:"15%"},
//     {id:1,item:"mobile",name:"iphone14",color:"pink",prich:"89000",discount:"15%"},
//     {id:1,item:"mobile",name:"iphone15",color:"gary",prich:"89000",discount:"10%"},
//     {id:1,item:"mobile",name:"iphone15",color:"gary",prich:"89000",discount:"10%"},
//     {id:1,item:"laptop",name:"dell",color:"gary",prich:"35000",discount:"20%"},
//     {id:1,item:"laptop",name:"dell",color:"gary",prich:"35000",discount:"20%"},
//     {id:1,item:"laptop",name:"iphone",color:"black",prich:"50000",discount:"10%"},
//     {id:1,item:"laptop",name:"iphone",color:"black",prich:"50000",discount:"10%"},
//     {id:1,item:"tv",name:"mi",color:"black",prich:"25000",discount:"12%"},
//     {id:1,item:"tv",name:"mi",color:"black",prich:"25000",discount:"30%"},
//     {id:1,item:"tv",name:"mi",color:"black",prich:"25000",discount:"10%"},
// ]

// let filter1=arrayobject.filter((data)=>data.item==="tv")

// console.log(filter1);

// let filter2=arrayobject.filter((data)=>data.color==="pink")

// console.log(filter2);

// let filter3=arrayobject.filter((data)=>data.name==="iphone15")

// console.log(filter3);

/*map method in array */

// {
//     let num=[2,34,67,89,92]
//     let map=num.map((data)=>data=100)
//     console.log(map);
//}

/*indexof and lastindexof method in array */

// {
//     let array=["a","b","c","d","e","f","g","d","h",]

//     let index=array.indexOf("d",4)

//     let indexlast=array.lastIndexOf("d",6)

//     console.log(index);

//     console.log(indexlast);
// }

/*slice and splice method in array */

// {
//     let array=["a","b","c","d","e","f","g","d","h",]

//     let slice=array.slice(2)

//     let slice1=array.slice(2,5)

//     console.log(slice);

//     console.log(slice1);

//     let splice1=array.splice(2,2,"x","y",...slice.n)

//     console.log(splice1);
// }

/*sorting in array */

// let array=["a","b","c","d","e","f","g","d","h",]

// let num =[12,43,56,78,12,65,5,9]

// let sort=array.sort()

// let Num=num.sort((a,b)=>a-b)

// console.log(sort);

// console.log(Num);

/*entries(),keys(),values() method in array */

let array=["a","b","c","d","e","f","g","d","h",]

let entries=array.entries()

console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);

// let array=["a","b","c","d","e","f","g","d","h",]

// let keys=array.keys()

// console.log(keys.next().value);
// console.log(keys.next().value);
// console.log(keys.next().value);
// console.log(keys.next().value);
// console.log(keys.next().value);

// let array=["a","b","c","d","e","f","g","d","h"]

 let  values=array.values()

console.log(values.next().value);
console.log(values.next().value);
console.log(values.next().value);
console.log(values.next().value);
console.log(values.next().value);

/*copywithin method in array */

// let array=["a","b","c","d","e","f","g","d","h",]

// console.log(array);

// let copy1=array.copyWithin(3)

// console.log(copy1);

// let copy2=array.copyWithin(1,3)

// console.log(copy2);

// let copy3=array.copyWithin(1,3,5)

// console.log(copy3);