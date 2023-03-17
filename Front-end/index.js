let xhr = new XMLHttpRequest();
xhr.open("GET","http://localhost:1500/users")
xhr.send();

xhr.onreadystatechange=()=>{
    if(xhr.readyState === 4 && xhr.status === 200){
       document.write(xhr.response);
    }
}



