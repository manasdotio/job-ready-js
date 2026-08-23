const users = [
  { id: 1, name: "Aman", age: 22, active: true },
  { id: 2, name: "Priya", age: 25, active: false },
  { id: 3, name: "Rahul", age: 19, active: true },
  { id: 4, name: "Sneha", age: 30, active: true },
  { id: 5, name: "Vikram", age: 21, active: false },
];
/** 
1. Get an array of just the names of all users.
2. Get only the active users.
3. Get the names of only the active users (chain filter + map).
4. Find the oldest user (single object, not array).
5. Calculate the average age of all users.
6. Sort users by age, youngest first (don't mutate the original array).
7. Destructure name and age out of the first user into standalone variables.
8. Write a function addUser(usersArray, newUser) that returns a new array with newUser added, using spread (don't push to original).
9. Given const { id, ...rest } = users[0], what's in rest? Predict it, then log it to check.
10. Write a function that takes the users array and returns { activeCount, inactiveCount } using reduce.
*/
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//! Solutions

//? 1 Get an array of just the names of all users.
// let usernames = users.map(user=> user.name)
// console.log(usernames)

//? 2 Get only the active users.
// let active = users.filter((user) => user.active);
// console.log(active);

//? 3 Get the names of only the active users (chain filter + map).
// let activeUserNames = users.filter(user=> user.active ).map(user=> user.name)
// console.log(activeUserNames);

//? 4 Find the oldest user (single object, not array).
// let oldAge = 0;
// let oldestUser=null
// for (let i = 0; i <  users.length; i++) {
//   if (users[i].age > oldAge) {
//     oldAge = users[i].age;
//     oldestUser = users[i];
//   }
// }
// console.log(oldestUser);

//? 5 Calculate the average age of all users.
// let averageAge = users.reduce((accumulator, user) => accumulator + user.age, 0) / users.length;
// console.log(averageAge)

//? 6 Sort users by age, youngest first (don't mutate the original array).

// let sortedUsers = [...users].sort((a, b) => a.age - b.age);
// console.log(sortedUsers);

//? 7 Destructure name and age out of the first user into standalone variables.
// const { name: firstUserName, age: firstUserAge } = users[0];

//? 8 Write a function addUser(usersArray, newUser) that returns a new array with newUser added, using spread (don't push to original).

// const addUser = (usersArray, newUser) => {
//   return [...usersArray, newUser];
// };

// const newUser = { id: 6, name: "yogi", age: 21, active: true };
// console.log(addUser(users, newUser));

/**
 * Destructures the first user object by extracting `id` and collecting all remaining properties into `rest`.
 * `rest` will contain every property from `users[0]` except `id`.
 * Predict the shape of `rest`, then log it to verify your result.
 */
//? 9. Given const { id, ...rest } = users[0], what's in rest? Predict it, then log it to check.
// const { id, ...rest } = users[0];
// console.log(rest) rest of the object properties

// 10. Write a function that takes the users array and returns { activeCount, inactiveCount } using reduce.
// let statusCount = (arr) => {
//   const counts = arr.reduce(
//     (result, user) => {
//       if (user.active) result.activeCount++;
//       else result.inactiveCount++;
//       return result;
//     },
//     { activeCount: 0, inactiveCount: 0 }
//   );

//   return counts;
// };

// console.log(statusCount(users));

// async function getUser(id) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   if (!res.ok) throw new Error(`Failed: ${res.status}`);
//   return res.json();
// }

//? 1
// getUser(1)
//   .then((user) => console.log(user))
//   .catch((err) => console.log(err));

//? 2 3
// async function main(num) {
//   try {
//     const data = await getUser(num);
//     console.log(data);
//   } catch (err) {
//      console.log(err);
//   }
// }
// main(9999)

//? 4
// Promise.all([getUser(1),getUser(3),getUser(3)]).then((data)=> console.log(data))

//? 5
// for (let i = 1; i <= 3; i++) {
//   try {
//     const user = await getUser(i);
//     console.log(user);
//   } catch (err) {
//     console.log(err);
//   }
// }
//  because it will wait for each request to complete before starting the next one.

async function getUserSafe(id) {
  try {
    const user = await getUser(id);
    return { data: user, error: null };
  } catch (err) {
    return { data: null, error: err.message };
  }
}

async function main() {
  const { data, error } = await getUserSafe(1);
  if (error) {
    console.log("Something went wrong:", error);
  } else {
    console.log(data);
  }
}
main();
