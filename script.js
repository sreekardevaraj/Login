function tap() 
{
    let user = document.getElementsByTagName("input")[0].value;
    let password = document.getElementsByTagName("input")[1].value;

    if (user === "Sreekar7780" && password === "12345") 
    {
        alert("Successfully Logged in");
    } 

    else if (user === '' || password === '') 
    {
        alert("Please enter login credentials");
    }
     
    else 
    {
        alert("Failed login");
    }
}
