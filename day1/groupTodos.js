const todos = [
  { id: 1, content: "買菜",   completed_at: null         },
  { id: 2, content: "運動",   completed_at: "2024-01-01" },
  { id: 3, content: "寫程式", completed_at: null         },
  { id: 4, content: "看書",   completed_at: "2024-01-02" },
];

// 期望輸出：
// { done: ["運動","看書"], pending: ["買菜","寫程式"] }

// ── forEach 版本 ──
// 最終產出物件 (先在外部準備空物件)
// 兩個key ，done / pending 
// 篩選completed_at是否為null 

function groupTodosForEach(todos) {
  const todoList = { done:[] , pending:[] };
  todos.forEach(({ content ,  completed_at}) => {
    if(completed_at === null){
      todoList.pending.push(content)
    }else{
      todoList.done.push(content)
    }
  })

  return todoList;
  // 第一遍忘記return
}

console.log(groupTodosForEach(todos));


// ── reduce 版本 ──
// 最終產出物件，reduce 初始值設定為{}
// 判斷completed_at是否為 null

function groupTodosReduce(todos) {
  return todos.reduce((todoList , { content , completed_at}) => {
    if(completed_at === null){
      todoList.pending.push(content)
      // 第一次寫卡在這裡，知道該用push，但不知道該怎麼讓value是陣列
    }else{
      todoList.done.push(content) 
    }
    return todoList
  },{done:[] , pending:[]})
}

console.log(groupTodosReduce(todos));

