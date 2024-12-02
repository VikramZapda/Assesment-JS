
    function updateQuantity(button, change) {
        const quantityElement = button.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantity += change;




       if (quantity < 1) quantity = 1;
        quantityElement.textContent = quantity;
    }


    document.querySelectorAll('.wishlist').forEach(heart => {
        heart.addEventListener('click', () => {
            heart.classList.toggle('heart');
        });
    });

    const items = [
        {
            id: 1,
            price:549,

        }
    ]

    
    document.querySelectorAll('.remove').forEach(removeBtn => {
        removeBtn.addEventListener('click', () => {
            removeBtn.parentElement.remove();
        });
    });



