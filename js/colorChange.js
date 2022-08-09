function changeColor(e){
    //Getting clicked color select div
    const color=document.querySelector(`[id='${e.id}']`);
    //Getting clicked color select div parents childrens as array.
    const others=color.parentElement.children;
    let activeColor='';
    //Loop for removing the active class
    for(let i=0;i<others.length;i++)
    {
        if(others[i].classList.contains('active'))
        {
            others[i].classList.remove('active');
        }
    }

    //Checking the if clicked element had active class.
    if(!color.classList.contains('active'))
    {
        //Getting clicked element class that has color and adding active trait that clicked element
        activeColor=color.classList[0]; 
        color.className+=' active' 

        //Getting clicked element second class that holding product id.
        productId=color.classList[1]


        //Changing product image src (Changing color.)
        const productImage = document.querySelector(`#img${productId}`)
        productImage.src=`./img/${productId}-${activeColor}.png`
    }

    console.log(color)
    console.log(activeColor)
}