// level {3}
//1.
let obj = ​
{
    name: "ELIE",
    job: "INSTRUCTOR",
    workDetails: {
        type: "PASRT TimeTIME",
        hours: "40 HOURS"
    },
    educationQualifications: [
        {
            name: "FULL STACK",
            type: "CERTIFICATION"
        },
        {
            name: "JAVASCRIPT",
            type: "CERTIFICATION"
        }
    ]
}
const upperCase = (obj) =>{
    for (const [key, value] of Object.entries(obj)) {
        if(typeof value == "string" ){
            obj[key] = value.toString().toUpperCase();
        }else{
            if(Array.isArray(value)){
                value.forEach((elm,ind)=>{
                    upperCase(elm);
                })
            }else{
                upperCase(value)
            }
        }
    }

    return obj
}


//2.
let string = "a:2,b:3,c:4,a:5,b:6";

const stringToObj = (string) =>{
    let stringSplit = string.split(",");
    let newObj = {};
    stringSplit.forEach((elm,ind) =>{
        let split = elm.split(":");
        newObj[split[0]] = newObj[split[0]] ? parseInt(newObj[split[0]]) + parseInt(split[1]) : parseInt(split[1]);
    });

    return newObj;
}

console.log(stringToObj(string))