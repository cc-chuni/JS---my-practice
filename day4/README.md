## Day 4

### 實作內容
- fetchUserPosts：串接公開 API，篩出指定 userId 的文章，回傳 title 陣列
- countPostsByUser：串接公開 API，用 reduce 統計每個 userId 各有幾篇文章

### API 使用
- 來源：https://jsonplaceholder.typicode.com/posts
- 每筆格式：{ userId, id, title, body }

### 學到的東西
- fetch + async/await 的標準流程：fetch → resp.json() → 處理資料
- catch 裡要 return 預設值（空陣列或空物件），避免外面拿到 undefined 程式壞掉
- console.error 只是印出錯誤，不會保護程式繼續跑
