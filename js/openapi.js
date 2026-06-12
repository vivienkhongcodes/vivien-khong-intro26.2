// js/openapi.js
// Will contain:
// button event listeners
// API fetch requests
// display artwork cards
// display artwork details
// error handling

const button = document.getElementById("show-artwork-button");

const searchButton = document.getElementById("okeeffe-search-button");

// Find the artwork gallery section once when the page loads 
const artworkCards = document.getElementById("artwork-cards");

const artworkDetails = document.getElementById("artwork-details");

// Fetch an artwork by ID and create its artwork card and catch error
async function createArtworkCard(artworkId) {
  try {  

  // Fetch #1: Ask the Art Institute API for artwork
  const response = await fetch(
    "https://api.artic.edu/api/v1/artworks/" + 
    artworkId + 
    "?fields=id,title,artist_display,date_display,image_id,thumbnail"
  );

  const data = await response.json();

    // Create one empty artwork card as a frame for image, title and date
    const card = document.createElement("div");

    // Main gallery card
    card.className = "artwork-card";

    // Create an empty picture frame
    const image = document.createElement("img");

    image.alt = data.data.title;

    // Create a title for the image
    const title = document.createElement("h3");

    // Create a date for the image
    const date = document.createElement("p");

    // Create a button for details
    const detailsButton = document.createElement("button");
    
    detailsButton.innerText = "Learn More";

    // Teach the button what to do
    detailsButton.addEventListener("click", function() {
        artworkDetails.innerHTML = 
          "<h2>" + data.data.title + "</h2>" +
          "<p><strong>Artist:</strong> " + data.data.artist_display + "</p>" +
          "<p><strong>Date:</strong> " + data.data.date_display + "</p>" 
          + "<h3>Curator's Note</h3>" +
          "<p class='story'>" + data.data.thumbnail.alt_text + "</p>";

    });

    // Populate the card with API data
    title.innerText = data.data.title;
  
    date.innerText = data.data.date_display;

    // Tell the image where to find its picture at the AIC Open API. 843 pixels wide, no rotation, return a JPG
    image.src = data.config.iiif_url + "/" + data.data.image_id + "/full/843,/0/default.jpg";

    // Assemble and display the artwork card
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(detailsButton);

    // Put card with its frame into gallery
    artworkCards.appendChild(card);

     } catch (error) {
      console.error("Artwork could not load:", error);
    
}
}

// Fetch other O'Keeffe artworks one at a time
async function searchOkeeffeArtworks() {
    try {
    
    // Clear the featured gallery
    artworkCards.innerHTML = "";

    // Clear the details section
    artworkDetails.innerHTML = "";

    // Ask the Art Institute API to search for more Georgia O'Keeffe information - wait for the results before continuing
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks/search?q=Georgia%20O%27Keeffe&fields=id,title,artist_display,date_display,image_id,thumbnail");
      
    const data = await response.json();

    const heading = document.createElement("h2");
    heading.innerText = "Continue Your Exploration of O'Keeffe's Works";
    artworkCards.appendChild(heading);

  // Show search result titles - go through each artwork in the array one by one
data.data.forEach(function(artwork) {

  // Create a small artwork card for styling  
  const card = document.createElement("div");
  card.className = "search-artwork-card";

  // Put the title of the current artwork into that paragraph
  const title = document.createElement("h3");
  title.innerText = artwork.title;
  
  // Put the date of the artwork into that paragraph
  const date = document.createElement("p");
  date.innerText = artwork.date_display;

  // Add that paragraph to the gallery section on the page
  
  card.appendChild(title);
  card.appendChild(date);
  artworkCards.appendChild(card);

  });

} catch (error) {
    console.error("Search could not load:", error);
}
}

// Alert JavaScript button by adding an event listener;
button.addEventListener("click", async function() {

  // Trigger the exhibition experience by updating the page state
  document.body.classList.add("exhibition-started");

  // Clear old cards but do not replace it with the heading
  artworkCards.innerHTML = "";

  // Create the artwork card elements 
  await createArtworkCard(24687);
  await createArtworkCard(263225);
  await createArtworkCard(70035);
 
});

searchButton.addEventListener("click", async function() {
        
        // Explore More button disappears when search button is clicked
        this.remove();

        await searchOkeeffeArtworks();

});
