let sliderData={current:0,texts:[{title:"Reliable",desc:`Our script stands out for its exceptional reliability. It is rigorously tested in various scenarios to ensure its functions work properly before an update. The script is sometimes slow or has bugs, making it a reliable tool for their needs.`},{title:"Speed",desc:`Speed is a key advantage of our script. It's designed to be efficient, quickly cheating on the arsenal without sacrificing accuracy or quality. This fast performance saves users valuable time, allowing them to focus on other important tasks.`},{title:"Regular Updates",desc:`We are committed to continuous improvement. Regular updates are released to our script, ensuring it stays ahead with the latest features and improvements. This commitment to growth means that the tool you invest in today will only get better over time.`},{title:"Undetectable",desc:`Our script is super undetectable but sometimes patched, even if it is patched it will be unpatched very quickly.`}]}
function switchSlider(){if(sliderData.current+1>3){$(".progress-active").remove()
sliderData.current=0}else{sliderData.current=sliderData.current+1;}
$(".slider-title").html(sliderData.texts[sliderData.current].title)
$(".slider-desc").html(sliderData.texts[sliderData.current].desc)
$(`.slider-title`).animate({opacity:'1'},250)
$(`.slider-desc`).animate({opacity:'1'},250,()=>{})
$(".progress-slider .progress:nth-child("+(sliderData.current+1)+")").html(`<div class="progress-active progress-id-${sliderData.current}"></div>`)
$(`.progress-id-${sliderData.current}`).animate({width:'100%'},5000,()=>{$(`.slider-title`).animate({opacity:'0'},250)
$(`.slider-desc`).animate({opacity:'0'},250,()=>{switchSlider()})})}
$(document).ready(()=>{$(".slider-title").html(sliderData.texts[sliderData.current].title)
$(".slider-desc").html(sliderData.texts[sliderData.current].desc)
$(".progress-slider .progress:nth-child("+(sliderData.current+1)+")").html(`<div class="progress-active progress-id-${sliderData.current}"></div>`)
$(`.progress-id-${sliderData.current}`).animate({width:'100%'},5000,()=>{$(`.slider-title`).animate({opacity:'0'},250)
$(`.slider-desc`).animate({opacity:'0'},250,()=>{switchSlider()})})})
