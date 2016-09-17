angular.module('starter.service', []).factory('bestAppsApi', function($filter) {
     var apps = [
   {
      "id": 1,
      "title": "Instagram",
      "mainCategory": "Apps",
      "subCategory": "Entertainment",
      "gameSubCategory": "",
      "avatar": "img/instagram.png",
      "downloads": 100,
      "rating": "4.5",
      "stars": "✮ ✮ ✮ ✮ ☆",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 7.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 9.2,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Instagram",
         "requires": "Varies with Device",
         "lastUpdate": "September 8, 2016",
         "description": "Instagram is a simple way to capture and share the world’s moments. Follow your friends and family to see what they’re up to, and discover accounts from all over the world that are sharing things you love. ",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.instagram.android&hl=en"
      }
   },
   {
      "id": 2,
      "title": "Snapchat",
      "mainCategory": "Apps",
      "subCategory": "Entertainment",
      "gameSubCategory": "",
      "avatar": "img/snapchat.png",
      "downloads": 120,
      "rating": "3",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 4.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 9.5,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Snapchat",
         "requires": "Varies with Device",
         "lastUpdate": "August 5, 2016",
         "description": "Snapchat lets you easily talk with friends, view Live Stories from around the world, and explore news in Discover. Life's more fun when you live in the moment! ",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.snapchat.android&hl=en"
      }
   },
   {
      "id": 3,
      "title": "PokémonGo",
      "mainCategory": "Apps",
      "subCategory": "Games",
      "gameSubCategory": "Adventure",
      "avatar": "img/pokemongo.png",
      "downloads": 10,
      "rating": "4.6",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 9.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 8.2,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Niantic",
         "requires": "Wi-Fi or a Data Plan",
         "lastUpdate": "June 8, 2016",
         "description": "Pokémon Go is a free-to-play, location-based augmented reality game developed by Niantic for iOS, Android, and Apple Watch devices. It was initially released in selected countries in July 2016.",
         "downloadLink": "https://play.google.com/store/search?q=Pok%C3%A9monGo&c=apps&hl=en"
      }
   },
   {
      "id": 4,
      "title": "TinyScanner",
      "mainCategory": "Apps",
      "subCategory": "Tools",
      "gameSubCategory": "",
      "avatar": "img/tinyscanner.png",
      "downloads": 1,
      "rating": "0.5",
      "stars": "☆ ☆ ☆ ☆ ☆",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 7.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 5.2,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Appxy Information Technology",
         "requires": "Varies with Device",
         "lastUpdate": "September 1, 2016",
         "description": "The little app that scans everything. Scan documents, photos, receipts, or just about anything. ",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.appxy.tinyscanner&hl=en"
      }
   },
   {
      "id": 5,
      "title": "Can You Escape?",
      "mainCategory": "Apps",
      "subCategory": "Games",
      "gameSubCategory": "Adventure",
      "avatar": "img/canyouescape.png",
      "downloads": 3,
      "rating": "1",
      "stars": "✮ ☆ ☆ ☆ ☆",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 6.4,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 4.2,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "GamesProduction",
         "requires": "Varies with Device",
         "lastUpdate": "October 20, 2015",
         "description": "The purpose of this game is to break out of the rooms. Solve the puzzles and find all the hidden objects that you have to use in the rooms in order to advance to the next floor. Challenge yourself in this fun, addictive, free and popular puzzle game.",
         "downloadLink": "https://play.google.com/store/apps/details?id=air.com.mobigrow.canyouescape&hl=en"
      }
   },
   {
      "id": 6,
      "title": "Skype",
      "mainCategory": "Apps",
      "subCategory": "Communication",
      "gameSubCategory": "",
      "avatar": "img/skype.png",
      "downloads": 150,
      "rating": "5",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.9,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 8.5,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Skype",
         "requires": "Varies with Device",
         "lastUpdate": "September 12, 2016",
         "description": "Download Skype and stay in touch with family and friends for free. Get international calling, free online calls and Skype for Business on desktop and mobile.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.skype.raider&hl=en"
      }
   },
   {
      "id": 7,
      "title": "Outlook",
      "mainCategory": "Apps",
      "subCategory": "Communication",
      "gameSubCategory": "",
      "avatar": "img/outlook.png",
      "downloads": 90,
      "rating": "4",
      "stars": "✮ ✮ ✮ ✮ ☆",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 7.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 9.2,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Instagram",
         "requires": "Varies with Device",
         "lastUpdate": "September 8, 2016",
         "description": "Instagram is a simple way to capture and share the world’s moments. Follow your friends and family to see what they’re up to, and discover accounts from all over the world that are sharing things you love. ",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.microsoft.office.outlook&hl=en"
      }
   },
   {
      "id": 8,
      "title": "QuizUp",
      "mainCategory": "Apps",
      "subCategory": "Games",
      "gameSubCategory": "Brain & Puzzle",
      "avatar": "img/quizup.png",
      "downloads": 18,
      "rating": "2",
      "stars": "✮ ✮ ☆ ☆ ☆",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 9.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 8.3,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "QuizUp",
         "requires": "Wifi with Device",
         "lastUpdate": "September 8, 2016",
         "description": "QuizUp is a free, award-winning multiplayer trivia game. Challenge friends and meet new people who share your interests.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.quizup.core&hl=en"
      }
   },
   {
      "id": 9,
      "title": "Backgammon",
      "mainCategory": "Apps",
      "subCategory": "Games",
      "gameSubCategory": "Board",
      "avatar": "img/backgammon.png",
      "downloads": 2,
      "rating": "0.2",
      "stars": "☆ ☆ ☆ ☆ ☆",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 3.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 2.2,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "GamesProduction",
         "requires": "Varies with Device",
         "lastUpdate": "June 23, 2016",
         "description": "Backgammon is one of the oldest board games known. It is a two player game where playing pieces are moved according to the roll of dice. ",
         "downloadLink": "https://play.google.com/store/apps/details?id=uk.co.aifactory.backgammonfree&hl=en"
      }
   },
   {
      "id": 10,
      "title": "Learn SQL",
      "mainCategory": "Apps",
      "subCategory": "Education",
      "gameSubCategory": "",
      "avatar": "img/learnsql.png",
      "downloads": 3,
      "rating": "1",
      "stars": "✮ ☆ ☆ ☆ ☆",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 2.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 3.2,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "SQL",
         "requires": "Varies with Device",
         "lastUpdate": "September 12, 2016",
         "description": "Learn to communicate with databases using SQL, the standard data-management language.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.sololearn.sql&hl=en"
      }
   },
   {
      "id": 11,
      "title": "Piano Tiles",
      "mainCategory": "Apps",
      "subCategory": "Music",
      "gameSubCategory": "",
      "avatar": "img/pianotiles.png",
      "downloads": 105,
      "rating": "5",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 4.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 5.2,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "GamesProduction",
         "requires": "Varies with Device",
         "lastUpdate": "May 8, 2016",
         "description": "Free Game in more than 100 countries. Watch your step, DON'T TOUCH ON ANY WHITE TILES!",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.cmplay.tiles2&hl=en"
      }
   },
   {
      "id": 12,
      "title": "Photoshop Express",
      "mainCategory": "Apps",
      "subCategory": "Tools",
      "gameSubCategory": "",
      "avatar": "img/photoshop.png",
      "downloads": 25,
      "rating": "4.3",
      "stars": "✮ ✮ ✮ ✮ ☆",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 5.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 6.3,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Photoshop",
         "requires": "Varies with Device",
         "lastUpdate": "May 1, 2016",
         "description": "Easy touch-ups. Fix photos fast—crop, straighten, rotate, flip, adjust color, and remove red eye and pet eye. Adjust hue, brightness, white balance.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.adobe.psmobile&hl=en"
      }
   },
   {
      "id": 13,
      "title": "Heads Up",
      "mainCategory": "Apps",
      "subCategory": "Games",
      "gameSubCategory": "Word",
      "avatar": "img/headsup.png",
      "downloads": 75,
      "rating": "4.3",
      "stars": "✮ ✮ ✮ ✮ ☆",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.3,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "GamesProduction",
         "requires": "Varies with Device",
         "lastUpdate": "May 1, 2016",
         "description": "It's the game The New York Times called a Sensation, and Cosmopolitan said will be the best dollar you've spent. Heads Up! is the fun.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.wb.headsup&hl=en"
      }
   },
   {
      "id": 14,
      "title": "Four In A Line",
      "mainCategory": "Apps",
      "subCategory": "Games",
      "gameSubCategory": "Board",
      "avatar": "img/fourinaline.png",
      "downloads": 75,
      "rating": "4.3",
      "stars": "✮ ✮ ✮ ✮ ☆",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.3,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "GamesProduction",
         "requires": "Varies with Device",
         "lastUpdate": "May 1, 2016",
         "description": "Four In A Line. To win: connect 4 pieces in a row, column or diagonally (We have gone Connect Crazy! see all the new versions)",
         "downloadLink": "https://play.google.com/store/apps/details?id=uk.co.aifactory.fialfree&hl=en"
      }
   },
   {
      "id": 15,
      "title": "Despicable Me",
      "mainCategory": "Apps",
      "subCategory": "Games",
      "gameSubCategory": "Casual",
      "avatar": "img/despicableme.png",
      "downloads": 95,
      "rating": "4.3",
      "stars": "✮ ✮ ✮ ✮ ☆",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.3,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "GamesProduction",
         "requires": "Varies with Device",
         "lastUpdate": "May 1, 2016",
         "description": "Four In A Line. To win: connect 4 pieces in a row, column or diagonally (We have gone Connect Crazy! see all the new versions)",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftDMHM&hl=en"
      }
   },
   {
      "id": 16,
      "title": "Amazon Kindle",
      "mainCategory": "Apps",
      "subCategory": "Books & Reference",
      "gameSubCategory": "",
      "avatar": "img/amazon.png",
      "downloads": 100,
      "rating": "4.7",
      "stars": "✮ ✮ ✮ ✮ ☆",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.9,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Amazon",
         "requires": "Varies with Device",
         "lastUpdate": "September 1, 2016",
         "description": "Дознајте каде е наредната свирка и кога излегува нова песна од вашиот омилен бенд.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.amazon.kindle&hl=en"
      }
   },
   {
      "id": 17,
      "title": "YouTube",
      "mainCategory": "Apps",
      "subCategory": "Music & Audio",
      "gameSubCategory": "",
      "avatar": "img/youtube.png",
      "downloads": 150,
      "rating": "5  ",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.9,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Youtube",
         "requires": "Varies with Device",
         "lastUpdate": "September 1, 2016",
         "description": "Get the official YouTube app for Android phones and tablets. See what the world is watching -- from the hottest music videos to what’s trending in gaming, entertainment, news, and more. Subscribe to channels you love, share with friends, and watch on any device.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.google.android.youtube&hl=en"
      }
   },
   {
      "id": 18,
      "title": "SymboLab",
      "mainCategory": "Apps",
      "subCategory": "Education",
      "gameSubCategory": "",
      "avatar": "img/symbolap.png",
      "downloads": 90,
      "rating": "4.9",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.9,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "SymbolAp",
         "requires": "Varies with Device",
         "lastUpdate": "September 1, 2016",
         "description": "Your private math tutor, solves any math problem with steps!",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.devsense.symbolab&hl=en"
      }
   },
   {
      "id": 19,
      "title": "Smule",
      "mainCategory": "Apps",
      "subCategory": "Music & Audio",
      "gameSubCategory": "",
      "avatar": "img/smule.png",
      "downloads": 60,
      "rating": "4.9",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.9,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Smule",
         "requires": "Varies with Device",
         "lastUpdate": "September 1, 2016",
         "description": "Sing your favorite hits with audio effects. Sing video duets with featured artists like Jessie J, Jason Derulo, and Linkin Park. Share your covers with our 50M+ global audience and get fans! Featured by Google Play as Best Apps 2014.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.smule.singandroid&hl=en"
      }
   },
   {
      "id": 20,
      "title": "BBC News",
      "mainCategory": "Apps",
      "subCategory": "News & Magazines",
      "avatar": "img/bbc.png",
      "downloads": 60,
      "rating": "4.9",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.3,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.1,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "BBC",
         "requires": "Varies with Device",
         "lastUpdate": "September 1, 2016",
         "description": "The BBC News app has been completely redesigned with a fresh look and feel to bring you more content, greater personalisation and better overall performance. So you can get more of the news that matters to you.",
         "downloadLink": "https://play.google.com/store/apps/details?id=bbc.mobile.news.ww&hl=en"
      }
   },
   {
      "id": 21,
      "title": "Learn English with ABA English",
      "mainCategory": "Apps",
      "gameSubCategory": "",
      "subCategory": "Education",
      "avatar": "img/learnenglish.png",
      "downloads": 60,
      "rating": "4.9",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.3,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.1,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Learn",
         "requires": "Varies with Device",
         "lastUpdate": "September 1, 2016",
         "description": "Learn English with films with ABA English’s new app. Download it now and discover a complete course with teacher, 6 levels of learning, and 144 units that cover everything you need to speak English!",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.abaenglish.videoclass&hl=en"
      }
   },
   {
      "id": 22,
      "title": "EBook Reader",
      "mainCategory": "Apps",
      "subCategory": "Books & Reference",
      "gameSubCategory": "",
      "avatar": "img/ebookreader.png",
      "downloads": 60,
      "rating": "4.9",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 4.7,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 2.6,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Books",
         "requires": "Varies with Device",
         "lastUpdate": "September 1, 2016",
         "description": "It's a must have app for your phone. EBook reader is one of the best reading tools. It can help you to easily manage, and open all the ebooks on your phone. We also integrate multiple free ebook download sites, allowing you to easily get the desired eBooks.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.ebooks.ebookreader&hl=en"
      }
   },
   {
      "id": 23,
      "title": "Business Insider",
      "mainCategory": "Apps",
      "subCategory": "Business",
      "gameSubCategory": "",
      "avatar": "img/businessinsider.png",
      "downloads": 60,
      "rating": "4.9",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.9,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Bs",
         "requires": "Varies with Device",
         "lastUpdate": "September 1, 2016",
         "description": "The Business Insider app provides you with a fast, free, and convenient way to read Business Insider on the go. Keep up to date with the latest news, sharp analysis and insightful commentaries from around the world and across the spectrum of Business Insider verticals.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.freerange360.mpp.businessinsider&hl=en"
      }
   },
   {
      "id": 24,
      "title": "Business Plan",
      "mainCategory": "Apps",
      "subCategory": "Business",
      "gameSubCategory": "",
      "avatar": "img/businessplan.png",
      "downloads": 60,
      "rating": "4.9",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 3.2,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 4.3,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Bs",
         "requires": "Varies with Device",
         "lastUpdate": "September 1, 2016",
         "description": "Top business plan app with 500,000+ downloads and over 50,000+ people who already created their business plans on this app.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.problemio&hl=en"
      }
   },
   {
      "id": 25,
      "title": "Bible",
      "mainCategory": "Apps",
      "subCategory": "Books & Reference",
      "gameSubCategory": "",
      "avatar": "img/ebible.png",
      "downloads": 130,
      "rating": "4.9",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 9.1,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 8.7,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "God",
         "requires": "Varies with Device",
         "lastUpdate": "September 1, 2016",
         "description": "On more than 200 million devices around the world, people are reading, listening to, watching, and sharing the Bible using the #1 rated Bible App—completely free. 1,200+ Bible versions, hundreds of languages. Listen to audio Bibles. Hundreds of Reading Plans & Devotionals, in 40+ languages. Download the best rated Bible App.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.sirma.mobile.bible.android&hl=en"
      }
   },
   {
      "id": 26,
      "title": "Comics",
      "mainCategory": "Apps",
      "subCategory": "Comics",
      "gameSubCategory": "",
      "avatar": "img/comics.png",
      "downloads": 60,
      "rating": "4.9",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 1.6,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 6.3,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Comics",
         "requires": "Varies with Device",
         "lastUpdate": "September 1, 2016",
         "description": "Now with comiXology Unlimited! Explore thousands of books with a free 30-day trial!",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.iconology.comics&hl=en"
      }
   },
   {
      "id": 27,
      "title": "Cinema UAE",
      "mainCategory": "Apps",
      "subCategory": "Cinema",
      "gameSubCategory": "",
      "avatar": "img/cinema.png",
      "downloads": 60,
      "rating": "4.9",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 3.4,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 8.9,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "UAE",
         "requires": "Varies with Device",
         "lastUpdate": "September 1, 2016",
         "description": "This application is design to provide you movie showtimes and online seat bookings conveniently on your mobile device. Now you don't have to go through newspapers or the website of each cinema.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.szs.cinema.uae&hl=en"
      }
   },
   {
      "id": 28,
      "title": "DCComics",
      "mainCategory": "Apps",
      "subCategory": "Comics",
      "gameSubCategory": "",
      "avatar": "img/dccomics.png",
      "downloads": 60,
      "rating": "4.9",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.9,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "DC",
         "requires": "Varies with Device",
         "lastUpdate": "September 1, 2016",
         "description": "DC Entertainment is one of the largest English-language publishers of comics in the world, featuring a wide variety of characters and genres. Renowned for the World's Greatest Super Heroes - Superman, Batman, Wonder Woman, Green Lantern, The Flash and many many more - DC has thrilled readers ",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.dccomics.comics&hl=en"
      }
   },
   {
      "id": 29,
      "title": "LATAM Entertainment",
      "mainCategory": "Apps",
      "subCategory": "Entertainment",
      "gameSubCategory": "",
      "avatar": "img/latam.png",
      "downloads": 80,
      "rating": "4.6",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.9,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "LATAM",
         "requires": "Varies with Device",
         "lastUpdate": "September 5, 2016",
         "description": "Experience the in-flight entertainment app on board of LATAM flights, now from your own device. Download the LATAM Entertainment app and enjoy a selection of recently released movies, popular TV shows, acclaimed boxsets, special content for kids and an interactive flight map.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.lan.entertainment&hl=en"
      }
   },
   {
      "id": 30,
      "title": "Google Fit - Fitness Tracking",
      "mainCategory": "Apps",
      "subCategory": "Health & Fitness",
      "gameSubCategory": "",
      "avatar": "img/googlefit.png",
      "downloads": 60,
      "rating": "4.4",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.9,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Be Fit",
         "requires": "Varies with Device",
         "lastUpdate": "September 4, 2016",
         "description": "Effortlessly track any activity. As you walk, run, or cycle throughout the day, your phone or Android Wear watch automatically logs them with Google Fit.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.google.android.apps.fitness&hl=en"
      }
   },
   {
      "id": 31,
      "title": "10 Daily Exercises",
      "mainCategory": "Apps",
      "subCategory": "Health & Fitness",
      "gameSubCategory": "",
      "avatar": "img/10dailyexercises.png",
      "downloads": 70,
      "rating": "4.2",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.9,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Be Fit",
         "requires": "Varies with Device",
         "lastUpdate": "September 2, 2016",
         "description": "This app helps you to exercise daily. The app contains the ten most common exercises everyone can do. Doing the workout will make you feel stronger, healthier, improve energy and control weight.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.playsimple.fitnessapp&hl=en"
      }
   },
   {
      "id": 32,
      "title": "Material Library Demo",
      "mainCategory": "Apps",
      "subCategory": "Libraries & Demo",
      "gameSubCategory": "",
      "avatar": "img/materialslibrarydemo.png",
      "downloads": 70,
      "rating": "4.2",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 8.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.9,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Material Library Demo",
         "requires": "Varies with Device",
         "lastUpdate": "September 2, 2016",
         "description": "This app helps you to exercise daily. The app contains the ten most common exercises everyone can do. Doing the workout will make you feel stronger, healthier, improve energy and control weight.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.rey.material.demo&hl=en"
      }
   },
   {
      "id": 33,
      "title": "Grand Theft Auto: San Andreas",
      "mainCategory": "Apps",
      "subCategory": "Games",
      "gameSubCategory": "Action",
      "avatar": "img/gta.png",
      "downloads": 210,
      "rating": "4.4",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 2.1,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.9,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Rockstar Games",
         "requires": "Android 3.0 and up",
         "lastUpdate": "March 21, 2015",
         "description": "Five years ago, Carl Johnson escaped from the pressures of life in Los Santos, San Andreas, a city tearing itself apart with gang trouble, drugs and corruption. Where filmstars and millionaires do their best to avoid the dealers and gangbangers.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.rockstargames.gtasa&hl=en"
      }
   },
   {
      "id": 34,
      "title": "Temple Run",
      "mainCategory": "Apps",
      "subCategory": "Games",
      "gameSubCategory": "Arcade",
      "avatar": "img/temple-run.png",
      "downloads": 3150,
      "rating": "4.3",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 4.2,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.9,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Imangi Studios ",
         "requires": "Android 2.3 and up",
         "lastUpdate": "December 1, 2014",
         "description": "The addictive mega-hit Temple Run is now out for Android! All your friends are playing it - can you beat their high scores?!",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.imangi.templerun&hl=en"
      }
   },
   {
      "id": 35,
      "title": "Asphalt 8: Airborne",
      "mainCategory": "Apps",
      "subCategory": "Games",
      "gameSubCategory": "Racing",
      "avatar": "img/asphalt.png",
      "downloads": 65,
      "rating": "4.5",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 2.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 5.9,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Gameloft",
         "requires": "Android 2.3 and up",
         "lastUpdate": "September 8, 2016",
         "description": "WHAT'S NEW Hit the road to Rio! - NEW LOCATION: Discover the bustling streets of Rio! - LOGIN REWARDS: Check in on the game every day for increasingly awesome prizes! - VIP SYSTEM: Now there’s even more value in every purchase as each one boosts your VIP status, granting you exclusive rewards!",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA8HM&hl=en"
      }
   },
   {
      "id": 36,
      "title": "Zynga Poker – Texas Holdem",
      "mainCategory": "Apps",
      "subCategory": "Games",
      "gameSubCategory": "Casino",
      "avatar": "img/zynga.png",
      "downloads": 73,
      "rating": "4.4",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 6.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 7.1,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "Zynga",
         "requires": "Varies with Device",
         "lastUpdate": "September 9, 2016",
         "description": "“The LARGEST POKER SITE in the World…” - ESPN.COM Join the world’s most popular Poker game with more tables, more tournaments, and more people to challenge. It’s Poker the way YOU want to play it!",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.zynga.livepoker&hl=en"
      }
   },
   {
      "id": 37,
      "title": "Clash of Clans",
      "mainCategory": "Apps",
      "subCategory": "Games",
      "gameSubCategory": "Strategy",
      "avatar": "img/cc.png",
      "downloads": 120,
      "rating": "4.6",
      "stars": "✮ ✮ ✮ ✮ ✮",
      "bestAppsInfo": {
         "usabilityDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "usabilityRating": 3.5,
         "uxDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ",
         "uxRating": 2.9,
         "overallDesc": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "
      },
      "appMetaData": {
         "releasedBy": "supercell",
         "requires": "Android 4.0.3 and up",
         "lastUpdate": "July 7, 2016",
         "description": "From rage-­filled Barbarians with glorious mustaches to pyromaniac wizards, raise your own army and lead your clan to victory! Build your village to fend off raiders, battle against millions of players worldwide, and forge a powerful clan with others to destroy enemy clans.",
         "downloadLink": "https://play.google.com/store/apps/details?id=com.supercell.clashofclans&hl=en"
      }
   }
];
 // $state.mySelect=5;
  function getApps() {
      return apps;
  }

  function getApp(id) {
 var single_item = $filter('filter')(apps, {id:id})[0];
 return single_item;
  }

return {
    getApps:getApps,
    getApp: getApp
};

});

