let custFullName = document.getElementById("customername");
let custEmail = document.getElementById("customeremail");
let custAddress= document.getElementById("customeraddress");
let custMobile = document.getElementById("customermobile");
let custDescription = document.getElementById("customerdescription");

let submitButtonSelector = document.getElementById("submitcustomer");


submitButtonSelector.addEventListener("click", (e) =>{
    e.preventDefault();
    storeToStorage();
})

function storeToStorage(){
    loopThroughData(pickInputValues());
    localStorage.setItem("storedata", JSON.stringify(pickInputValues()));
}

function pickInputValues(){
    const customerData = {
        name: custFullName.value,
        email: custEmail.value,
        address: custAddress.value,
        mobile: custMobile.value,
        description: custDescription.value
    }
    return customerData;
}

function loopThroughData(dataObject){
    const dataKeys = Object.keys(dataObject)
    const dataValues = Object.values(dataObject)
    for(i=0; i < dataKeys.length; i++){
        const keyName = dataKeys[i];
        const keyValue = dataValues[i]
        createCardElems(keyName, keyValue);
    }
    return dataObject
}

function createCardElems(keyName, keyValue){
    var dataLabel= document.createElement("label");
    document.querySelector("body > div:nth-child(2) > div").appendChild(dataLabel).innerText = `${keyName.charAt(0).toUpperCase() + keyName.slice(1)}:`;
    var dataInnerValue = document.createElement("p");
    document.querySelector("body > div:nth-child(2) > div").appendChild(dataInnerValue).innerText = `${keyValue}`;
}

function checkStorage(){
    if(localStorage.length !== 0){
        const parsedData = JSON.parse(window.localStorage.getItem("storedata"))
        loopThroughData(parsedData)
    }
}

checkStorage()



   