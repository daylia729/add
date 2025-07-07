function sendData(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    if(num1==""||num2==""){
        alert("Please enter number");
        return;
    }
    fetch("http://127.0.0.1:5000/api/add",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            num1:parseFloat(num1),
            num2:parseFloat(num2)
        })
    })
    .then(response=>response.json())
    .then(data=>{
        if(data.result !== undefined){
            document.getElementById("result").textContent = `Result: ${data.result}`;
        }else{
            document.getElementById("result").textContent = 'Error';
        }
    })
    .catch(error=>console.log(error));
}