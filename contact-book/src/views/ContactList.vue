<template>
  <div class="container">
      <div class="left">
        <div class="form-wrap">
          <h1>contact book</h1>
          <p>Add your contacts</p>
          <form>
            <div class="form-group">
              <label for="first-name">First Name</label>
              <input v-model="contact.name" type="text" id="first-name" required>
            </div>
    
            <div class="form-group">
              <label for="last-name">Surname</label>
              <input v-model="contact.surname" type="text" id="last-name" required>
            </div>
    
            <div class="form-group">
              <label for="telephone">Telephone</label>
              <input v-model.number="contact.tel" type="telephone" id="telephone">
            </div>
            <button @click.prevent="addContact" class="btn">Add Contact</button>
          </form>
        </div>
      </div>

    
      <div class="right">
        <div class="table-wrap">
          <h1>Contacts</h1>
          <ul class="table">
            <li v-for="(contact,index) in contacts" :key="index" class="contacts">
              <div>{{ contact.name }}</div>
              <div>{{ contact.surname }}</div>
              <div>{{ contact.tel }}</div>
              <div>
                <button @click="$router.push({ name: 'ContactPage', params: { id: contact.id }})" class="btn-edit">info</button>
                <button @click="deleteContact(index)" class="btn-delete">delete</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactList",
  data() {
    return {
      contact: {
        id: Date.now(),
        name: "",
        surname: "",
        tel: "",
      },
    };
  },

  computed: {
    contacts() {
      return this.$store.getters.getContacts
    },
    contactItem(){
       this.$store.getters.getContact()
    }
  },
  methods: {
    addContact() {
      let name = this.contact.name.trim()
      let surname = this.contact.surname.trim()
      if(name && surname){
        this.$store.commit("addContact", this.contact)
        this.clearForm();
      } else {
        alert("Name and Surname can't be empty")
      }
  
    },
    clearForm() {
      this.contact = {
        name: " ",
        surname: " ",
        tel: " ",
      };
    },
    deleteContact(index) {
      let confirmed = confirm("are you sure you want to delete this user");
      if (confirmed) {
        this.$store.commit("deleteContact", index)
      } else {
        return;
      }
    },
  },
};
</script>