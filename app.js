console.log('**** Kredi Hesaplama *******');
//! ***** Elementleri seçelim; *****
const select = document.querySelector('.form-select');
const vade = document.querySelector('#vade');
const tutar = document.querySelector('#tutar');
const hesaplaBtn = document.querySelector('.btn-primary');
let oran = 0;
let taksit = 0;

hesaplaBtn.addEventListener('click', (e) => {
  //! preventDefault() event'ın default davranışı (submit etmek ve formu silmek) engeller!
  e.preventDefault();
  if (select.value === 'Konut Kredisi') {
    oran = 1.29;
  } else if (select.value === 'Ihtiyac Kredisi') {
    oran = 1.99;
  } else if (select.value === 'Arac Kredisi') {
    oran = 1.79;
  }
  // console.log(oran);

  //! inputlar boş gönderilirse uyar;
  if (!select.value || !vade.value || !tutar.value) {
    alert('Lutfen Kredi turu, Vade ve tutari giriniz');
  }

  const faiz = oran / 100;
  taksit =
    (tutar.value * (faiz * (1 + faiz) ** vade.value)) /
    ((1 + faiz) ** vade.value - 1);

  // console.log(taksit);
  sonuclariGoster(); //! hesaplamayı yapsın ve bu fonksiyonu çalıştırsın; bu fonksiyonla sonuçları ekrana basacağız;
});

//! hesaplanan sonuçları ekrana basma fonksiyonu;
const sonuclariGoster = () => {
  const sonuclar = document.querySelector('.sonuclar'); //! .sonuclar section'ını yakaladık;

  //! innerHTML ile sonuç tablosunu elem.'te gömüyoruz; tabloyu bootstrap'ten bulduk copy-paste;
  sonuclar.innerHTML = `
  <h2 class="mt-3 text-warning">Kredi Bilgileri</h2>
  <table class="table table-bordered border-warning mt-4">
   <tbody>
    <tr>
      <th>Kredi Miktari</th>
      <td>${tutar.value} ₺</td>
      <th>Kredi Tipi</th>
      <td>${select.value}</td>
    </tr>
    <tr>
      <th>Vade</th>
      <td>${vade.value}</td>
      <th>Faiz Orani</th>
      <td>${oran}</td>
    </tr>
    <tr>
      <th>Toplam Tutar</th>
      <td>${(taksit * vade.value).toFixed(2)} ₺</td>
      <th>Taksit Tutari</th>
      <td>${taksit.toFixed(2)} ₺</td>
    </tr>
  </tbody>
</table>
 `;
};