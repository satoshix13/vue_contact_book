<template>
  <div class="container">
    <div class="right">
      <div class="header">
          <button class="btn" @click="$router.push('/')">CONTACTS</button>
          <h1>User Info</h1>
      </div>
      <div>
        <input placeholder="fieldname" type="text">
        <input placeholder="value" type="text">
        <button> Add </button>
      </div>
     <div class="user-info">
        <h1>hello</h1>
     </div>
      


    </div>
  </div>
</template>


<script>
export default {
  name: 'ContactPage'
}
</script>


<style  scoped>
input {
  width: 25%;
  margin: auto;
  height: 30px;
  border-radius: 5px;
  margin: 0 5%;
}

ul {
  list-style: none;
}

</style>