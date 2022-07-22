let data = [
    {
        id : 1,
        title : "Mind maps",
        content : "Mind Mapping is proven to boost productivity, creativity and memory. Grow ideas, structure information, and see the whole picture.",
        sub : "How to use mind maps",
        pic : "https://www.ayoa.com/wp-content/uploads/2021/11/mm_thumbnail_new.png",
        image : "https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_mm_new_webp.webp"
    },
    {
        id : 2,
        title : "Whiteboards",
        content : "Use whiteboards for freeform thinking or to create content dashboards. Add post-it notes, images, flowcharts, links, videos and more.",
        sub : "How to use whiteboards",
        pic : "https://www.ayoa.com/wp-content/uploads/2021/11/wb_thumbnail_new.png",
        image : "https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_wb_new_webp_2.webp"
    },
    {
        id : 3,
        title : "Workflow",
        content : "Inspired by the traditional Kanban board, this visual task board view lets you manage your projects and workflows in a clear, linear way.",
        sub : "How to use workflow",
        pic : "https://www.ayoa.com/wp-content/uploads/2021/11/workflow_thumbnail_new.png",
        image : "https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_kanban_new_webp.webp"
    },
    {
        id : 4,
        title : "Canvas",
        content : "Discover a more creative way to manage your tasks. Canvas view makes it easy to visualize your work in a fun circular format.",
        sub : "How to use canvas",
        pic : "https://www.ayoa.com/wp-content/uploads/2021/11/canvas_thumbnail_new.png",
        image : "https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_canvas_new_webp.webp"
    },
    {id : 5,
        title : "Gantt timeline",
        content : "Working on a project with multiple milestones? View your tasks in clear and easily adaptable Gantt timeline mode.",
        sub : "How to use gantt timeline",
        pic : "https://www.ayoa.com/wp-content/uploads/2021/11/gantt_thumbnail_new.png",
        image : "https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_gantt_new_webp.webp"
    },
    {
        id : 6,
        title : "Radial",
        content : "Ready to make every goal a reality? Present your aims and ideas in a visual pie-chart and stay motivated by seeing your priorities at a glance.",
        sub : "How to use radial maps",
        pic : "https://www.ayoa.com/wp-content/uploads/2021/11/radial_thumbnail_new.png",
        image : "https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_radial_new_webp.webp"
    },
    {
        id : 7,
        title : "Capture maps",
        content : "Capture maps are the quickest and easiest way to capture notes and ideas. Great for brainstorming and note making.",
        sub : "How to use capture maps",
        pic : "https://www.ayoa.com/wp-content/uploads/2022/06/fc_video_thumbnail.png",
        image : "https://www.ayoa.com/wp-content/uploads/2022/06/capturemaps.webp"
    }
]

let x = 1;
function main(num){
    // console.log(data[0].id);
    x = num || x;
    let filtered = data.filter((el)=>{
        return el.id == x;
    })
    console.log(filtered);
    displayData(filtered); 
}
function displayData(arr){
    let obj = arr[0];
    let container = document.getElementById("magicGround");
    container.innerHTML = null;
    let card1 = document.createElement("div");
    let card2 = document.createElement("div");

    let image = document.createElement("img");
    image.src = obj.image;

    let box1 = document.createElement("div");
    box1.setAttribute("id","bb1");
    let box2 = document.createElement("div");
    box2.setAttribute("id","bb2");

    let candy1 = document.createElement("div");
    let candy2 = document.createElement("div");

    let head = document.createElement("h1");
    head.innerText = obj.title;
    head.style.color = "rgb(40,161,242)";
    let para = document.createElement("p");
    para.innerText = obj.content;
    
    let thumnN = document.createElement("img");
    thumnN.src = obj.pic;
    let h4 = document.createElement("h6")
    h4.innerText = obj.sub;
    let t = document.createElement("p");
    t.innerText = "2:22";

    let hr1 = document.createElement("hr");
    let hr2 = document.createElement("hr");

    candy1.append(thumnN);
    candy2.append(h4,t);

    box1.append(head,para);
    box2.append(candy1,candy2);
    
    card1.append(box1,hr1,box2,hr2);
    card2.append(image);

    container.append(card1,card2);

}
//this will work as onload- variable x will help in choosing very first data
main();
