# Dokumentáció

## Téma: Újpest bemutató weboldal

A weboldal az Újpest FC csapatát mutatja be.  
A cél egy egyszerű, informatív és interaktív weboldal létrehozása volt, amely három fő részből áll:  
- a főoldal (bemutatás és navigáció),  
- a „Rólunk” oldal (történelem, stadion, eredmények),  
- és a „Játékosok” oldal (interaktív táblázat és JavaScript funkciók).  

A weboldal reszponzív kialakítású, vagyis mobilon és asztali gépen is megfelelően jelenik meg.

---

## Felhasznált technológiák

- **HTML** – az oldal szerkezete (több lapos felépítés, menü, képek)
- **CSS** – a stílusok, elrendezés és animációk (grid, flexbox, hover-effektek, media query)
- **JavaScript** – az interaktív funkciók, számítások és adatszűrés megvalósítására

---

## Oldalak és funkciók

### 1. `index.html`
- A főoldal, amely tartalmaz egy menüt, hősrészt és három információs kártyát.  
- A menüben almenük is találhatók (pl. a „Rólunk” menüpont alatt).  
- CSS animációval mozgó képet tartalmaz.  

### 2. `about.html`
- A csapat történetét, stadionját és eredményeit mutatja be.  
- Három alcímre van tagolva, hogy a menü almenüi működjenek.  

### 3. `players.html`
- Interaktív oldal, ahol:
  - névre vagy pozícióra lehet **keresni** a játékosok között,
  - különböző **aritmetikai és logikai műveletek** hajthatók végre (összegzés, maximum keresés),
  - több **JavaScript függvény** kerül bemutatásra.  

---

## JavaScript függvények

| Függvény neve | Leírás | Programozási tétel / művelet |
|----------------|--------|------------------------------|
| `add(a, b)` | Két szám összeadása. | Aritmetikai művelet |
| `isEven(n)` | Ellenőrzi, hogy egy szám páros-e. | Logikai művelet + elágazás |
| `filterPlayers(query)` | Keresés a játékosok között név vagy pozíció alapján. | Keresés / kiválasztás tétel |
| `findMaxNumber(arr)` | Megkeresi a tömb legnagyobb elemét ciklus segítségével. | Maximum keresés |
| `sumArray(arr)` | Összegzi a tömb elemeit. | Összegzés tétel |

---

## Alkalmazott programozási tételek

- **Összegzés** (`sumArray`)
- **Maximum keresés** (`findMaxNumber`)
- **Keresés/kiválasztás** (`filterPlayers`)

Mindhárom tétel jól elkülöníthető a `script.js` fájlban, a kód egyszerű, oktatási célra készült.

---

## Összegzés

A weboldal megfelel a projekt követelményeinek:
- Legalább **3 oldalból** áll.  
- **4+ különböző JavaScript függvényt** tartalmaz, paraméteres is van.  
- Használ **aritmetikai és logikai műveletet**, **tömböt**, **ciklust**, **elágazást** és **függvényeket**.  
- Tartalmaz **animációt**, **media query-t**, és **reszponzív elrendezést**.  
- A forrásfájlok áttekinthetők, a GitHub feltöltéshez készek.

---

**Repo neve:**  
`teljesenvedkisbetuvel_8E2D0F39`
