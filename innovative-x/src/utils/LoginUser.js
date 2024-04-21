import { jwtDecode } from "jwt-decode"

let loginUser = async (e) =>{
    e.preventDefault()
    console.log("done");
    let response =await fetch("http://localhost:8000/api/token/",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'username':e.target.username.value,'password':e.target.password.value})
    })
    let data = await response.json()
    console.log('data',data);
    if(response.status === 200)
    {
        localStorage.setItem("auth-tokens",JSON.stringify(data))
        localStorage.setItem('username',jwtDecode(data.access).username)
        window.location.href = 'dashboard'
    }
    else
    {
        alert("wrong credentials")
    }
}

export default loginUser