function insertFunc(){

    


   let fname = document.getElementById('name').value;
   let email = document.getElementById('emails').value;
   let pass = document.getElementById('pass').value;
   let re_pass = document.getElementById('re-pass').value;
   let mobilenumber = document.getElementById('mobilenumber').value;
   let dob = document.getElementById('dob').value;
    let confirmPassword ="";
    if(pass==re_pass){
        confirmPassword=pass;

        if (fname == "" || fname == null) {
            alert("Name must be filled out");
            return false;
        }  

        if (email == "" || email == null) {
            alert("E-mail must be filled out");
            return false;
        }  

        if (pass == "" || pass == null) {
            alert("Password must be filled out");
            return false;
        }  

        if (mobilenumber == "" || mobilenumber == null) {
            alert("Mobile number must be filled out");
            return false;
        }  

        if (dob == "" || dob == null) {
            alert("Date of Birth must be filled out");
            return false;
        }  

        if (checkk == "" || checkk == null) {
            alert("Date of Birth must be filled out");
            return false;
        }  


        location.href = "http://127.0.0.1:5500/instalogin.html"
        
    }else{
        alert("Password does not match");
    } 

     
    localStorage.setItem('fullname', fname);
    localStorage.setItem('email', email);
    localStorage.setItem('Password', confirmPassword);
    localStorage.setItem('mobnumber', mobilenumber);
    localStorage.setItem('dob', dob);

    
}


function profileData(){
debugger
let mobnumber= localStorage.getItem('mobnumber');
    if(mobnumber==null){
        location.href = "file:///D:/My%20Project/HTML,%20CSS%20&%20JS%20Projects/Login%20page/instalogin.html";
    }
    else{
        let getFname = localStorage.getItem('fullname');
        document.getElementById('fname').innerHTML=getFname;
    
        let maildata= localStorage.getItem('email');
        document.getElementById('mailid').innerHTML= maildata;
    
        
        document.getElementById('mobile').innerHTML= mobnumber;
    
        let dob= localStorage.getItem('dob');
        document.getElementById('dateofbirth').innerHTML= dob;
    }
   

}

function login(){
    debugger
    let a=document.getElementById('username').value;
    let b= document.getElementById('password').value;
    // let user=localStorage.getItem('email');
    let user2=localStorage.getItem("mobnumber");
    let passwordd = localStorage.getItem('Password');

    let checkusername ="";
    let checkpassword ="";


    if(a==user2){
        checkusername=a;

        if(b==passwordd){
            checkpassword=b;
            location.href = "file:///D:/My%20Project/HTML,%20CSS%20&%20JS%20Projects/Login%20page/profile.html"
        }else{
            alert("password does not match");
        } 

    }else{
        alert("username does not match");
    } 


    


    // if(b==passwordd){
    //     checkpassword=b;
    //     location.href = "http://127.0.0.1:5500/profile.html"
    // }else{
    //     alert("password does not match");
    // } 

    
        
}
function logout(){
   
    // localStorage.removeItem("fullname");
    localStorage.clear();
    location.href = "file:///D:/My%20Project/HTML,%20CSS%20&%20JS%20Projects/Login%20page/instalogin.html"


}
