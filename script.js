const data = {
    age: 30,
    name: {
        firstName: "Vasa",
        lastName: "Voroneg"
    },
    options: {
        role: {
            isMember: true,
            isManager: true,
            isAdmin: false,
        },
        isFavorite: false,
    }
}


//=============================get document elemets
const firstNameValue = document.querySelector('.firstname-value');
firstNameValue.textContent = data.name.firstName;
const lastNameValue = document.querySelector('.lastname-value');
lastNameValue.textContent = data.name.lastName;
const ageValue = document.querySelector('.age-value');
ageValue.textContent = data.age;
const memberValue = document.querySelector('.member-value');

const managerValue = document.querySelector('.manager-value');
const adminValue = document.querySelector('.admin-value');
const favoriteValue = document.querySelector('.favorite-value');
const btnChange = document.querySelector('.btn-change');
//=============================after data
const firstNameAfter = document.querySelector('.firstname-value-after');
const lastNameAfter = document.querySelector('.lastname-value-after');
const ageAfter = document.querySelector('.age-value-after');
const memberAfter = document.querySelector('.member-value-after');
const managerAfter = document.querySelector('.manage-value-after');
const adminAfter = document.querySelector('.admin-value-after');
const favoriteAfter = document.querySelector('.favorite-value-after');

//===================================get input element
const firstNameInput = document.querySelector('.firstname-input');
const lastNameInput = document.querySelector('.lastname-input');
const ageInput = document.querySelector('.age-input');
const memberInput = document.getElementById('member');
const managerInput = document.getElementById('manager');
const adminInput = document.getElementById('admin');
const favoriteInput = document.getElementById('favorite');

//=======================================================

function changeSmile(el,bool){
     el.innerHTML = bool?"&#x1F600;":"&#x1F641;";
}
changeSmile(memberValue,data.options.role.isMember);
changeSmile(adminValue,data.options.role.isAdmin);
changeSmile(managerValue,data.options.role.isManager);
changeSmile(favoriteValue,data.options.isFavorite);


function deepCopyRecursion(inObj){
    let output, key, newValue;
    if(typeof inObj !== 'object'|| typeof inObj===null){
        return inObj;
    }
    output = Array.isArray(inObj)?[]:{};
    for(key in inObj){
        newValue = inObj[key];
        output[key]= deepCopyRecursion(newValue);
    }
    return output;
};

function setNewValue(el,value){
    el.textContent = value;
}

//===================================event listener


btnChange.addEventListener('click',(e)=>{

    e.preventDefault();

    const newData = deepCopyRecursion(data);

    const firstNameInputValue = firstNameInput.value;
    
    const lastNameInputValue = lastNameInput.value;
    
    const ageInputValue = ageInput.value;

    const memberInputValue = memberInput.checked;
    
    const managerInputValue = managerInput.checked;
    
    const adminInputValue = adminInput.checked;

    const favoriteInputValue = favoriteInput.checked;

    newData.age = ageInputValue;
    setNewValue(ageAfter, newData.age);
    newData.name.firstName = firstNameInputValue;
    setNewValue(firstNameAfter, newData.name.firstName);
    newData.name.lastName = lastNameInputValue;
    setNewValue(lastNameAfter, newData.name.lastName);
    newData.options.isMember = memberInputValue;
    changeSmile(memberAfter, newData.options.isMember);
    newData.options.isManager = managerInputValue;
    changeSmile(managerAfter, newData.options.isManager);
    newData.options.isAdmin = adminInputValue;
    changeSmile(adminAfter,newData.options.isAdmin);
    newData.isFavorite = favoriteInputValue;
    changeSmile(favoriteAfter,newData.isFavorite);    
});



