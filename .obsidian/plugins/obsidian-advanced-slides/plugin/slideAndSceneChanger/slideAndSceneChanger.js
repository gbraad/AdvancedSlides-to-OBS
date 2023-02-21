const slideAndSceneChanger = {
  id: "slideAndSceneChanger",
  init: (reveal) => {

// global variables
  var manualSceneChange= true;
  const allowmanualSceneChangeElement = document.querySelector("[data-on-obs-scene-change]");
  const allowmanualSceneChange = allowmanualSceneChangeElement ? allowmanualSceneChangeElement.getAttribute('data-on-obs-scene-change') : false;

  //Slide show events
  Reveal.on('overviewshown', event => {
    let overviewshownScene = document.querySelector("[data-overview-shown]");
    if(overviewshownScene){
      window.obsstudio.setCurrentScene(overviewshownScene.getAttribute('data-overview-shown'));
      manualSceneChange = false}});

  Reveal.on('overviewhidden', event => {
    switch(true){
      case event.currentSlide.hasAttribute("data-slide-changed"):
        window.obsstudio.setCurrentScene(event.currentSlide.attributes.getNamedItem("data-slide-changed").value);
        console.log(manualSceneChange,". slide Change")
        break;
      case event.currentSlide.hasAttribute("data-slide-transitioned"):
        window.obsstudio.setCurrentScene(event.currentSlide.attributes.getNamedItem("data-slide-transitioned").value);
        console.log(manualSceneChange,". slide transitioned")
        break;
    }
    manualSceneChange = false;
    console.log(manualSceneChange,". default",)});

  Reveal.on('slidechanged', event => {
    if(event.currentSlide.hasAttribute("data-slide-changed")  && !Reveal.isOverview()){
      window.obsstudio.setCurrentScene(event.currentSlide.attributes.getNamedItem("data-slide-changed").value);
      manualSceneChange = false;}});

  Reveal.on('slidetransitionend', event => {
    if(event.currentSlide.hasAttribute("data-slide-transitioned")){
      window.obsstudio.setCurrentScene(event.currentSlide.attributes.getNamedItem("data-slide-transitioned").value);
      manualSceneChange = false;}});
  
  Reveal.on('fragmentshown', event => {
    if(event.fragment.hasAttribute("data-fragment-shown")){
      window.obsstudio.setCurrentScene(event.fragment.attributes.getNamedItem("data-fragment-shown").value);
      manualSceneChange = false;}});
          
  Reveal.on('fragmenthidden', event => {
    if(event.fragment.hasAttribute("data-fragment-hidden")){
      window.obsstudio.setCurrentScene(event.fragment.attributes.getNamedItem("data-fragment-hidden").value);
      manualSceneChange = false;}}); 
/*If the user manual changes the OBS scene and the OBS scene name is different than current slide name, 
  then go to the slide with the same scene name.*/
  window.addEventListener('obsSceneChanged', function(event) {
    let currentSceneName = event.detail.name;
    let currentSlideName = Reveal.getCurrentSlide();
    currentSlideName = currentSlideName.getAttribute('data-slide-name');
    let slideToFind = document.querySelector("[data-slide-name=" + CSS.escape(currentSceneName) + "]");
    if (allowmanualSceneChange && manualSceneChange && currentSceneName != currentSlideName){
      let slideIndex = Reveal.getIndices(slideToFind);
      Reveal.slide(slideIndex.h, slideIndex.v || 0);
      manualSceneChange= true;}
    else{manualSceneChange= true;}});
//end fundtion
}};