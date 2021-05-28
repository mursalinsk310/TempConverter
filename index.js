let convertTemp=()=>{
    let value=document.getElementById('temp').value;
    let unit=document.getElementById('temp_diff').value;
    let result=0;
    if(unit==='cel'){
        result=(parseInt(value)*(9/5))+32;
        document.getElementById("resultContainer").innerHTML=`${result} °Fahrenheit`;
        alert(result);
    }
    else{
        result=(parseInt(value)-32)*(5/9);
        document.getElementById("resultContainer").innerHTML=`${result} °Celcius`;
    }
}