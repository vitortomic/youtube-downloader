import {videoConverterApi} from '/scripts/videoConverterApi.js'
class IndexController {
    constructor(){};
    videoUrl
    urlInputListener(element) {
        element.addEventListener('change', (event)=>{
            this.videoUrl = event.target.value
        })
    }
    downloadMp3Listener(element) {
        element.addEventListener('click', ()=>{
            videoConverterApi.processMp3(videoUrl)
        })
    }
    downloadVideoListener(element) {
        element.addEventListener('click', ()=>{
            videoConverterApi.processVideo(videoUrl)
        })
    }
}

export let indexController = new IndexController()