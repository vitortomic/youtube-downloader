import {videoConverterApi} from '/scripts/videoConverterApi.js'
class IndexController {
    constructor(){};
    videoUrl
    urlInputListener(element) {
        element.addEventListener('change', (event)=>{
            this.videoUrl = event.target.value
        })
    }
    downloadMp3Listener(button) {
        button.addEventListener('click', async ()=>{
            if (!this.videoUrl) {
                alert('Mp3 url is blank!')
                return;
            }
            document.dispatchEvent(new Event('loading'))
            await videoConverterApi.processMp3(this.videoUrl)
            document.dispatchEvent(new Event('loaded'))
        })
    }
    downloadVideoListener(button) {
        button.addEventListener('click', async ()=>{
            if (!this.videoUrl) {
                alert('Video url is blank!')
                return;
            }
            document.dispatchEvent(new Event('loading'))
            await videoConverterApi.processVideo(this.videoUrl)
            document.dispatchEvent(new Event('loaded'))
        })
    }
}

export let indexController = new IndexController()
