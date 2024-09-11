const input = document.getElementById("inpt");
const dateInput = document.getElementById("date-inpt");
const button = document.getElementById ("btn");
const para = document.getElementById ("spn");

button.addEventListener ("click" , function () {
    if (dateInput.value ==  "" ) {
        alert ("Kindly Add Your Birthday Date!!")
    } else {
        console.log(dateInput.value);
        (dateInput.value)
        const DOB = new Date(dateInput.value);
        // console.log(DOB);
        const fullYear = DOB.getFullYear();
        // console.log(fullYear);
        
        // Cureent Date 
          const current = new Date ();
        //   console.log(current);
        const full_year = current.getFullYear();
        const answer = full_year - fullYear;
        // console.log(answer);
        para.innerHTML = `${input.value} your Age Is :${answer}`;
        para.classList.add('show');
    }
})

