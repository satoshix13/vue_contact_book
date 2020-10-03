<template>
  <div id="app" class="container">
    <div class="left">
      <div class="form-wrap">
        <h1>contact book</h1>
        <p>Add your contacts</p>
        <form>
          <div class="form-group">
            <label for="first-name">First Name</label>
            <input v-model="contact.name" type="text" id="first-name">
          </div>
  
          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input v-model="contact.surname" type="text" id="last-name">
          </div>
  
          <div class="form-group">
            <label for="telephone">Telephone</label>
            <input v-model.number="contact.tel" type="telephone" id="telephone">
          </div>

          <button @click="addContact" class="btn">Add Contact</button>
        </form>
      </div>
    </div>
    <div class="right">
      <div class="table-wrap">
        <h1>Contacts</h1>
        <ul class="table">
          <li v-for="(contact,index) in contact_list" :key="index" class="contacts">
            <div>{{ contact.name }}</div>
            <div>{{ contact.surname }}</div>
            <div>{{ contact.tel }}</div>
            <div>
              <button class="btn-edit">edit</button>
              <button @click="deleteContact(index)" class="btn-delete">delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      contact: {
        name: "",
        surname: "",
        tel: ""
      },
      contact_list: []
    }
  },
  methods: {
    addContact(){
      let c = this.contact
      if(c.name === "" || c.surname === "" || c.tel === ""){
        alert("all fields have to be added")
        return;
      }
      event.preventDefault()
      this.contact_list.push(this.contact)
      this.clearForm()
    },
    clearForm(){
      this.contact = {
        name: " ",
        surname: " ",
        tel: " ",
      }
    },
    deleteContact(index){
      let confirmed = confirm("are you sure you want to delete this user")
      if(confirmed){
        this.contact_list.splice(index,1)
      } else {
        return
      }
    }
  }
}
</script>


