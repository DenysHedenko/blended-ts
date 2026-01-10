interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

users.push({ name: "Sofia", age: 28 });
console.log(users);

users.push({ name: "Henry"}); // This line should cause a TypeScript error
