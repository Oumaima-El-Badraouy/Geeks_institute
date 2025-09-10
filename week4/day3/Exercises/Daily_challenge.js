class Video{
    constructor(title,uploader,time){
        this.title=title,
        this.uploader=uploader,
        this.time=time
        
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time}  of ${this.title} !`) 
    }

}
const instance1= new Video("title1","uploader1","60s");
instance1.watch();
const instance2= new Video("title2","uploader2","80s");
instance2.watch();

const vidData = [
  { title: "Video1", uploader: "User1", time: 60 },
  { title: "Video2", uploader: "User2", time: 120 },
  { title: "Video3", uploader: "User3", time: 90 },
  { title: "Video4", uploader: "User4", time: 45 },
  { title: "Video5", uploader: "User5", time: 200 }
];
vidData.forEach(val=>{
    const example=new Video(val.title,val.uploader,val.time)
    example.watch()
})