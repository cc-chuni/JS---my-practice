## Day 3

### 實作內容
- countByPayment：用 reduce 動態建立統計物件，不需要提前知道有哪些 key
- getTopRestaurants：用reduce 包 filter + map，處理多層資料，找出rating4.0以上的餐廳，並以城市為分類，輸出餐廳名稱


### 學到的東西
- 物件裡沒有的 key 是 undefined，不是空字串
- 判斷 key 有沒有：`!p[payment]`、`p[payment] === undefined`、`!(payment in p)`


### 卡住的地方
countByPayment：
一開始判斷key不存在判斷為空字串（應該要是undifind），使用if(p[payment] === "")，判斷條件寫錯
解決辦法：應該改成下面其中一種
- if(p[payment] === undefind)
- if(!p[payment])
- if (!(payment in p))

