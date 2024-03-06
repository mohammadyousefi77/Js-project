
// // // // // // // // // // // // // // // var num1=prompt("عدد اول را  وارد کنید  ");
// // // // // // // // // // // // // // // var num2=prompt("عدد دوم را  وارد کنید  ");

// // // // // // // // // // // // // // // var number1=+num1;
// // // // // // // // // // // // // // // var number2=+num2;

// // // // // // // // // // // // // // // var num=prompt("enter your number");
// // // // // // // // // // // // // // // if(num >15){
// // // // // // // // // // // // // // //     alert("hello baby");
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // var massage=(num >15)? 'helo baby':'by baby';

// // // // // // // // // // // // // // // alert(massage);

// // // // // // // // // // // // // // //  var massage=(num <15) ? 'more':
// // // // // // // // // // // // // // //  (num <18)? 'More a few':
// // // // // // // // // // // // // // //  (num <22)? 'right':'by';

// // // // // // // // // // // // // // //  alert(massage);

// // // // // // // // // // // // // // // let result;

// // // // // // // // // // // // // // // if (a + b < 4) {
// // // // // // // // // // // // // // //   result = 'Below';
// // // // // // // // // // // // // // // } else {
// // // // // // // // // // // // // // //   result = 'Over';
// // // // // // // // // // // // // // // }


// // // // // // // // // // // // // // // var a=Number(prompt("num 1"));
// // // // // // // // // // // // // // // var b=Number(prompt("num 2"));
 

// // // // // // // // // // // // // // //  (a+b <4)? alert ('Below') : alert('over');

// // // // // // // // // // // // // // //  alert
// // // // // // // // // // // // // // // var result=(a+b < 4)? 'Below' : 'over';

// // // // // // // // // // // // // // // alert(result);

// // // // // // // // // // // // // // // let result = (a + b < 4) ? 'Below' : 'Over';
// // // // // // // // // // // // // // // // var result=a+b;

// // // // // // // // // // // // // // // alert(result);


// // // // // // // // // // // // // // let a = +prompt('a?', '');

// // // // // // // // // // // // // // // if (a == 0) {
// // // // // // // // // // // // // // //   alert( 0 );
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // if (a == 1) {
// // // // // // // // // // // // // // //   alert( 1 );
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // if (a == 2 || a == 3) {
// // // // // // // // // // // // // // //   alert( '2,3' );
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // switch(a){
// // // // // // // // // // // // // // case 0:
// // // // // // // // // // // // // //     alert("0");
// // // // // // // // // // // // // //     break;

// // // // // // // // // // // // // //     case 1:
// // // // // // // // // // // // // //         alert( 1 );
// // // // // // // // // // // // // //         break;
// // // // // // // // // // // // // // //group case 
// // // // // // // // // // // // // //         case 2:
// // // // // // // // // // // // // //             case 3:
// // // // // // // // // // // // // //             alert( '2,3' );
// // // // // // // // // // // // // //             break;

// // // // // // // // // // // // // //             default:
// // // // // // // // // // // // // //                 alert("unknown number");
                
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // function calage(age){
// // // // // // // // // // // // // var result =(age >=18)? true:false;

// // // // // // // // // // // // // return result;
// // // // // // // // // // // // // }

// // // // // // // // // // // // // var age=calage(+prompt("enter age"));

// // // // // // // // // // // // //  (age ===true)?alert("yes you can go "):alert("you dont have permission");


// // // // // // // // // // // // // function check(number=10){
// // // // // // // // // // // // // (number%2==0)?alert("even"):alert("odd");
// // // // // // // // // // // // // }

// // // // // // // // // // // // // var number=prompt("enter number");

// // // // // // // // // // // // // check(+number);


// // // // // // // // // // // // // check();

// // // // // // // // // // // // // var username=prompt("user name");
// // // // // // // // // // // // // var password=prompt("password");


// // // // // // // // // // // // // console.log(text.charAt(2));

// // // // // // // // // // // // // console.log("Hello world!");

// // // // // // // // // // // // // console.log(text.charCodeAt(4));

// // // // // // // // // // // // // console.log(text.search(""))


// // // // // // // // // // // // // if(username.toLowerCase()=="ali"){
// // // // // // // // // // // // // console.log("login");
// // // // // // // // // // // // // }
// // // // // // // // // // // // // else{
// // // // // // // // // // // // //     console.log("you dont have permition");
// // // // // // // // // // // // // }
// // // // // // // // // // // // var pr1=0;
// // // // // // // // // // // // var num=0;
// // // // // // // // // // // // for(var i=1 ;i<=5 ;i++){
// // // // // // // // // // // // var  pr=+prompt("price of prudoct " + i);
// // // // // // // // // // // //  num++
// // // // // // // // // // // // pr1=pr1+pr;
// // // // // // // // // // // // }

// // // // // // // // // // // // console.log("the sum of all prudoct is :"+pr1);
// // // // // // // // // // // // console.log("the average of all prudoct is :"+pr1/num);
// // // // // // // // // //  var usernum=+prompt("enter your number");
// // // // // // // // // //  var sum=0;
// // // // // // // // // // //  for(var i=0;(usernum/10)!=0;i++){
// // // // // // // // // // //    sum=sum+(usernum%10);
// // // // // // // // // // // usernum=Math.floor(usernum/10);

// // // // // // // // // // // console.log(usernum);
// // // // // // // // // // //  }

// // // // // // // // // // //  console.log("the sum is "+sum);


// // // // // // // // // // while( usernum/10 !=0){
// // // // // // // // // //     sum=sum+(usernum%10);
// // // // // // // // // //     usernum=Math.floor(usernum/10);

// // // // // // // // // //     console.log(usernum);

// // // // // // // // // // }
// // // // // // // // // // console.log("the sum is "+sum);

// // // // // // // // // // var i=0;

// // // // // // // // // // do{
// // // // // // // // // // alert(i);
// // // // // // // // // // i++;
// // // // // // // // // // }while(i<5);

// // // // // // // // // var num1=+prompt("enter num1");

// // // // // // // // // var num2=+prompt("enter num2");
// // // // // // // // // var result=1;
// // // // // // // // // // for(var i=1; i<=num2;i++){

// // // // // // // // // // result=result*num1;

// // // // // // // // // // }

// // // // // // // // // // console.log(num1 +"power of"+num2 +"="+result);

// // // // // // // // // // var i=1;
// // // // // // // // // // while(i<=num2){
// // // // // // // // // //     result=result*num1;

// // // // // // // // // //     i++;
// // // // // // // // // // }


// // // // // // // // // // console.log(num1 +"power of"+num2 +"="+result);
// // // // // // // // // var i=1
// // // // // // // // // do{
// // // // // // // // //     result=result*num1;

// // // // // // // // //     i++;
// // // // // // // // // }
// // // // // // // // // while(i<=num2);

// // // // // // // // // console.log(num1 +"power of"+num2 +"="+result);

// // // // // // // // var tedad=+prompt("enter  count of number");
// // // // // // // // var arr=[];
// // // // // // // // var sum=0;

// // // // // // // // for(var i=0;i<tedad;i++){
  
// // // // // // // // arr[i]=+prompt(`enter number of + ${i+1}` );
// // // // // // // // sum+=arr[i];


// // // // // // // // }
// // // // // // // //  var average=sum/arr.length;

// // // // // // // // console.log(arr);
// // // // // // // // console.log(average);


// // // // // // // // var arr=[
// // // // // // // //     [1,2,3],
// // // // // // // //     [4,5,6],
// // // // // // // //     [7,8,9]

// // // // // // // // ];


// // // // // // // // var object={
// // // // // // // // id:1,
// // // // // // // // name:"mohammad",
// // // // // // // // family:"yousefi"

// // // // // // // // }


// // // // // // // // var object={
// // // // // // // // id:[
// // // // // // // //     [1,2,3],
// // // // // // // //     [4,5,6]
// // // // // // // // ],
// // // // // // // // name:["ali","mohammad","reza"],
// // // // // // // // family:["yousefi","resaee","mohammadi"]


// // // // // // // // }

// // // // // // // // var object={
// // // // // // // //     person1:{
// // // // // // // //         id:1,
// // // // // // // //         name:"moahammad",
// // // // // // // //         family:"yousefi"
// // // // // // // //     },
// // // // // // // //     person2:{
// // // // // // // //         id:2,
// // // // // // // //         name:"moahammad-amin",
// // // // // // // //         family:"rad"
// // // // // // // //     },
    

    
// // // // // // // //     }
// // // // // // // // console.log(object.person2.family);

// // // // // // // // var array=[
// // // // // // // // {person1:{id:1,
// // // // // // // //     name:"mohammad",
// // // // // // // //     family:"yousefi"},
// // // // // // // // person2:{id:2,
// // // // // // // // name:"mohammad",
// // // // // // // // family:"yousefi"}
// // // // // // // // },
// // // // // // // // [1,2,3],
// // // // // // // // [[1,2,3],
// // // // // // // //   [4,5,[1,2,3]],
// // // // // // // // [7,8,9]]

// // // // // // // // ,

// // // // // // // // ];
 
// // // // // // // // console.log(array[2][1][2][2])
// // // // // // // // array.push(4)
// // // // // // // // console.log(array)

// // // // // // // // var obj={id:1,
// // // // // // // // name:"mohammad",
// // // // // // // // family:"yousefi"
// // // // // // // // };
// // // // // // // // var arr=[];

// // // // // // // // arr.push(obj);
// // // // // // // // arr.push(obj);
// // // // // // // // arr.push(obj);
// // // // // // // // console.log(arr)



// // // // // // // var arr=[
// // // // // // //     {
// // // // // // //         name:2,
// // // // // // //         family:"moradi",
// // // // // // //         age:20,
// // // // // // //         email:"rr@gmail.com"
// // // // // // //     }
// // // // // // //     ,
// // // // // // //     {
// // // // // // //         name:2,
// // // // // // //         family:"mohamdi",
// // // // // // //         age:25,
// // // // // // //         email:"mm@gmail.com"
// // // // // // //     }
// // // // // // //     ,
// // // // // // //     {
// // // // // // //         name:5,
// // // // // // //         family:"meysam",
// // // // // // //         age:30,
// // // // // // //         email:"nn@gmail.com"
// // // // // // //     }

// // // // // // // ];
// // // // // // // var name=prompt("enter your name");

// // // // // // // var fname=prompt("enter your f-name");
// // // // // // // var age=+prompt("enter your age");
// // // // // // // var email=prompt("enter your email"); 

// // // // // // // if(name.length<3 || name.length>7 ){
// // // // // // //     alert("name is small");
// // // // // // // }else if(fname.length<5 || fname.length>15){
// // // // // // // alert ("family length is wrong");
// // // // // // // }
// // // // // // // else if(isNaN(age) || age.length>2){
// // // // // // // alert("enter number");
// // // // // // // }
// // // // // // // else{
// // // // // // //     var person={
// // // // // // //         name:name,
// // // // // // //         family:fname,
// // // // // // //         age:age,
// // // // // // //         email:email
    
    
// // // // // // //     };
// // // // // // //     arr.push(person);
    
// // // // // // // }




// // // // // // // console.log(arr)

// // // // // // // var arr=[1,2,3,4,5];

// // // // // // // arr.forEach(function(user){
// // // // // // //     console.log(user);
// // // // // // // });

// // // // // // var person=[
// // // // // //     {
// // // // // //         id:1,
// // // // // //         name:"mohammad",
// // // // // //         family:"yousefi"
// // // // // //     }
// // // // // //     ,
// // // // // //     {
// // // // // //         id:2,
// // // // // //         name:"ali",
// // // // // //         family:"yousefi"
// // // // // //     }
// // // // // //     ,
// // // // // //     {
// // // // // //         id:3,
// // // // // //         name:"arghavan",
// // // // // //         family:"yousefi"
// // // // // //     }

// // // // // // ]

// // // // // // person.forEach(function(user){
// // // // // //     console.log(user);
// // // // // // });
// // // // // //  var username=prompt('enter username');
// // // // // // var number=[
// // // // // // "ali",
// // // // // // "mohammad",
// // // // // // "reza",
// // // // // // "fatemeh"

// // // // // // ]

// // // // // // if(number.includes(username.toLowerCase())){
// // // // // //     console.log("wellcome");
// // // // // // }
// // // // // // else{
// // // // // //     console.log("sorry");
// // // // // // }
// // // // // var arr=[

// // // // //     {
// // // // //         id:1,
// // // // //         name:"ali"
// // // // //     } ,
// // // // //     {
// // // // //         id:2,
// // // // //         name:"ali"
// // // // //     }
// // // // // ]


// // // // //  var test=arr.some(function(a){
// // // // //     console.log(a);
// // // // //   return a.name=="ali"
// // // // // })

// // // // // console.log(test);

// // // // var db=[

// // // //     {
// // // //         id:1,
// // // //         name:"A",
// // // //         price:1000
// // // //     },
// // // //     {
// // // //         id:2,
// // // //         name:"B",
// // // //         price:1000
// // // //     },
// // // //     {
// // // //         id:3,
// // // //         name:"C",
// // // //         price:1000
// // // //     },
// // // //     {
// // // //         id:4,
// // // //         name:"D",
// // // //         price:1000
// // // //     },
// // // //     {
// // // //         id:5,
// // // //         name:"E",
// // // //         price:1000
// // // //     },
// // // //     {
// // // //         id:6,
// // // //         name:"F",
// // // //         price:1000
// // // //     }
// // // // ]

// // // // var customer=[]
// // // // var kala=prompt("enter kala name");
// // // // // db.forEach(function(item){
// // // // //     var kala=prompt("enter kala name");
// // // // // if(item.name==kala){
// // // // // customer.push(kala);
// // // // // }
// // // // // else{
// // // // //     console.log("اتمام موجودی");
// // // // // }
// // // // // })
// // // // var reqest;
// // // // if(db.some(function (params) {
// // // //     if(params.name===kala){
// // // // reqest=params;
// // // // return true;
// // // //     }
    
// // // // })==true){
// // // //     var newre={
// // // //         id:1,
// // // //         name:reqest.name,
// // // //         price:reqest.price

// // // //     }

// // // //     customer.push(newre);
// // // //     console.log("کالا موجود است");
// // // // // console.log(newpr);
// // // // }
// // // // else{
// // // //     console.log("no mojod")
// // // // }

// // // //  console.log(customer);

// // // var person=[15,12,15,14,13]

// // // var result=person.every(function(t){
// // //     console.log(t)
// // //    return t>12
// // // })
// // // console.log(result);

// // var group=[
// //     {
// //         id:1,
// //         name:"ali",
// //         age:18
// //     },
// //     {
// //         id:2,
// //         name:"ali",
// //         age:19
// //     },
// //     {
// //         id:1,
// //         name:"ali",
// //         age:19
// //     },
// //     {
// //         id:1,
// //         name:"ali",
// //         age:17
// //     },
// //     {
// //         id:1,
// //         name:"ali",
// //         age:20
// //     },
// //     {
// //         id:1,
// //         name:"ali",
// //         age:15
// //     },
// // ]
 
// // // var person;
// // // group.forEach( function(item) {
// // //     person=item;
// // //     console.log(person);
// // // });
// //  var t=group.every(function(item){

// //  console.log(item);
// //  return item.age>=18;
// // })
// // console.log(t +"   u can not login");

// // var number=[1,2,3,5,4,5,6,8]

// //  var u=number.splice(2,3,1);
// // console.log(u);
// // console.log(number)

// var person=["ali" , "reza", "mohammad","arkaman"]

// var index=person.findIndex(function(item){
//     return  item=="arkaman"
// })

// console .log(index);

var product=[
    {
        id:1,
        name:"A",
        price:1000
    },
    {
        id:2,
        name:"B",
        price:2000
    },
    {
        id:3,
        name:"C",
        price:1000
    },
    {
        id:4,
        name:"D",
        price:1000
    },
    {
        id:5,
        name:"E",
        price:1000
    },
]

var select=[
    {
        id:1,
        name:"A",
        price:1000
    },
    {
        id:2,
        name:"B",
        price:2000
    },
    {
        id:3,
        name:"C",
        price:1000
    }
    ,
    "ali"

]

var kala;






 var input=+prompt("یک از از گزینه های زیر را انتخاب کنید , 1 =حدف کالا , 2= اضافه کردن کالا");


 function check(input){
    var isdb=product.some(function(item){

        return item.name==kala;
    });
    if(isdb==true){

   
        switch(input){
            case 1:
               var isslect=select.some(function(item){
                   edit=item;
                   return item.name==kala;
               
               })
           if(isslect==true){
           var deletkala=select.findIndex(function(item){
           
           
           return  item.name==kala
           
           })
           
           select.splice(deletkala,1);
           console.log(select);
           }
           else{
               alert("این کالا در سبد خرید شما نیست");
           }
            
            break;
              case 2:
               
           var item={
               id:select.length+1,
               name:kala,
               price:5000
           }
           select.push(item);
           console.log(select);
              break;
           
           //    defult:
           // console.log();
               
           }

    }else{
        console.log("موجودی این کالا  در انبار تمام شده");
    }
}


 
function option(){
 var edit;
    kala=prompt("نام کالا را وارد کنید");
    check(input)
    
}





option();

// var y;
// var t=select.findIndex(function(item){
 

//  return item.name=="B"
// })

// console.log(t)