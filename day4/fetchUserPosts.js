// API：https://jsonplaceholder.typicode.com/posts
// 每筆資料格式：{ userId, id, title, body }

async function fetchUserPosts(userId) {
  // 1. 用 fetch 打 API 拿所有文章
  // 2. 篩出 userId 符合的文章
  // 3. 只回傳 title 陣列
  // 4. 記得 try/catch 處理錯誤
  const url = "https://jsonplaceholder.typicode.com/posts"
  try{
    const resp = await fetch(url)
    const data = await resp.json()
    // console.log(data);
    return data
      .filter((obj) => userId === obj.userId)
      .map(({title}) => title)
    
  }catch(err){
    console.error(err);
    return []
  }
}

fetchUserPosts(1).then(function(titles) {
  console.log(titles.length); // 10
  console.log(titles[0]);     // "sunt aut facilis..."
});