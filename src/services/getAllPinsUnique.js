export const getAllPins = pin => {
  const allPins = pin?.map(el => el.Restaurants);
  // console.log(allPins);

  // gather all restaurants into one array
  const arr = [];
  allPins.forEach(pins => {
    pins.forEach(data => {
      arr.push(data);
    });
  });
  // console.log(arr);

  // make it unique by id
  let uniqueRes = [...new Map(arr?.map(item => [item["id"], item])).values()];
  // console.log(uniqueRes);

  // sort by createdAt
  const allRestaurants = uniqueRes.sort(
    (a, b) => new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate()
  );
  // console.log(allRestaurants);
  return allRestaurants;
};
