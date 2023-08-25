function task1() {
  const categoriesList = document.querySelectorAll('.item');
  console.log(`Number of categories: ${categoriesList.length}`);

  categoriesList.forEach(item => {
    const categoriesTitle = item.querySelector('h2').textContent;
    const itemCount = item.querySelectorAll('ul li');
    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${itemCount.length}`);
  });
}

task1();

//Number of categories: 3

//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5
