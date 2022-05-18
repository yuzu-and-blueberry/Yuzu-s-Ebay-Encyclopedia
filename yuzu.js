const button = document.querySelector('button');

const popup = document.querySelector('.yuzuimg');



button.addEventListener('click', e => {
    console.log('You clicked me!');
    popup.style.display = 'block';
});

popup.addEventListener('click', e =>{
    popup.style.display = 'none';
});
