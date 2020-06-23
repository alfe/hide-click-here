const init = () => {
    $("iframe").contents()
	    .find('yt-live-chat-text-message-renderer:contains("CLІСK HЕRЕ")')
	    .css("display","none");
    setTimeout(init, 500);
}

window.onload = () => {
    console.log('loaded')
    setTimeout(init, 20);
};

