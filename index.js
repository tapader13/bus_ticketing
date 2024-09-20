const seats = document.getElementsByClassName('seat');
let selectedSeat = [];
if (selectedSeat.length < 4) {
  const cupon_btn = document.getElementById('cupon_btn');
  cupon_btn.setAttribute('disabled', 'true');
  const cupon_inp = document.getElementById('cupon_inp');
  cupon_inp.setAttribute('disabled', 'true');
}
const next = document.getElementById('next');
next.setAttribute('disabled', 'true');
for (const element of seats) {
  element.addEventListener('click', () => {
    if (selectedSeat.includes(element.textContent)) {
      alert('Already Selected');
      return;
    }
    if (selectedSeat.length < 4) {
      const no_seat = document.getElementById('no_seat');
      no_seat.classList.add('hidden');
      element.style.backgroundColor = 'rgb(29,209,0)';
      selectedSeat.push(element.textContent);
      console.log(selectedSeat);
      const total_seat = document.getElementById('total_seat');
      const dec_seat = Number(total_seat.textContent) - 1;
      total_seat.innerText = dec_seat;
      const seat_count = document.getElementById('seat_count');
      const convert_number_seat_count = Number(seat_count.innerText);
      seat_count.innerText = convert_number_seat_count + 1;
      const total_price = document.getElementById('total_price');
      total_price.textContent = selectedSeat.length * 550;
      const seat_boke = document.getElementById('seat_boke');
      seat_boke.innerHTML += `<div class='flex justify-between'> <p>${element.textContent}</p>
                <p>Economoy</p>
                <p>৳ 550</p></div>`;

      if (selectedSeat.length === 4) {
        const cupon_inp = document.getElementById('cupon_inp');
        cupon_inp.removeAttribute('disabled');
        const cupon_btn = document.getElementById('cupon_btn');
        cupon_btn.removeAttribute('disabled');
        cupon_btn.addEventListener('click', function () {
          const grand_total = document.getElementById('grand_total');
          if (cupon_inp.value === 'NEW15') {
            grand_total.textContent =
              selectedSeat.length * 550 -
              (15 / 100) * selectedSeat.length * 550;
            cupon_btn.style.display = 'none';
            cupon_inp.style.display = 'none';
            cupon_inp.value = '';
            document.getElementById(
              'cupon'
            ).innerHTML = `<div class="flex justify-between text-secondary font-inter font-medium">
              <p>Discount:</p>
              <p>- BDT: ${(15 / 100) * selectedSeat.length * 550}</p>
              </div>`;
          } else if (cupon_inp.value === 'Couple 20') {
            grand_total.textContent =
              selectedSeat.length * 550 -
              (20 / 100) * selectedSeat.length * 550;
            cupon_btn.style.display = 'none';
            cupon_inp.style.display = 'none';
            cupon_inp.value = '';
            document.getElementById(
              'cupon'
            ).innerHTML = `<div class="flex justify-between text-secondary font-inter font-medium">
              <p>Discount:</p>
              <p>- BDT: ${(20 / 100) * selectedSeat.length * 550}</p>
              </div>`;
          } else {
            alert('Invalid Copun');
            return;
          }
        });
      }
      const phone = document.getElementById('phone1');
      phone.addEventListener('keyup', function (e) {
        console.log(e.target.value.length);
        if (Number(e.target.value.length) === 11) {
          const next = document.getElementById('next');
          next.removeAttribute('disabled');
          next.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const my_modal_1 = document.getElementById('my_modal_1');
            my_modal_1.showModal();
            const my_modal_1_btn = document.getElementById('my_modal_1_btn');
            my_modal_1_btn.addEventListener('click', function () {
              total_seat.textContent = 40;
              phone.value = '';
              seat_count.textContent = 0;
              seat_boke.innerHTML = '';
              no_seat.classList.remove('hidden');
              total_price.textContent = '****';
              cupon_btn.style.display = 'block';
              cupon_inp.style.display = 'block';
              document.getElementById('cupon').innerHTML = '';
              cupon_btn.setAttribute('disabled', 'true');
              cupon_inp.setAttribute('disabled', 'true');
              grand_total.textContent = '****';
              document.getElementById('name').value = '';
              document.getElementById('email').value = '';
              next.setAttribute('disabled', 'true');
              selectedSeat = [];
              for (const element of seats) {
                element.style.backgroundColor = '';
              }
            });
          });
        } else {
          next.setAttribute('disabled', 'true');
        }
      });
    } else {
      alert('Maximum Seat Selected');
      return;
    }
  });
}
