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
  const chatbotChatInfoNewChatButtonIconPaths = document.querySelectorAll(
    ".chatbot-chat-info-new-chat-button-icon-path"
  );
  const chatbotChatInfoSendButton = document.querySelectorAll(
    ".chatbot-chat-info-send-button"
  );
  const chatbotChatInfoVoiceButtonRect = document.querySelector(
    ".chatbot-chat-info-voice-button-rect"
  );
  const chatbotChatInfoVoiceButtonPaths = document.querySelectorAll(
    ".chatbot-chat-info-voice-button-path"
  );
  const chatbotVideo = document.querySelector(".chatbot-video");
  const chatbotInfoSuggestion1 = document.querySelector(
    ".chatbot-info-suggestion-1"
  );
  const chatbotInfoSuggestion2 = document.querySelector(
    ".chatbot-info-suggestion-2"
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
    chatbotPreviewImage.style.display = "block";
    chatbotPreviewImage.style.width = "100%";

    // Chatbot Button
    chatbotEnterButton.style.display = "none";

    // Chatbot Close Button
    chatbotCloseButton.style.display = "flex";

    // Chatbot Chat Box
    chatbotChatbox.style.display = "flex";
  });

  // 챗봇 시작 버튼 클릭 이벤트
  chatbotInfoStartButton.addEventListener("click", function () {
    // Chatbot Chat Box
    chatbotChatbox.style.height = "92.5px";

    // Chatbot Info
    chatbotInfo.style.height = "40.5px";
    chatbotInfo.style.justifyContent = "space-between";
    chatbotInfo.style.background = "none";
    chatbotInfo.style.backdropFilter = "none";
    chatbotInfo.style.border = "none";

    // Chatbot Info Start Button
    chatbotInfoStartButton.style.display = "none";

    // Chatbot Info Suggestion Button
    chatbotInfoSuggestion1.style.display = "flex";
    chatbotInfoSuggestion2.style.display = "flex";

    // Chatbot Chat Info New Chat Button Icon Paths
    chatbotChatInfoNewChatButtonIconPaths.forEach((path) => {
      path.setAttribute("stroke", "#000000");
    });

    // Chatbot Chat Info Voice Button
    chatbotChatInfoVoiceButtonRect.setAttribute("fill", "#000000");
    chatbotChatInfoVoiceButtonPaths.forEach((path) => {
      path.setAttribute("stroke", "#000000");
    });

    // Chatbot Preview Image
    chatbotPreviewImage.style.display = "none";

    // Chatbot Video
    chatbotVideo.style.display = "block";
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
  });
});
