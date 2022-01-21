// console.log('Message from node.js')
// console.log('Muhammad saad')
// console.log('M saad')
// console.log('171205')

// var data = {                      //Object           
//     name: "shahid",
//     age: 21,
//     gpa: 3.2,
//     isStudent: true,
//     marks: [30,40,50,60,0],
//     subject: {
//         cpp: 3.2,
//         java: 4.0,
//         python: 2.3
//     },
// }
 


// console.log(data.name)
// console.log(data.age)
// console.log(data.gpa)
// console.log(data.isStudent)
// console.log(data.marks[1])
// console.log(data.subject.python)

//Array
var data = [{                                 
    name: "shahid",
    age: 20,
    gpa: 3.2,
     isStudent: false,
    marks: [30,40,50,60,10],
    subject: {
        cpp: 3.2,
        java: 4.0,
        pythone: 2.3
    },
    sentence: "this is sentence 1. Reiciendis quidem dolores perferendis facere quia vel modi iste nihil natus itaque. ",
    product:  "Products 1,100,2,08/07/21,08/07/20",
},

{                               
    name: "Saad",
    age: 23,
    gpa: 3.2,
    isStudent: true,
    marks: [35,47,56,60,20],
    subject: {
        cpp: 3.2,
        java: 3.0,
        python:3.3
    },
    sentence: "sentence 2 officia praesentium a omnis. Nihil ipsam quo eum quaerat dolorum.",
    product: "Products 2,200,3,09/07/21,09/07/23",
},
{                              
    name: "Zeeshan",
    age: 24,
    gpa: 3.2,
    isStudent: true,
    marks: [40,50,70,60,20],
    subject: {
        cpp: 3.2,
        java: 4.0,
        python: 2.3
    },
    sentence: "this is sentence 3 Nihil ipsam quo eum.",
    product: "Products 3,300,4,10/07/21,10/07/23"
}
]


// console.log(data[0].name)
// console.log(data[0].age)

// console.log(data[1].name)
// console.log(data[1].age)
// console.log(data[1].marks[0])
// console.log(data[1].subject.python)
//  for(i=0; i<data.length; i++)
//  {
//     if(data[i].isStudent){
//         console.log('Name:  '+data[i].name)
//         console.log('Age:  '+data[i].age)
//         console.log('=====Marks======')
//         for(m=0; m<data[i].marks.length; m++)
       
//         {
//             console.log(data[i].marks[m])
//         } 

        
    //     keys = Object.keys(data[i].subject)
    // // console.log(keys)
    // for(k=0 ; k< keys.length; k++){
    // if(keys[k] == 'python'){
    // console.log(keys[k] +" "+ data[i].subject['python'])  //can write.....data[i].subject.pythone
    // }   
    // }    
// } 

// sentences = 0;
// words = 0;
// spaces = 0;
// vowel = 0;

// for(i = 0; i<data.length; i++)
// {
//     for(c=0; c<data[i].sentence.length; c++){
//         // console.log(data[i].sentence.charAt(c))
    
//             switch(data[i].sentence.charAt(c))
//             {
//                     case ' ':
//                     spaces++;
//                     break;
//                     case '.':
//                     case '!':
//                         sentences++;
//                         break;
//                          case 'a':
//                     case 'A':
//                     case 'e':
//                     case 'E':
//                     case 'i':
//                     case 'I':
//                     case 'o':
//                     case 'O':
//                     case 'u':
//                     case 'U':
//                     case 's':
//                     case 'S':
//                         vowel++;
//                         break;
                   
//             }        
//     }

//     console.log("sentence        : "+ data[i].sentence)
//     console.log("sentences        : "+ sentences)
//     console.log("sentence length : "+ data[i].sentence.length)
//     console.log("spaces          :"+ spaces)
//     console.log("words           :"+ spaces+1)
//     console.log("vowel           :"+ vowel)
//     console.log("character       :"+ (data[i].sentence.length - spaces))
//     console.log("''''''''''''''''''''''''''''''''''''''''''''")

//     sentences = 0;
//     words = 0;
//     spaces = 0;
//     vowel = 0;
//}
//  keyword = "this";

//  for(i=0; i<data.length; i++){                          //find keyword using if condition
//  if(data[i].sentence.indexOf(keyword) == -1){
//      console.log("not found")
//  }
//  else{
//      console.log("found")
//  }
// }
// console.log("''''''''''''''''''''''''''''''")
// for(i=0; i<data.length; i++){                             //find keyword using switch
//     switch(data[i].sentence.indexOf(keyword))
// {
//     case -1:
//         console.log("not found")
//         break;
//         default:
//             console.log("found")
// }
// }

var price = 0,difference;                  //display product and price and price addition
for(i=0; i<data.length; i++){

    arr = data[i].product.split(",");
    difference = Date.parse(arr[4]) - Date.now();
    if(difference < 0)
      console.log(arr[0] + " is Expired")
    else
      console.log(arr[0] + " is not Expired")

// console.log("product name = " +arr[0])
// console.log("price = " +arr[1])
// price+= Number(arr[1])
}
// console.log("total price = "+ price)

// console.log(arr[4])
// d = arr[4]

//console.log(data[0].marks)


for(i=0; i<data.length; i++){
    for(j=0; j<data[i].marks.length; j++){
       console.log(data[i].marks[j])
    }
    console.log("'''''''''''''''''''''''''''''''''")
}

var array= [2,3,4,10,4,5]

function arrsquare(n)
{
   
    for(var i=0; i<array.length; i++)
    {
        
        n[i] = n[i]*n[i];
    }
}
console.log(array)
arrsquare(array);
console.log(array)
console.log("'''''''''''''''''''''''''''''''")

arrsquareindata()
{
    for(var i=0; i<data.length; i++)
    {
        for(var j=0; j<marks.length; j++)
        {
            n[j]=n[j]*n[j];
        }
    }
}
console.log(data[0].marks)
console.log(data[1].marks)
console.log(data[2].marks)
//  const a = 2, b=5;
// const sum = (a,b) => (a+b);
// console.log(sum(5,4))

//  const even_odd = (a) => (a%2) == 0?  "even" : "odd";
//  console.log(even_odd(b))


//  function hello(name)
//  {
//      if(name)
//      {
//          console.log("Hello "+ name)
//      }
//      else{
//          console.log("Hello "+ "guest")
//      }
//  }

// hello("saad")
// hello()

// // const Name =(a) => (s_name) == " "? "" 

// function book()
// {
//  return{
//      B_name: 'java',
//      author: 'saad',
//  }
// }

// console.log(book())

// function book(b_name, author)
// {
//     return{
//         b_name ,
//         author
//     }
// }
// console.log(book("java", "saad"))