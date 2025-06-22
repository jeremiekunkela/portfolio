Dans cet article, je vous propose de plonger dans un autre pilier du développement logiciel : **la programmation fonctionnelle**. Ce que vous allez lire est le fruit de mes expériences et surtout de mon quotidien de développeur, où ce paradigme a changé ma façon de concevoir le code.

C'est chez KMB Labs que j'ai vraiment pris le virage du fonctionnel. Là-bas, la programmation fonctionnelle n'était pas juste une théorie : c'était la base de notre façon de travailler, un réflexe partagé par toute l'équipe. Je ne jurais que par les fonctions pures, l'immuabilité, et la composition. Au début, j'avoue que ça m'a un peu dérouté : moi qui venais d'un monde très orienté objet, je voyais débarquer des concepts comme « pas d'effet de bord », « pas de mutation », « tout est fonction ». Mais très vite, j'ai compris l'intérêt : moins de bugs, un code plus prévisible, et surtout une facilité incroyable à tester et à faire évoluer mes applications.

## Définition de la programmation fonctionnelle

La programmation fonctionnelle, ce n'est pas une mode réservée à quelques puristes. C'est avant tout une manière de penser mon code : je privilégie les fonctions qui transforment des données sans jamais les modifier directement, j'évite les effets de bord, et je cherche à rendre chaque morceau de code aussi prévisible qu'une formule mathématique.

En pratique, cela veut dire : pas de variables globales qui changent dans tous les sens, pas de fonctions qui font dix choses à la fois, et surtout, une grande confiance dans le fait que « si j'appelle cette fonction avec les mêmes paramètres, j'aurai toujours le même résultat ». C'est cette prévisibilité qui transforme complètement mon rapport au code.

Quand j'ai commencé à appliquer ces principes, j'ai tout de suite vu la différence : moins de bugs, moins de surprises, et surtout, un code beaucoup plus facile à relire et à tester. Je n'ai plus besoin de me demander « qu'est-ce qui a bien pu changer cette variable ? » ou « pourquoi ce tableau ne contient plus les bonnes valeurs ? ». Tout devient plus transparent.

## Les bases : fonctions pures et immuabilité

### Les fonctions pures : le fondement de tout

Le cœur de la programmation fonctionnelle, c'est la notion de **fonction pure**. Une fonction pure, c'est une fonction qui, pour les mêmes entrées, donnera toujours la même sortie, sans jamais modifier quoi que ce soit autour d'elle.

Prenons un exemple très simple : additionner deux nombres.

```javascript
function add(a, b) {
  return a + b;
}
```

Ici, pas de surprise : si j'appelle `add(2, 3)`, j'aurai toujours 5. Cette fonction est pure car elle ne modifie rien à l'extérieur d'elle-même et son résultat est entièrement déterminé par ses paramètres.

À l'inverse, une fonction qui modifie une variable globale ou qui dépend d'un état extérieur n'est plus pure :

```javascript
let total = 0;
function addToTotal(a) {
  total += a;
  return total;
}
```

Là, le résultat dépend de la valeur de `total` avant l'appel, et chaque appel modifie ce total. C'est le genre de code qui peut vite devenir incontrôlable dans une grosse application.

### L'immuabilité : ne jamais modifier, toujours créer

L'autre pilier, c'est **l'immuabilité**. Ça veut dire : je ne modifie jamais directement une donnée, j'en crée une nouvelle à chaque transformation.

Au début, ça peut sembler bizarre, surtout si j'ai l'habitude de faire des `array.push()` ou de changer les propriétés d'un objet à la volée. Mais en pratique, ça évite énormément de bugs liés à l'état partagé.

```javascript
// Au lieu de cela :
const grades = [12, 15, 18];
grades.push(20); // Modification directe

// Je fais ceci :
const grades = [12, 15, 18];
const newGrades = [...grades, 20]; // Création d'un nouveau tableau
```

Résultat : je sais que `grades` n'a pas changé, et je peux faire confiance à la donnée d'origine partout où elle est utilisée.

## La composition : assembler des fonctions comme des LEGO

### Construire des solutions complexes avec des briques simples

La composition de fonctions, c'est l'art d'assembler plusieurs fonctions simples pour créer des comportements complexes. C'est exactement comme assembler des LEGO : chaque pièce a un rôle précis, et c'est leur combinaison qui crée quelque chose de grand.

Chez KMB Labs, j'ai appris à décomposer chaque problème en petites fonctions spécialisées, puis à les combiner intelligemment. Cette approche a révolutionné ma façon de concevoir les solutions.

```javascript
// Fonctions simples et spécialisées
const clean = (str) => str.trim().toLowerCase();
const validate = (str) => str.length > 0;
const format = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Composition pour créer une fonction plus complexe
const processText = (str) => {
  const cleaned = clean(str);
  if (!validate(cleaned)) throw new Error("Texte invalide");
  return format(cleaned);
};
```

### Pipeline de données : la beauté du flux

Le concept de pipeline de données est l'une des beautés de la programmation fonctionnelle. Plutôt que d'écrire du code impératif avec des variables temporaires, je crée un flux de transformations successives.

```javascript
// Avant : style impératif
function processUsers(users) {
  const actives = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].active) {
      actives.push(users[i]);
    }
  }

  const withEmail = [];
  for (let i = 0; i < actives.length; i++) {
    if (actives[i].email) {
      withEmail.push(actives[i]);
    }
  }

  const names = [];
  for (let i = 0; i < withEmail.length; i++) {
    names.push(withEmail[i].name);
  }

  return names;
}

// Après : style fonctionnel
const processUsers = (users) =>
  users
    .filter((user) => user.active)
    .filter((user) => user.email)
    .map((user) => user.name);
```

La version fonctionnelle exprime clairement mon intention : filtrer les utilisateurs actifs, garder ceux avec un email, et extraire leurs noms. C'est lisible, concis, et sans état intermédiaire.

## Map, Filter, Reduce : mes outils du quotidien

### Map : transformer chaque élément

`Map` est probablement la fonction que j'utilise le plus au quotidien. Elle transforme chaque élément d'un tableau selon une fonction donnée, sans modifier le tableau original.

```javascript
const prices = [10, 25, 35, 50];
const pricesWithTax = prices.map((p) => p * 1.2);
// Résultat : [12, 30, 42, 60]
```

Cette simplicité cache une puissance énorme. Avec `map`, je peux transformer des objets complexes, extraire des propriétés, ou appliquer des calculs sur des collections entières.

### Filter : garder ce qui m'intéresse

`Filter` sélectionne les éléments qui respectent une condition. C'est l'outil parfait pour nettoyer des données ou extraire des sous-ensembles.

```javascript
const products = [
  { name: "Laptop", price: 800, stock: 5 },
  { name: "Mouse", price: 25, stock: 0 },
  { name: "Keyboard", price: 60, stock: 12 },
];

const available = products.filter((p) => p.stock > 0);
const expensive = products.filter((p) => p.price > 50);
```

### Reduce : l'outil ultime de transformation

`Reduce` est le plus puissant de tous. Il peut transformer un tableau en n'importe quoi : un nombre, un objet, un autre tableau, etc.

```javascript
const orders = [
  { amount: 150, status: "paid" },
  { amount: 200, status: "paid" },
  { amount: 75, status: "cancelled" },
];

// Calculer le total des commandes payées
const totalPaid = orders
  .filter((o) => o.status === "paid")
  .reduce((total, order) => total + order.amount, 0);
```

## Mon approche pratique : refactorer vers le fonctionnel

### Identifier les points de mutation

Quand je reprends du code existant, je commence toujours par identifier les endroits où l'état est modifié. Ces points de mutation sont souvent la source de bugs difficiles à tracer.

#### Cas concret : refactoring d'un panier d'achat

Prenons un exemple simple de gestion de panier d'achat, d'abord en style impératif, puis en style fonctionnel :

```javascript
// Version impérative (problématique)
let cart = { items: [], total: 0 };

function addItem(cart, item) {
  cart.items.push(item);
  cart.total = 0;
  for (let i = 0; i < cart.items.length; i++) {
    cart.total += cart.items[i].price * cart.items[i].quantity;
  }
}
```

Dans cette version, la fonction modifie directement l'objet `cart` passé en argument, ce qui peut entraîner des effets de bord difficiles à contrôler.

```javascript
// Version fonctionnelle (robuste)
const addItem = (cart, item) => {
  const newItems = [...cart.items, item];
  const total = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  return { items: newItems, total };
};
```

Ici, chaque ajout d'article retourne un nouveau panier, sans modifier l'ancien. Cette approche rend le code plus prévisible et plus facile à tester.

La version fonctionnelle élimine tous les effets de bord et garantit que chaque opération produit un nouveau panier sans modifier l'existant.

## Les bénéfices concrets au quotidien

### Tests simplifiés

Les fonctions pures sont incroyablement faciles à tester. Pas besoin de mocker des dépendances ou de configurer un état complexe : je donne des entrées, je vérifie les sorties.

```javascript
// Test d'une fonction pure
describe("calculateDiscount", () => {
  it("applique 10% de réduction au-dessus de 100", () => {
    expect(calculateDiscount(150)).toBe(135);
  });

  it("n'applique pas de réduction en dessous de 100", () => {
    expect(calculateDiscount(80)).toBe(80);
  });
});
```

### Debugging facilité

Avec des fonctions pures, le debugging devient linéaire. Chaque fonction ayant un rôle précis et ne dépendant que de ses paramètres, il me suffit de suivre le flux de données pour identifier le problème.

### Réutilisabilité maximale

Les petites fonctions pures sont naturellement réutilisables. Une fois écrite, une fonction comme `calculerTTC` peut servir partout dans l'application sans risque d'effet de bord.

## Performance et optimisation

### Mémoisation : éviter les calculs redondants

La programmation fonctionnelle facilite l'optimisation par mémoisation. Puisque les fonctions pures donnent toujours le même résultat pour les mêmes entrées, je peux mettre en cache les résultats coûteux.

```javascript
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

const complexCalculation = memoize((n) => {
  // Calcul coûteux...
  return n * n * n;
});
```

### Évaluation paresseuse

Certains calculs peuvent être différés jusqu'à ce qu'ils soient vraiment nécessaires. Cette approche optimise les performances en évitant les calculs inutiles.

## Défis et solutions pratiques

### Gérer l'asynchrone fonctionnellement

L'asynchrone peut sembler compliqué avec la programmation fonctionnelle, mais des outils comme les [Promises](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) et [`async`/`await`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function) s'intègrent parfaitement dans ce paradigme.

```javascript
const processUsers = async (ids) =>
  Promise.all(
    ids
      .map((id) => fetch(`/api/users/${id}`))
      .map(async (promise) => (await promise).json())
  );
```

### Équilibrer pureté et pragmatisme

En pratique, il faut savoir doser. Certains effets de bord sont nécessaires (logging, sauvegarde en base, etc.). L'important est de les isoler et de les rendre explicites.

```javascript
// Fonction pure pour la logique métier
const calculateOrder = (items, promoCode) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const discount = applyPromo(subtotal, promoCode);
  return { subtotal, discount, total: subtotal - discount };
};

// Fonction impure pour les effets de bord
const saveOrder = async (order) => {
  await log("Sauvegarde de la commande", order.id);
  return await database.save(order);
};
```

## Mon workflow fonctionnel

### Décomposition systématique

Face à un problème complexe, je commence toujours par identifier les transformations nécessaires. Chaque transformation devient une fonction pure, et l'assemblage final crée la solution complète.

### Réflexes de développement

Mes réflexes quotidiens se sont adaptés au fonctionnel :

- Je préfère toujours `map`, `filter`, `reduce` aux boucles `for`
- J'évite les mutations directes avec [`push`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [`pop`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), [`splice`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- J'utilise la déstructuration et le [spread operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) pour créer de nouveaux objets ([MDN : Rest parameters](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters))
- Je pense en termes de transformations plutôt que de modifications

### Outils et helpers

Une fois le concept maîtrisé, il peut être intéressant de constituer sa propre bibliothèque de petites fonctions utilitaires réutilisables. Cela permet de gagner en efficacité et d'appliquer plus facilement les principes fonctionnels dans tous ses projets.

```javascript
// Compose plusieurs fonctions de gauche à droite
const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

// Compose plusieurs fonctions de droite à gauche
const compose =
  (...fns) =>
  (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);

// Application partielle d'une fonction
const partial =
  (fn, ...args1) =>
  (...args2) =>
    fn(...args1, ...args2);

// Transforme une fonction à plusieurs arguments en une succession de fonctions unaires (currying)
const curry =
  (fn) =>
  (...args) =>
    args.length >= fn.length ? fn(...args) : curry(fn.bind(null, ...args));
```

## Impact sur l'équipe et les projets

### Collaboration améliorée

Le code fonctionnel facilite grandement la collaboration. Les fonctions pures étant prévisibles et sans effet de bord, plusieurs développeurs peuvent travailler sur le même code sans risque de conflits subtils.

### Maintenance facilitée

Les projets que j'ai développés en fonctionnel sont beaucoup plus faciles à maintenir. Les bugs sont plus rares, plus faciles à localiser, et les évolutions se font sans crainte de casser l'existant.

## Conclusion

La programmation fonctionnelle n'est pas qu'un paradigme théorique : c'est un outil pratique qui transforme la façon dont je conçois et écris le code. Mon expérience chez KMB Labs me l'a prouvé au quotidien : moins de bugs, un code plus prévisible, et une facilité de maintenance incomparable.

Le passage du monde orienté objet au fonctionnel demande un changement de mentalité, mais les bénéfices sont immédiats. Quand je commence à penser en termes de transformations plutôt que de mutations, en fonctions pures plutôt qu'en objets stateful, tout devient plus clair et plus robuste.

Ces méthodes ont drastiquement amélioré la qualité de mon code. C'est l'occasion de développer dès maintenant cette sensibilité fonctionnelle qui distingue les développeurs expérimentés.

Je me rappelle toujours : **mon code n'est pas fait pour être écrit une fois, mais pour être lu et modifié des centaines de fois**. Je le rends donc aussi prévisible et transparent que possible !

---
Je précise que mon exploration de la programmation fonctionnelle est toujours en cours. Certaines notions avancées n'ont pas été traitées ici par choix éditorial, afin de rester centré sur les fondamentaux et les retours d'expérience concrets.  
Si vous souhaitez aller plus loin sur la programmation fonctionnelle, je vous recommande la lecture de [Mostly Adequate Guide (en anglais)](https://mostly-adequate.gitbook.io/mostly-adequate-guide).
