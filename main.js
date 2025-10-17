// main.js - minden oldal betölti
// Recept-adatok (tömb)
const recipes = [
  { id: 1, name: 'Ratatouille', ingredients: ['padlizsán', 'paradicsom', 'cukkini', 'hagyma'], calories: 250 },
  { id: 2, name: 'Quinoa saláta', ingredients: ['quinoa', 'paradicsom', 'uborka', 'citrom'], calories: 300 },
  { id: 3, name: 'Zöldborsó krémleves', ingredients: ['zöldborsó', 'burgonya', 'hagyma'], calories: 180 },
  { id: 4, name: 'Vegán curry', ingredients: ['csicseriborsó', 'kókusztej', 'paradicsom'], calories: 420 }
];

/* -------------------------
   Függvények (legalább 4)
   - renderRecipes (lista kirajzolása)
   - filterByIngredient(term) (paraméteres, tömb + ciklus)
   - sumCalories(arr) (összegzés — programozási tétel)
   - findRecipeByName(name) (keresés — programozási tétel)
   - isVegan(recipe) (logikai művelet, elágazás)
   - findMaxCalories(arr) (maximum keresés)
------------------------- */

// 1) renderRecipes: megjeleníti a receptlistát (függvény)
function renderRecipes(list) {
  const ul = document.getElementById('recipeList');
  if (!ul) return;
  ul.innerHTML = '';
  for (let r of list) { // ciklus
    const li = document.createElement('li');
    li.className = 'recipe-item';
    li.innerHTML = `<strong>${r.name}</strong> — ${r.calories} kcal<br>Összetevők: ${r.ingredients.join(', ')}`;
    ul.appendChild(li);
  }
}

// 2) filterByIngredient: paraméteres függvény, visszaadja azokat a recepteket, amelyek tartalmazzák a keresett összetevőt
function filterByIngredient(term) {
  if (!term) return recipes;
  const t = term.toLowerCase();
  const result = [];
  for (let r of recipes) { // ciklus + tömb ellenőrzés
    // logikai művelet és elágazás
    if (r.ingredients.some(i => i.toLowerCase().includes(t))) {
      result.push(r);
    }
  }
  return result;
}

// 3) sumCalories: összegzi a kalóriákat (programozási tétel: összegzés)
function sumCalories(arrayOfCalories) {
  // aritmetikai műveletok: összeadás
  let sum = 0;
  for (let c of arrayOfCalories) {
    sum += Number(c);
  }
  return sum;
}

// 4) findRecipeByName: keresés tétel — visszaadja a recept objektumot név alapján (ha nincs, null)
function findRecipeByName(name) {
  if (!name) return null;
  const lower = name.toLowerCase();
  for (let r of recipes) {
    if (r.name.toLowerCase() === lower) {
      return r;
    }
  }
  return null;
}

// 5) isVegan: egyszerű logikai ellenőrzés (feltételezve, hogy nincs hús a hozzávalók között)
function isVegan(recipe) {
  if (!recipe || !recipe.ingredients) return false;
  const nonVeganKeywords = ['hús', 'csirke', 'hal', 'szalonna', 'tej', 'sajt', 'tojás'];
  for (let inc of recipe.ingredients) {
    for (let bad of nonVeganKeywords) {
      if (inc.toLowerCase().includes(bad)) {
        return false; // elágazás + logikai
      }
    }
  }
  return true;
}

// 6) findMaxCalories: maximum keresés (programozási tétel: maximum)
function findMaxCalories(list) {
  if (!list || list.length === 0) return null;
  let max = list[0].calories;
  let maxRecipe = list[0];
  for (let r of list) {
    if (r.calories > max) { // elágazás
      max = r.calories;
      maxRecipe = r;
    }
  }
  return maxRecipe;
}

/* Egyéb segédfüggvény: addNumbers (aritmetika + paraméteres)
   például két szám összeadása, bemutató célból */
function addNumbers(a, b) {
  return Number(a) + Number(b);
}

/* exportálás böngésző környezethez (ha szükséges) */
window.recipes = recipes;
window.renderRecipes = renderRecipes;
window.filterByIngredient = filterByIngredient;
window.sumCalories = sumCalories;
window.findRecipeByName = findRecipeByName;
window.isVegan = isVegan;
window.findMaxCalories = findMaxCalories;
window.addNumbers = addNumbers;
