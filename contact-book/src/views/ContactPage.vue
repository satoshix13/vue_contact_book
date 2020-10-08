<template>
  <div class="container">
    <div class="right">
      <div class="header">
          <button class="btn toContacts" @click="$router.push('/')">CONTACTS</button>
          <h1> {{ contact.name }} </h1>
      </div>
      <div id="contact">
        <input v-model="fieldName" placeholder="fieldname" type="text">
        <input v-model="fieldValue" placeholder="value" type="text">
        <button @click="addField" class="btn"> Add </button>
      </div>
      <div class="right">
        <div class="table-wrap">
          <ul class="table">
            <li v-for="(value,key) in contact" :key="key" class="contacts">
              <div>{{ key }}:</div>
              <div>{{ value }}</div>
              <div>
                <button class="btn-edit">Edit</button>
                <button @click="deleteField(key)" class="btn-delete">Delete</button>
              </div>
            </li>
            <!-- <li class="contacts">
              <div>Surname:</div>
              <div>{{ contact.surname }}</div>
              <div>
                <button v-if="!editMode" @click="editContact" class="btn-edit">Edit</button>
                <button v-else @click="submitChanges" class="btn">Submit</button>
                <button @click="deleteContact(index)" class="btn-delete">Delete</button>
              </div>
            </li>
            <li class="contacts">
              <div>Tel:</div>
              <div>77777</div>
              <div>
                <button  class="btn-edit">Edit</button>
                <button class="btn-delete">Delete</button>
              </div>
            </li>
            <li class="contacts"> -->
              <button>Step Back</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ContactPage',
  data(){
    return {
      editMode: false,
      fieldName: "",
      fieldValue: ""
    }
  },
  computed: {
    contact() {
       let name = this.$route.params.name
       return this.$store.getters.getContact(name)
    }
  },
  methods: {
    updateState(update){
      let contacts = this.$store.getters.getContacts
      let contactIndex = contacts.findIndex(contact => contact.id === this.contact.id)
      this.$store.commit('deleteContact', contactIndex)
      this.$store.commit('addContact', update)
    },
    editContact(){
      this.editMode = true
      console.info(this.contact)
    },
    submitChanges(){
      this.editMode = false
    },
    addField(){
      let key = this.fieldName
      let value = this.fieldValue
      let updatedContact = {...this.contact}
      updatedContact.[key] = this.fieldValue
      // let contacts = this.$store.getters.getContacts
      // let contactIndex = contacts.findIndex(contact => contact.id === this.contact.id)
      // this.$store.commit('deleteContact', contactIndex)
      // this.$store.commit('addContact', updatedContact)
      this.updateState(updatedContact)
    },
    deleteField(key){
     let yes = confirm("are you sure you want to delete this contact")
     if(yes){
      let updatedContact = {...this.contact}
      delete updatedContact(key)
      console.info(updatedCountact)
      // this.updateState(updatedContact)
      // let contacts = this.$store.getters.getContacts
      // let contactIndex = contacts.findIndex(contact => contact.id === this.contact.id)
      // this.$store.commit('deleteContact', contactIndex)
      // this.$store.commit('addContact', updatedContact)
     }else {
       return
     }
    }
  }
}
</script>


<style scoped>
 
 input {
  width: 25%;
  margin: auto;
  height: 30px;
  border-radius: 5px;
  margin: 0 5%;
}


</style>