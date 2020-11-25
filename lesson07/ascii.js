(function () {
    "use strict";

    const START_BUTTON_ID = "start";
    const STOP_BUTTON_ID = "stop";
    const ANIMATION_SELECT_ID = "animation";
    const TEXTAREA_ID = "text-area";
    const FONTSIZE_SELECT_ID = "fontsize";
    const SPEED_CHECKBOX_ID = "turbo";
    
    let animation_speed = 250;
    let text_to_animate = "";
    let frames = ""; // frames for the selected animation
    let current_frame_index = -1; // index of the visible frame
    let intervalID = 0;

    function onload() {
        // initialize event handlers
        const startBttn = document.getElementById(START_BUTTON_ID);
        const stopBttn = document.getElementById(STOP_BUTTON_ID);
        const animationSelect = document.getElementById(ANIMATION_SELECT_ID)
        const fontSizeSelect = document.getElementById(FONTSIZE_SELECT_ID)
        const speedCheckbox = document.getElementById(SPEED_CHECKBOX_ID);
        
        startBttn.onclick = startClick;
        stopBttn.onclick = stopClick;
        animationSelect.onchange = animationChanged;
        fontSizeSelect.onchange = fontSizeChanged;
        speedCheckbox.onchange = speedChanged;
    }

    function startClick() {
        // disable start and enable stop
        const startBttn = document.getElementById(START_BUTTON_ID);
        const stopBttn = document.getElementById(STOP_BUTTON_ID);
        startBttn.disabled = true;
        stopBttn.disabled = false;

        //disable select box of animations
        const animationSelect = document.getElementById(ANIMATION_SELECT_ID)
        animationSelect.disabled = true;
    
        // don't animate BLANK
        const textArea = document.getElementById(TEXTAREA_ID);
        if (textArea.value === "") {
            return;
        }
        // split ASCII animation in frames
        text_to_animate = textArea.value;
        frames = text_to_animate.split("=====\n");
        intervalID = setInterval(advanceFrame, animation_speed);
    }

    function stopClick() {
        // disable stop, enable start
        const startBttn = document.getElementById(START_BUTTON_ID);
        const stopBttn = document.getElementById(STOP_BUTTON_ID);
        startBttn.disabled = false;
        stopBttn.disabled = true;

        //enable select box of animations
        const animationSelect = document.getElementById(ANIMATION_SELECT_ID)
        animationSelect.disabled = false;

        // stop animation timer
        clearInterval(intervalID);
        current_frame_index = -1;

        // reset text-area animation content
        const textArea = document.getElementById(TEXTAREA_ID);
        textArea.value = text_to_animate;
    }

    function advanceFrame() {
        if (frames === null || frames.length === 0) {
            return;
        }

        current_frame_index++;
        if (current_frame_index >= frames.length) {
            current_frame_index = 0;
        }

        const textArea = document.getElementById(TEXTAREA_ID);
        textArea.value = frames[current_frame_index];
    }

    function animationChanged() {
        const option = this.value;
        const textArea = document.getElementById(TEXTAREA_ID);
        textArea.value = ANIMATIONS[option];
    }

    function fontSizeChanged() {
        const size = this.value;
        const textArea = document.getElementById(TEXTAREA_ID);
        textArea.style.fontSize = size;
    }

    function speedChanged() {
        // toggle speed between 50 and 250
        animation_speed = animation_speed === 250 ? 50 : 250;

        // if animation started, reset the interval
        if(current_frame_index > -1){
            clearInterval(intervalID);   
            intervalID = setInterval(advanceFrame, animation_speed);
        }
    }

    window.onload = onload;
})();