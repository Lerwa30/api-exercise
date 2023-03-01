
const residentBtn = document.querySelector('button');
const getResidents = () => {
  axios.get("https://swapi.dev/api/planets/?search=alderaan")
  .then(res => {
    console.log(res.data.results[0].residents)
    const residents = res.data.results[0].residents
    for(let i = 0; i < residents.length; i++) {
      axios.get(residents[i])
      .then(response => {
        console.log(response.data.name)
        const names = response.data.name
        const h = document.createElement("h2")
        h.innerText = names;
        document.body.appendChild(h)
        
      })
    }
  })
};

residentBtn.addEventListener('click', getResidents, {once:true});