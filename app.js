// -Create a Student object Data Structure )name,roll,age,class,gender,location,admission fees)30.Now create a console data table with.
//wellcome
/*
-Total Admissions fees
-Find All Female Students 
-Find class wise student results
-location wise student results
-find student between 10-25 age

*/

const studentData = [
    {   "id": '1',
        "name":"Md Shahinur islam",
        "roll" :"1",
        "age":"25",
        "class":"Honours 3rd",
        "gender":"male",
        "AdmissionsFee":"3000",
        "location":"Panchagarh",

    },
    {    "id": '2',
        "name":"Md Abir",
        "roll":"2",
        "gender":"male",
         "age":"26",
         "class":"inter 1st",
         "AdmissionsFee":"3500",
         "location":"Dhaka",

    },
    {    "id": '3',
        "name":"Most jannat",
        "roll":"3",
        "gender":"female",
         "age":"27",
         "class":"seven",
         "AdmissionsFee":"4000",
         "location":"Mirpur",

    },
    {    "id": '4',
        "name":"Tuktuki",
         "age":"23",
         "roll":"4",
        "gender":"female",
         "class":"ten",
         "AdmissionsFee":"2000",
         "location":"Dhanmondi",

    },
    {    "id": '5',
        "name":"Sojib",
         "age":"30",
         "roll":"5",
        "gender":"male",
         "class":"hsc",
         "AdmissionsFee":"5500",
         "location":"Jigatola",

    },
    {    "id": '6',
        "name":"Monir khan",
        "roll":"6",
         "gender":"male",
         "age":"20",
         "class":"nine",
         "AdmissionsFee":"1500",
         "location":"Rangpur",

    },
    {    "id": '7',
        "name":"Babu khan",
         "age":"19",
         "roll":"7",
        "gender":"male",
         "class":"eight",
         "AdmissionsFee":"2000",
         "location":"Dinajpur",

    },
    {    "id": '8',
        "name":"Tasnuva",
         "age":"21",
         "roll":"8",
        "gender":"female",
         "class":"inter 2nd",
         "AdmissionsFee":"1500",
         "location":"Gulshan",

    },
    {    "id": '9',
        "name":"Ripa",
         "age":"18",
         "roll":"9",
        "gender":"female",
         "class":"six",
         "AdmissionsFee":"2500",
         "location":"Khulna",

    },
    {    "id": '10',
    "name":"Md Abdunnur islam",
     "age":"17",
     "roll":"10",
    "gender":"male",
     "class":"eight",
     "AdmissionsFee":"2000",
     "location":"Badda",

},
    
]
//Total Admissions fees
/*
let total =0;
studentData.map((data,index) => {

    console.log(`
       Students Admissions fees: ${data.AdmissionsFee}
    `);
    total += +data.AdmissionsFee;

});
console.log(`Total Admissions fees ${total}`);
*/

//Find All Female Students 
/*
studentData.map((data,i) => {
    if (data.gender=='female'  ) {
        console.log(`Female student ${data.id} ${data.name}`);
    }
});
*/
//-Find class wise student results
// studentData.map((data,i) => {
//  if (data.class=== 'eight') {
//    console.log(`
//    student name: ${data.name}
//    Student class ${data.class}
//    student roll ${data.roll}

//    `)
//  }
// });
// -location wise student results

// studentData.map((data,i) => {
//     if (data.location==='Panchagarh') {
//         console.log(`
//             student location is ${data.location}
//             student name: ${data.name}
//             Student class ${data.class}
//             student roll ${data.roll}
//         `);
//     }
// })
//-find student between 10-25 age
studentData.map((data,i) => {
    if (data.age >= 10 && data.age <25) {
        console.log(`
             student name: ${data.name}
             student age is ${data.age} 
            Student class ${data.class}
            student roll ${data.roll}
        `);
    }
})