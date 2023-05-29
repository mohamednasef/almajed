var data = []
    for(let i = 0; i < 5; i++){
        data.push({name: 'Khaled' + i, mobile: '96654444222' + i,  city: 'Jeddah' + i})
    }

    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');

    function next(){

        section1.classList.add('d-none');
        section2.classList.replace('d-none', 'd-flex');
        document.dispatchEvent(new CustomEvent('PREPARE'));
    }

     function start(){

         document.dispatchEvent(new CustomEvent('START'));
     }

    function showWinner(winnerIndex){

        section2.classList.replace('d-flex', 'd-none');
        section3.classList.replace('d-none', 'd-flex');

        section3.querySelector('#winner-name').textContent = data[winnerIndex].name;
        section3.querySelector('#winner-mobile').textContent = data[winnerIndex].mobile.substring(data[winnerIndex].mobile.length - 3);
        section3.querySelector('#winner-city').textContent = data[winnerIndex].city;


        async function loadParticles(options) {
            await loadFireworksPreset(tsParticles);
            
            await tsParticles.load(options);
          }
          
          const configs = { preset: "fireworks" };
          
          loadParticles(configs);


    }