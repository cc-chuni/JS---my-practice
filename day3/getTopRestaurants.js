const cities = [
  {
    name: "台北",
    restaurants: [
      { name: "A店", rating: 4.5 },
      { name: "B店", rating: 3.8 },
      { name: "C店", rating: 4.2 },
    ]
  },
  {
    name: "台中",
    restaurants: [
      { name: "D店", rating: 3.5 },
      { name: "E店", rating: 4.8 },
    ]
  },
];
//找出rating4.0以上的餐廳，並以城市為分類，輸出餐廳名稱
// 期望輸出：{ 台北: ["A店","C店"], 台中: ["E店"] }

function getTopRestaurants(cities) {
  // 最終產出物件{}
  // 先給key : key cities => obj.name
  // 判斷rating >= 4/0 : cities => obj.restaurants => obj.rating
  // value cities => obj.restaurants => obj.name

  return cities.reduce((goodRestaurants , { name , restaurants} ) => {
    goodRestaurants[name] = restaurants
      .filter((r) => r.rating >= 4.0)
      .map((r) => r.name )
    return goodRestaurants
  },{})
}
console.log(getTopRestaurants(cities));