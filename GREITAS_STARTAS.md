# 🚀 GREITAS STARTAS

## Kas čia yra?

Tai **pilnas starteris kit'as** jūsų grupiniam JavaScript darbui. Viskas jau paruošta!

## 📦 Kas viduje?

### Veikiantis projektas:
- ✅ HTML su visomis 10 užduotimis
- ✅ CSS su profesionaliais stiliais
- ✅ JavaScript su veikiančiomis užduotimis (pavyzdžiui)
- ✅ Responsive dizainas

### Instrukcijos:
- 📖 README.md - Projekto aprašymas
- 📖 GIT_INSTRUKCIJA.md - Kaip dirbti su Git
- 📖 UZUOMINOS.md - Užduočių sprendimo užuominos
- 📖 CHECKLIST.md - Kas reikia padaryti

### Struktūra:
```
📁 projektas/
├── index.html          ← Pagrindinis failas
├── style.css           ← Bendri stiliai
├── script.js           ← Pavyzdinis kodas (nereikalingas)
├── 📁 narys1/          ← Pavyzdinis folderis
│   ├── script1.js
│   └── style1.css
├── 📁 narys2/          ← Tuščias (jūsų)
├── 📁 narys3/          ← Tuščias (jūsų)
├── 📁 narys4/          ← Tuščias (jūsų)
├── 📁 narys5/          ← Tuščias (jūsų)
└── 📁 narys6/          ← Tuščias (jūsų)
```

## 🎯 Kaip pradėti?

### 1. Team Lead:

```bash
# A. Išpakuok zip failą
unzip grupinis-darbas.zip -d mano-projektas
cd mano-projektas

# B. Sukurk GitHub repozitoriją:
# - Eik į github.com
# - Spausk "New repository"
# - Įvesk pavadinimą (pvz., "js-grupinis-darbas")
# - Nesirink "Add README" ar kitus failus
# - Spausk "Create repository"

# C. Prijunk projektą prie GitHub:
git init
git add .
git commit -m "Pradinis commit su visu projektu"
git branch -M main
git remote add origin https://github.com/TAVO-USERNAME/REPO-NAME.git
git push -u origin main

# D. Pakviesti grupės narius:
# GitHub → Settings → Collaborators → Add people
```

### 2. Grupės nariai:

```bash
# A. Klonuok repozitoriją:
git clone https://github.com/USERNAME/REPO-NAME.git
cd REPO-NAME

# B. Atidaryk naršyklėje:
# - Dukart spustelėk index.html
# - Arba naudok Live Server (VS Code extension)

# C. Pasirink užduotis ir pradėk koduoti!
```

## 💡 Svarbiausia

### ⚠️ LAIKYKIS TAISYKLIŲ:

1. **Dirb tik savo folderyje!**
   ```
   ✅ GERAI: narys2/script2.js
   ❌ BLOGAI: narys1/script1.js (ne tavo!)
   ```

2. **Git workflow:**
   ```bash
   git pull          # PRIEŠ pradedant
   # ... kodo rašymas ...
   git add narysX/
   git commit -m "Aprašymas"
   git pull          # PRIEŠ pushint
   git push
   ```

3. **Team Lead keičia index.html:**
   - Prideda grupės narių `<script>` tag'us
   - Redaguoja bendrus dalykus

## 🎨 Projektas jau veikia!

Atsidaryk `index.html` naršyklėje - **jau viskas veikia!**

`script.js` failas turi VISŲ užduočių sprendimus kaip pavyzdį. Galite:
- Palikti jį ir naudoti kaip pavyzdį
- Ištrinti ir rašyti savo kodą
- Kopijuoti sprendimus į savo folderius

## 📝 Užduočių pasiskirstymas

Nuspręskite kas ką darys:

| Užduotis | Kas daro | Būsena |
|----------|----------|--------|
| 1. Atsitiktinė spalva | ? | ⬜ |
| 2. Formos keitimas | ? | ⬜ |
| 3. X ir O keitimas | ? | ⬜ |
| 4. Teksto kopijavimas | ? | ⬜ |
| 5. Skaičių sudėtis | ? | ⬜ |
| 6. Range slankiklis | ? | ⬜ |
| 7. Spalvų keitimas | ? | ⬜ |
| 8. Rūšiuotas sąrašas | ? | ⬜ |
| 9. Įdėti kvadratai | ? | ⬜ |
| 10. Spalvos API | ? | ⬜ |

## 🌐 GitHub Pages

Kai baigsite, Team Lead aktyvuoja GitHub Pages:

1. GitHub → Settings → Pages
2. Source: Deploy from branch
3. Branch: main → /root → Save
4. Palaukti 1-2 minutes
5. Gauti URL ir testuoti!

## 📚 Dokumentacija

Visi failai turi detalesnes instrukcijas:
- **README.md** - Pilnas projekto aprašymas
- **GIT_INSTRUKCIJA.md** - Išsami Git instrukcija
- **UZUOMINOS.md** - Kaip spręsti kiekvieną užduotį
- **CHECKLIST.md** - Darbo eigos checklist'as

## 🆘 Pagalba

Jei kažkas neveikia:
1. Perskaityk GIT_INSTRUKCIJA.md
2. Perskaityk UZUOMINOS.md
3. Paklausk grupės
4. Paklausk dėstytojo

## ✨ Patarimai

- **Testuok dažnai** - atidaryk naršyklėje ir tikrink
- **Commit dažnai** - geriau per daug nei per mažai
- **Klausk klausimų** - grupės narių ar dėstytojo
- **Padėk kitiems** - tai komandinis darbas!

---

## 🎉 TU ESI PASIRUOŠĘS!

Viskas jau sukurta ir veikia. Belieka:
1. Sukurti GitHub repo
2. Pasiskirstyti užduotimis
3. Koduoti savo folderiuose
4. Testuoti ir commit'inti
5. Aktyvuoti GitHub Pages
6. Atsiskaityti!

**Sėkmės! 🚀**

---

P.S. Projektas **jau veikia** - atidaryk `index.html` ir pamatysi! Dabar tik reikia pasiskirstyti užduotimis ir pradėti koduoti savo folderiuose.
