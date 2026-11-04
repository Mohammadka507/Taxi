// متغيرات الحالة
let currentTest = {
    category: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    wrongAnswers: [],
    answered: 0,
    total: 0
};

// عناصر DOM
const categorySelectionEl = document.getElementById('categorySelection');
const testScreenEl = document.getElementById('testScreen');
const resultsScreenEl = document.getElementById('resultsScreen');
const questionArEl = document.getElementById('questionAr');
const questionDeEl = document.getElementById('questionDe');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const finishTestBtn = document.getElementById('finishTestBtn');
const questionCounterEl = document.getElementById('questionCounter');
const scoreEl = document.getElementById('score');
const categoryNameEl = document.getElementById('categoryName');
const finalScoreEl = document.getElementById('finalScore');
const scoreTextEl = document.getElementById('scoreText');
const resultCategoryNameEl = document.getElementById('resultCategoryName');
const resultMessageEl = document.getElementById('resultMessage');
const wrongAnswersListEl = document.getElementById('wrongAnswersList');
const restartTestBtn = document.getElementById('restartTestBtn');
const backToCategoriesBtn = document.getElementById('backToCategoriesBtn');

// تهيئة التطبيق
function init() {
    displayCategories();
    setupEventListeners();
}

// عرض فئات الاختبارات
function displayCategories() {
    categorySelectionEl.innerHTML = '';
    
    for (const [key, category] of Object.entries(questionCategories)) {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.dataset.category = key;
        categoryCard.style.borderColor = category.color;
        
        categoryCard.innerHTML = `
            <i class="${category.icon}"></i>
            <h3>${category.name}</h3>
            <p class="question-count">${category.questions.length} سؤال</p>
            <small>انقر لبدء الاختبار</small>
        `;
        
        categoryCard.addEventListener('click', () => startTest(key));
        categorySelectionEl.appendChild(categoryCard);
    }
}

// بدء اختبار جديد
function startTest(categoryKey) {
    const category = questionCategories[categoryKey];
    currentTest = {
        category: categoryKey,
        questions: getQuestionsByIds(category.questions),
        currentIndex: 0,
        score: 0,
        wrongAnswers: [],
        answered: 0,
        total: category.questions.length
    };
    
    // تحديث الواجهة
    categorySelectionEl.style.display = 'none';
    testScreenEl.style.display = 'block';
    resultsScreenEl.style.display = 'none';
    categoryNameEl.textContent = `النوع: ${category.name}`;
    
    loadQuestion();
}

// تحميل سؤال
function loadQuestion() {
    if (currentTest.currentIndex >= currentTest.questions.length) {
        finishTest();
        return;
    }
    
    const question = currentTest.questions[currentTest.currentIndex];
    questionArEl.textContent = question.question_ar;
    questionDeEl.textContent = question.question_de;
    
    // تحديث العداد
    questionCounterEl.textContent = `السؤال ${currentTest.currentIndex + 1} من ${currentTest.total}`;
    scoreEl.textContent = `الإجابات الصحيحة: ${currentTest.score}`;
    
    // عرض الخيارات
    displayOptions(question);
    
    // إعادة تعيين الحالة
    feedbackEl.classList.remove('show');
    feedbackEl.textContent = '';
    nextBtn.disabled = true;
    showAnswerBtn.disabled = false;
    optionsContainer.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('correct', 'wrong', 'disabled');
        opt.style.cursor = 'pointer';
    });
}

// عرض الخيارات
function displayOptions(question) {
    optionsContainer.innerHTML = '';
    const options = generateRandomOptions(question);
    const letters = ['أ', 'ب', 'ج', 'د'];
    
    options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.dataset.correct = option.isCorrect;
        optionElement.innerHTML = `
            <span>${option.text}</span>
            <span class="option-letter">${letters[index]}</span>
        `;
        
        optionElement.addEventListener('click', () => selectOption(optionElement, option.isCorrect, question));
        optionsContainer.appendChild(optionElement);
    });
}

function generateRandomOptions(question) {
    // التحقق من وجود خيارات خاطئة كافية
    if (!question.wrong_answers || question.wrong_answers.length === 0) {
        question.wrong_answers = [
            "غير معروف",
            "معلومات غير متوفرة",
            "موقع غير محدد"
        ];
    }
    
    // استخدم الخيارات الخاطئة الفعلية فقط
    const availableWrongAnswers = question.wrong_answers.filter(ans => ans && ans.trim() !== '');
    
    // إذا لم تكن كافية، أضف خيارات عامة
    if (availableWrongAnswers.length < 3) {
        const generalOptions = ["غير معروف", "معلومات غير متوفرة", "موقع غير محدد"];
        const needed = 3 - availableWrongAnswers.length;
        availableWrongAnswers.push(...generalOptions.slice(0, needed));
    }
    
    // خذ 3 خيارات خاطئة عشوائية
    const shuffledWrong = [...availableWrongAnswers].sort(() => Math.random() - 0.5).slice(0, 3);
    
    let options = [
        { text: question.correct_answer, isCorrect: true },
        ...shuffledWrong.map(text => ({ text, isCorrect: false }))
    ];
    
    return shuffleArray(options);
}

// دالة مساعدة لخلط المصفوفة
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// اختيار إجابة
function selectOption(selectedOption, isCorrect, question) {
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => {
        opt.classList.add('disabled');
        opt.style.cursor = 'not-allowed';
        if (opt.dataset.correct === 'true') {
            opt.classList.add('correct');
        } else if (opt === selectedOption && !isCorrect) {
            opt.classList.add('wrong');
        }
    });
    
    currentTest.answered++;
    
    if (isCorrect) {
        selectedOption.classList.add('correct');
        currentTest.score++;
        showFeedback('أحسنت! هذه هي الإجابة الصحيحة.', 'correct');
    } else {
        selectedOption.classList.add('wrong');
        showFeedback('إجابة خاطئة.', 'wrong');
        
        // حفظ السؤال الخطأ
        currentTest.wrongAnswers.push({
            question: question.question_ar,
            correctAnswer: question.correct_answer,
            userAnswer: selectedOption.querySelector('span:first-child').textContent
        });
    }
    
    nextBtn.disabled = false;
    showAnswerBtn.disabled = true;
    nextBtn.focus();
}

// إنهاء الاختبار
function finishTest() {
    // إخفاء شاشة الاختبار
    testScreenEl.style.display = 'none';
    resultsScreenEl.style.display = 'block';
    
    // حساب النتيجة
    const percentage = Math.round((currentTest.score / currentTest.total) * 100);
    finalScoreEl.textContent = `${percentage}%`;
    scoreTextEl.textContent = `${currentTest.score}/${currentTest.total}`;
    resultCategoryNameEl.textContent = questionCategories[currentTest.category].name;
    
    // عرض رسالة النتيجة
    let message = '';
    if (percentage >= 90) {
        message = 'ممتاز! أداء رائع، أنت مستعد جيداً للامتحان.';
    } else if (percentage >= 70) {
        message = 'جيد جداً! لكن تحتاج إلى مراجعة بعض الأسئلة.';
    } else if (percentage >= 50) {
        message = 'مقبول. تحتاج إلى المزيد من الدراسة والتدريب.';
    } else {
        message = 'يحتاج إلى تحسين. راجع الأسئلة الخاطئة وحاول مرة أخرى.';
    }
    resultMessageEl.textContent = message;
    
    // عرض الأسئلة الخاطئة
    displayWrongAnswers();
}

// عرض الأسئلة الخاطئة
function displayWrongAnswers() {
    wrongAnswersListEl.innerHTML = '';
    
    if (currentTest.wrongAnswers.length === 0) {
        wrongAnswersListEl.innerHTML = '<p>لا توجد أخطاء! أحسنت العمل.</p>';
        return;
    }
    
    const title = document.createElement('h3');
    title.textContent = `الأسئلة الخاطئة (${currentTest.wrongAnswers.length})`;
    wrongAnswersListEl.appendChild(title);
    
    currentTest.wrongAnswers.forEach((item, index) => {
        const answerItem = document.createElement('div');
        answerItem.className = 'wrong-answer-item';
        answerItem.innerHTML = `
            <p><strong>السؤال ${index + 1}:</strong> ${item.question}</p>
            <p><strong class="correct-sample">الإجابة الصحيحة:</strong> ${item.correctAnswer}</p>
            <p><strong class="wrong-sample">إجابتك:</strong> ${item.userAnswer}</p>
        `;
        wrongAnswersListEl.appendChild(answerItem);
    });
}

// عرض تعليق الإجابة
function showFeedback(message, type = 'info') {
    feedbackEl.textContent = message;
    feedbackEl.className = 'feedback show';
    if (type === 'correct') {
        feedbackEl.style.backgroundColor = '#d4edda';
        feedbackEl.style.borderRightColor = '#28a745';
        feedbackEl.style.color = '#155724';
    } else if (type === 'wrong') {
        feedbackEl.style.backgroundColor = '#f8d7da';
        feedbackEl.style.borderRightColor = '#dc3545';
        feedbackEl.style.color = '#721c24';
    } else {
        feedbackEl.style.backgroundColor = '#fff3cd';
        feedbackEl.style.borderRightColor = '#ffc107';
        feedbackEl.style.color = '#856404';
    }
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    nextBtn.addEventListener('click', () => {
        currentTest.currentIndex++;
        loadQuestion();
    });
    
    showAnswerBtn.addEventListener('click', showAnswer);
    
    finishTestBtn.addEventListener('click', finishTest);
    
    restartTestBtn.addEventListener('click', () => {
        startTest(currentTest.category);
    });
    
    backToCategoriesBtn.addEventListener('click', () => {
        categorySelectionEl.style.display = 'grid';
        testScreenEl.style.display = 'none';
        resultsScreenEl.style.display = 'none';
    });
    
    // اختصار لوحة المفاتيح للمسافة
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && testScreenEl.style.display === 'block') {
            e.preventDefault();
            if (!nextBtn.disabled) {
                nextBtn.click();
            }
        }
    });
}

// عرض الإجابة الصحيحة
function showAnswer() {
    if (currentTest.currentIndex >= currentTest.questions.length) return;
    
    const currentQuestion = currentTest.questions[currentTest.currentIndex];
    showFeedback(`الإجابة الصحيحة هي: "${currentQuestion.correct_answer}".`, 'info');
    
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => {
        opt.classList.add('disabled');
        opt.style.cursor = 'not-allowed';
        if (opt.dataset.correct === 'true') {
            opt.classList.add('correct');
        }
    });
    
    showAnswerBtn.disabled = true;
    nextBtn.disabled = false;
}

// الحصول على الأسئلة حسب الأرقام
function getQuestionsByIds(ids) {
    return ids.map(id => questionBank.find(q => q.id === id)).filter(q => q);
}

// ========== تصنيف الأسئلة - نسخة محدثة وصحيحة ==========
const questionCategories = {
    "government": {
        name: "المباني الحكومية",
        icon: "fas fa-landmark",
        questions: Array.from({length: 16}, (_, i) => i + 1),
        color: "#2c3e50"
    },
    "courts": {
        name: "المباني القضائية",
        icon: "fas fa-gavel",
        questions: Array.from({length: 9}, (_, i) => i + 17),
        color: "#8e44ad"
    },
    "police": {
        name: "شرطة ومراكز أمنية",
        icon: "fas fa-shield-alt",
        questions: Array.from({length: 17}, (_, i) => i + 26),
        color: "#3498db"
    },
    "post-transport": {
        name: "البريد والنقل",
        icon: "fas fa-mail-bulk",
        questions: Array.from({length: 26}, (_, i) => i + 43),
        color: "#f39c12"
    },
    "media": {
        name: "وسائل الإعلام",
        icon: "fas fa-tv",
        questions: Array.from({length: 8}, (_, i) => i + 69),
        color: "#9b59b6"
    },
    "chambers": {
        name: "الغرف المهنية",
        icon: "fas fa-building",
        questions: Array.from({length: 4}, (_, i) => i + 77),
        color: "#1abc9c"
    },
    "municipal": {
        name: "المكاتب البلدية",
        icon: "fas fa-city",
        questions: Array.from({length: 20}, (_, i) => i + 81),
        color: "#e74c3c"
    },
    "hotels": {
        name: "الفنادق",
        icon: "fas fa-hotel",
        questions: Array.from({length: 75}, (_, i) => i + 101),
        color: "#d35400"
    },
    "cafes": {
        name: "المقاهي",
        icon: "fas fa-coffee",
        questions: Array.from({length: 15}, (_, i) => i + 176),
        color: "#795548"
    },
    "districts": {
        name: "أسماء المناطق",
        icon: "fas fa-map",
        questions: Array.from({length: 23}, (_, i) => i + 191),
        color: "#27ae60"
    },
    "wine": {
        name: "مناطق الخمر",
        icon: "fas fa-wine-glass",
        questions: Array.from({length: 5}, (_, i) => i + 214),
        color: "#c0392b"
    },
    "cemeteries": {
        name: "المقابر",
        icon: "fas fa-monument",
        questions: Array.from({length: 23}, (_, i) => i + 219),
        color: "#7f8c8d"
    },
    "hospitals": {
        name: "المستشفيات",
        icon: "fas fa-hospital",
        questions: Array.from({length: 32}, (_, i) => i + 242),
        color: "#e74c3c"
    },
    "culture": {
        name: "المؤسسات الثقافية",
        icon: "fas fa-theater-masks",
        questions: Array.from({length: 14}, (_, i) => i + 274),
        color: "#9b59b6"
    },
    "universities": {
        name: "الجامعات",
        icon: "fas fa-graduation-cap",
        questions: Array.from({length: 10}, (_, i) => i + 288),
        color: "#3498db"
    },
    "museums": {
        name: "المتاحف",
        icon: "fas fa-museum",
        questions: Array.from({length: 13}, (_, i) => i + 298),
        color: "#f39c12"
    },
    "attractions": {
        name: "المعالم السياحية",
        icon: "fas fa-camera",
        questions: Array.from({length: 16}, (_, i) => i + 311),
        color: "#1abc9c"
    },
    "streets-gurtel": {
        name: "تغيير أسماء الشوارع (جورتل)",
        icon: "fas fa-road",
        questions: Array.from({length: 24}, (_, i) => i + 327),
        color: "#34495e"
    },
    "general-info": {
        name: "معلومات عامة",
        icon: "fas fa-info-circle",
        questions: [366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376],
        color: "#2c3e50"
    },
    "district-info": {
        name: "معلومات المناطق",
        icon: "fas fa-map-marker-alt",
        questions: Array.from({length: 16}, (_, i) => i + 377),
        color: "#27ae60"
    },
    "landmarks": {
        name: "معالم تاريخية",
        icon: "fas fa-landmark",
        questions: Array.from({length: 15}, (_, i) => i + 393),
        color: "#8e44ad"
    },
    "transport-detail": {
        name: "النقل العام",
        icon: "fas fa-subway",
        questions: [405, 406, 407, 408, 409],
        color: "#3498db"
    },
    "misc": {
        name: "معلومات متنوعة",
        icon: "fas fa-question-circle",
        questions: [410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426],
        color: "#7f8c8d"
    },
    "cabarets": {
        name: "كاباريه ومسارح شعبية",
        icon: "fas fa-theater-masks",
        questions: Array.from({length: 15}, (_, i) => i + 427),
        color: "#e67e22"
    },
    "streets-donaukanal": {
        name: "تغيير أسماء الشوارع (قناة الدانوب)",
        icon: "fas fa-water",
        questions: Array.from({length: 15}, (_, i) => i + 500),
        color: "#3498db"
    }
};

// التحقق من صحة تصنيفات الأسئلة
function validateQuestionCategories() {
    for (const [categoryKey, category] of Object.entries(questionCategories)) {
        const validQuestions = [];
        const invalidQuestions = [];
        
        category.questions.forEach(id => {
            const question = questionBank.find(q => q.id === id);
            if (question) {
                validQuestions.push(id);
            } else {
                invalidQuestions.push(id);
            }
        });
        
        if (invalidQuestions.length > 0) {
            console.warn(`تصنيف ${category.name} يحتوي على أسئلة غير موجودة:`, invalidQuestions);
            // تصحيح التصنيف
            questionCategories[categoryKey].questions = validQuestions;
        }
    }
}

// التحقق من عدم وجود تكرار في المفاتيح
console.log('عدد التصنيفات:', Object.keys(questionCategories).length);

// استدعاء الدالة قبل بدء التطبيق
validateQuestionCategories();

// بدء التطبيق
window.addEventListener('DOMContentLoaded', init);