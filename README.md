# Grupinis Darbas - JavaScript Užduotys

## 📁 Projekto Struktūra

```
projekt-repo/
│
├── index.html          # Pagrindinis HTML failas (Team Lead)
├── style.css           # Bendras CSS failas (Team Lead)
├── script.js           # Pavyzdinis JS failas (nereikalingas)
├── README.md           # Šis failas
│
├── narys1/             # Pirmojo grupės nario folderis
│   ├── script1.js      # Jo JavaScript failas
│   └── style1.css      # Jo CSS failas (jei reikia)
│
├── narys2/             # Antrojo grupės nario folderis
│   ├── script2.js
│   └── style2.css
│
├── narys3/             # Trečiojo grupės nario folderis
│   ├── script3.js
│   └── style3.css
│
└── narys4/             # Ketvirtojo grupės nario folderis
    ├── script4.js
    └── style4.css
```

## 🎯 Užduočių Sąrašas

### 1. Atsitiktinė spalva
Mygtukas, kurio spalva keičiasi į atsitiktinę paspaudus.

### 2. Formos keitimas
Mygtukas keičia formą iš kvadrato į apskritimą ir atgal.

### 3. X ir O keitimas
Du mygtukai, kurių tekstai susikeičia paspaudus bet kurį.

### 4. Teksto kopijavimas
Input laukelis, kurio tekstas kopijuojamas į div elementą.

### 5. Skaičių sudėtis
Du input laukeliai skaičiams, div rodo sumą arba "Įveskite skaičius".

### 6. Range slankiklis
Range input (10-99), kurio reikšmė rodoma div elemente.

### 7. Spalvų keitimas
Kvadratas su tekstu ir du color picker - kvadrato ir teksto spalvoms.

### 8. Rūšiuotas sąrašas
Input + mygtukas, prideda žodžius į abėcėliškai rūšiuotą <ol> sąrašą.

### 9. Įdėti kvadratai
Trys įdėti div kvadratai - paspaudus rodo spalvą.

### 10. Spalvos API
Color picker + API: rodo spalvos pavadinimą iš https://www.thecolorapi.com/

## 👥 Darbo Eiga

### Team Lead:
1. ✅ Sukuria GitHub repozitoriją
2. ✅ Pakviečia grupės narius (Settings → Collaborators)
3. ✅ Sukuria `index.html` failą
4. ✅ Sukuria bendrą `style.css` failą
5. ✅ Paruošia GitHub Pages (žr. žemiau)
6. ✅ Pasirenka ir atlieka bent vieną užduotį savo folderyje

### Grupės nariai:
1. ✅ Priima kvietimą į repozitoriją
2. ✅ Susikuria savo folderį (pvz., `narys1/`)
3. ✅ Pasirenka užduotis (bent vieną)
4. ✅ Savo folderyje sukuria `.js` ir `.css` failus
5. ⚠️ **NIEKADA nekeičia kitų narių failų!**

## 🚀 GitHub Pages Nustatymas

### Team Lead'as atlieka šiuos žingsnius:

1. **GitHub repozitorijoje:**
   - Eik į `Settings`
   - Kairėje meniu pasirink `Pages`
   - "Source" nustatyk į `Deploy from a branch`
   - "Branch" pasirink `main` (arba `master`) → `/root` → Save

2. **Palaukti 1-2 minutes**
   - GitHub sukurs svetainę
   - URL bus: `https://[username].github.io/[repo-name]/`

3. **Patikrinti**
   - Grįžk į `Pages` nustatymus
   - Viršuje pamatysi: "Your site is live at..."
   - Paspausk nuorodą ir patikrink!

## 💡 Svarbios Taisyklės

### ✅ GALIMA:
- Dirbti tik savo folderyje
- Kurti savo `.js` ir `.css` failus
- Bendrauti su kitais nariais dėl kodo

### ❌ NEGALIMA:
- Keisti kitų narių failų
- Modifikuoti kitų kodo be leidimo
- Dirbti ne savo erdvėje

### Kodėl?
Tiesioginis kitų kodo keitimas sukels **merge konfliktus**, kuriuos dar nemokame spręsti!

## 📝 Kaip Prijungti Savo JavaScript?

Team Lead'as `index.html` faile, prieš `</body>` tagą, prideda:

```html
<!-- Grupės narių JavaScript failai -->
<script src="narys1/script1.js"></script>
<script src="narys2/script2.js"></script>
<script src="narys3/script3.js"></script>
<script src="narys4/script4.js"></script>
```

## 🔧 Git Komandos (Priminti)

```bash
# Klonuoti repozitoriją
git clone [repo-url]

# Patikrinti būseną
git status

# Pridėti failus
git add .

# Commit su žinute
git commit -m "Pridėta užduotis 1"

# Išsiųsti į GitHub
git push

# Gauti naujausius pakeitimus
git pull
```

## 🎓 Atsiskaitymas

- Team Lead demonstruoja GitHub Pages
- Atsiskaito visa grupė arba niekas
- Tai **komandinis** darbas!

## ✨ Patarimai

1. **Komunikacija** - svarbiausias dalykas grupėje
2. **Git commit dažnai** - geriau per daug nei per mažai
3. **Testuokite lokaliai** - prieš push'inant
4. **Klauskite** - jei kažkas neaišku
5. **Padėkite** - kolegoms, kai jie prašo

## 📞 Pagalba

Jei kyla klausimų:
- Pasitarkite grupėje
- Pasižiūrėkite dokumentaciją
- Paklauskite dėstytojo

---

**Sėkmės su grupiniu darbu! 🚀**
