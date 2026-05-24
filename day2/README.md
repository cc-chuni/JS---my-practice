## Day 2

### 實作內容
createTodoList：工廠函式，封裝 add、complete、getPending、getRate 四個方法

### 學到的東西
- `list.add()` 是點號呼叫 → list 必須是物件 → createTodoList 要 return 物件
- 物件方法裡存取自己的屬性要用 `this`，例如 `this.todos`
- `find` 回傳的是元素本身，改它會影響原始資料
- `true` / `false` 不加引號是布林值，加引號是字串
- `return` 後面的程式碼永遠不會執行
- `console.log` 測試要寫在函式外面，不要寫在 return 後面
- 判斷要不要 return：外面有 `const xxx = fn()` 接住 → 需要 return

### 卡住的地方
- 一開始不知道要 return 物件，試了閉包和直接 return 函式
- find 的結果要用變數接住才能繼續使用，沒接住就消失了
- complete 忘記用 `if (found)` 保護，found 可能是 undefined



