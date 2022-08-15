console.log("hey");
let   inputs= Array.from(document.querySelectorAll("input"));
let [bill ,p5,p10,p15,p25,p50, custom , num ] = inputs;
let radio = [p5 ,p10 ,p15 ,p25 , p50];

let percent = 0 ;

// result
let total = document.getElementById("total");
let tip = document.getElementById('tip-amount');
let reset = document.querySelector('button');
// for limiting input length
const lengthControl = (e , limit)=>{

    if(e.target.value.length > limit ){
        e.target.value =  e.target.value.substring(0 , e.target.value.length -1);
       console.log( e.target.value);
       return ;
    };
    };
    // checks input validation
   const formValidate = () =>{
    const mlty = bill.value * percent * num.value;
    if(mlty === NaN || mlty === undefined || mlty === '' || mlty == 0){
        tip.innerHTML = '0.00';
        total.innerHTML = '0.00';
        return false ;
    }else{
        return true ;
    }
   };
    // shows the result
    const calculate = () =>{
        tip.innerHTML = (bill.value * percent/100 ).toFixed(2);
        total.innerHTML = ((+bill.value + bill.value * percent/100) / num.value ).toFixed(2);
        reset.removeAttribute('disabled');
        
    };


    bill.addEventListener('input' , (e)=>{

    lengthControl(e , 9);
    
    if(formValidate()){
        calculate()
    }
    
} );

    for (let index = 0; index < radio.length; index++) {
         radio[index].addEventListener('input' , e => {
            percent = e.target.value;
            if(formValidate()){
                calculate()
            }
    
        });
    }
    custom.addEventListener('input' , e => {

        radio.forEach(e => e.checked = false);
        lengthControl(e , 4);
        percent = e.target.value;
        if(formValidate()){
            calculate()
        }
    });

    num.addEventListener('input' , e => {
        lengthControl(e , 6);
    
    if(formValidate()){
        calculate()
    }

    });
    reset.addEventListener('click' , (e)=>{ 
        e.target.setAttribute('disabled', '');
        bill.value = '0';
        radio.forEach(e => e.checked = false);
        custom.value = '';
        num.value = '';
        tip.innerHTML = '0.00';
        total.innerHTML = '0.00';
    });

