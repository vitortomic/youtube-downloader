class VideoConverterApi {
    constructor(){};
    apiUrl
    async processMp3(videoUrl) {
        return await (await fetch(`${this.apiUrl}/mp3`, getRequestBody(videoUrl)))
    }
    
    async processVideo(videoUrl) {
        try {
            const response = await fetch(`${this.apiUrl}/video`, getRequestBody(videoUrl))
            if (response.status != 200) {
                throw new Error(`${response.text}`)
            }
            const blob = await response.blob()
            let url = window.URL.createObjectURL(blob)
            let a = document.createElement('a')
            a.href = url
            a.download = "video.mp4"
            document.body.appendChild(a)
            a.click()
            a.remove()
        } catch (error) {
            console.log(error.message)
            alert(error.message)
        }
        
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
