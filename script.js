const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentages = document.getElementById('percentages');
const remained = document.getElementById('remained');
updateBigCup();
smallCups.forEach((cup , idx)=>{
    cup.addEventListener('click',()=> highlightCups(idx))
})
const highlightCups = (idx)=>{
    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    smallCups.forEach((cup , idx2)=>{
        if (idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }

    })
    updateBigCup();
}

function updateBigCup (){
const fullCups = document.querySelectorAll('.cup-small.full').length;
const totalCups = smallCups.length;

if (fullCups === 0 ){
    percentages.style.visibility = 'hidden';
    percentages.style.height = 0 ;
}else{
    percentages.style.visibility = 'visible';
    percentages.style.height = `${fullCups / totalCups * 330}px`;
    percentages.innerText = `${fullCups / totalCups * 100}%`

    }
if (fullCups === totalCups){
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
}else {
    remained.style.visibility = 'visible';
    liters.innerText = `${ 2 - (250 * fullCups / 1000)}`
}
}


