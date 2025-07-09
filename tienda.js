// Lista detallada de productos
const products = [
  {
    id: 1,
    name: 'Camiseta H',
    description: 'Camiseta de algodón 100%, cómoda y fresca.',
    price: 30,
    image: 'Imagenes/camisa h.jpeg'
  },
  {
    id: 2,
    name: 'Pantalón H',
    description: 'Pantalón de mezclilla para uso diario.',
    price: 40,
    image: 'Imagenes/descarga.jpeg'
  },
  {
    id: 3,
    name: 'Zapatillas H',
    description: 'Zapatillas deportivas ligeras.',
    price: 69,
    image: 'Imagenes/zapatillas.webp'
  }
  ,
  {
    id: 4,
    name: 'Camiseta M',
    description: 'Camiseta de algodón suave y duradera.',
    price: 25,
    image: 'Imagenes/camisa m.jpeg'
  },
  {
    id: 5,
    name: 'Pantalón M',
    description: 'Pantalón elegante para ocasiones especiales.',
    price: 50,
    image: 'Imagenes/pantalon m.jpeg'
  },
  {
    id: 6,
    name: 'Zapatillas M',
    description: 'Zapatillas cómodas para el día a día.',
    price: 55,
    image: 'Imagenes/zapatillas m.jpeg'
  }
];

const store = document.getElementById('store');
const cart = document.getElementById('cart');
const totalDisplay = document.getElementById('total');

let cartItems = [];

// Mostrar productos
products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p><strong>$${product.price}</strong></p>
    <button onclick="addToCart(${product.id})">Añadir al carrito</button>
  `;
  store.appendChild(card);
});

// Añadir al carrito
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cartItems.push(product);
  renderCart();
}

// Eliminar del carrito
function removeFromCart(index) {
  cartItems.splice(index, 1);
  renderCart();
}

// Mostrar carrito
function renderCart() {
  cart.innerHTML = '';
  let total = 0;

  cartItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - $${item.price}
      <button onclick="removeFromCart(${index})" style="background-color:red;margin-left:10px;">Eliminar</button>
    `;
    cart.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = `Total: $${total}`;
}