// questions for the survey//
const questions = [
    // Array of survey questions with respective answers and categories//
    {
        question: "What possibilities spark your curiosity?",
        answers: [
            { text: "Delving into the world of code and solving digital puzzles.", category: "Computer Science and Programming Courses" },
            { text: "Steering through the realms of business dynamics.", category: "Business and Management Courses" },
            { text: "Nurturing well-being in healthcare domains.", category: "Health and Medicine Courses" },
            { text: "Crafting innovations through engineering avenues.", category: "Engineering Courses" },
        ]
    },
    {
        question: "Which direction seems intriguing for your future endeavors?",
        answers: [
            { text: "Exploring the realm of coding and tech wizardry.", category: "Computer Science and Programming Courses" },
            { text: "Navigating the landscape of business analysis.", category: "Business and Management Courses" },
            { text: "Embarking on a journey in healthcare realms.", category: "Health and Medicine Courses" },
            { text: "Exploring the facets of mechanical design.", category: "Engineering Courses" },
        ]
    },
    {
        question: "What skills do you value the most?",
        answers: [
            { text: "Logical thinking and problem-solving.", category: "Computer Science and Programming Courses" },
            { text: "Leadership and communication.", category: "Business and Management Courses" },
            { text: "Empathy and interpersonal skills.", category: "Health and Medicine Courses" },
            { text: "Technical and hands-on skills.", category: "Engineering Courses" },
        ]
    },
    {
        question: "What activities resonate with you on a typical day?",
        answers: [
            { text: "Engaging in digital puzzles and problem-solving.", category: "Computer Science and Programming Courses" },
            { text: "Steering through business dynamics and team interactions.", category: "Business and Management Courses" },
            { text: "Contributing to the well-being of others in a healthcare setting.", category: "Health and Medicine Courses" },
            { text: "Crafting projects and engaging in hands-on engineering.", category: "Engineering Courses" },
        ]
    },
    {
        question: "When dealing with challenges, where do you lean?",
        answers: [
            { text: "Figuring out and solving problems in the digital world.", category: "Computer Science and Programming Courses" },
            { text: "Overcoming hurdles and working together in a business setting.", category: "Business and Management Courses" },
            { text: "Handling difficulties and assisting others in a caring role.", category: "Health and Medicine Courses" },
            { text: "Creating solutions in hands-on projects like engineering.", category: "Engineering Courses" },
        ]
    },
    {
        question: "Which area do you shine in academically?",
        answers: [
            { text: "Solving digital puzzles and designing algorithms.", category: "Computer Science and Programming Courses" },
            { text: "Strategic thinking and leading teams.", category: "Business and Management Courses" },
            { text: "Hands-on clinical skills and medical understanding.", category: "Health and Medicine Courses" },
            { text: "Creative conceptualization and design thinking.", category: "Engineering Courses" },
        ]
    },
    {
        question: "What drives your career passion?",
        answers: [
            { text: "Tackling interesting challenges in technology.", category: "Computer Science and Programming Courses" },
            { text: "Reaching team and organizational objectives.", category: "Business and Management Courses" },
            { text: "Contributing to well-being and positive impact.", category: "Health and Medicine Courses" },
            { text: "Crafting practical solutions and innovations.", category: "Engineering Courses" },
        ]
    },
    {
        question: "What work do you enjoy the most?",
        answers: [
            { text: "Creating digital solutions.", category: "Computer Science and Programming Courses" },
            { text: "Leading and achieving goals.", category: "Business and Management Courses" },
            { text: "Enhancing healthcare practices.", category: "Health and Medicine Courses" },
            { text: "Crafting physical innovations.", category: "Engineering Courses" },
        ]
    },
    {
        question: "What kind of projects do you find most intriguing?",
        answers: [
            { text: "Developing software applications and programming solutions.", category: "Computer Science and Programming Courses" },
            { text: "Analyzing market trends and formulating business strategies", category: "Business and Management Courses" },
            { text: "Contributing to healthcare research and improving patient care.", category: "Health and Medicine Courses" },
            { text: "Designing and implementing innovative engineering solutions", category: "Engineering Courses" },
        ]
    },
    {
        question: "In a team environment, what role do you naturally gravitate towards?",
        answers: [
            { text: "The problem solver - finding solutions to technical challenges.", category: "Computer Science and Programming Courses", category: "Computer Science and Programming Courses" },
            { text: "The strategist - planning and coordinating team efforts.", category: "Business and Management Courses", category: "Business and Management Courses" },
            { text: "The caregiver - supporting and ensuring the well-being of team members.", category: "Health and Medicine Courses", category: "Health and Medicine Courses" },
            { text: "The innovator - bringing creative ideas to the table for engineering projects.", category: "Engineering Courses" },
        ]
    },
    
    // ... (similar structure for other questions)//
];
// Element IDs initialization//
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const tap2 = document.getElementById("tap2");
const tap1 = document.getElementById("tap1");

// Question index and selected categories variables
let currentQuestionIndex = 0;
let selectedCategories = [];

// Start of the quiz//
function startQuiz() {
    
    currentQuestionIndex = 0;
    selectedCategories = [];
    nextButton.innerHTML = "Next";

    // Reset animation classes for subheader
    tap1.classList.remove("drop1", "drop2", "raise");

    // Reset animation classes for header
    document.querySelector('.header').classList.remove("leaf-float");

    // Reset subheader display
    tap1.style.display = "block";

    group2();
}

// Displaying the current question//
function showQuestion() {
    
    setTimeout(function () {
         tap1.classList.remove("drop2");
    }, 250);
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
 
    // Creating buttons for each answer//
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        // Event listener for the answer button//
        button.addEventListener("click", function () {
            selectedCategories.push(answer.category);
            group1();
            tap1.classList.add("drop2");
        });
    });
}

// Handling the next button click//
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Displaying the quiz results//
let resultCategory = "";

// Function to set the icon source
function setIcon(iconURL) {
    const resultIcon = document.createElement("img");
    resultIcon.alt = "Result Icon";
    resultIcon.style.width = "50px"; // Adjust the size as needed
    resultIcon.src = iconURL;

    // Create a container div for centering the icon
    const iconContainer = document.createElement("div");
    iconContainer.style.textAlign = "center"; // Center the content horizontally
    iconContainer.style.marginTop = "2px"; // Adjust the top margin as needed
    iconContainer.appendChild(resultIcon);

    // Insert the icon container before and after the display string
    questionElement.innerHTML = '';
    questionElement.appendChild(iconContainer);
    questionElement.innerHTML += '<br>'; // Add spacing
}

// Displaying the quiz results
function showResults() {
   
    tap1.classList.add("raise");
    resultCategory = getMostFrequentCategory(selectedCategories);
    let displayString = "";
    
    setTimeout(function () {
        tap1.classList.add("drop2");
    }, 250);


    // Customizing the display string based on the resultCategory
    switch (resultCategory) {
        case "Computer Science and Programming Courses":
            displayString = "immerse yourself in the world of code and algorithms, where the realm of Computer Science and Programming Courses awaits your exploration!";
            setIcon("images/icons/programmericon.jpg");
            break;
        case "Business and Management Courses":
            displayString = "embark on a journey through the tapestry of strategies and triumphs. Business and Management Courses beckon, inviting you to weave your path into the fabric of success!";
            setIcon("images/icons/businessicon.webp");
            break;
        case "Health and Medicine Courses":
            displayString = "heed the call of healing and compassion. Health and Medicine Courses emerge as guiding stars, illuminating a path where your impact on well-being can flourish!";
            setIcon("images/icons/healthicon.jpg");
            break;
        case "Engineering Courses":
            displayString = "forge a destiny intertwined with innovation and creation. Engineering Courses beckon, inviting you to shape the tangible marvels of tomorrow!";
            setIcon("images/icons/engineeringicon.jpg");
            break;

        // ... (similar cases for other categories)//
        default:
            displayString = "You have a unique recommendation!";
            setIcon("images/icons/jackicon.jpg");
            break;
    }
    // Append the display string after the icon
    questionElement.innerHTML += `In the enchanting echoes of your desires, ${displayString}`;
    answerButtons.style.display = "none";
    nextButton.innerHTML = 'Replay';
    nextButton.style.display = "block";
}
// Resetting the state for the next question//
function resetState() {
    answerButtons.style.display = "block";
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
//Calculating the most frequent category//
function getMostFrequentCategory(categories) {
    const categoryCount = {};
    categories.forEach(category => {
        categoryCount[category] = (categoryCount[category] || 0) + 1;
    });
    let maxCategory = "";
    let maxCount = 0;
    for (const category in categoryCount) {
        if (categoryCount[category] > maxCount) {
            maxCount = categoryCount[category];
            maxCategory = category;
        }
    }
    return maxCategory;
}
// Event listener for the next button click//
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {

        group3();
        
    }
});
// Animation functions  //
function anim() {
    setTimeout(function () {
        tap1.classList.remove("drop2"); //tap1 for entire subheader and with transition, tap2 for fading only//
        tap1.classList.add("drop1");
        
    }, 1000);
    setTimeout(function () {
        
       
    }, 0);
    setTimeout(function () {
        questionElement.classList.remove("drop1");
        answerButtons.classList.remove("drop1");
    
    }, 1000);
}
    
   

// Function to execute the animation and proceed to the next question//
function group1() {

    anim(); // Move the anim() call here
    setTimeout(function () {
        
        handleNextButton(); // Move the handleNextButton() call inside the setTimeout
    }, 250);
}
function group2() {
    anim();
    showQuestion();

    // Reset animation classes for header
    document.querySelector('.header').classList.remove("leaf-float");
    void document.querySelector('.header').offsetWidth; // Trigger reflow
    document.querySelector('.header').classList.add("leaf-float");
}
function group3() {
    anim();
    startQuiz();
} 
// Initial quiz start//
startQuiz();

