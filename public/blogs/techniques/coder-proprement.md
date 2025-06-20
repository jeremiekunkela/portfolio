# Coder proprement : Les bonnes pratiques à adopter

La qualité du code est essentielle pour garantir la maintenabilité, la lisibilité et l’évolutivité d’un projet. Voici quelques conseils pour coder proprement.

## 1. Utiliser une convention de nommage

Adoptez une convention de nommage cohérente (camelCase, snake_case, PascalCase) pour vos variables, fonctions et classes.

```javascript
// Mauvais exemple
var nbutilisateur = 10;

// Bon exemple
let numberOfUsers = 10;
```

## 2. Commenter intelligemment

Commentez votre code pour expliquer le "pourquoi", pas le "comment". Le code doit être suffisamment clair pour expliquer le "comment".

```python
# Mauvais commentaire
i = i + 1  # Incrémente i

# Bon commentaire
i = i + 1  # Passe à l'utilisateur suivant dans la liste
```

## 3. Éviter la duplication de code

Utilisez des fonctions ou des classes pour éviter de répéter le même code à plusieurs endroits.

```java
// Mauvais exemple
System.out.println("Bienvenue !");
System.out.println("Bienvenue !");

// Bon exemple
void afficherBienvenue() {
    System.out.println("Bienvenue !");
}
```

## 4. Respecter le principe KISS

Keep It Simple, Stupid : privilégiez la simplicité dans vos solutions.

## 5. Écrire des tests

Les tests automatisés permettent de s’assurer que votre code fonctionne comme prévu et facilitent les modifications futures.

---

En appliquant ces bonnes pratiques, vous améliorez la qualité de votre code et facilitez la collaboration avec d’autres développeurs.