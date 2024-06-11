// /* javascript object and it's method */
{
    // const obj = {id:1,firstname:"john",lastname:"doe",gender:"male",age:25}
    // const Obj = new Object()
    
    // console.log(obj);
    // console.log(Obj);
    
    // let data=obj.firstname
    
    // let data1=obj["id"]
    // console.log(data);
    // console.log(data1);
    
    // obj.address="u.s"
    
    // console.log(obj);
    
    // obj.id=2
    
    // console.log(obj);
    }
    
    /* object method:- object.assign() method */
    
    {
    //  const obj={id:1,firstname:"John",lastname:"Doe",gender:"Male",age:30};
     
    //  const num={key1:5,key2:7,key3:9};
     
    //  let assign=Object.assign(obj,num) 
    
    //  console.log(assign);
    
    //  console.log(obj);
    
    //  let assign1=Object.assign({},obj,num) 
    
    // console.log(assign1);
     }
    
    /* object method :- object. freeze() method */
     {
        // const obj={id:1,firstname:"John",lastname:"Doe",gender:"Male",age:30};
    
        // obj.id=20;
    
        // console.log(obj);
    
        // obj.id=10
    
        // console.log(obj);
    
        // obj.key1=100
    
        // console.log(obj);  
    }
    
    /* object method: object.create()method */
    {
    const obj={
        id :1 ,
        firstName : "John" ,
        lastName : "Doe" ,
        gender : "male" ,
        age:25,
        newobj:function(){
            console.log(`my first name is  ${this.firstName} and i am ${this.occupation}`);
        }
    }
    
    let newobject=Object.create(obj);
    
    newobject.occupation="devloprer"
    
    console.log(newobject.occupation);
    
    console.log(newobject.newobj());
    
    console.log(obj);
    }