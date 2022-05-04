import throttle from 'lodash.throttle'

const STORAGE_KEY="feedback-form-state"
const feedbackform = document.querySelector(".feedback-form");


  const persistedFiltres=localStorage.getItem(STORAGE_KEY);
  if(persistedFiltres) {
   const parsePersistedFiltres=JSON.parse(persistedFiltres);
    Object.keys(parsePersistedFiltres).forEach(key=>{
      feedbackform.elements[key].value=parsePersistedFiltres[key]
    })
    };
  

feedbackform.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  feedbackform.reset()
  localStorage.removeItem(STORAGE_KEY);
  
   
});

feedbackform.addEventListener("input", throttle (event=>{
  const filtres= localStorage.getItem(STORAGE_KEY);
  const persistedFiltres=filtres ? JSON.parse(filtres): {};
  persistedFiltres[event.target.name]=event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedFiltres));
},500));
