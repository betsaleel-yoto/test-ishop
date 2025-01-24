export default {
  template: `
    <div class="contact">
      <div class="hero">
        <h1>Contactez-nous</h1>
        <p>Notre équipe est là pour vous accompagner</p>
      </div>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Nom</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            required
            placeholder="Votre nom"
          >
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required
            placeholder="votre@email.com"
          >
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            required
            placeholder="Comment pouvons-nous vous aider ?"
          ></textarea>
        </div>
        <button type="submit" class="submit-btn">
          Envoyer le message
          <i class="fas fa-paper-plane" style="margin-left: 8px;"></i>
        </button>
      </form>
    </div>
  `,
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Simulate sending message
      setTimeout(() => {
        alert('Message envoyé avec succès !')
        this.form.name = ''
        this.form.email = ''
        this.form.message = ''
      }, 500)
    }
  }
}