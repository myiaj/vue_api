<template>
  <div class="hello">
    <h1>Hello world</h1>
    <a href="#" @click.prevent="logout">登出</a>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    logout() {
      const api = `${process.env.APIPATH}/logout`;
      const vm = this;
      // console.log(process.env.VUE_APP_APIPATH);
      this.$http.post(api).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/login");
        }
      });
    }
  },
  created() {
    const api = `${process.env.APIPATH}/api/user/check`;
    this.$http.post(api).then(response => {
      console.log(response.data);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.hello-world {
  color: #42b983;
}
</style>
