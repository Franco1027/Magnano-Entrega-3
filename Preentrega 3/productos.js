  const productsContainer = document.getElementById('products-container');

  
  for (let product of products) {
    const divProducto = document.createElement('div');
    divProducto.classList.add('product');

    
    const imagenProducto = document.createElement('img');
    imagenProducto.src = product.image;
    imagenProducto.alt = product.name;

    
    const nombreProducto = document.createElement('h2');
    nombreProducto.textContent = product.name;
    
    
    const descripcionProducto = document.createElement('p');
    descripcionProducto.textContent = product.description;
    

    divProducto.appendChild(imagenProducto);
    divProducto.appendChild(nombreProducto);
    divProducto.appendChild(descripcionProducto);

    
    productsContainer.appendChild(divProducto);
  }
