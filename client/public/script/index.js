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
        element.addEventListener('click', async ()=>{
            await videoConverterApi.processMp3(this.videoUrl)
        })
    }
    downloadVideoListener(element) {
        element.addEventListener('click', async ()=>{
            await videoConverterApi.processVideo(this.videoUrl)
        })
    }
}

export let indexController = new IndexController()