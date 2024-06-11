// Javascript Object Method

// isForzen Method

{
    let obj = {key1:56 , key2:65 , key3:98 , key4:100}

    obj.key1 = 20

    delete obj.key1

    Object.freeze(obj)

    obj.key1 = 40

    delete obj.key2

    let Data = Object.isFrozen(obj)

    console.log(obj);

    console.log(Data);
}

// object.seal() Method

{
    let obj = {key1:56 , key2:65 , key3:98 , key4:100}

    Object.seal(obj)

    delete obj.key1

    console.log(obj);

    let Data = Object.isSealed(obj)
    console.log(Data);

}

// hasOwn() Method

{
    
    let obj = {key1:"javascript" , key2:"html" , key3:"bootstrap" ,key4:"node" }
    
    let Data = Object.hasOwn(obj , "html")

    
    console.log(Data);
    
    // console.log(obj.hasOwnproperty("key1"));

}

// Object Enteries() Method 

{
    
let obj = {key1:"javascript" , key2:"html" , key3:"bootstrap" ,key4:"node" }

    for (const [key,value] of Object.entries(obj))
    {
        console.log(`this object key are ${key} and It's value is ${value}`);
    }

    let array = [12,24,68,15,69]

    for(const value of array)
    {
        console.log(`${value}`);
    }

}

    // Object Keys()

{
    let obj = {key1:"javascript" , key2:"html" , key3:"bootstrap" ,key4:"node" }

    let Data =Object.keys(obj)

    console.log(Data);
}

// Object.value() Method

{
    let obj = {key1:"javascript" , key2:"html" , key3:"bootstrap" ,key4:"node" }

    let Data = Object.values(obj)

    console.log(Data);
}

// Object groupBy()

{
    let Grosserys =[
        {name:"potato" , type:"vegrtable" , price:40 , quntity:25},
        {name:"ladtfingers" , type:"vegrtable" , price:20 , quntity:30},
        {name:"mango" , type:"fruit" , price:1200 , quntity:5},
        {name:"orange" , type:"fruit" , price:200 , quntity:0},
        {name:"fish" , type:"meat" , price:2000 , quntity:10}
    ]

    console.log(Grosserys);

    let Data = Object.groupBy(Grosserys , ({name}) => name)

    console.log(Data);

    let Data1 = Object.groupBy(Grosserys , ({type}) => type)

    console.log(Data1);

    function stock({quntity}){
        return quntity>10?"enough stock":"restok"
    }

    let data3=Object.groupBy(Grosserys,stock)

    console.log(data3);

}