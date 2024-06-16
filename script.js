document.addEventListener("DOMContentLoaded", function() {
    const quizData = {
        finance: [
            {
                question: "다음 중 금융 관리의 정의는 무엇입니까?",
                options: {
                    a: "돈을 벌기 위해 일하는 것",
                    b: "돈을 저장하고 관리하는 것",
                    c: "돈을 빌려주는 것",
                    d: "돈을 다른 사람에게 주는 것"
                },
                answer: "b"
            },
            {
                question: "예산을 짜는 이유는 무엇입니까?",
                options: {
                    a: "돈을 무작정 쓰기 위해",
                    b: "돈을 얼마나 썼는지 모르게 하기 위해",
                    c: "돈을 절약하고 필요한 곳에 쓰기 위해",
                    d: "돈을 모두 은행에 넣기 위해"
                },
                answer: "c"
            },
            {
                question: "저축의 장점은 무엇입니까?",
                options: {
                    a: "즉시 사용 가능한 돈이 많아진다",
                    b: "미래를 위해 돈을 모을 수 있다",
                    c: "돈을 빌려줘야 한다",
                    d: "돈을 잃을 위험이 커진다"
                },
                answer: "b"
            },
            {
                question: "신용카드 사용 시 유의해야 할 점은 무엇입니까?",
                options: {
                    a: "가능한 한 많이 사용한다",
                    b: "빚을 지더라도 상관없다",
                    c: "필요한 만큼만 사용하고 갚을 수 있을 만큼만 쓴다",
                    d: "친구에게 빌려준다"
                },
                answer: "c"
            },
            {
                question: "대출을 받을 때 가장 먼저 고려해야 할 것은 무엇입니까?",
                options: {
                    a: "대출 금액",
                    b: "이자율",
                    c: "대출 기간",
                    d: "상환 계획"
                },
                answer: "a"
            },
            {
                question: "다음 중 돈을 모으는 방법으로 올바른 것은 무엇입니까?",
                options: {
                    a: "충동적으로 쇼핑한다",
                    b: "필요 없는 물건을 자주 산다",
                    c: "예산을 세우고 지킨다",
                    d: "돈을 빌려서 쓴다"
                },
                answer: "c"
            },
            {
                question: "금융 계획을 세울 때 필요한 것은 무엇입니까?",
                options: {
                    a: "미래의 목표",
                    b: "다른 사람의 돈",
                    c: "운",
                    d: "큰 돈을 얻기 위한 도박"
                },
                answer: "a"
            },
            {
                question: "비상금의 목적은 무엇입니까?",
                options: {
                    a: "갑작스러운 지출에 대비하기 위해",
                    b: "친구에게 빌려주기 위해",
                    c: "원하는 물건을 사기 위해",
                    d: "돈을 투자하기 위해"
                },
                answer: "a"
            },
            {
                question: "신용 점수가 낮으면 어떤 일이 발생할 수 있습니까?",
                options: {
                    a: "대출을 쉽게 받을 수 있다",
                    b: "이자율이 낮아진다",
                    c: "대출을 받기 어려워진다",
                    d: "신용카드를 무료로 받을 수 있다"
                },
                answer: "c"
            },
            {
                question: "투자의 기본 원칙은 무엇입니까?",
                options: {
                    a: "모든 돈을 한 곳에 투자한다",
                    b: "다양한 곳에 나누어 투자한다",
                    c: "친구의 말을 듣고 투자한다",
                    d: "돈을 쓰지 않고 모은다"
                },
                answer: "b"
            }
        ],
        relationship: [
            {
                question: "좋은 친구가 되기 위해 필요한 덕목은 무엇입니까?",
                options: {
                    a: "무조건 비판하기",
                    b: "신뢰와 정직",
                    c: "항상 이기적으로 행동하기",
                    d: "친구를 무시하기"
                },
                answer: "b"
            },
            {
                question: "다툼이 생겼을 때 가장 좋은 해결 방법은 무엇입니까?",
                options: {
                    a: "무시하고 피한다",
                    b: "소리 지르며 싸운다",
                    c: "대화를 통해 문제를 해결한다",
                    d: "다른 사람들에게 소문을 낸다"
                },
                answer: "c"
            },
            {
                question: "경청하는 태도는 어떤 모습입니까?",
                options: {
                    a: "상대방의 말을 끊는다",
                    b: "다른 생각을 한다",
                    c: "눈을 마주치고 집중해서 듣는다",
                    d: "핸드폰을 사용한다"
                },
                answer: "c"
            },
            {
                question: "적절한 대화 매너는 무엇입니까?",
                options: {
                    a: "상대방의 말을 자꾸 끊는다",
                    b: "자기 이야기만 계속한다",
                    c: "상대방의 말을 존중하고 기다린다",
                    d: "상대방을 비난한다"
                },
                answer: "c"
            },
            {
                question: "갈등을 피하려면 어떻게 해야 합니까?",
                options: {
                    a: "상대방의 입장을 이해하려 노력한다",
                    b: "모든 갈등을 무시한다",
                    c: "상대방에게 화를 낸다",
                    d: "자기주장을 강요한다"
                },
                answer: "a"
            },
            {
                question: "상대방에게 진심 어린 사과를 할 때는 어떻게 해야 합니까?",
                options: {
                    a: "이유를 변명한다",
                    b: "진심으로 사과하고 잘못을 인정한다",
                    c: "상대방을 비난한다",
                    d: "사과를 하지 않는다"
                },
                answer: "b"
            },
            {
                question: "협력하여 일을 할 때 중요한 것은 무엇입니까?",
                options: {
                    a: "자기 의견만 고집한다",
                    b: "상대방의 의견을 무시한다",
                    c: "서로의 의견을 존중하고 협력한다",
                    d: "혼자서 모든 일을 처리한다"
                },
                answer: "c"
            },
            {
                question: "상대방을 칭찬할 때 가장 효과적인 방법은 무엇입니까?",
                options: {
                    a: "칭찬을 하지 않는다",
                    b: "진심 어린 칭찬을 한다",
                    c: "비꼬아서 칭찬한다",
                    d: "억지로 칭찬한다"
                },
                answer: "b"
            },
            {
                question: "서로의 차이를 이해하고 존중하는 태도는 무엇입니까?",
                options: {
                    a: "차이를 무시한다",
                    b: "차이를 비난한다",
                    c: "차이를 이해하고 존중한다",
                    d: "차이를 강요한다"
                },
                answer: "c"
            },
            {
                question: "좋은 대인관계를 유지하기 위해 필요한 것은 무엇입니까?",
                options: {
                    a: "항상 자신의 이익만 챙긴다",
                    b: "상대방의 감정을 무시한다",
                    c: "서로 신뢰하고 배려한다",
                    d: "상대방에게 무조건 복종한다"
                },
                answer: "c"
            }
        ],
        "crime-prevention": [
            {
                question: "범죄를 예방하기 위한 첫 번째 단계는 무엇입니까?",
                options: {
                    a: "집에 항상 불을 끈다",
                    b: "주변 환경을 주의 깊게 관찰하고 경계한다",
                    c: "문을 열어 둔다",
                    d: "낯선 사람을 집에 들인다"
                },
                answer: "b"
            },
            {
                question: "길을 걸을 때 안전을 위해 해야 할 일은 무엇입니까?",
                options: {
                    a: "이어폰을 끼고 음악을 크게 듣는다",
                    b: "밝고 사람이 많은 길을 선택한다",
                    c: "어두운 골목길로 다닌다",
                    d: "핸드폰만 보며 걷는다"
                },
                answer: "b"
            },
            {
                question: "가정에서 범죄 예방을 위해 중요한 것은 무엇입니까?",
                options: {
                    a: "집 문을 항상 잠근다",
                    b: "문을 열어 둔다",
                    c: "창문을 항상 열어 둔다",
                    d: "낯선 사람을 초대한다"
                },
                answer: "a"
            },
            {
                question: "온라인에서 안전하게 행동하는 방법은 무엇입니까?",
                options: {
                    a: "개인정보를 아무에게나 공유한다",
                    b: "의심스러운 링크를 클릭하지 않는다",
                    c: "비밀번호를 쉽게 추측할 수 있게 만든다",
                    d: "낯선 사람과 개인 정보를 교환한다"
                },
                answer: "b"
            },
            {
                question: "범죄의 위험이 높은 상황에서 어떻게 행동해야 합니까?",
                options: {
                    a: "경찰이나 도움을 요청할 수 있는 사람에게 연락한다",
                    b: "무서워서 아무 것도 하지 않는다",
                    c: "상황을 무시하고 계속 행동한다",
                    d: "위험한 사람과 대치한다"
                },
                answer: "a"
            },
            {
                question: "대중교통을 이용할 때 안전을 위해 해야 할 일은 무엇입니까?",
                options: {
                    a: "낯선 사람과 친해진다",
                    b: "주위 사람들에게 자신의 행선지를 알린다",
                    c: "혼자 외진 곳에 서 있는다",
                    d: "사람이 없는 차량을 선택한다"
                },
                answer: "b"
            },
            {
                question: "집에 혼자 있을 때 안전을 위해 해야 할 일은 무엇입니까?",
                options: {
                    a: "낯선 사람이 초인종을 누르면 문을 연다",
                    b: "모든 창문과 문을 잠근다",
                    c: "큰 소리로 음악을 듣는다",
                    d: "집 주소를 소셜 미디어에 공개한다"
                },
                answer: "b"
            },
            {
                question: "범죄 예방을 위한 이웃 간의 협력 방법은 무엇입니까?",
                options: {
                    a: "서로를 무시한다",
                    b: "이웃 간의 연락망을 구축하고 정보를 공유한다",
                    c: "이웃을 모른 척 한다",
                    d: "집 주변의 이상한 활동을 보고하지 않는다"
                },
                answer: "b"
            },
            {
                question: "주차할 때 안전을 위해 해야 할 일은 무엇입니까?",
                options: {
                    a: "어두운 곳에 주차한다",
                    b: "밝고 사람들이 많이 다니는 곳에 주차한다",
                    c: "차 문을 잠그지 않는다",
                    d: "차 안에 귀중품을 놓아둔다"
                },
                answer: "b"
            },
            {
                question: "범죄 예방을 위해 개인적으로 할 수 있는 가장 중요한 것은 무엇입니까?",
                options: {
                    a: "항상 주의를 기울이고 경계한다",
                    b: "낯선 사람과 쉽게 친해진다",
                    c: "위험한 행동을 한다",
                    d: "중요한 정보를 누구에게나 알려준다"
                },
                answer: "a"
            }
        ],
        "career-development": [
            {
                question: "진로 개발의 첫 번째 단계는 무엇입니까?",
                options: {
                    a: "일을 하지 않는다",
                    b: "원하는 직업에 대해 조사한다",
                    c: "친구가 하는 일을 그대로 따른다",
                    d: "아무 직업이나 선택한다"
                },
                answer: "b"
            },
            {
                question: "자기 자신을 이해하는 것은 진로 개발에 어떻게 도움이 됩니까?",
                options: {
                    a: "나의 강점과 약점을 파악할 수 있다",
                    b: "직업 선택에 아무런 영향을 주지 않는다",
                    c: "친구의 직업을 선택하게 된다",
                    d: "직업을 바꾸기 어렵게 만든다"
                },
                answer: "a"
            },
            {
                question: "효과적인 진로 개발을 위해 필요한 것은 무엇입니까?",
                options: {
                    a: "다양한 직업에 대해 탐색하고 경험한다",
                    b: "한 가지 직업에만 집착한다",
                    c: "일자리를 찾지 않는다",
                    d: "직업에 대한 관심을 가지지 않는다"
                },
                answer: "a"
            },
            {
                question: "진로 목표를 설정할 때 중요한 것은 무엇입니까?",
                options: {
                    a: "현실적이고 달성 가능한 목표를 설정한다",
                    b: "너무 큰 목표를 설정한다",
                    c: "목표를 설정하지 않는다",
                    d: "다른 사람의 목표를 그대로 따른다"
                },
                answer: "a"
            },
            {
                question: "네트워킹이 중요한 이유는 무엇입니까?",
                options: {
                    a: "직업 정보를 공유하지 않는다",
                    b: "혼자서 모든 것을 해결한다",
                    c: "다른 사람과 상호 작용하지 않는다",
                    d: "다양한 사람들과 정보를 교환할 수 있다"
                },
                answer: "d"
            },
            {
                question: "자기계발을 위한 활동으로 올바른 것은 무엇입니까?",
                options: {
                    a: "새로운 기술을 배우고 연습한다",
                    b: "현재 상태에 만족하고 변화를 시도하지 않는다",
                    c: "시간을 낭비한다",
                    d: "직업과 관련 없는 활동에만 집중한다"
                },
                answer: "a"
            },
            {
                question: "인터뷰를 준비할 때 중요한 것은 무엇입니까?",
                options: {
                    a: "회사와 직무에 대해 조사한다",
                    b: "준비하지 않는다",
                    c: "면접 시간에 늦는다",
                    d: "복장에 신경 쓰지 않는다"
                },
                answer: "a"
            },
            {
                question: "진로 개발을 위해 자기 자신에게 질문해야 할 것은 무엇입니까?",
                options: {
                    a: "나는 어떤 일을 즐기고 잘할 수 있는가?",
                    b: "나는 무슨 일을 피해야 하는가?",
                    c: "다른 사람들이 나를 어떻게 생각하는가?",
                    d: "나는 무슨 일을 할 수 없는가?"
                },
                answer: "a"
            },
            {
                question: "직업 탐색을 위한 올바른 방법은 무엇입니까?",
                options: {
                    a: "직업 박람회에 참석하고 전문가와 이야기한다",
                    b: "직업 정보를 찾지 않는다",
                    c: "친구의 직업을 무조건 따른다",
                    d: "인터넷 검색만 한다"
                },
                answer: "a"
            },
            {
                question: "진로 변경을 고려할 때 중요한 것은 무엇입니까?",
                options: {
                    a: "현재의 일과 새로운 일의 장단점을 비교한다",
                    b: "아무 생각 없이 직업을 바꾼다",
                    c: "주위 사람들의 의견만 따른다",
                    d: "진로 변경을 두려워한다"
                },
                answer: "a"
            }
        ]
    };

    let currentQuestionIndex = 0;
    let currentQuiz = [];
    const quizType = document.body.dataset.quizType;
    if (quizType === 'finance') {
        currentQuiz = quizData.finance;
    } else if (quizType === 'relationship') {
        currentQuiz = quizData.relationship;
    } else if (quizType === 'crime-prevention') {
        currentQuiz = quizData["crime-prevention"];
    } else if (quizType === 'career-development') {
        currentQuiz = quizData["career-development"];
    }

    const quizQuestionContainer = document.getElementById('quiz-question-container');
    const submitAnswerButton = document.getElementById('submit-answer');
    const nextQuestionButton = document.getElementById('next-question');
    const bookmarkQuestionButton = document.getElementById('bookmark-question');
    const resultMessage = document.getElementById('result-message');

    function loadQuestion() {
        const currentQuestion = currentQuiz[currentQuestionIndex];
        quizQuestionContainer.innerHTML = `
            <div class="quiz-question">
                <p>${currentQuestion.question}</p>
                <label><input type="radio" name="answer" value="a"> ${currentQuestion.options.a}</label><br>
                <label><input type="radio" name="answer" value="b"> ${currentQuestion.options.b}</label><br>
                <label><input type="radio" name="answer" value="c"> ${currentQuestion.options.c}</label><br>
                <label><input type="radio" name="answer" value="d"> ${currentQuestion.options.d}</label>
            </div>
        `;
        resultMessage.textContent = '';
        nextQuestionButton.style.display = 'none';
        submitAnswerButton.style.display = 'block';
        bookmarkQuestionButton.style.display = 'block';
    }

    function checkAnswer() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption) {
            const answer = selectedOption.value;
            const correctAnswer = currentQuiz[currentQuestionIndex].answer;
            if (answer === correctAnswer) {
                resultMessage.textContent = '정답입니다!';
                resultMessage.style.color = 'green';
            } else {
                resultMessage.textContent = `틀렸습니다. 정답은 ${correctAnswer}입니다.`;
                resultMessage.style.color = 'red';
            }
            submitAnswerButton.style.display = 'none';
            nextQuestionButton.style.display = 'block';
        } else {
            resultMessage.textContent = '답을 선택하세요.';
            resultMessage.style.color = 'red';
        }
    }

    function loadNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.length) {
            loadQuestion();
        } else {
            quizQuestionContainer.innerHTML = '<p>퀴즈가 완료되었습니다!</p>';
            nextQuestionButton.style.display = 'none';
            bookmarkQuestionButton.style.display = 'none';
        }
    }

    function bookmarkQuestion() {
        const bookmarkedQuizzes = JSON.parse(localStorage.getItem('bookmarkedQuizzes')) || [];
        const currentQuestion = currentQuiz[currentQuestionIndex];
        bookmarkedQuizzes.push(currentQuestion);
        localStorage.setItem('bookmarkedQuizzes', JSON.stringify(bookmarkedQuizzes));
        alert('퀴즈가 북마크되었습니다.');
    }

    function loadBookmarkedQuizzes() {
        const bookmarkedQuizContainer = document.getElementById('bookmarked-quiz-container');
        const bookmarkedQuizzes = JSON.parse(localStorage.getItem('bookmarkedQuizzes')) || [];
        if (bookmarkedQuizzes.length > 0) {
            bookmarkedQuizContainer.innerHTML = bookmarkedQuizzes.map((quiz, index) => `
                <div class="quiz-question">
                    <p>${quiz.question}</p>
                    <label><input type="radio" name="answer-${index}" value="a"> ${quiz.options.a}</label><br>
                    <label><input type="radio" name="answer-${index}" value="b"> ${quiz.options.b}</label><br>
                    <label><input type="radio" name="answer-${index}" value="c"> ${quiz.options.c}</label><br>
                    <label><input type="radio" name="answer-${index}" value="d"> ${quiz.options.d}</label><br>
                    <button type="button" onclick="removeBookmark(${index})" class="btn">북마크 해제</button>
                </div>
            `).join('');
        } else {
            bookmarkedQuizContainer.innerHTML = '<p>북마크된 퀴즈가 없습니다.</p>';
        }
    }

    function removeBookmark(index) {
        let bookmarkedQuizzes = JSON.parse(localStorage.getItem('bookmarkedQuizzes')) || [];
        bookmarkedQuizzes.splice(index, 1);
        localStorage.setItem('bookmarkedQuizzes', JSON.stringify(bookmarkedQuizzes));
        loadBookmarkedQuizzes();
    }

    function clearBookmarks() {
        localStorage.removeItem('bookmarkedQuizzes');
        loadBookmarkedQuizzes();
    }

    if (document.body.contains(quizQuestionContainer)) {
        loadQuestion();
        submitAnswerButton.addEventListener('click', checkAnswer);
        nextQuestionButton.addEventListener('click', loadNextQuestion);
        bookmarkQuestionButton.addEventListener('click', bookmarkQuestion);
    }

    if (document.body.contains(document.getElementById('bookmarked-quiz-container'))) {
        loadBookmarkedQuizzes();
        document.getElementById('clear-bookmarks').addEventListener('click', clearBookmarks);
    }

    function showLogin() {
        document.getElementById("auth-container").style.display = "flex";
        document.getElementById("login-form").style.display = "block";
        document.getElementById("register-form").style.display = "none";
    }

    function showRegister() {
        document.getElementById("auth-container").style.display = "flex";
        document.getElementById("login-form").style.display = "none";
        document.getElementById("register-form").style.display = "block";
    }

    document.getElementById("login-btn").addEventListener("click", showLogin);
    document.getElementById("register-btn").addEventListener("click", showRegister);
    document.getElementById("show-login").addEventListener("click", showLogin);
    document.getElementById("show-register").addEventListener("click", showRegister);

    document.getElementById("auth-container").addEventListener("click", function(event) {
        if (event.target === this) {
            this.style.display = "none";
        }
    });

    document.getElementById("login-form-element").addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("login-email").value;
        document.getElementById("auth-container").style.display = "none";
        document.querySelector(".auth-buttons").style.display = "none";
        const welcomeMessage = document.getElementById("welcome-message");
        document.getElementById("user-email").textContent = email;
        welcomeMessage.style.display = "block";
    });

    document.getElementById("register-form-element").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("auth-container").style.display = "none";
        alert("회원가입이 완료되었습니다.");
    });

    document.getElementById("consult-form").addEventListener("submit", async function(event) {
        event.preventDefault();
        const userMessage = document.getElementById("user-message").value;
        const responseMessage = document.getElementById("response-message");
        responseMessage.textContent = "답변을 기다리고 있습니다...";
        try {
            const response = await fetch('/api/consult', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: userMessage })
            });
            const data = await response.json();
            responseMessage.textContent = data.message;
        } catch (error) {
            responseMessage.textContent = "오류가 발생했습니다. 다시 시도해주세요.";
        }
    });

    document.getElementById("contact-form-element").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("문의가 접수되었습니다. 감사합니다!");
    });
});
