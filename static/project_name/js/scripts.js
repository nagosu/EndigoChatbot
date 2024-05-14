document.addEventListener("DOMContentLoaded", function () {
  const chatbotBackground = document.querySelector(".chatbot-background");
  const chatbotContainer = document.querySelector(".chatbot-container");
  const chatbotPreviewImage = document.querySelector(".chatbot-preview-image");
  const chatbotButton = document.querySelector(".chatbot-button");
  const chatbotCloseButton = document.querySelector(".chatbot-close-button");
  const chatbotChatbox = document.querySelector(".chatbot-chatbox");

  chatbotButton.addEventListener("click", function () {
    // chatbotBackground
    chatbotBackground.style.width = "651px";
    chatbotBackground.style.height = "366px";
    chatbotBackground.style.borderRadius = "10px";

    // chatbotContainer
    chatbotContainer.style.width = "100%";
    chatbotContainer.style.height = "100%";
    chatbotContainer.style.borderRadius = "10px";

    // chatbotPreviewImage
    chatbotPreviewImage.style.width = "100%";
    chatbotPreviewImage.style.height = "100%";

    // Chatbot Button
    chatbotButton.style.visibility = "hidden";

    // Chatbot Close Button
    chatbotCloseButton.style.visibility = "visible";

    // Chatbot Chat Box
    chatbotChatbox.style.visibility = "visible";
  });
});
