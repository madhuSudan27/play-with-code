const accordians=document.querySelectorAll(".accordian");
// all the accordian are selected and now i have in array format


// for each loop takes call back function   ans passes current element 
accordians.forEach(accordian =>{
    const icon=accordian.querySelector('.icon');
    const answer=accordian.querySelector('.answer');

    accordian.addEventListener('click' ,() => {
        // icon.classList.toggle('active'); // if active class is present then remove it otherwise make a active class
       // make it t0 scroll height
        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight=null;
        }
        else{
            icon.classList.add('active');
            // make it equal to scroll height 
            answer.style.maxHeight =answer.scrollHeight+'px';
        }
    });
})
