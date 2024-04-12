const monthEl  = document.querySelector(".date h1");
const fullDate = document.querySelector(".date p");
const daysEl   = document.querySelector(".days");
const btnPrev  = document.getElementById("prev");
const btnNext  = document.getElementById("next");

// pega o número do mês atual
const monthIndex = new Date().getMonth(); 


let idxMesAtual = monthIndex;

const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

btnPrev.addEventListener("click",()=> {
    
     idxMesAtual -=1;
      if(idxMesAtual >=0){
        monthEl.textContent = months[idxMesAtual];
        updateCalendar(idxMesAtual)
      }else {
        idxMesAtual = 0;
      }

})

btnNext.addEventListener("click",()=> {
   
     idxMesAtual +=1;
      if(idxMesAtual < months.length ){
        monthEl.textContent = months[idxMesAtual];
        updateCalendar(idxMesAtual)
      }else {
        idxMesAtual =  months.length ;
      }

})



monthEl.textContent = months[monthIndex];
fullDate.innerHTML = new Date().toLocaleDateString("pt-br",{
     weekday : 'long',
     year : 'numeric',
     month : 'long',
     day : 'numeric'
})

updateCalendar(monthIndex);

function updateCalendar(idx){

    // pega o número do mês atual
let monthIndex = new Date().getMonth(); 
//pega o último dia do mês atual
let lastDay = new Date( new Date().getFullYear(), idx + 1,0 ).getDate();
//pega o primeiro dia do mês atual
let firstDay = new Date( new Date().getFullYear(), idx, 1).getDay() - 1;

monthEl.textContent = months[idx];

let days = " ";

for(let i = firstDay; i > 0; i--) {
     days += `<div class="empty"></div>`;
}

for(let i = 1; i <= lastDay; i++) {
      if(i=== new Date().getDate()){
         days+= `<div class="today">${i}</div>`
      }else {
        days += `<div>${i}</div>`
    }
}
daysEl.innerHTML = days;

}