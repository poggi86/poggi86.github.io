//Menü, das sich bei Handys ein- und ausklappen lässt
const hamburger = document.querySelector('button[aria-expanded]');

function klappNav({ target }) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
}

hamburger.addEventListener('click', klappNav);

//Funktion, die den Bereich unter dem Dropdownmenü zur Abholung steuert
function setVisibility(select) {
  var val = select.value;
  document.getElementById('id_geschaeftsstelle').style.display = (val === 'stelle' ? "block" : "none");
  document.getElementById('id_abholung').style.display = (val !== 'stelle' ? "block" : "none");
}

//Definitionen für die Formulare 
let krisen_region = document.querySelector('#krisen_region')
let street = document.querySelector('#street')
let postCode = document.querySelector('#post_code');
let timeStamp = document.querySelector('#time_stamp');
let city = document.querySelector('#city');
let chBx = document.querySelectorAll("input[name='art_kleidung']");

//Formular für die Abholung 
document.forms[0].onsubmit = event => {
  let validPostCode = postCode.value.startsWith('78');
  if (!validPostCode) {
    event.preventDefault();
    window.alert('Du wohnst leider außerhalb unseres Einzugbereiches. Bitte komm mit deiner Spende zur Geschäftsstelle.');
  }

  //Zusammenfassung für Abholung
  //Herren
  if (validPostCode && chBx[0].checked) {
    window.alert(`Zusammenfassung:
    Kleiderwahl: ${chBx[0].value}
    Region: ${krisen_region.value}
    Datum: ${id_date.value}
    Name: ${id_name.value}
    Ort: ${street.value}, ${postCode.value} ${city.value}
    Vielen Dank für Deine Hilfe.
    Bitte halte die Kleidung bereits eingepackt bereit.
    Wir kommen zwischen 09:00 und 16:00 Uhr.
    Dein Team der Kleiderspende`);
  }

  //Damen
  if (validPostCode && chBx[1].checked) {
    window.alert(`Zusammenfassung:
    Kleiderwahl: ${chBx[1].value}
    Region: ${krisen_region.value}
    Datum: ${id_date.value}
    Name: ${id_name.value}
    Ort: ${street.value}, ${postCode.value} ${city.value}
    Vielen Dank für Deine Hilfe.
    Bitte halte die Kleidung bereits eingepackt bereit.
    Wir kommen zwischen 09:00 und 16:00 Uhr.
    Dein Team der Kleiderspende`);
  }

  //Kinder
  if (validPostCode && chBx[2].checked) {
    window.alert(`Zusammenfassung:
    Kleiderwahl: ${chBx[2].value}
    Region: ${krisen_region.value}
    Datum: ${id_date.value}
    Name: ${id_name.value}
    Ort: ${street.value}, ${postCode.value} ${city.value}
    Vielen Dank für Deine Hilfe.
    Bitte halte die Kleidung bereits eingepackt bereit.
    Wir kommen zwischen 09:00 und 16:00 Uhr.
    Dein Team der Kleiderspende`);
  }

  //Baby
  if (validPostCode && chBx[3].checked) {
    window.alert(`Zusammenfassung:
    Kleiderwahl: ${chBx[3].value}
    Region: ${krisen_region.value}
    Datum: ${id_date.value}
    Name: ${id_name.value}
    Ort: ${street.value}, ${postCode.value} ${city.value}
    Vielen Dank für Deine Hilfe.
    Bitte halte die Kleidung bereits eingepackt bereit.
    Wir kommen zwischen 09:00 und 16:00 Uhr.
    Dein Team der Kleiderspende`);
  }
}

//Zusammenfassung für die Abgabe in der Geschäftsstelle
document.forms[1].onsubmit = event => {
  let validtime_stamp = timeStamp.value.startsWith('2');
  if (!validtime_stamp) {
    event.preventDefault();
    window.alert('Du hast leider ein falsches Zeitformat eingegeben. Nutze den Kalender zur Eingabe.');
  }

  //Herren
  if (validtime_stamp && chBx[0].checked) {
    window.alert(`Zusammenfassung:
    Kleiderwahl: ${chBx[0].value}
    Region: ${krisen_region.value}
    Abgabedatum: ${timeStamp.value}
    Vielen Dank für Deine Hilfe.
    Lege die Kleidung während der Geschäftszeiten in die Box.
    Geschäftszeiten: Montag bis Donnerstag 11.00 - 17.00 Uhr.
    Dein Team der Kleiderspende`);
  }

  //Damen Geschäftsstelle
  if (validtime_stamp && chBx[1].checked) {
    window.alert(`Zusammenfassung:
    Kleiderwahl: ${chBx[1].value}
    Region: ${krisen_region.value}
    Abgabedatum: ${timeStamp.value}
    Vielen Dank für Deine Hilfe.
    Lege die Kleidung während der Geschäftszeiten in die Box.
    Geschäftszeiten: Montag bis Donnerstag 11.00 - 17.00 Uhr.
    Dein Team der Kleiderspende`);
  }

  //Kinder Geschäftsstelle
  if (validtime_stamp && chBx[2].checked) {
    window.alert(`Zusammenfassung:
    Kleiderwahl: ${chBx[2].value}
    Region: ${krisen_region.value}
    Abgabedatum: ${timeStamp.value}
    Vielen Dank für Deine Hilfe.
    Lege die Kleidung während der Geschäftszeiten in die Box.
    Geschäftszeiten: Montag bis Donnerstag 11.00 - 17.00 Uhr.
    Dein Team der Kleiderspende`);
  }

  //Baby Geschäftsstelle
  if (validtime_stamp && chBx[3].checked) {
    window.alert(`Zusammenfassung:
    Kleiderwahl: ${chBx[3].value}
    Region: ${krisen_region.value}
    Abgabedatum: ${timeStamp.value}
    Vielen Dank für Deine Hilfe.
    Lege die Kleidung während der Geschäftszeiten in die Box.
    Geschäftszeiten: Montag bis Donnerstag 11.00 - 17.00 Uhr.
    Dein Team der Kleiderspende`);
  }
}

//Ausschluss von vergangenen Tagen im Kalender
window.onload = function () {
  var date = new Date().toISOString().split('T')[0];
  document.getElementsByName("kalender_abholung")[0].setAttribute('min', date);
}