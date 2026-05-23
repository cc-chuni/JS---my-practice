## Day 1

### 實作內容
groupTodos：把 todo 陣列依完成狀態分為done跟pending

### 兩種解法
- forEach：容器放外面
- reduce：容器放初始值

### 學到的東西
reduce 的初始值可以是任何型別，可以先在初始值把value的這列準備好，再每一輪push進去


### 卡住的地方
reduce - 
一開始不知道要怎麼讓value是陣列
解決辦法＝> 初始值就講value設定為陣列 {done:[] , pending:[]}
