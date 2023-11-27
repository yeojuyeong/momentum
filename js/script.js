//document의 id가 formLogin인 form
//const formLogin = document.getElementById("formLogin");

//input box

const h1 = document.getElementById("h1")
const loginForm = document.getElementById("Login");
const inputLogin = document.querySelector("input");

//className 상수화
const CLASS_HIDDEN = 'hidden';
const KEY_USERNAME = 'userName';

function clickLogin(event){

    event.preventDefault();

    //loginForm 숨긴다
    loginForm.classList.add(CLASS_HIDDEN);
    const userName = inputLogin.value;
    console.log("userName : " + userName)

    // localStorage에 키,값을 넣음
    localStorage.setItem(KEY_USERNAME,userName);

    displayGreeting(userName);

}

function displayGreeting(argName){
    //h1은 보여주고
    h1.classList.remove(CLASS_HIDDEN);      
    h1.innerText = `${argName}님, 반가워요`;
}

const localUsername = localStorage.getItem(KEY_USERNAME);
if (localUsername === null){
    loginForm.classList.remove(CLASS_HIDDEN);
    loginForm.addEventListener("submit",clickLogin);
}else{
    // loginForm.classList.add(CLASS_HIDDEN);
    displayGreeting(localUsername);
}

//버튼 이벤트리스너 등록
loginForm.addEventListener("submit",clickLogin);

// todo 버튼
const todoButton = document.getElementById('todo-button');
const todoForm = document.getElementById('frmToDo');

todoButton.addEventListener('click', () => {
    todoForm.classList.toggle('hidden');
});

// 링크 모달 열기 버튼
const linkButton = document.querySelector('.link');

// 링크 모달 닫기 버튼
const closeLinkModal = document.getElementById('closeLinkModal');

// 링크 모달
const linkModal = document.getElementById('linkModal');

// 링크 입력 필드
const linkInput = document.getElementById('linkInput');

// 추가 버튼
const addLinkButton = document.getElementById('addLinkButton');

// 링크 모달 열기 이벤트 핸들러
linkButton.addEventListener('click', () => {
    linkModal.style.display = 'block';
});

// 링크 모달 닫기 이벤트 핸들러
closeLinkModal.addEventListener('click', () => {
    linkModal.style.display = 'none';
});

// 모달 바깥 클릭 시 모달 닫기
window.addEventListener('click', (event) => {
    if (event.target === linkModal) {
        linkModal.style.display = 'none';
    }
});

// 추가 버튼 클릭 이벤트 핸들러 (링크 추가 로직을 추가하세요)
addLinkButton.addEventListener('click', () => {
    const linkValue = linkInput.value;
    // TODO: 링크 추가 로직
    // 예를 들어, 추가된 링크를 어딘가에 표시하거나 저장할 수 있습니다.
    // 추가한 링크를 모달에서 지우거나 닫는 등의 추가 작업을 수행할 수 있습니다.
    console.log('추가된 링크:', linkValue);
    linkInput.value = ''; // 입력 필드 초기화
    linkModal.style.display = 'none'; // 모달 닫기
});
