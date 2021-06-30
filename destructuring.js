const personInfo = {
    name: "Fuad",
    id: 27,
    address: "Chittagong",
    religion: "Islam",
    phoneNo: 18181818232,
    gfName: "Tusha"
}

const {name, id, address, phoneNo, gfName} = personInfo;

const personInfo2 = {
    pName: "Fahad",
    id: 22,
    address: "Chittagong",
    moreInfo: {
        salary: 50000,
        age: 29
    }
}

const {age, salary} = personInfo2.moreInfo;

console.log(age, salary);