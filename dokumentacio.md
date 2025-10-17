# Dokumentáció — Fenntartható Receptek

## Projekt neve a GitHubon
`teljesenvedkisbetuvel_8E2D0F39` (publikus repozitórium)

## Miről szól a weboldal?
Ez a weboldal egyszerű, oktatási céllal készült demo: fenntartható, növényi alapú recepteket mutat be. A cél kettős: bemutatni néhány receptet és demonstrálni a webprogramozás alapfogalmait JavaScript használatával.

## Milyen technológiákkal készült?
- HTML (3 statikus oldal: `index.html`, `recipes.html`, `about.html`)
- CSS (egyszerű stílus a `css/styles.css`-ben)
- JavaScript (fő logika a `js/main.js`-ben, kliensoldali)
- Nincs szükség szerveroldali kódra; a repo publikusan GitHub Pages-sel is kiexportálható.

## Az egyes részek és függvények rövid leírása
- `index.html` — főoldal, gyors összegzést jelenít meg (példa: kalóriaszámítás).
- `recipes.html` — receptlista; szűrés összetevő alapján; név szerinti keresés.
- `about.html` — leírás a projektről és használt technológiákról.
- `css/styles.css` — egyszerű, letisztult stílus.
- `js/main.js` — minden logika:
  - `recipes` — tömb, tartalmazza a receptobjektumokat.
  - `renderRecipes(list)` — kirajzolja a receptlistát a DOM-ba.
  - `filterByIngredient(term)` — paraméteres függvény; visszaadja a recepteket, amelyek tartalmazzák a megadott összetevőt (tömb + ciklus + logika).
  - `sumCalories(arrayOfCalories)` — összegzi a megadott kalóriaszámokat (programozási tétel: **összegzés**).
  - `findRecipeByName(name)` — név alapján keres (programozási tétel: **keresés**).
  - `isVegan(recipe)` — egyszerű logikai ellenőrzés (van-e nem-vegán összetevő).
  - `findMaxCalories(list)` — visszaadja a legmagasabb kalóriájú receptet (programozási tétel: **maximum keresés**).
  - `addNumbers(a, b)` — bemutató aritmetikai függvény (paraméteres).

## Hol találhatók a követelmények?
1. **Legalább 3 oldal:** `index.html`, `recipes.html`, `about.html`.
2. **Legalább 4 JS függvény:** több, például `renderRecipes`, `filterByIngredient`, `sumCalories`, `findRecipeByName`, `isVegan`, `findMaxCalories`, `addNumbers`.
3. **Kötelező elemek:**
   - aritmetikai műveletek: `addNumbers` és `sumCalories`.
   - logikai műveletek: `isVegan` (boolean logika).
   - elágazás: `if` használat több helyen.
   - tömb: `recipes`.
   - ciklus: `for` ciklusok használata.
   - függvény: fentiek.
4. **Programozási tétel alkalmazása:** `sumCalories` (összegzés), `findRecipeByName` (keresés), `findMaxCalories` (maximum) — legalább egy tétel teljesül.

## Használati útmutató (lokális futtatás)
1. Másold le a fájlokat a repóból egy mappába:
