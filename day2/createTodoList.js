const list = createTodoList();
list.add("買菜");
list.add("運動");
list.add("寫程式");

// console.log("測試",list.todos);

list.complete("運動");
// console.log("測試",list.todos);

console.log(list.getPending()); // → ["買菜", "寫程式"]
console.log(list.getRate());    // → 33

// add(content)      → 新增一筆 { content, done: false }
// complete(content) → 找到那筆，把 done 改成 true
// getPending()      → 回傳 done === false 的 content 陣列
// getRate()         → 回傳完成率 Math.round(完成數/總數*100)


function createTodoList() {
  
  return{
    todos:[],

    // add 期望：[{ content: "買菜", done: false }, { content: "運動", done: true }]
    add(todo){
      this.todos.push({ content: todo , done: false})
    },

    // complete 期望：{ content: "運動", done: true }
    complete(todo){
      const found = this.todos.find((t) => t.content === todo)
      // console.log("測試",found);
      
      if(found){ found.done = true }
      // 改值，這裡不用return
    },

    // getPending 期望：
    // 1.[{ content: '買菜', done: false },{ content: '寫程式', done: false }]
    // 2.["買菜", "寫程式"]
    getPending(){
      return this.todos
        .filter((t) => t.done === false )
        .map((t) => t.content )
    },

    // getRate 期望：33
    // 完成的(true)陣列長度/todos陣列長度
    getRate(){
      const complete = this.todos.filter((t) => t.done === true ).length
      const all = this.todos.length
      return Math.round((complete / all) * 100)
    },

  }
}





