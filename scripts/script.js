function ticketSection() {
    const mainSection = document.getElementById('booking-section');
    mainSection.scrollIntoView({ behavior: 'smooth' });

}

function showHiddenSection() {
    const hiddenCupon = document.getElementById('hidden-cupon');
    hiddenCupon.classList.remove('hidden');
}


let count = 0;
let price = 0;

const seatElements = document.getElementsByClassName('seat-class');

for (const seat of seatElements) {
    seat.addEventListener('click', function clickHandler(event) {

        if (count > 5) {
            alert("You can't choose more than 6 seats");
            return;

        }

        if (count > 2) {
            document.getElementById('apply-coupon').disabled = false;

        }

        count++;
        price = price + 550;

        seat.style.background = 'rgb(29, 209, 0)';


        setInnerText('seat-count', count);
        seat.classList.add('text-white');
        seat.disabled = true;

        appendChild('seat-name', seat.innerText);
        setInnerText('total-price', price);

        let remainingSeats = 40 - count;
        setInnerText('remain-seat', remainingSeats);


    })
}


document.getElementById('apply-coupon').addEventListener('click', function () {
    const couponValue = document.getElementById('coupon-input').value.trim();

    let grandTotal = 0;
    if (couponValue !== "") {
        if (couponValue === "NEW15")
            grandTotal = price - price * 0.15;
        else if (couponValue === "COUPLE20")
            grandTotal = price - price * 0.20;
        else if (couponValue === "FAMILY30")
            grandTotal = price - price * .30;
        else
            alert('Wrong Coupon Code');


        document.getElementById('grand-total').classList.remove('hidden');

        setInnerText('grand-totalTk', grandTotal);


    }
})

const nextBtn = document.getElementById('next-btn');
const phoneNum = document.getElementById('phone-num');
phoneNum.addEventListener('input', function () {
    if (phoneNum.value.length === 11 && count > 0) {
        nextBtn.disabled = false;
    }

}

)

const nextBtn2 = document.getElementById('next-btn');
nextBtn2.addEventListener('click', function () {

    const modalBox = document.getElementById('my_modal_7');
    modalBox.checked = true;
})



function next() {
    const modalBox = document.getElementById('my_modal_7');
    modalBox.checked = false;

    cancelBtn();
}


function cancelBtn() {

    count = 0;
    remainingSeats = 0;
    price = 0;
    setInnerText('remain-seat', 40 - count);
    setInnerText('seat-count', count);
    setInnerText('total-price', price);

    for (seat of seatElements) {
        seat.style.background = "#F7F8F8";
        seat.classList.remove('text-white');
        seat.disabled = false;
    }

    const seatName = document.getElementById('seat-name');
    while (seatName.children.length > 1) {
        seatName.removeChild(seatName.lastChild);
    }

    document.getElementById('apply-coupon').disabled = true;
    setInnerText('grand-totalTk',0);

    document.getElementById('coupon-input').value="";
    document.getElementById('passenger-name').value="";
    document.getElementById('email-id').value="";
    document.getElementById('phone-num').value="";
    document.getElementById('next-btn').disabled=true;
    document.getElementById('grand-total').classList.add('hidden');










}



document.getElementsByClassName('footer')[0].addEventListener('click', function () {
    window.open('https://www.linkedin.com/in/maharab-hossain-opi-548294228/', '_blank');
});







