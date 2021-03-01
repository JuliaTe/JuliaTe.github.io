const spans = document.querySelectorAll('h1 span')

spans.forEach(index => index.addEventListener('mouseover', function(e){

    index.classList.add('animated', 'rubberBand')
} ))

spans.forEach(index => index.addEventListener('mouseout', function(e){

    index.classList.remove('animated', 'rubberBand')
} ))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar-react')


//For the Skill Bars
var t1 = new TimelineLite()

t1.fromTo(htmlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeout})
    .fromTo(cssBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(95% - 6px)`, ease: Power4.easeout})
    .fromTo(jsBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease: Power4.easeout})
    .fromTo(reactBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(70% - 6px)`, ease: Power4.easeout})


const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
}).setTween(t1).addTo(controller)


function showRequiredCategory(event) {

    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for(i=0; i<links.length; i++){
        if(links[i].hasAttribute('class')){
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class^= "category-"]')

    for(i=0;i<categories.length; i++) {
        if(categories[i].hasAttribute('class')){
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')

}


$(function()
{
    function after_form_submitted(data)
    {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' );
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });

        }//else
    }

	$('#reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' );
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });


                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json'
            });

      });
});
