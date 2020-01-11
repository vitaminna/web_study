export  default {
  // 主要注意箭头函数的是使用方法，当只有一个形参，一条处理语句
  getAgeGt20(state){
    return state.students.filter(student =>  student.age>15)
  },
  getAgeMt20:state=>{
    return state.students.filter(function (student) {
      return student.age<15
    })
  },
  // 这里的getetr始终指向的是vuex这个对象中的getters，可以通过其调用其他属性的返回结果，做进一步处理
  getAgeGt(state,getters){
    return  getters.getAgeGt20.length
  },
  // 这个函树的外层函数的返回结果是一个函数，传递参数是被内层函数使用的，
  getAgeGtAge(state,getters){
    return  function (age) {
      return state.students.filter(s=>s.age>age)

    }
  }
}
