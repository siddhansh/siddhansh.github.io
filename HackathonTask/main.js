
      var section = document.querySelector('section');
      
      var requestURL = 'https://swapi.co/api/planets/';

      var request = new XMLHttpRequest();
      request.open('GET', requestURL);

      request.responseType = 'json';
      request.send();

      request.onload = function() {
          var res = request.response;
          for(var i = 0; i < res['results'].length; i++) {
          showPlanets(res['results'][i]);
          }
      }

      function showPlanets(planet) {

          var myArticle = document.createElement('article');
          var myH2 = document.createElement('h2');
          var myPara1 = document.createElement('p');
          var myPara2 = document.createElement('p');
          var myPara3 = document.createElement('p');
          var myPara4 = document.createElement('p');
          var myPara5 = document.createElement('p');
          var myPara6 = document.createElement('p');
          var myPara7 = document.createElement('p');
          var myPara8 = document.createElement('p');
          var myPara9 = document.createElement('p');
          var myPara10 = document.createElement('p');
          var myList = document.createElement('ul');

          myH2.textContent = planet['name'];
          myPara1.textContent = 'Rotation period: ' + planet['rotation_period'];
          myPara2.textContent = 'Orbital period:' + planet['orbital_period'];
          myPara3.textContent = 'Diameter:' + planet['diameter'];
          myPara4.textContent = 'Climate: ' + planet['climate'];
          myPara5.textContent = 'Gravity:' + planet['gravity'];
          myPara7.textContent = 'Terrain:' + planet['terrain'];
          myPara8.textContent = 'Surface Water:' + planet['surface_water'];
          myPara9.textContent = 'Population:' + planet['population'];
             
          var residents = planet.residents;
          for (var j = 0; j < residents.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = residents[j];
            myList.appendChild(listItem);
          }
          var x = "";
          if(residents.length === 0) x = "Not inhabited!";

          myPara10.textContent = 'Residents: ' + x;

          myArticle.appendChild(myH2);
          myArticle.appendChild(myPara1);
          myArticle.appendChild(myPara2);
          myArticle.appendChild(myPara3);
          myArticle.appendChild(myPara4);
          myArticle.appendChild(myPara5);
          myArticle.appendChild(myPara6);
          myArticle.appendChild(myPara7);
          myArticle.appendChild(myPara8);
          myArticle.appendChild(myPara9);
          myArticle.appendChild(myPara10);
          myArticle.appendChild(myList);

          section.appendChild(myArticle);
        }