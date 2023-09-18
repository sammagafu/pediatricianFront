<template>
    <div v-if="showBanner" class="fullscreen-banner">
      <div class="banner-content">
        <a href="https://congress.pediatrics.or.tz/" target="_blank" class="banner-link">
          <img src="@/assets/images/advert/pat-congress.png" alt="" class="img-response">
        </a>
        <button @click="dismissBanner" class="close-button">X</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showBanner: true, // Initially, set it to true to show the banner
      };
    },
    methods: {
      dismissBanner() {
        this.showBanner = false; // Set to false to hide the banner when dismissed
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add CSS styles for the fullscreen banner here */
  .fullscreen-banner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Make sure it's on top of everything */
  }
  
  .banner-content {
    position: relative;
    background-color: white;
    border-radius: 10px;
    text-align: center;
    max-width: 90%; /* Limit maximum width for larger screens */
  }
  
  .banner-link {
    display: block; /* Make the anchor a block element */
    max-width: 100%; /* Ensure the anchor takes up the full width of its container */
    max-height: 70vh; /* Adjust the maximum height as needed */
    margin: 0 auto; /* Center the anchor horizontally */
  }
  
  .img-response {
    max-width: 100%; /* Make the image responsive */
    height: 70vh; /* Maintain aspect ratio */
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #ff5733; /* Red background color */
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 50%;
    cursor: pointer;
  }
  
  /* Media query for screens smaller than 768px (typical mobile screens) */
  @media (max-width: 768px) {
    .banner-content {
      padding: 10px; /* Reduce padding for smaller screens */
      max-width: 100%; /* Full width on smaller screens */
    }

    .img-response {
    max-width: 100%; /* Make the image responsive */
    height: auto; /* Maintain aspect ratio */
  }
  
    .banner-link {
      max-height: 50vh; /* Adjust the maximum height for smaller screens */
    }
  }
  </style>
  