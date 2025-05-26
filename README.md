
---

# 🌍 Static Travel Journal – Explore the World, One Entry at a Time! ✈️

A **ReactJS**-based Static Travel Journal App that displays memorable destinations with rich visuals, location markers, travel dates, and custom descriptions. This project showcases a modular React structure with props, conditional rendering, mapping, and reusable components.

---

## 🚀 Features

✅ **Modular Components** – Cleanly separated UI using reusable components
✅ **Dynamic Props Rendering** – Content passed and displayed dynamically
✅ **Location Marker Support** – Map icons alongside country names
✅ **Time-Based Greetings** – Shows a greeting based on the current time
✅ **Conditional Rendering** – For joke setups and punchlines
✅ **Array Mapping Examples** – Demonstrates `.map()` with arrays
✅ **Clean & Responsive UI** – Minimal layout for clear visual experience

---

## 🎥 Live Demo

🔗 [Live Project URL](#) *(I will add app's link here)*

---

## 📂 Technologies Used

* ⚛️ **ReactJS** – Component-based UI architecture
* 🧩 **JSX + Props** – For rendering reusable and dynamic content
* 🧠 **React Hooks** – Used for conditional time-based greetings
* 💅 **CSS** – For styling layout and cards
* 🌐 **JS Array Methods** – Used `.map()` for DOM element generation

---

## 🛠️ How to Use

### 📁 Step-by-step Setup

1️⃣ **Clone the Repository**

```bash
git clone https://github.com/your-username/travel-journal.git
```

2️⃣ **Navigate into the Project Directory**

```bash
cd travel-journal
```

3️⃣ **Install Dependencies**

```bash
npm install
```

4️⃣ **Start the App**

```bash
npm start
```

5️⃣ **Open in Browser**
Go to `http://localhost:3000/` to view your travel entries 🌎

---

## 📁 Code Structure & Explanation

### 🔹 `Header.jsx`

* Renders the top header with a globe image and journal title.
* Uses imported assets for visual impact.

### 🔹 `Entry.jsx`

* Accepts props like `img`, `title`, `date`, `text`, and `country`.
* Displays each travel entry card with image, location info, and description.
* Includes marker image and a placeholder link for Google Maps.

### 🔹 `DisplayTime.jsx`

* Dynamically displays **“Good Morning / Afternoon / Evening / Night”** based on current time using `Date.getHours()`.

### 🔹 `Jokes.jsx`

* Accepts props `setup` and `punchline`.
* Uses **conditional rendering** to only show setup when provided.
* Adds a horizontal separator after each joke.

### 🔹 `MapFunction.jsx`

* Demonstrates the `.map()` method with:

  * Numbers ➝ squares
  * Names ➝ capitalized versions
  * Pokémon ➝ HTML-like paragraph strings (for demonstration)

### 🔹 `Contact.jsx`

* Displays contact cards using props like `img`, `name`, `phone`, and `email`.
* Includes sections with icons (placeholders currently) and styled layout.

---

## 📸 Sample Usage

```jsx
<Entry 
  img={{ src: "path/to/image.jpg", alt: "description" }}
  title="Opera House"
  date="12 Jan 2023 - 18 Jan 2023"
  country="Australia"
  text="The Sydney Opera House is a multi-venue performing arts centre in Sydney."
/>
```

---

## ✏️ Customize & Expand

* 🧳 Add more travel entries by passing props into the `Entry` component.
* 🌐 Link to actual Google Maps locations via dynamic URLs.
* 🕰️ Enhance `DisplayTime` with icons or animations.
* 🎭 Add more `Jokes` with fun one-liners and conditionally render punchlines.

---

## 🤝 Contributing

Feel free to fork this repo, open issues, or submit PRs with improvements or new travel features. Contributions are encouraged and appreciated! 🌟

---

## 👨‍💻 Author

**Moinkhan**
📧 \[[moinkingkhan07@gmail.com](mailto:moinkingkhan07@gmail.com)]
🔗 [moinkhan021](https://linkedin.com/in/moinkhan021)

---

## 🏷️ Tags

`#ReactJS` `#TravelJournal` `#Props` `#MapFunction` `#JokesApp` `#FrontendDevelopment` `#ExploreWorld` `#ReactHooks`

---

