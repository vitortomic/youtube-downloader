class VideoConverterApi {
    constructor(){};
    apiUrl
    async processMp3(videoUrl) {
        return await (await fetch(`${this.apiUrl}/mp3`, getRequestBody(videoUrl))).json()
    }
    async processVideo(videoUrl) {
        return await (await fetch(`${this.apiUrl}/video`, getRequestBody(videoUrl))).json()
    }
}
const getRequestBody = (videoUrl)=>{
    return { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"videoUrl": videoUrl})
    }
}

export let videoConverterApi = new VideoConverterApi()
const setApiUrl = async ()=>{
    videoConverterApi.apiUrl = await (await (await fetch('/api-url')).json()).apiUrl
}
setApiUrl()
