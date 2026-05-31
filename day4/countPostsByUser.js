// API：https://jsonplaceholder.typicode.com/posts
// 統計每個 userId 各有幾篇文章

async function countPostsByUser() {
  // 1. 用 fetch 打 API 拿所有文章
  // 2. 用 reduce 統計每個 userId 有幾篇
  // 3. 回傳結果物件
  // 4. 記得 try/catch
  const url = "https://jsonplaceholder.typicode.com/posts"
  try{
    const resp = await fetch(url)
    const data = await resp.json()
    // console.log(data);
    return data.reduce((acc, post) => {
      if(acc[post.userId]){
        acc[post.userId]+= 1
      }else{
        acc[post.userId] = 1
      }
      return acc
    },{})
    

  }catch(err){
    console.error(err);
    return {}
  }
}

countPostsByUser().then(function(result) {
  console.log(result);
  // 期望輸出：{ '1': 10, '2': 10, '3': 10, ... }
});