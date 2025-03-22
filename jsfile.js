const bars=document.getElementById('bars');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');
if(bars){
    bars.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close)
{
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
