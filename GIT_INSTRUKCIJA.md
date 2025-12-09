# Git Darbo Instrukcija Grupiniam Darbui

## 🎯 Pagrindinis Principas

**Kiekvienas dirba tik savo folderyje!**

Tai padės išvengti konfliktų ir problemų.

## 📋 Pradžia

### Team Lead:
 
1. **Sukurti GitHub repozitoriją:**
   ```bash
   # Lokaliai
   git init
   git add .
   git commit -m "Pradinis commit"
   git branch -M main
   git remote add origin [repo-url]
   git push -u origin main
   ```

2. **Pakviesti grupės narius:**
   - GitHub → Settings → Collaborators
   - Add people → Įvesti email arba username

### Grupės nariai:

1. **Klonuoti repozitoriją:**
   ```bash
   git clone [repo-url]
   cd [repo-name]
   ```

2. **Sukurti savo folderį:**
   ```bash
   mkdir narysX
   cd narysX
   touch scriptX.js
   ```

## 🔄 Kasdieninis Darbas

### Prieš pradedant dirbti - VISADA:

```bash
# 1. Gauk naujausius pakeitimus
git pull

# 2. Patikrink kokioje branch'e esi
git branch

# Turėtum būti 'main' arba 'master'
```

### Dirbant:

```bash
# Patikrinti ką pakeitei
git status

# Peržiūrėti pakeitimus
git diff
```

### Baigus užduotį:

```bash
# 1. Pridėti savo failus
git add narysX/

# Arba pridėti viską (ATSARGIAI!)
git add .

# 2. Commit su aiškia žinute
git commit -m "Pridėta užduotis 1: atsitiktinės spalvos mygtukas"

# 3. Pasiimti naujausius pakeitimus (jei kas nors pushino)
git pull

# 4. Išsiųsti į GitHub
git push
```

## ⚠️ Konfliktų Vengimas

### ✅ GERAI:

```bash
# Dirbi tik savo folderyje
git add narys1/
git commit -m "Pridėta užduotis"
```

### ❌ BLOGAI:

```bash
# Keiti kitų failus
git add narys2/script2.js  # NE!
git add index.html  # NE! (nebent esi Team Lead)
```

### Kas daryti jei vis tiek atsirado konfliktas?

```bash
# 1. Pasiimk naujausius pakeitimus
git pull

# 2. Jei Git rodo konfliktą:
# - Atsidaryk failą kuriame konfliktas
# - Ieškokite šių simbolių:
<<<<<<< HEAD
jūsų kodas
=======
kito nario kodas
>>>>>>> branch-name

# 3. Pašalinkite konfliktą:
# - Ištrinkite visus <<<, ===, >>> simbolius
# - Palikite reikiamą kodą

# 4. Pridėkite failą ir commit
git add .
git commit -m "Išspręstas konfliktas"
git push
```

## 📝 Commit Žinučių Pavyzdžiai

### ✅ Geros žinutės:

```bash
git commit -m "Pridėta užduotis 1: atsitiktinės spalvos mygtukas"
git commit -m "Pataisytas tekstas užduotyje 4"
git commit -m "Pridėti CSS stiliai mygtukams"
git commit -m "Sukurtas narys2 folderis su pradine struktūra"
```

### ❌ Blogos žinutės:

```bash
git commit -m "update"
git commit -m "fix"
git commit -m "asdfsadf"
git commit -m "done"
```

## 🔍 Naudingos Komandos

```bash
# Patikrinti kas pakeitė ką
git log

# Pamatyti pakeitimus gražiau
git log --oneline --graph

# Patikrinti kas pakeitė konkretų failą
git log narys1/script1.js

# Pamatyti kas padarė kokius pakeitimus
git blame narys1/script1.js

# Atsaukti pakeitimus (nenusaugotus)
git checkout -- failo_vardas

# Pamatyti branch'us
git branch

# Pamatyti remote repozitoriją
git remote -v
```

## 🎯 Darbo Eiga Praktiškai

### Pavyzdys - Narys pradeda užduotį:

```bash
# 1. Atsidaryk terminalą projekto folderyje
cd kelias/iki/projekto

# 2. Pasiimk naujausius pakeitimus
git pull

# 3. Sukurk savo folderį (jei dar nesukūrei)
mkdir narys1
cd narys1

# 4. Sukurk failus
touch script1.js
touch style1.css

# 5. Pradėk koduoti...
# (rašai kodą Visual Studio Code ar kitu editor'iuje)

# 6. Patikrink kas padaryta
git status

# 7. Pridėk savo pakeitimus
git add narys1/

# 8. Commit
git commit -m "Pradėta užduotis 1 ir 4"

# 9. Push
git pull  # Pirmiausia pasiimk naujausius
git push  # Tada siųsk savo
```

### Pavyzdys - Team Lead atnaujina index.html:

```bash
# 1. Atsidaryk terminalą
cd kelias/iki/projekto

# 2. Pasiimk naujausius pakeitimus
git pull

# 3. Redaguok index.html
# (pridedi <script> tag'us narių failams)

# 4. Patikrink
git status

# 5. Pridėk
git add index.html

# 6. Commit
git commit -m "Pridėti script tag'ai narių failams"

# 7. Push
git pull
git push
```

## 🆘 Pagalba

### Klaida: "rejected - non-fast-forward"

```bash
# Kažkas pushino prieš tave
git pull
git push
```

### Klaida: "Please commit your changes or stash them"

```bash
# Turi neišsaugotų pakeitimų
git stash  # Laikinai paslėpti pakeitimus
git pull   # Pasiimti naujausius
git stash pop  # Grąžinti savo pakeitimus
```

### Klaida: "fatal: not a git repository"

```bash
# Nesi projekto folderyje arba nėra git repo
cd [projekto-folderis]
# arba
git init  # Jei tikrai dar nesukūrei repo
```

## 💡 Patarimai

1. **`git pull` prieš pradedant dirbti** - VISADA
2. **`git pull` prieš pushint** - VISADA
3. **Commit dažnai** - geriau per daug nei per mažai
4. **Aiškios commit žinutės** - ateityje padėkosi sau
5. **Nedirk master/main branch'e** - geriau dirk savo folderyje
6. **Nekeis kitų failų** - išvengsi konfliktų
7. **Testuok lokaliai** - prieš pushindamas

## 🎓 Git Vizualizacija

```
GitHub (Remote)
    ↑ git push
    ↓ git pull
Tavo kompiuteris (Local)
    Working Directory (redaguoji failus)
        ↓ git add
    Staging Area (paruošti commit'ui)
        ↓ git commit
    Local Repository (išsaugoti pakeitimai)
```

---

**Laikykis šių taisyklių ir viskas bus gerai! 🚀**

### Prisimink:
- `git pull` PRIEŠ pradedant
- `git pull` PRIEŠ pushinant
- Dirbi tik savo folderyje
- Aiškios commit žinutės
