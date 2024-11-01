// Select elements 
const userInfoBtn = document.querySelector(".userInfo");
const userDataAllBlock = document.querySelector(".userDataAll");
const mainPageBody = document.querySelector("main");
const hemBtn = document.getElementById("hemBtnId");
const navLists = document.getElementById("navLists");

// Toggle the visibility of user data block when the button is clicked
userInfoBtn.addEventListener("click", () => {
    userDataAllBlock.classList.toggle("userDataAllShowHide");
});

// Hide the user data block when the main page body is clicked
mainPageBody.addEventListener("click", () => {
    userDataAllBlock.classList.add("userDataAllShowHide");
});

//hide and show the nav bar when we click on hem btn
hemBtn.addEventListener("click" , (event)=>{
    navLists.classList.toggle("hideShow");
});

mainPageBody.addEventListener("click", () => {
    navLists.classList.add("hideShow");
});

// function for htm btn and subject name functionalities
const subjectNameViewerBox = document.getElementById("subjectNameViewerBox");
const subjectNameRibbon = document.getElementById("subjectNameRibbon");
const subjectName ={
    maths :document.getElementById("maths"),
    dbms : document.getElementById("DBMS"),
    oopj : document.getElementById("OOPJ"),
    coma : document.getElementById("COMA"),
    dds : document.getElementById("DDS"),
    pcs : document.getElementById("PCS"),
    de : document.getElementById("DE")
};

subjectName.maths.addEventListener("click", () => updateHeader("Mathematics"));
subjectName.dds.addEventListener("click", () => updateHeader("DDS"));
subjectName.pcs.addEventListener("click", () => updateHeader("PCS"));
subjectName.coma.addEventListener("click", () => updateHeader("COMA"));
subjectName.dbms.addEventListener("click", () => updateHeader("DBMS"));
subjectName.oopj.addEventListener("click", () => updateHeader("OOPJ"));
subjectName.de.addEventListener("click" ,()=>updateHeader("DE"));

function updateHeader(subject) {
        // Update the header name of header
        subjectNameViewerBox.innerText = subject;
        subjectNameRibbon.innerText=subject;
}



const materialboxType = document.getElementById("materialboxType");

const materialType = {
    notes: document.getElementById("materialNotes"),
    assignment: document.getElementById("materialAssignment"),
    tutorial: document.getElementById("materialTutorial"),
    labManual: document.getElementById("materialLabManual")
};

materialType.notes.addEventListener("click", () => updateMaterialType("Notes"));
materialType.assignment.addEventListener("click", () => updateMaterialType("Assignment"));
materialType.tutorial.addEventListener("click", () => updateMaterialType("Tutorial"));
materialType.labManual.addEventListener("click", () => updateMaterialType("Lab Manual"));

function updateMaterialType(type) {
    materialboxType.innerText = type;
}




// appending pdf in box function
const DataCenterBox = document.getElementById("DataCenterBox");

function addPdf( pdfName ,fileId){
    const baseUrl = "https://drive.google.com/file/d/";
    const baseUrl1 = "https://drive.google.com/uc?export=download&id=";
    const lastURl = "/view?usp=sharing";
    const url = `${baseUrl1}${fileId}`;


    const anchorTag = document.createElement("a");
    anchorTag.href = url;
    anchorTag.target="_blank";
    anchorTag.textContent = pdfName;


    //creating div for icon and download icons
    const div = document.createElement("div");
    div.classList.add("showDownload");


    //for eye icon
    const span1 = document.createElement("span");
    span1.classList.add("material-symbols-outlined");
    span1.innerHTML = "visibility";
    div.appendChild(span1);
    //when we click on eye button pdf will open in new tab
    span1.addEventListener("click", () => {
        const tempURL = baseUrl+fileId+lastURl;
        window.open(tempURL, "_blank");
    });


    //for download icon
    const span2 = document.createElement("span");
    span2.classList.add("material-symbols-outlined"); 
    span2.innerHTML = "download"; 
    div.appendChild(span2);
    // Add click event to start downloading the PDF
    span2.addEventListener("click", () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = pdfName; // Set the download attribute
        document.body.appendChild(downloadLink); // Append the link to the body
        downloadLink.click(); // Programmatically click the link to start the download
        document.body.removeChild(downloadLink); // Remove the link from the body
    });

    
    //appending anchor tag and div in lists
    const listItems = document.createElement("li");
    listItems.appendChild(anchorTag);
    listItems.appendChild(div);


    //appending list in ul
    DataCenterBox.appendChild(listItems);
}

// subjectName.maths.addEventListener("click" , ()=>{
//     addPdf("UNIT-1 Sets, Relation & Functions" ,"1KzijB-ZhmfFym1xhSxf70KHKLaCfXKjT" );
// })


//Data base link and its code

const Notes_pdfLinks = {
    math: [
        { name: "UNIT-1 ", url: "1KzijB-ZhmfFym1xhSxf70KHKLaCfXKjT" },
        { name: "UNIT-2 ", url: "1HLaVgMyxI8JV_JVXSnVT_xqOjPwztmJm" },
        { name: "UNIT-3 ", url: "1OTdpmAjOvhu-ZjcbJ3OlZ2W680Oo5D7Q" },
        { name: "UNIT-4 ", url: "1HnTBajIkMUSbQKR2CJItpRYW4tX_TiPg" },
        { name: "UNIT-5 ", url: "1L-1UgWnT6jbLf-Axi3YbNFCxUJ6GP2A5" }
    ],
    oopj: [
        { name: "Unit-1", url: "1uguIgq9VikBgz3KBXGFf_ISRluONez3b" },
        { name: "Unit-1 & 2", url: "18HmOukBxYe2xivkmFeCMOOC7MzjgaKPu" },
        {name: "Unit-2" , url : "1YYIJLbYH0ybGcqoPAZp1VoFvVgdBPnuF"},
        {name: "Unit-3" , url : "17lhBFGXl5FDR1OcLLsukSb13NrAdX2Ja"},
        {name: "Unit-3 & 4" , url : "15ydbI3D3X02hp96IpbzVyXEL5GTXAw7M"},
        {name: "Unit-4" , url : "1e-1Kqrm2kfjUPD-KmqVm0x4ZzSLMpEGK"},
        {name: "Unit-5" , url : "1PUUgCgeFCN85UzmtnWtWArpLes7lAbZk"},
        {name: "Unit-5 Classes and Methods" , url : "1hDyM2JHv9LelzEL3R4byDzjGAF7Rbs5W"},
    ],
    dbms: [
        { name: "UNIT-1", url: "1LxDJr4IzZc_HpstNQ3cgterLToSv8Za1" },
        { name: "UNIT-2", url: "1yjjyHKfsXC9ET3EXVJpot1FEmG_LUHr4" },
        {name: "UNIT-3" , url : "1wJ7xXtU0NsnpOXCAfHPlHVac2z5ozDdY"},
        {name: "UNIT-4" , url : "1Kkjf04yDaTjOKlRrTAT_Rwy2HHn8jpNl"},
        {name: "UNIT-5" , url : "18YptfCYqLm6lYu6Grt5tbkeXOXdQjHZR"},
        {name: "UNIT-6" , url : "18p8nv1vR0HRwmJJiXWphRzKGiuQ3k-RC"}
    ],
    dds :[
        {name:"UNIT-1" , url:"https://drive.google.com/file/d/1i3ipZsfX1dPHeOkK5tVrfxF-1zeldmJL/view?usp=sharing"},
        {name:"UNIT-2 A" , url:"https://drive.google.com/file/d/1SwLxtyFKScow3e1Q83JaZI4lpesfd71J/view?usp=sharing"},
        {name:"UNIT-" , url:""},
        {name:"UNIT-" , url:""},
        {name:"UNIT-" , url:""},
        {name:"UNIT-" , url:""},
        {name:"UNIT-" , url:""},
        {name:"UNIT-" , url:""},
        {name:"UNIT-" , url:""},
        {name:"UNIT-" , url:""},
        {name:"UNIT-" , url:""},
        {name:"UNIT-" , url:""},
        {name:"UNIT-" , url:""},
        {name:"UNIT-" , url:""},
        {name:"UNIT-" , url:""},
        {name:"UNIT-" , url:""}
    ]

};

//functionality for data adding
const mathNotes = Notes_pdfLinks.math;
for(let i=0 ; i<mathNotes.length;i++){
    addPdf(mathNotes[i].name, mathNotes[i].url);
}

subjectName.maths.addEventListener("click" , ()=>{
    if(materialboxType.innerText === "Notes"){
        const mathNotes = Notes_pdfLinks.math;
        deleteData();
        insertData(mathNotes);
    }
    
})
//oopj
subjectName.oopj.addEventListener("click" , ()=>{
    if(materialboxType.innerText === "Notes"){
        const oopjNotes = Notes_pdfLinks.oopj;
        deleteData();
        insertData(oopjNotes);
    }
    
})

//DBMS
subjectName.dbms.addEventListener("click" , ()=>{
    if(materialboxType.innerText === "Notes"){
        const dbmsNotes = Notes_pdfLinks.dbms;
        deleteData();
        insertData(dbmsNotes);
    }
    
})

//function for adding pdf in data box
function insertData(data){
    for(let i=0 ; i<data.length;i++){
        addPdf(data[i].name, data[i].url);
    }
}
//function for deleting existing element of data box
function deleteData(){
    while (DataCenterBox.firstChild) {
        DataCenterBox.removeChild(DataCenterBox.firstChild);
    }
}
    




// Function to handle search operation
const searchInput = document.getElementById("searchingContainerbox");
searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();

    // Adjust the selector according to your HTML structure
    const pdfLinks = document.querySelectorAll('.mainDatabody .dataContainer ul li a');

    pdfLinks.forEach(link => {
        // Assuming the 'link' itself contains the text you want to filter
        const text = link.textContent.toLowerCase();
        if (text.includes(filter)) {
            link.style.display = '';
        } else {
            link.parentElement.style.display = 'none';
        }
    });
});


//sidebar
function activateItem(selectedItem) {
    console.log(selectedItem);
    // Remove 'active' class from all sidebar items
    const items = document.querySelectorAll('.sideBarContainer ul li');
    items.forEach(item => item.classList.remove('active'));
    
    // Add 'active' class to the clicked item
    selectedItem.classList.add('active');
}
