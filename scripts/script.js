function ticketSection() {
    const mainSection = document.getElementById('main-section');
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
    })
}


document.getElementById('apply-coupon').addEventListener('click',function(){
    const couponValue = document.getElementById('coupon-input').value.trim();

    let grandTotal = 0;
    if(couponValue!=="")
    {
        if(couponValue==="NEW15")
            grandTotal=price - price*0.15;
        else  if(couponValue==="COUPLE20")
            grandTotal = price - price*0.20;
        else if(couponValue==="FAMILY30")
           grandTotal = price - price*.30;
        else
        alert('Wrong Coupon Code');


        document.getElementById('grand-total').classList.remove('hidden');

        setInnerText('grand-totalTk',grandTotal);
        

    }
})




