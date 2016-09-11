angular.module('starter.service', []).factory('bestAppsApi', function($filter) {
     var apps = [
    { id: 1, title: 'Instagram' , mainCategory: 'Apps', subCategory: 'Entertainment', avatar: 'img/instagram.png', downloads: 100, rating: '4.5', stars: "✮ ✮ ✮ ✮ ✡",
     bestAppsInfo: {usabilityDesc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ", usabilityRating: 7.5,
                    uxDesc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. ", uxRating: 9.2, 
                    overallDesc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, velit ut rutrum mattis, purus erat porttitor velit, nec accumsan tortor nulla vel lectus. "},
     appMetaData: {releasedBy: "Instagram", requires: "Varies with Device", lastUpdate: "September 8, 2016", 
                    description: "Instagram is a simple way to capture and share the world’s moments. Follow your friends and family to see what they’re up to, and discover accounts from all over the world that are sharing things you love. "}
    },
    { id: 2, title: 'Snapchat' , mainCategory: 'Apps', subCategory: 'Entertainment',  avatar: 'img/snapchat.png',  downloads: 120, rating: '3', stars: "✮ ✮ ✮ ✮ ✮"},
    { id: 3, title: 'PokemonGo' , mainCategory: 'Games',  subCategory: 'Adventure', avatar: 'img/pokemongo.png', downloads: 10, rating: '5', stars:"✮ ✮ ✮ ✮ ✮"},
    { id: 4, title: 'TinyScanner' , mainCategory: 'Apps',  subCategory: 'Tools', avatar: 'img/tinyscanner.png', downloads: 1, rating:'0.5', stars:"✡ ✡ ✡ ✡ ✡"},
    { id: 5, title: 'Can You Escape?' , mainCategory: 'Games',  subCategory: 'Adventure', avatar: 'img/canyouescape.png', downloads: 3, rating: '1', stars: "✮ ✡ ✡ ✡ ✡"},
    { id: 6, title: 'Skype' ,  mainCategory: 'Apps', subCategory: 'Communication', avatar: 'img/skype.png',  downloads: 150, rating: '5', stars: "✮ ✮ ✮ ✮ ✮"},
    { id: 7, title: 'Outlook' ,  mainCategory: 'Apps', subCategory: 'Communication', avatar: 'img/outlook.png', downloads: 90, rating: '4', stars:"✮ ✮ ✮ ✮ ✡"},
    { id: 8, title: 'QuizUp' , mainCategory: 'Games',  subCategory: 'Brain & Puzzle', avatar: 'img/quizup.png', downloads: 18, rating:'2', stars:"✮ ✮ ✡ ✡ ✡"},
    { id: 9, title: 'Backgammon' , mainCategory: 'Games',  subCategory: 'Adventure', avatar: 'img/backgammon.png', downloads: 2, rating: '0.2', stars: " ✡ ✡ ✡ ✡ ✡"},
    { id: 10, title: 'Learn SQL' , mainCategory: 'Apps',  subCategory: 'Education', avatar: 'img/learnsql.png',  downloads: 3, rating: '1', stars: "✮ ✡ ✡ ✡ ✡"},
    { id: 11, title: 'Piano Tiles' ,  mainCategory: 'Games',  subCategory: 'Music', avatar: 'img/pianotiles.png', downloads: 105, rating: '5', stars:"✮ ✮ ✮ ✮ ✮"},
    { id: 12, title: 'Photoshop Express' , mainCategory: 'Apps', subCategory: 'Tools',  avatar: 'img/photoshop.png', downloads: 25, rating:'4.3', stars:"✮ ✮ ✮ ✮ ✡"}
  ];

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

