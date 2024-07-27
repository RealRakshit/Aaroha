let btn2=document.querySelector(".button2");

btn2.addEventListener("click",vision);

function vision(){
    console.log("button 2 was clicked");
    let p=document.querySelector(".text-class");
    p.innerText="Aaroha's primary focus is on providing education to children from economically weaker backgrounds. The organization runs several programs for children of all the age groups. Along with this, it also conducts educational trips, science exhibition etc for these children to explore new and interesting things around them. Apart from education, Aaroha also works towards improving the health and wellbeing of the community. The organization conducts monthly health camps dealing with concerns such as hygiene, sanitation, and nutrition.";
}

let btn3=document.querySelector(".button3");

btn3.addEventListener("click",mission);

function mission(){
    console.log("button 3 was clicked");
    let p=document.querySelector(".text-class");
    p.innerText="Our mission is to educate every single child we come across so that no child is deprived of the basic right of education due to a lack of resources.";
}

let btn1=document.querySelector(".button1");

btn1.addEventListener("click",about);

function about(){
    console.log("button 1 was clicked");
    let p=document.querySelector(".text-class");
    p.innerText="Aaroha is a non-governmental organization (NGO) based in Bhopal, Madhya Pradesh. The organization works towards empowering the underprivileged sections of society through various initiatives such as education, healthcare, and sanitation. As the name suggests, the organization is committed to the cause of enlightening the lives of the poor children and driving them away from the darkness of illiteracy and ignorance. Aaroha came into action in the year 2014 and got registered as NGO in 2017. The students of three institutes of Bhopal i.e. AIIMS, IHM and MANIT are part of it and contribute in this noble cause.";
}