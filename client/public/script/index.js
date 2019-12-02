class IndexController{
    constructor(){};
    videoUrl
    urlInputListener(element) {
        element.addEventListener('change', (event)=>{
            this.videoUrl = event.target.value
        })
    }
    downloadMp3Listener(element) {
        element.addEventListener('click', ()=>{
            alert('mp3')
        })
    }
    downloadVideoListener(element) {
        element.addEventListener('click', ()=>{
            alert('video')
        })
    }
}

export let indexCtrl = new IndexController()