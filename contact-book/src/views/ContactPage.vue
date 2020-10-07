<template>
  <div class="container">
    <div class="right">
      <div class="header">
          <button class="btn toContacts" @click="$router.push('/')">CONTACTS</button>
          <h1>User Info</h1>
      </div>
      <div id="contact">
        <input placeholder="fieldname" type="text">
        <input placeholder="value" type="text">
        <button class="btn"> Add </button>
      </div>
      <div class="right">
        <div class="table-wrap">
          <ul class="table">
            <li class="contacts">
              <div>Name:</div>
              <div>Bob</div>
              <div>
                <button @click="$router.push('/contactpage')" class="btn-edit">Edit</button>
                <button @click="deleteContact(index)" class="btn-delete">Delete</button>
              </div>
            </li>
            <li class="contacts">
              <div>Surname:</div>
              <div>Sanchez</div>
              <div>
                <button @click="$router.push('/contactpage')" class="btn-edit">Edit</button>
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
            <li class="contacts">
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
  name: 'ContactPage'
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