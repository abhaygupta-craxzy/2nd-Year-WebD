function fix(name, ...collection) {
  const sum = collection.reduce((total, num) => total + num, 0);

  console.log(name, sum);
}

fix("Abhay", 10, 20, 30, 40);


