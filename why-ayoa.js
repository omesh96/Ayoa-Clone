let data = [
    {num : 1,title : "Capture maps",content : "Ever been worried about losing a chain of thought before you could record it? Ayoa’s capture maps are the perfect tool for you to record your thoughts and ideas to work on in the future. Capture maps allow you the freedom to explore endless possibilities. You can create a knowledge base for studying, plan a business proposal and find creative ways to explore your thinking.",image : "https://www.ayoa.com/wp-content/uploads/2022/05/capture_maps.webp"},
    {num : 2,title : "Organic maps",content : "Replicating hand-drawn mind maps, organic mind maps represent the natural thinking process of the human brain. The curvilinear branches stimulate and support your creative thinking. Excel your imagination and creative thinking skills through imagery, colour and visual-spatial awareness.",image : "https://www.ayoa.com/wp-content/uploads/2022/02/Organic-Maps_2x.webp"},
    {num : 3,title : "Speed maps",content : "Speed maps provide you with a simple way to quick-fire your creativity into a pre-set format mind maps. Work instinctively without worrying about formatting. Start with a chosen style of central topic and go on to build a mind map of keywords in this design. You can easily transform the map into other styles and formats later on.",image : "https://www.ayoa.com/wp-content/uploads/2021/05/writers_new_1_webp.webp"},
    {num : 4,title : "Radial maps",content : "At a glance, prioritise your work through segmenting ideas to create big picture thinking. Inspired by the pie chart, Radial maps are the perfect tools for idea generation, project management and tracking your goals.",image : "https://www.ayoa.com/wp-content/uploads/2022/02/radial_maps_2x.webp"},
    {num : 5,title : "Task Canvas view",content : "Who says work cannot be fun? With the canvas view of Ayoa’s task boards, you can arrange your tasks visually and enjoy the movement. Spot priorities, pivot, and segment information to complete the urgent tasks first and keep track of your work.",image : "https://www.ayoa.com/wp-content/uploads/2021/04/droptask_new_8_webp.webp"},
    {num : 6,title : "Kanban workflow",content : "If you are a fan of the traditional to-do lists, this view is meant for you. Take an agile and linear approach to your work. Digitally track progress, set tasks, and collaborate in one space. Divide your tasks into ‘Now’, ‘Next’ and ‘Soon’ categories for better planning of your work.",image : "https://www.ayoa.com/wp-content/uploads/2021/04/droptask_new_7_webp.webp"},
    {num : 7,title : "Whiteboards",content : "In the age of hybrid working, if you are missing brainstorming with your entire team in one room, then this will be your favourite Ayoa feature. Host a real-time brainstorming session with your team or create a space to collect and organise project ideas, links, files and other external assets. Don’t worry about erasing it or running out of sticky notes, virtually hold your information for as long as you want.",image : "https://www.ayoa.com/wp-content/uploads/2021/04/droptask_new_9_webp.webp"},
]

/*
function canvas(){
    let count = 1;
    while(count < data.length){
        let index = count-1;
        let obj = data[index];
        let container = document.getElementById("canv");
        let card = document.createElement("div");
        card.style.width = "100%";
        card.setAttribute("id","card");
        //box1 is for content
        let box1 = document.createElement("div");
        box1.style.width = "60%";
        box1.style.padding = "30px";
        //box2 is for image
        let box2 = document.createElement("div");
        box2.style.width = "40%";
        box2.style.padding = "0px 30px";

        let h1 = document.createElement("h1");
        h1.innerText = obj.title;
        h1.style.fontSize = "40px";
        let p = document.createElement("p");
        p.innerText = obj.content;
        p.style.fontSize = "20px";
        p.style.color = "lightslategray";
        let img = document.createElement("img");
        img.setAttribute("class","photo");
        img.src = obj.image;

        box1.append(h1,p);
        box2.append(img);

        if(count % 2 !== 0){
            card.append(box1,box2);
            container.append(card);
        }else{
            card.append(box2,box1);
            container.append(card);
        }
        count++;
    }
}

setTimeout(() => {
    canvas();
}, 1000);
*/


function canvas(){
    data.forEach((el)=>{
        let container = document.getElementById("canv");
        let biggestDiv = document.createElement("div");
        let card = document.createElement("div");
        card.style.width = "100%";
        card.setAttribute("id","card");
        //box1 is for content
        let box1 = document.createElement("div");
        box1.style.width = "60%";
        box1.style.padding = "30px";
        //box2 is for image
        let box2 = document.createElement("div");
        box2.style.width = "40%";
        box2.style.padding = "0px 30px";

        let h1 = document.createElement("h1");
        h1.innerText = el.title;
        h1.style.fontSize = "40px";
        let p = document.createElement("p");
        p.innerText = el.content;
        p.style.fontSize = "20px";
        p.style.color = "lightslategray";
        let img = document.createElement("img");
        img.setAttribute("class","photo");
        img.src = el.image;

        box1.append(h1,p);
        box2.append(img);

        if(el.num % 2 !== 0){
            card.append(box1,box2);
            biggestDiv.append(card);
            container.append(biggestDiv);
        }else{
            card.append(box2,box1);
            biggestDiv.append(card);
            container.append(biggestDiv);
        }
    })
}
canvas();

//java script appending works perfect if you give it enough space, it wont take space by appendig procedure - while looping 200px (space occupied) -> loop -> 200px(space occupied) 
//200px+200px+200px wont work - you have to give it all the space it require in the end of the loop