# User Authentication API

<!-- [![ALIU|Shpetim](https://bdesign-agency.com/wp-content/uploads/2023/04/dTxpPi9lDf.thumb_-1.png)](https://codepen.io/shpetimaliu) -->

# Instructions for index.js ⚙️

This project is a simple web application that offers a registration form and login to an account. The application has been developed using Node.js and Express.

- The server will start on port 3000 📡

The application has a registration form and a login form. To log in, you need to register with an email and password. Before registering an account, a unique ID generated with crypto.randomBytes will be displayed above the email input.

# Features

- Sign up

To register an account, go to http://localhost:3000/signup in your browser. You will be prompted to enter your email address, password, and confirm your password. If the email address is not already in use and the passwords match, An account will be created and you will be registered as a user in the user.json file.

- Log in

To log in to your account, go to http://localhost:3000/login in your browser. You will be prompted to enter your email address and password. If the email address exists and the password is correct, you will be logged into your account.

- Log out

To log out of your account, go to http://localhost:3000/signout in your browser. You will log out of the account and a message will appear indicating that you are now logged out.

# Instructions for users.js ⚙️

This code is an implementation of a repository to store and manipulate data for users in a system. You can use this code to create, read, update, delete, and compare users.

This code is also implemented with cookie-session. Cookie-session is an Express middleware that allows storing user sessions as cookies.

This code is built using the JavaScript programming language and uses some built-in Node.js packages, such as fs, crypto, and util. It also uses the async/await functions to help manage asynchronous operations.

The userRepository class contains several methods to manipulate user data in a data storage system. These methods are:

- constructor(filename): The class constructor, which takes the name of the file for storing data as an argument.

- async getAll(): Returns all data from the users' file.

- async create(attrs): Creates a new record for a user in the users' file. The attrs argument is an object that contains data such as email and password for the new user.

- async comparePass(saved, supplied): Compares a user's stored password with the one provided by the user. The saved argument is the stored password, while the supplied argument is the password provided by the user.

- async writeAll(records): Writes all user data to the users' file.

- generateId(): Gives a new unique user ID in hexadecimal form created with crypto.randomBytes.

- async getById(id): Found a user record with a specified ID.

- async delete(id): Deletes a user record with a specified ID.

- async update(id, attrs): Updates a user record with a specified ID.

- async getOneBy(filters): Returns a user record found based on the given filters.

# Installation

    - git clone https://github.com/<username>/<repository-name>.git

# Install all necessary packages using npm:

    - npm install express

    - npm install nodemon

    - npm install cookie-session

    - npm install fs

    - npm install crypto

    - npm install util

# To make the code executable, simply type in the terminal:

    - npm run dev

# Contribute 👏

If you want to contribute to the project, you can open a pull request on GitHub and I will review your changes. Thank you for your interest in the project!

# Shqip

# API-i i vërtetimit të përdoruesit

# Instruksionet për index.js ⚙️

Ky projekt është një web aplikacion i thjeshtë i cili ofron një formë regjistrimi dhe hyrjeje në llogari. Aplikacioni është zhvilluar me Node.js dhe Express.

- Serveri do të fillojë në portin 3000 📡

Aplikacioni ka një formë regjistrimi dhe një formë hyrjeje në llogari. Për të hyrë në llogari, duhet të regjistroheni me email dhe fjalëkalim. Para se të regjistroni një llogari në pjesen mbi inputin e email do të shfaqet një ID unik e gjeneruar me crypto.randomBytes.

# Karakteristikat

- Regjistrohu

Për të regjistruar një llogari, shkoni në http://localhost:3000/signup në browser. Ju do të njoftoheni që të shkruani adresën tuaj të email-it, fjalëkalimin dhe të konfirmoni fjalëkalimin tuaj. Nëse adresa e email-it nuk është tashmë në përdorim dhe fjalëkalimet përputhen, një llogari do të krijohet dhe do të regjistroheni si nje user ne file user.json.

- Identifikohu

Për të identifikuar veten në llogarinë tuaj, shkoni në http://localhost:3000/login në browser. Ju do të njoftoheni që të shkruani adresën tuaj të email-it dhe fjalëkalimin. Nëse adresa e email-it ekziston dhe fjalëkalimi është i saktë, do të identifikoheni në llogarinë tuaj.

- Dilni nga llogaria

Për të dalë nga llogaria, shkoni në http://localhost:3000/signout në browser. Ju do të dilni nga llogaria dhe do të shfaqet nje tekst qe ti je jasht llogaris.

# Instruksionet për users.js ⚙️

Ky kod është një implementim i një repository për të ruajtur dhe manipuluar të dhëna për përdorues në një sistem. Kodin mund ta përdorni për të krijuar, lexuar, ndryshuar, fshirë dhe krahasuar përdoruesit.

Ky kod është implementuar edhe me cookie-session. Cookie-session është një middleware i Express që mundëson ruajtjen e sesioneve të përdoruesve në formë të cookies.

Ky kod është ndërtuar në gjuhën programuese JavaScript dhe përdor disa paketa të brendshme të Node.js, si fs, crypto dhe util. Gjithashtu, përdor funksionet async/await për të ndihmuar në menaxhimin e asinkronisë.

Klasa userRepository përmban disa metoda për të manipuluar të dhënat e përdoruesve në një sistem të ruajtjes së të dhënave. Këto metoda janë:

- constructor(filename): Konstruktori i klasës, merr si argument emrin e skedarit për ruajtjen e të dhënave.

- async getAll(): Kthen të gjitha të dhënat nga skedari i përdoruesve.

- async create(attrs): Krijon një rekord të ri për një përdorues në skedarin e përdoruesve. Argumenti attrs është një objekt i cili përmban të dhëna si email dhe fjalëkalimin për përdoruesin e ri.

- async comparePass(saved, supplied): Krahason fjalëkalimin e ruajtur të një përdoruesi me atë të dhënë nga përdoruesi. Argumenti saved është fjalëkalimi i ruajtur, ndërsa argumenti supplied është fjalëkalimi i dhënë nga përdoruesi.

- async writeAll(records): Shkruan të gjitha të dhënat e përdoruesve në skedarin e përdoruesve.

- generateId(): I jep një id identifikuese të ri të përdoruesit në formën heksadecimale të krijuar me crypto.randomBytes.

- async getById(id): Gjen një rekord të përdoruesit me një ID të caktuar.

- async delete(id): Fshin një rekord të përdoruesit me një ID të caktuar.

- async update(id, attrs): Ndryshon një rekord të përdoruesit me një ID të caktuar.

- async getOneBy(filters): Kthen një rekord të përdoruesit të gjetur duke u bazuar në filtrat e dhënë.

# Instalimi

    - git clone https://github.com/<username>/<repository-name>.git

# Instaloni të gjitha pako-të e nevojshme duke përdorur npm:

    - npm install express

    - npm install nodemon

    - npm install cookie-session

    - npm install fs

    - npm install crypto

    - npm install util

# Për të bërë të ekzekutueshëm kodin, thjesht shkruani në terminal:

    - npm run dev

# Kontribo 👏

Nëse dëshironi të kontriboni në projekt, mund të hapni një pull request në GitHub dhe unë do të shikoj ndryshimet tuaja. Ju faleminderit për interesin tuaj në projekt!
# user-auth
