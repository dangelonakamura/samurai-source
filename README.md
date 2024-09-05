# Samurai Source

![JavaScript](https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript)
![Node](https://img.shields.io/badge/-Node-333333?style=flat&logo=node.js)
![Express](https://img.shields.io/badge/-Express-333333?style=flat&logo=express)
![Cheerio](https://img.shields.io/badge/-Cheerio-333333?style=flat&logo=cheerio)

**Samurai Source** is an API dedicated to anime enthusiasts, providing up-to-date data on episodes and anime types.

## Requirements

- Node.js (v14 or higher)
- npm (or yarn)

## Installation

To get started with the Samurai Source API, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dangelonakamura/samurai-source.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd samurai-source
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

## Endpoints

### `/episodes`

Returns the latest released episodes.

**Request Example:**
```
GET http://localhost:3333/episodes
```

**Response Example:**
```json
[
  {
    "url": "https://animesonlinecc.to/wp-content/uploads/2024/09/4PujGDMsmKPDO4bObWK2ieIj8s0-300x170.jpg",
    "name": "Hazurewaku no “Joutai Ijou Skill” de Saikyou ni Natta Ore ga Subete wo Juurin suru made Episodio 9"
  },
  ...
]
```

### `/types`

Lists all anime types accepted by the API.

**Request Example:**
```
GET http://localhost:3333/types
```

**Response Example:**
```json
[
  "Action",
  "Martial Arts",
  "Adventure",
  "Comedy",
  ...
]
```

### `/type/:source`

Returns animes of a specific type.

**Request Example:**
```
GET http://localhost:3333/type/adventure
```

**Response Example:**
```json
[
  {
    "url": "https://animesonlinecc.to/wp-content/uploads/2024/07/iuo2jor1Hya3bT1imNxEScgoh5o-185x278.jpg",
    "name": "Bye Bye, Earth"
  },
  ...
]
```

### `/search/:source`

Searches for animes by name.

**Request Example:**
```
GET http://localhost:3333/search/golden%20time
```

**Response Example:**
```json
[
  {
    "url": "https://animesonlinecc.to/wp-content/uploads/2020/02/qp4eHCZMR14dtubvzr67PZqH5fa-185x278.jpg",
    "name": "Golden Time"
  }
]
```

### `/anime/:source`

Fetches detailed information about episodes of a specific anime.

**Request Example:**
```
GET http://localhost:3333/anime/golden%20time
```

**Response Example:**
```json
[
  {
    "image": "https://animesonlinecc.to/wp-content/uploads/2020/02/xWnUHvv5sCZtrP9TAyZ8blOedYq-300x170.jpg",
    "episode": "Ep - 1 Episode 1 Oct. 04, 2013"
  },
  ...
]
```

## Credits

Data for Samurai Source is sourced from [animesonlinecc.to](https://animesonlinecc.to). Special thanks to the team at Anime Online CC for their extensive and up-to-date anime database.

## Contributing

Contributions are welcome! If you want to help improve Samurai Source, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push the branch to the remote repository (`git push origin feature/new-feature`).
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

If you have any questions or suggestions, feel free to open an issue or contact the maintainers. Enjoy Samurai Source!

---
