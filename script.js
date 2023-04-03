//Menü, welches sich bei Handys einlkappt 

const hamburger = document.querySelector('button[aria-expanded]');

      function klappNav({
        target
      }) {
        const expanded = target.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !expanded);
      }

      hamburger.addEventListener('click', klappNav);


  

// Funktion, die den Bereich unter dem Dropdownmenue zur Abholung steuert
      function setVisibility(select){
        var val = select.value;
        document.getElementById('id_geschaeftsstelle').style.display = (val === 'stelle'? "block": "none");
        document.getElementById('id_abholung').style.display = (val !== 'stelle'? "block": "none");
      }
      let herren = document.querySelector('#herren')
      let krisen_region = document.querySelector('#krisen_region')
      let street = document.querySelector('#street')
      let postCode = document.querySelector('#post_code');
      let city = document.querySelector('#city');

  // Formular-PLZ-Validierung
  // Wenn PLZ nicht mit '86' beginnt, wird die Bestätigung Button deaktiviert
  
  document.forms[0].onsubmit = event => {
  let validPostCode = postCode.value.startsWith('78');
  if (!validPostCode) {
    event.preventDefault();
    window.alert('Du wohnst leider außerhalb unseres Einzugbereiches. Bitte komm mit deiner Spende zur Geschäftsstelle.');
  }
  if (validPostCode) {
    window.alert(`Zusammenfassung:
    Region: ${krisen_region.value}
    Ort: ${street.value}, ${postCode.value}, ${city.value}
    Vielen Dank für Deine Hilfe.
    Dein Team der Kleiderspende
    `);
  }

}
// document.forms[0].onsubmit = event => {
//   function setVisibility(select){
//     var val = select.value;
//     if (document.getElementById('id_abholung').style.display = 2){
//       window.alert(`Zusammenfassung:
    
//       Ort: ${street.value}, ${postCode.value}, ${city.value}`);
//     }
//   }}
