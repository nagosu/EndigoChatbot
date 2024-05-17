document.addEventListener("DOMContentLoaded", function () {
  const chatbot = document.querySelector(".chatbot");
  const chatbotContainer = document.querySelector(".chatbot__container");
  const chatbotPreviewImage = document.querySelector(".chatbot__preview-image");
  const chatbotEnterButton = document.querySelector(".chatbot__enter-button");
  const chatbotCloseButton = document.querySelector(".chatbot__close-button");
  const chatbotChatbox = document.querySelector(".chatbot__chatbox");

  const chatbotInfo = document.querySelector(".chatbot__info");
  const chatbotInfoStartButton = document.querySelector(
    ".chatbot__info-start-button"
  );
  const chatbotChatInputBox = document.querySelector(
    ".chatbot__chat-input-box"
  );
  const chatbotSendButton = document.querySelector(".chatbot__send-button");
  const chatbotVideo = document.querySelector(".chatbot__video");
  const chatbotInfoSuggestion1 = document.querySelector(
    ".chatbot__info-suggestion-1"
  );
  const chatbotInfoSuggestion2 = document.querySelector(
    ".chatbot__info-suggestion-2"
  );
  const chatbotMessagesWrapper = document.querySelector(
    ".chatbot__messages-wrapper"
  );
  const chatbotMessagesContainer = document.querySelector(
    ".chatbot__messages-container"
  );
  const chatbotSendButtonIconPath = document.querySelector(
    ".chatbot__send-button-icon-path"
  );

  // 챗봇 최초진입 버튼 클릭 이벤트
  chatbotEnterButton.addEventListener("click", function () {
    // chatbot
    chatbot.style.width = "651px";
    chatbot.style.height = "366px";
    chatbot.style.borderRadius = "10px";

    // chatbot__container
    chatbotContainer.style.width = "100%";
    chatbotContainer.style.height = "100%";
    chatbotContainer.style.borderRadius = "10px";

    // chatbot__preview-image
    chatbotPreviewImage.style.display = "none";

    // chatbot__video
    chatbotVideo.style.display = "block";

    // chatbot__enter-button
    chatbotEnterButton.style.display = "none";

    // chatbot__close-button
    chatbotCloseButton.style.display = "flex";

    // chatbot__chatbox
    chatbotChatbox.style.display = "flex";
    chatbotChatbox.style.height = "92.5px";

    // chatbot__info
    chatbotInfo.style.height = "40.5px";
    chatbotInfo.style.justifyContent = "space-between";
    chatbotInfo.style.background = "none";
    chatbotInfo.style.backdropFilter = "none";
    chatbotInfo.style.border = "none";

    // chatbot__info_suggestion
    chatbotInfoSuggestion1.style.display = "inline-flex";
    chatbotInfoSuggestion2.style.display = "inline-flex";

    // chatbot__info-start-button
    chatbotInfoStartButton.style.display = "none";
  });

  // 챗봇 닫기 버튼 클릭 이벤트
  chatbotCloseButton.addEventListener("click", function () {
    // chatbot
    chatbot.style.width = "";
    chatbot.style.height = "";
    chatbot.style.borderRadius = "";

    // chatbot__container
    chatbotContainer.style.width = "";
    chatbotContainer.style.height = "";
    chatbotContainer.style.borderRadius = "";

    // chatbot__info
    chatbotInfo.style.height = "";
    chatbotInfo.style.justifyContent = "";
    chatbotInfo.style.background = "";
    chatbotInfo.style.backdropFilter = "";
    chatbotInfo.style.border = "";

    // chatbot__preview-image
    chatbotPreviewImage.style.display = "";
    chatbotPreviewImage.style.width = "";

    // chatbot__enter-button
    chatbotEnterButton.style.display = "";

    // chatbot__close-button
    chatbotCloseButton.style.display = "";

    // chatbot__chatbox
    chatbotChatbox.style.display = "";
    chatbotChatbox.style.height = "";

    // chatbot__close-button
    chatbotCloseButton.style.display = "";

    // chatbot__video
    chatbotVideo.style.display = "";

    // chatbot__messages-wrapper
    chatbotMessagesWrapper.style.display = "";

    // chatbot__info-start-button
    chatbotInfoStartButton.style.display = "";

    // chatbot__info-suggestion
    chatbotInfoSuggestion1.style.display = "";
    chatbotInfoSuggestion2.style.display = "";
  });

  // 메시지 서버통신
  async function server_chat(userMessage) {
    // 더미 데이터
    let data = {
      assistant_message: "안녕하세요, 무엇을 도와드릴까요?",
      // assistant_message: "오늘 날씨가 정말 좋네요!",
      // assistant_message: "도움이 필요하시면 언제든지 말씀하세요.",
      // assistant_message: "지금 어떤 작업을 하고 계신가요?",
      // assistant_message: "좋은 하루 되세요!",
      // assistant_message: "어떤 정보를 찾고 계신가요?",
      // assistant_message: "제가 도와드릴 수 있는 일이 있나요?",
      // assistant_message: "더 자세히 알고 싶으신가요?",
      // assistant_message: "다음 단계는 무엇인가요?",
      // assistant_message: "여기까지 진행하시느라 수고 많으셨습니다.",
    };

    // 서버 통신 구현 부분

    if (data && userMessage) {
      // AI 챗봇 메시지 가져오기
      aiMessage = data.assistant_message;

      if (aiMessage !== "") {
        return aiMessage;
      } else {
        console.log("aiMessage가 없습니다.");
        return null;
      }
    } else {
      console.error("Error response");
      return null;
    }
  }

  // 클라이언트 메시지 전송 및 서버 응답 채팅창에 표시
  async function sendMessage(text) {
    const MessageText = text || chatbotChatInputBox.value.trim();
    if (MessageText !== "") {
      // 사용자 입력 값 가져오기
      const userInput = MessageText;

      // 새로운 메시지 요소 생성
      const newMessage1 = document.createElement("div");
      newMessage1.classList.add("chatbot-message");

      const newAvatar1 = document.createElement("img");
      newAvatar1.src = "../../static/chatbot_avatar/images/avatar-default.png";
      newAvatar1.alt = "";
      newAvatar1.classList.add("chatbot-message-avatar");

      const newMessageText1 = document.createElement("div");
      newMessageText1.classList.add("chatbot-message-text");
      newMessageText1.textContent = userInput;

      newMessage1.appendChild(newAvatar1);
      newMessage1.appendChild(newMessageText1);

      // 생성된 요소를 메시지 컨테이너에 추가
      chatbotMessagesContainer.appendChild(newMessage1);

      const aiMessage = await server_chat(userInput);

      if (aiMessage) {
        // 새로운 메시지 요소 생성
        const newMessage2 = document.createElement("div");
        newMessage2.classList.add("chatbot-message");

        const newAvatar2 = document.createElement("img");
        newAvatar2.src = "../../static/chatbot_avatar/images/avatar-server.png";
        newAvatar2.alt = "";
        newAvatar2.classList.add("chatbot-message-avatar");

        const newMessageText2 = document.createElement("div");
        newMessageText2.classList.add("chatbot-message-text");
        newMessageText2.textContent = aiMessage;

        newMessage2.appendChild(newAvatar2);
        newMessage2.appendChild(newMessageText2);

        // 생성된 요소를 메시지 컨테이너에 추가
        chatbotMessagesContainer.appendChild(newMessage2);
      }

      // 입력 창 비우기
      chatbotChatInputBox.value = "";

      // 챗봇 메시지 컨테이너 표시
      chatbotMessagesWrapper.style.display = "flex";
      chatbotMessagesContainer.style.display = "flex";

      // 제안 버튼 숨기기
      chatbotInfoSuggestion1.style.display = "none";
      chatbotInfoSuggestion2.style.display = "none";

      // 스크롤을 맨 아래로 내리기
      chatbotMessagesWrapper.scrollTop = chatbotMessagesWrapper.scrollHeight;

      // 아이콘 색상 초기화
      chatbotSendButtonIconPath.setAttribute("stroke", "#EEEEEE");
    }
  }

  // 제안 메시지 1 클릭 이벤트 (Tell me about your use case)
  chatbotInfoSuggestion1.addEventListener("click", function () {
    chatbotInfoSuggestion1.style.display = "none";
    chatbotInfoSuggestion2.style.display = "none";
    sendMessage("Tell me about your use case");
  });

  // 제안 메시지 2 클릭 이벤트 (How can I use it for my business?)
  chatbotInfoSuggestion2.addEventListener("click", function () {
    chatbotInfoSuggestion1.style.display = "none";
    chatbotInfoSuggestion2.style.display = "none";
    sendMessage("How can I use it for my business?");
  });

  // input box에서 엔터 키를 누르면 메시지 전송
  chatbotChatInputBox.addEventListener("keydown", function (event) {
    if (event.isComposing) return;
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  // 전송 버튼 클릭 시 메시지 전송
  chatbotSendButton.addEventListener("click", function () {
    sendMessage();
  });

  // 입력 상자에서 입력 이벤트가 발생할 때 아이콘 색상 변경
  chatbotChatInputBox.addEventListener("input", function () {
    const MessageText = chatbotChatInputBox.value.trim();
    if (MessageText !== "") {
      chatbotSendButtonIconPath.setAttribute("stroke", "#FFFFFF");
      chatbotSendButton.removeAttribute("disabled");
      // chatbotInfoSuggestion1.style.display = "none";
      // chatbotInfoSuggestion2.style.display = "none";
    } else {
      chatbotSendButtonIconPath.setAttribute("stroke", "#aaaaaa");
    }
  });
});
