function down() {
  const button = document.evaluate(
    "/html/body/ytmusic-app/ytmusic-app-layout/ytmusic-player-bar/div[3]/tp-yt-paper-slider",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  button.value -= 5;
  button.dispatchEvent(new Event("change", { bubbles: true }));
}
down();
