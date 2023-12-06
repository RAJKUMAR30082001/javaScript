const details= new Object()//creating object

let std=['std1','std2','std3',"std4"]
let username=['raj','kumar','kp','raina']
let password=['1234','56837','3874','2345']

for (let i=0;i<username.length;i++){
    details[std[i]]=new Object()
    details[std[i]].username=username[i]
    details[std[i]].password=password[i]

}
console.log(details)// accessing

delete details.std1.password// password field deletion
console.log(details)

const objToJson=JSON.stringify(details)//object to json
console.log(objToJson)

const jsonToObj=JSON.parse(objToJson)// json to object
console.log(jsonToObj)
