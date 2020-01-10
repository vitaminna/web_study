<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <div>{{name}}</div>
    <button @click="addCounter">+</button>
    <button @click="minCounter">-</button>
    <div v-for="student  in $store.state.students">
      {{student.id}}--{{student.name}}--{{student.age}}
    </div>
    <div>{{$store.getters.getAgeGt20}}</div>
    <div>{{$store.getters.getAgeMt20}}</div>
    <div>{{$store.getters.getAgeGt}}</div>
    <div>{{$store.getters.getAgeGtAge(8)}}</div>
    <div>{{$store.state.vitamin}}</div>
    <button @click="changeAge(20)">改年龄</button>
    <button @click="chage02(18)">改年龄</button>
    <router-view/>
  </div>
</template>

<script>
  import {DECREMENT, INCREMENT} from "./store/mutations_types";

  export default {
    name: 'App',
    data() {
      return {
        name: "lucy",
        students: [
          {}
        ]
      }
    },
    methods: {
      addCounter() {
        this.$store.commit(INCREMENT)
      },
      minCounter() {
        this.$store.commit(DECREMENT)
      },
      changeAge(age) {
        this.$store.dispatch('asyncUpdatInfo', {
          age: age,
          success: () => console.log("oook")
        })
      },
      chage02(age){
          this.$store
            .dispatch('asyncPromise',age)
            .then(res=>{
            console.log("66666，我来处理得到的数据"+res)
          })
      }

    }
  }
</script>

<style>

</style>
