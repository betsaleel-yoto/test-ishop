export default {
  template: `
    <div class="home">
      <div class="hero">
        <h1>Bienvenue sur iShop</h1>
        <p>Votre destination premium pour tous les produits Apple</p>
      </div>
      <div class="featured-products">
        <h2>Nos Produits Vedettes</h2>
        <div class="products-grid">
          <div v-for="product in featuredProducts" :key="product.id" class="product-card">
            <img :src="product.image" :alt="product.name" class="product-image">
            <button class="details-toggle" :class="{ active: product.showDetails }" @click="toggleDetails(product)">
              <i class="fas fa-chevron-up"></i>
            </button>
            <div class="product-info" :class="{ show: product.showDetails }">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <div class="price-container">
                <p class="original-price">{{ product.price }}€</p>
                <p class="reduced-price">{{ product.reducedPrice }}€</p>
                <span class="discount-badge">
                  -{{ Math.round((1 - product.reducedPrice/product.price) * 100) }}%
                </span>
              </div>
              <button class="add-to-cart" @click="$parent.addToCart({...product, price: product.reducedPrice})">
                <i class="fas fa-shopping-cart"></i> Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  computed: {
    featuredProducts() {
      return this.$parent.products.slice(0, 2)
    }
  },
  methods: {
    toggleDetails(product) {
      if (!product.showDetails) {
        product.showDetails = true;
      } else {
        product.showDetails = false;
      }
    }
  },
  mounted() {
    // Initialize showDetails property for each product
    this.$parent.products.forEach(product => {
      this.$set(product, 'showDetails', false);
    });
  }
}