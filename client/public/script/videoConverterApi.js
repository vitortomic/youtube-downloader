class VideoConverterApi {
    constructor(){};
    apiUrl
    processMp3() {
        console.log(this.apiUrl)
    }
    processVideo() {
        console.log(this.apiUrl)
    }
}
export let videoConverterApi = new VideoConverterApi()
const setApiUrl = async ()=>{
    videoConverterApi.apiUrl = await (await (await fetch('/api-url')).json()).apiUrl
}
setApiUrl()
