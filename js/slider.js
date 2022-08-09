const slider = document.querySelector('.products-slider-inner');

console.log(slider);
let isGrabbed=false;
slider.addEventListener('mousedown',(e)=>{
    isGrabbed=true;
    slider.style.cursor='grabbing';

})
slider.addEventListener('mouseup',(e)=>{
    isGrabbed=false;
    slider.style.cursor='grab';
    
})
slider.addEventListener('mousemove',(e)=>{
    if(isGrabbed)
    {
        slider.parentElement.scrollLeft-=e.movementX;
    }
})
slider.addEventListener('wheel',(e)=>{
    e.preventDefault();
    slider.parentElement.scrollLeft+=e.deltaY;
})

function getScrollPercentage()
{
    return ((slider.parentElement.scrollLeft / (slider.previousElementSibling.scrollWidth - slider.parentElement.clientWidth))*100)
}