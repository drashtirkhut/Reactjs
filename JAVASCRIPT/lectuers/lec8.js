// javascript map object method

/*
new map()
set method
get method
delete method
clear method
key method
has method
foreach method
values method
size method
entries method
 */

let object={id:1,firstname:"x",lastname:"y",age:45};

let dataobject=object.firstname

console.log(dataobject);

/*map object */

let mapobject=new Map();

//--set method--

mapobject.set("id",1)
mapobject.set("firstname","x")
mapobject.set("lastname","y")
mapobject.set("age",45)

console.log(mapobject);

//--get method--

let dataobject1=mapobject.get("firstname")
let dataobject2=mapobject.get("lastname")

console.log(dataobject1);
console.log(dataobject2);

//--delete method--

let deletemap=mapobject.delete("firstname")

console.log(mapobject);
console.log(deletemap);

//--size method--

let sizemap=mapobject.size;

console.log(sizemap);

//--values method--

let valuemap=mapobject.values();

console.log(valuemap);
console.log(valuemap.next().value);
console.log(valuemap.next().value);
console.log(valuemap.next().value);

//--key method--

//let Mapobject=new map([["id",1],["firstname","x"],["lastname","y"],["age",45]])

let keydata=mapobject.keys();

console.log(keydata);
console.log(keydata.next().value);
console.log(keydata.next().value);
console.log(keydata.next().value);
console.log(keydata.next().value);

//--has method--

//let Mapobject=new map([["id",1],["firstname","x"],["lastname","y"],["age",45]])

let hasmap=mapobject.has("firstname")

console.log(hasmap);

//--clear() method--

//let Mapobject=new map([["id",1],["firstname","x"],["lastname","y"],["age",45]])

let clearmap=mapobject.clear();

console.log(mapobject);

//--foreach method--

//let Mapobject=new map([["id",1],["firstname","x"],["lastname","y"],["age",45]]).foreach(dataprint)

//--set method--

mapobject.set("id",1)
mapobject.set("firstname","x")
mapobject.set("lastname","y")
mapobject.set("age",45)

console.log(mapobject);

function dataprint(value,key){
    console.log(`${key}=${value}`);
}

//--entries() method--

let Mapobject=new Map([["id",1],["firstname","x"],["lastname","y"],["age",45]])

//let entries=mapobject.entries()
console.log(entries);

console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);

//--javascript set object--

//--add method--

let setobject=new set();

let addsets1=setobject.add("a")
let addsets2=setobject.add("b")
let addsets3=setobject.add("c")
let addsets4=setobject.add("d")

//--entries method--

let entries= setobject.entries()
console.log(entries);

console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);

console.log(addsets1);

//--has method--

let getsets=setobject.has("a")

console.log(getsets);

//--key method--

let keysets=setobject.keys();

console.log(keysets);

console.log(keysets.next().value);
console.log(keysets.next().value);
console.log(keysets.next().value);
console.log(keysets.next().value);

//--value method--

let valuesets=setobject.values();

console.log(valuesets);

console.log(valuesets.next().value);
console.log(valuesets.next().value);
console.log(valuesets.next().value);
console.log(valuesets.next().value);

//--size method--

let sizesets=setobject.size

console.log(sizesets);

//--delete method--

let deletesets=setobject.delete("a")

console.log(setobject);

//--clear method--

let clearsets=setobject.clear()

console.log(setobject);

//--foreach method--

let foreachsets=setobject.foreach(printsets)

function printsets(value,key){
    console.log(`${value}=${key}`);
}