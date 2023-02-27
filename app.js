const items = document.querySelectorAll(".item");

for (const item of items) {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
}

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let person1 = new Person("John", 30);
// let person2 = new Person("Jane", 25);
// console.log(person1);
