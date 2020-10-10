<template>
  <div class="container">
    <div class="right" :class="{ rightEditOn: editMode }">
      <div class="header">
          <button class="btn toContacts" @click="$router.push('/')">CONTACTS</button>
          <h1> User Info </h1>
      </div>
      <div id="contact">
        <input :class="{ edit: editMode }" v-model="fieldName" placeholder="fieldname" type="text">
        <input :class="{ edit: editMode }" v-model="fieldValue" placeholder="value" type="text">
        <button v-if="editMode" @click="submitChanges" class="btn btn-submit"> Submit </button>
        <button v-else @click="addField" class="btn"> Add </button>
      </div>
      <div class="right">
        <div class="table-wrap">
          <ul class="table">
            <li v-for="(value, key) in contact" :key="key" class="contacts" :class="{ editOn: editMode}" v-show="key !== 'id'">
              <div>{{ key }}:</div>
              <div>{{ value }}</div>
              <div>
                <button @click="editField(key)" class="btn-edit">Edit</button>
                <button @click="deleteField(key)" class="btn-delete">Delete</button>
              </div>
            </li>
              <button @click="cancelChange">Step Back</button>
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
      fieldValue: "",
      previousContact: {},
      previousKey: "",
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
    addField(){
      this.previousContact = this.contact
      let key = this.fieldName
      let value = this.fieldValue
      let updatedContact = {...this.contact}
      updatedContact.[key] = this.fieldValue
      this.updateState(updatedContact)
    },
    deleteField(key){
     this.previousContact = this.contact
     let yes = confirm("are you sure you want to delete this contact")
     if(yes){
      let updatedContact = {...this.contact}
      delete updatedContact[key]
      
      this.updateState(updatedContact)
     }else {
       return
     }
    },
    editField(key){
      this.previousContact = this.contact
      this.editMode = true
      this.fieldName = key
      this.previousKey = key
      this.fieldValue = this.contact[key]
    },
    submitChanges(){
      this.editMode = false
      let key = this.fieldName
      let updatedContact = {...this.contact}
      // updatedContact.[this.fieldName] = updatedContact[this.previousKey]
      delete updatedContact[this.previousKey]
      updatedContact.[key] = this.fieldValue
      this.updateState(updatedContact)
    },
    cancelChange(){
      if(Object.keys(this.previousContact).length === 0) return;
      this.updateState(this.previousContact)
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

.edit {
  height: 40px;
}

.btn-submit {
  background-color:#49c1a2;
}

.editOn {
  
}

.rightEditOn {
  background-color: #9c9797;
}


</style>