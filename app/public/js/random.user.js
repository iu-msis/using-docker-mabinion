var userApp = new Vue({
  el: '#randomUserApp',
  data: {
    users: {
      name:"",
      dob:"",
      age:"",
      email:"",
      nat:"",
      picture:""
    }
  },
  methods: {
    fetchUsers() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {userApp.users = json.results[0]});


    }
  },
  created() {
    this.fetchUsers()
  }
});
