<template>
  <div class="container">
    <div class="right" :class="{ rightEditOn: editMode }">
      <div class="header">
          <button class="btn btn-edit" @click="$router.push('/')">CONTACTS</button>
          <h1> {{ contact.name }} </h1>
      </div>
      <div class="right">
        <div class="header">
          <input :class="{ edit: editMode }" v-model="fieldName" placeholder="fieldname" type="text">
          <input :class="{ edit: editMode }" v-model="fieldValue" placeholder="value" type="text">
          <button v-if="editMode" @click="submitChanges" class="btn btn-submit"> Submit </button>
          <button v-else @click="addField" class="btn btn-edit"> Add </button>
        </div>
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
              <button @click="cancelChange" class="btn-edit">Step Back</button>
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
       let id = this.$route.params.id
       return this.$store.getters.getContact(id)
    }
  },
  methods: {
    updateState(update){
      let contacts = this.$store.getters.getContacts
      let contactIndex = contacts.findIndex(contact => contact.id === this.contact.id)
      this.$store.commit('deleteContact', contactIndex)
      this.$store.commit('addContact', update)
    },
    clearFields(){
      this.fieldName = ""
      this.fieldValue = ""
    },
    editContact(){
      this.editMode = true
      console.info(this.contact)
    },
    addField(){
      this.previousContact = this.contact
      let updatedContact = {...this.contact}
      updatedContact.[this.fieldName] = this.fieldValue
      this.updateState(updatedContact)
      this.clearFields()
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
      delete updatedContact[this.previousKey]
      updatedContact.[key] = this.fieldValue
      this.updateState(updatedContact)
      this.clearFields()
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

.header {
  margin-bottom: 30px;
}

.edit {
  height: 40px;
}

.btn-submit {
  background-color:#49c1a2;
}


.rightEditOn {
  background-color: #9c9797;
}


</style>