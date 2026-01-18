// const tinderUser = new Object(); //constructor object
const tinderUser = {}; //singleton object
tinderUser.id = "prince123";
tinderUser.Name = "Prince";
tinderUser.EmailId = "prince@google.com";
tinderUser.isLoggedin = true;
// console.log(tinderUser);

const regularUser = {
    Email_Id: "princebisht@google.com",
    Full_Name: {
        User_Full_Name: {
            First_Name: "Prince",
            Last_Name: "Bisht"
        }
    }
}

// console.log(regularUser.Full_Name.User_Full_Name);

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 5: "d", 6: "e", 7: "f" };
// const obj3 ={obj1,obj2};//For object inside Object, not for merging
// console.log(obj3);
// const obj3 = Object.assign({}, obj1, obj2); //Not used frequently
// console.log(obj3);
const obj3 = { ...obj1, ...obj2 }; //same as array, spread method used mostly
// console.log(obj3);

// Values from Database(IMP)

const data1 = [
    {
        id: "12@prince",
        Name: "Prince",
        EmailID1: "princebisht@chatgpt.com"
    },
    {
        id: "12@prince",
        Name: "Prince",
        EmailID1: "princebisht@chatgpt.com"
    },
    {
        id: "12@prince",
        Name: "Prince",
        EmailID1: "princebisht@chatgpt.com"
    }
]
// console.log(data1[1].EmailID1);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //This function will create an array of Keys in Object
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //Entries creates Arrays in which The Keys and Values are Alternate

//To find whether the keys or values exist in the Object we use hasOwnProperty() which returns boolean
// console.log(tinderUser.hasOwnProperty(isLogged));

// *************************API Objects Application********************************

const course = {
    courseName : "javascript full course",
    coursePrice : 999,
    courseInstructor : "Prince"
}

console.log(course.courseName);

const {courseInstructor: Instructor} = course; // (IMP) this is how you destructure, widely used in react 
console.log(Instructor);
// Full form of JSON is JavaScript Object Notation
//API in the form of JSON
// {
//     "Name": "Prince",
//     "EmailId": "princebisht@google.com",
//     "Age" : 18,
//     "Location" : "Chandigarh"
// }
// This also example of api in form of JSON
// {
//   "results": [
//     {
//       "gender": "male",
//       "name": {
//         "title": "Mr",
//         "first": "Ryder",
//         "last": "Campbell"
//       },
//       "location": {
//         "street": {
//           "number": 9003,
//           "name": "Lakeview Ave"
//         },
//         "city": "Maidstone",
//         "state": "Newfoundland and Labrador",
//         "country": "Canada",
//         "postcode": "Z3E 8V7",
//         "coordinates": {
//           "latitude": "-67.2453",
//           "longitude": "-76.3840"
//         },
//         "timezone": {
//           "offset": "-6:00",
//           "description": "Central Time (US & Canada), Mexico City"
//         }
//       },
//       "email": "ryder.campbell@example.com",
//       "login": {
//         "uuid": "d23e9856-76bf-4bf8-a38d-974c48aa8d66",
//         "username": "orangeswan629",
//         "password": "colton",
//         "salt": "DyR8U7FP",
//         "md5": "6b24eda04260859beb3d0cc5a16d1831",
//         "sha1": "f4cd5806b5207e9f71bc093ad3a715fcfa7afc6a",
//         "sha256": "b5e45aed1dff4fcbd17cb3bf6aac35a1acc299dc0646ae1f6d383614dffcacc6"
//       },
//       "dob": {
//         "date": "1970-07-17T19:42:07.264Z",
//         "age": 55
//       },
//       "registered": {
//         "date": "2008-05-12T19:19:47.979Z",
//         "age": 17
//       },
//       "phone": "H56 Q58-4484",
//       "cell": "P67 U31-6491",
//       "id": {
//         "name": "SIN",
//         "value": "445543804"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "CA"
//     }
//   ],
//   "info": {
//     "seed": "23adab5dc4aa1516",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }
// This website is used to format the JSON api for understanding: https://jsonformatter.org/
// For random api : https://randomuser.me/