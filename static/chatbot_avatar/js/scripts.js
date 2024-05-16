document.addEventListener("DOMContentLoaded", function () {
  const chatbotBackground = document.querySelector(".chatbot-background");
  const chatbotContainer = document.querySelector(".chatbot-container");
  const chatbotPreviewImage = document.querySelector(".chatbot-preview-image");
  const chatbotEnterButton = document.querySelector(".chatbot-enter-button");
  const chatbotCloseButton = document.querySelector(".chatbot-close-button");
  const chatbotChatbox = document.querySelector(".chatbot-chatbox");

  const chatbotInfo = document.querySelector(".chatbot-info");
  const chatbotInfoStartButton = document.querySelector(
    ".chatbot-info-start-button"
  );
  const chatbotChatInfoNewChatButton = document.querySelector(
    ".chatbot-chat-info-new-chat-button"
  );
  const chatbotChatInfoChatInputBox = document.querySelector(
    ".chatbot-chat-info-chat-input-box"
  );
  const chatbotChatInfoSendButton = document.querySelector(
    ".chatbot-chat-info-send-button"
  );
  const chatbotChatInfoVoiceButton = document.querySelector(
    ".chatbot-chat-info-voice-button"
  );
  const chatbotChatInfoVoiceButtonRect = document.querySelector(
    ".chatbot-chat-info-voice-button-rect"
  );
  const chatbotVideo = document.querySelector(".chatbot-video");
  const chatbotInfoSuggestion1 = document.querySelector(
    ".chatbot-info-suggestion-1"
  );
  const chatbotInfoSuggestion2 = document.querySelector(
    ".chatbot-info-suggestion-2"
  );
  const chatbotMessagesWrapper = document.querySelector(
    ".chatbot-messages-wrapper"
  );
  const chatbotMessagesContainer = document.querySelector(
    ".chatbot-messages-container"
  );
  const chatbotSendButtonIconPath = document.querySelector(
    ".chatbot-chat-info-chat-send-button-icon-path"
  );

  // 챗봇 최초진입 버튼 클릭 이벤트
  chatbotEnterButton.addEventListener("click", function () {
    // chatbotBackground
    chatbotBackground.style.width = "651px";
    chatbotBackground.style.height = "366px";
    chatbotBackground.style.borderRadius = "10px";

    // chatbotContainer
    chatbotContainer.style.width = "100%";
    chatbotContainer.style.height = "100%";
    chatbotContainer.style.borderRadius = "10px";

    // chatbotPreviewImage
    chatbotPreviewImage.style.display = "none";

    // Chatbot Video
    chatbotVideo.style.display = "block";

    // Chatbot Button
    chatbotEnterButton.style.display = "none";

    // Chatbot Close Button
    chatbotCloseButton.style.display = "flex";

    // Chatbot Chat Box
    chatbotChatbox.style.display = "flex";
    chatbotChatbox.style.height = "92.5px";

    // Chatbot Info
    chatbotInfo.style.height = "40.5px";
    chatbotInfo.style.justifyContent = "space-between";
    chatbotInfo.style.background = "none";
    chatbotInfo.style.backdropFilter = "none";
    chatbotInfo.style.border = "none";

    // Chatbot Info Suggestion Button
    chatbotInfoSuggestion1.style.display = "inline-flex";
    chatbotInfoSuggestion2.style.display = "inline-flex";

    // Chatbot Info Start Button
    chatbotInfoStartButton.style.display = "none";
  });

  // 챗봇 닫기 버튼 클릭 이벤트
  chatbotCloseButton.addEventListener("click", function () {
    // chatbotBackground
    chatbotBackground.style.width = "";
    chatbotBackground.style.height = "";
    chatbotBackground.style.borderRadius = "";

    // chatbotContainer
    chatbotContainer.style.width = "";
    chatbotContainer.style.height = "";
    chatbotContainer.style.borderRadius = "";

    // Chatbot Info
    chatbotInfo.style.height = "";
    chatbotInfo.style.justifyContent = "";
    chatbotInfo.style.background = "";
    chatbotInfo.style.backdropFilter = "";
    chatbotInfo.style.border = "";

    // chatbotPreviewImage
    chatbotPreviewImage.style.display = "";
    chatbotPreviewImage.style.width = "";

    // Chatbot Enter Button
    chatbotEnterButton.style.display = "";

    // Chatbot Close Button
    chatbotCloseButton.style.display = "";

    // Chatbot Chat Box
    chatbotChatbox.style.display = "";
    chatbotChatbox.style.height = "";

    // Chatbot Close Button
    chatbotCloseButton.style.display = "";

    // Chatbot Video
    chatbotVideo.style.display = "";

    // Chatbot Info Start Button
    chatbotInfoStartButton.style.display = "";

    // Chatbot Info Suggestion Button
    chatbotInfoSuggestion1.style.display = "";
    chatbotInfoSuggestion2.style.display = "";

    // Chatbot Messages Container
    chatbotMessagesWrapper.style.display = "";
  });

  async function server_chat(userMessage) {
    // 더미 데이터
    let data = {
      assistant_message1: "네, 반가워요",
    };

    // 서버 통신 구현 부분

    if (data && userMessage) {
      // AI 챗봇 메시지 가져오기
      aiMessage = data.assistant_message1;
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

  async function sendMessage(text) {
    const MessageText = text || chatbotChatInfoChatInputBox.value.trim();
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
      chatbotChatInfoChatInputBox.value = "";

      // 챗봇 메시지 컨테이너 표시
      chatbotMessagesWrapper.style.display = "flex";

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
  chatbotChatInfoChatInputBox.addEventListener("keydown", function (event) {
    if (event.isComposing) return;
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  // 전송 버튼 클릭 시 메시지 전송
  chatbotChatInfoSendButton.addEventListener("click", function () {
    sendMessage();
  });

  // 입력 상자에서 입력 이벤트가 발생할 때 아이콘 색상 변경
  chatbotChatInfoChatInputBox.addEventListener("input", function () {
    const MessageText = chatbotChatInfoChatInputBox.value.trim();
    if (MessageText !== "") {
      chatbotSendButtonIconPath.setAttribute("stroke", "black");
      chatbotChatInfoSendButton.removeAttribute("disabled");
    } else {
      chatbotSendButtonIconPath.setAttribute("stroke", "#EEEEEE");
    }
  });
});
