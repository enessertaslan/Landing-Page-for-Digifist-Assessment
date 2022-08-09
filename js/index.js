//importing products api
import products from '../api/products.json' assert { type: 'json' };

let activeColor=localStorage.getItem('activeColor');
//Getting products from api and mapping them
export function test(){
    
    //Mapping items into div which id is product-slider-inner
    document.getElementById('product-slider-inner').innerHTML = products.map(product=>
        {
            let selectedColor=localStorage.getItem(product.id)
            selectedColor===null ? selectedColor=product.colorOptions[0] :selectedColor=localStorage.getItem(product.id)
            return( ` <div id=${product.id} class="product-item">
            
            <img id=img${product.id} src="${product.img+String(selectedColor)}.png" alt="">
            <div class="product-titles">
                ${product.name}
                <div class="price-color">
                    <div class="price">${product.price}</div> 
                    <div id=${product.id} class="colors">
                        ${product.colorOptions.map(color=>
                            `<span id=${color}${product.id} class="${color} ${product.id} ${color===product.selectedColor ? 'active' : ''}" onclick="changeColor(this)"></span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
        ` )
           
        }
   
).join('');
}

test()
