/* 
   function saveData(){
    let name,email,password;
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;

    let user_records=new Array();

    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem(users)):[]
    user_records.push({
        "name":name,
        "email":email,
        "password":password
      
    })
    localStorage.setItem("users",JSON.stringify(user_records));
  

    

 

} */