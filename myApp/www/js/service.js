angular.module('starter.service', []).factory('bestAppsApi', function($filter) {
     var apps = [
    { id: 1, title: 'Instagram' , category: 'Social Media', avatar: '../img/instagram.png', downloads: 100, rating: '4.5', stars: "✮ ✮ ✮ ✮ ✡"},
    { id: 2, title: 'Snapchat' , category: 'Social Media',  avatar: '../img/snapchat.png',  downloads: 120, rating: '3', stars: "✮ ✮ ✮ ✮ ✮"},
    { id: 3, title: 'PokemonGo' , category: 'Games',  avatar: '../img/pokemongo.png', downloads: 10, rating: '5', stars:"✮ ✮ ✮ ✮ ✮"},
    { id: 4, title: 'TinyScanner' , category: 'Scanner',  avatar: '../img/tinyscanner.png', downloads: 1, rating:'0.5', stars:"✡ ✡ ✡ ✡ ✡"},
    { id: 5, title: 'Can You Escape?' , category: 'Games',  avatar: '../img/canyouescape.png', downloads: 3, rating: '1', stars: "✮ ✡ ✡ ✡ ✡"},
    { id: 6, title: 'Skype' ,  category: 'Social Media', avatar: '../img/skype.png',  downloads: 150, rating: '5', stars: "✮ ✮ ✮ ✮ ✮"},
    { id: 7, title: 'Outlook' ,  category: 'E-mail', avatar: '../img/outlook.png', downloads: 90, rating: '4', stars:"✮ ✮ ✮ ✮ ✡"},
    { id: 8, title: 'QuizUp' , category: 'Games',  avatar: '../img/quizup.png', downloads: 18, rating:'2', stars:"✮ ✮ ✡ ✡ ✡"},
    { id: 9, title: 'Backgammon' , category: 'Games',  avatar: '../img/backgammon.png', downloads: 2, rating: '0.2', stars: " ✡ ✡ ✡ ✡ ✡"},
    { id: 10, title: 'Learn SQL' , category: 'Educational',  avatar: '../img/learnsql.png',  downloads: 3, rating: '1', stars: "✮ ✡ ✡ ✡ ✡"},
    { id: 11, title: 'Piano Tiles' ,  category: 'Games',  avatar: '../img/pianotiles.png', downloads: 105, rating: '5', stars:"✮ ✮ ✮ ✮ ✮"},
    { id: 12, title: 'Photoshop Express' , category: 'Photo editor',  avatar: '../img/photoshop.png', downloads: 25, rating:'4.3', stars:"✮ ✮ ✮ ✮ ✡"}
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

    