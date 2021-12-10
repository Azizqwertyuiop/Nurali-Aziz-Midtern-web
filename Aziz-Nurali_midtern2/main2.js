var images_container_Lv_minus1 = document.getElementById('container_Lv_minus1');
//The conatiner level 0 which contains the image slider...
var images_container_Lv0 = document.getElementById('container_Lv0');


var  array_of_images = new Array();
array_of_images[0].src = 'img11.jpg';

array_of_images[1] = new Image();
array_of_images[1].src = 'img12.jpg';

array_of_images[2] = new Image();
array_of_images[2].src = 'img13.jpg';


function Make_Img_Slider(array_of_images) {

    let images_container_Lv1 = document.createElement('div');
    images_container_Lv1.id = 'container_Lv1';
    images_container_Lv0.appendChild(images_container_Lv1);

    let next_Btn = document.createElement('div');
    next_Btn.id = 'next_Btn_div';
    next_Btn.innerHTML = '<svg id="next_Btn" stroke="#1D2026" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>';
    images_container_Lv0.appendChild(next_Btn);

    let prev_Btn = document.createElement('div');
    prev_Btn.id = 'prev_Btn_div';
    prev_Btn.innerHTML = '<svg id="prev_Btn" stroke="#1D2026" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>';
    images_container_Lv0.appendChild(prev_Btn);

    let radio_Btns_container = document.createElement('div');
    radio_Btns_container.id = 'radio_Btns_container';
    images_container_Lv0.appendChild(radio_Btns_container);




    let images_array = array_of_images;

    images_container_Lv0.classList.remove('hidden');
    images_container_Lv_minus1.classList.remove('hidden');

    //Counter to make the image slider move... Starts at 1 so that the first image shown is not the clone one...
    let counter = 1; 


    //Placing the last image's clone at starting to smoothen out the transition....
    let container_Lv2 = document.createElement('div');
    container_Lv2.classList.add('container_Lv2');
    images_container_Lv1.appendChild(container_Lv2);
    let image_temp = new Image();
    image_temp.src = images_array[images_array.length-1];
    container_Lv2.appendChild(image_temp);
    //Placing all the other images...
    for (let i = 0; i < images_array.length; i++) {

        let image_temp = new Image();
        image_temp.src = images_array[i];
        let container_Lv2 = document.createElement('div');
        container_Lv2.classList.add('container_Lv2');
        images_container_Lv1.appendChild(container_Lv2);
        container_Lv2.appendChild(image_temp);
    }
    //Placing the first image's clone at last to smoothen out the transition....
    let container_Lv2_2 = document.createElement('div');
    container_Lv2_2.classList.add('container_Lv2');
    images_container_Lv1.appendChild(container_Lv2_2);
    let image_temp2 = new Image();
    image_temp2.src = images_array[0];
    container_Lv2_2.appendChild(image_temp2);



    //Making radio buttons numbers and styling
    radio_Btns_container.classList.add('invisible');
    for (let i = 0; i < images_array.length; i++) {
        
        let radio_Btn_div = document.createElement('span');
        radio_Btn_div.classList.add('radio_Btn_div');
        radio_Btn_div.innerHTML = '<svg class="radio_Btn" fill="hsl(0, 0%, 45%)" xmlns="http://www.w3.org/2000/svg" width="15" height="15" version="1.1"><circle cx="7.5" cy="7.5" r="7.5" ></circle></svg>';

        radio_Btns_container.appendChild(radio_Btn_div);
    }
    images_container_Lv1.style.transform = 'translateX(-' + (35*counter) + 'em)'
    //Slecting the radio buttons with class radio_Btn with query selector all so that I can make their color diff with indexing...
    var radio_Btn_es = document.querySelectorAll('.radio_Btn'); 
    radio_Btn_es[0].style.fill = 'tomato';
}
