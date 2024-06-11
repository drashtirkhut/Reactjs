// javascript Promise and callback hell

// callback function

// const stock=(process)=>{
//     setTimeout(()=>{console.log('stock is here')
//     process()
// },3000)
// }

// const production=()=>{
//     console.log('production was started');
// }

// stock(production)

// callback hell

// recipe in icecream

/*stock*/  /*backend */

// let process={
//     stock:['stock in here'],
//     production:['production was started'],
//     fruits:['strawberry'],
//     addingridiant:['milk','suger'],
//     toppings:['chocolate','strawberrypiece' ],
//     packaging:['cone'],
//     afterpack:['serve icecream']
// }

// // /*kitchen */ /*frontend */

// const stock = (flavour_name,production)=>{
//     setTimeout(()=>{
//         console.log(`${process.stock[0]}`)
//         console.log(`${flavour_name} flavour production`);
//         production()
//     },2000)
// }

// const productionprocess=()=>{
//     setTimeout(()=>{
//         console.log(`${process.production}`)
//         setTimeout(()=>{
//             console.log(`production with added some ingrediant was name called ${process.addingridiant[0]} and ${process.addingridiant[1]}`)
//             setTimeout(()=>{
//                 console.log(`add toppings was ${process.toppings[0]} and ${process.toppings[1]}`)
//                 setTimeout(() => {
//                     console.log(`icecream was package with ${process.packaging[0]}`)
//                     setTimeout(()=>{
//                         console.log(`after packaging was ${process.afterpack[0]}`);
//                     },5000)
//                 },2000)    
//             },3000)
//         },2000)
//     },1000)
// }

// stock(process.fruits[0],productionprocess)

// class sum{
//     constructor(){
//         this.name="a"
//         this.lastname="b"
//     }
// }

// let sums=new sum()
// console.log(sum.name);
// console.log(sums.lastname);

// callback hell in promise

let process={
    stock:['stock in here'],
    production:['production was started'],
    fruit:['strawberry'],
    addingridiant:['milk','suger'],
    toppings:['chocolate','strawberrypiece' ],
    packaging:['cone'],
    afterpack:['serve icecream']
}

let store_open=true

let order = (time ,work)=>{
    return new Promise(function(resolve,reject){
        if(store_open==true){
            setTimeout(()=>{
                resolve(work())
            },time)
        }else{
            reject('store has been closed')
        }
    })
}

order (2000,()=>{
    console.log(`${process.stock[0]}`);
    console.log(`${process.fruit[0]} flaveour production`);
})
.then(()=>{
    return order(2000,()=>{
        console.log(`${process.production[0]}`);
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log(`production with added some ingrediant was name called ${process.addingridiant[0]} and ${process.addingridiant[1]}`);
    })
})
.then(()=>{
    return order(3000,()=>{
        console.log(`add toppings was ${process.toppings[0]} and ${process.toppings[1]}`)
    })
})
.then(()=>{
    return order(4000,()=>{
        console.log(`icecream was package with ${process.packaging[0]}`)
    })
})
.then(()=>{
    return order(5000,()=>{
        console.log(`after packaging was ${process.afterpack[0]}`);
    })
})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('production completed');
})