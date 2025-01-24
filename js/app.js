import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { products } from './products.js'
import Home from './components/Home.js'
import Products from './components/Products.js'
import Contact from './components/Contact.js'

const app = createApp({
  data() {
    return {
      currentPage: 'home',
      products,
      cartItems: [],
      showCart: false,
      menuOpen: false
    }
  },
  computed: {
    cartTotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)
    }
  },
  methods: {
    addToCart(product) {
      this.cartItems.push(product)
      this.showCart = true
    },
    removeFromCart(product) {
      const index = this.cartItems.indexOf(product)
      if (index > -1) {
        this.cartItems.splice(index, 1)
      }
    },
    checkout() {
      if (this.cartItems.length === 0) {
        alert('Votre panier est vide')
        return
      }
      alert('Merci pour votre commande !')
      this.cartItems = []
      this.showCart = false
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    navigateTo(page) {
      this.currentPage = page;
      this.menuOpen = false; // Ferme le menu après la navigation
    }
  },
  components: {
    home: Home,
    products: Products,
    contact: Contact
  }
})

// Fermer le menu si la fenêtre est redimensionnée au-dessus de 768px
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && app._instance.data.menuOpen) {
    app._instance.data.menuOpen = false;
  }
});

app.mount('#app')