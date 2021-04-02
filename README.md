# 🍕 fnook 🍕

EGU Hugo-Jean 😇

LEIB Adrien 😎

## 🖥️ List of node modules to install 🖥️
```
npm install
```

## 🧪 How to Start the project 🧪
- place yourself at the root of the project
```
yarn start
```


## 📖 List of available routes 📖 
- /login -> login to acces of the project (compte: admin ou autre / pas de mdp)
- / -> Display the first 4 items of Villagers, Fishs, Bugs and Artworks
- /villagers -> Display all Villagers
- /fishs -> Display all Fishs
- /bugs -> Display all Bugs
- /artworks -> Display all artworks
- /items/:id -> Display all items for sale based on the given item name
- /item/:id -> Display item for sale with her id
- /profil -> Display the profil of current user
- /basket -> Display the basket of the current user
- /basket/sucess -> Valide basket after paye (remove all items in basket)
- /basket/checkout -> Checkout basket before paye
- /purchases -> Display all purchases of current user
- /sale -> Display all sale of current user
- /sale/form -> Form for create sale
- /sale/form/:id -> Form for update sale (accessible if current user are seller)
- /admin -> panel of admin

## 🤝 Production 🤝
- https://fnook.herokuapp.com

PS: Si le site heroku n'est pas chargé depuis longtemps, il peut arriver que le site affiche un msg d'erreur : c'est un timeout, car l'application effectue un requete get sur "/" alors que l'application n'a pas rebuild encore. Il suffit de reload la page.

Ci-joint la preuve de mes propos :

ScreenshotLog.png![image](https://user-images.githubusercontent.com/12957553/113265727-c58ce780-92d4-11eb-8daa-981945e1270f.png)

