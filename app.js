
/* =========================================================
   GRADIENT — WALLPAPER STUDIO
   APP.JS
   ========================================================= */


/* =========================================================
   WALLPAPER VIDEOS
   =========================================================

   Put your MP4 files inside the "videos" folder.

   The names should match the file paths below:

   videos/wallpaper1.mp4
   videos/wallpaper2.mp4
   videos/wallpaper3.mp4
   ...
   videos/wallpaper50.mp4

   You can add/change the actual video files without
   changing the HTML or CSS.

   Every entry below automatically becomes a
   clickable wallpaper button.

   ========================================================= */

const VIDEOS = [

    {
        name: "Wallpaper 1",
        file: "videos/wallpaper1.mp4"
    },

    {
        name: "Wallpaper 2",
        file: "videos/wallpaper2.mp4"
    },

    {
        name: "Wallpaper 3",
        file: "videos/wallpaper3.mp4"
    },

    {
        name: "Wallpaper 4",
        file: "videos/wallpaper4.mp4"
    },

    {
        name: "Wallpaper 5",
        file: "videos/wallpaper5.mp4"
    },

    {
        name: "Wallpaper 6",
        file: "videos/wallpaper6.mp4"
    },

    {
        name: "Wallpaper 7",
        file: "videos/wallpaper7.mp4"
    },

    {
        name: "Wallpaper 8",
        file: "videos/wallpaper8.mp4"
    },

    {
        name: "Wallpaper 9",
        file: "videos/wallpaper9.mp4"
    },

    {
        name: "Wallpaper 10",
        file: "videos/wallpaper10.mp4"
    },

    {
        name: "Wallpaper 11",
        file: "videos/wallpaper11.mp4"
    },

    {
        name: "Wallpaper 12",
        file: "videos/wallpaper12.mp4"
    },

    {
        name: "Wallpaper 13",
        file: "videos/wallpaper13.mp4"
    },

    {
        name: "Wallpaper 14",
        file: "videos/wallpaper14.mp4"
    },

    {
        name: "Wallpaper 15",
        file: "videos/wallpaper15.mp4"
    },

    {
        name: "Wallpaper 16",
        file: "videos/wallpaper16.mp4"
    },

    {
        name: "Wallpaper 17",
        file: "videos/wallpaper17.mp4"
    },

    {
        name: "Wallpaper 18",
        file: "videos/wallpaper18.mp4"
    },

    {
        name: "Wallpaper 19",
        file: "videos/wallpaper19.mp4"
    },

    {
        name: "Wallpaper 20",
        file: "videos/wallpaper20.mp4"
    },

    {
        name: "Wallpaper 21",
        file: "videos/wallpaper21.mp4"
    },

    {
        name: "Wallpaper 22",
        file: "videos/wallpaper22.mp4"
    },

    {
        name: "Wallpaper 23",
        file: "videos/wallpaper23.mp4"
    },

    {
        name: "Wallpaper 24",
        file: "videos/wallpaper24.mp4"
    },

    {
        name: "Wallpaper 25",
        file: "videos/wallpaper25.mp4"
    },

    {
        name: "Wallpaper 26",
        file: "videos/wallpaper26.mp4"
    },

    {
        name: "Wallpaper 27",
        file: "videos/wallpaper27.mp4"
    },

    {
        name: "Wallpaper 28",
        file: "videos/wallpaper28.mp4"
    },

    {
        name: "Wallpaper 29",
        file: "videos/wallpaper29.mp4"
    },

    {
        name: "Wallpaper 30",
        file: "videos/wallpaper30.mp4"
    },

    {
        name: "Wallpaper 31",
        file: "videos/wallpaper31.mp4"
    },

    {
        name: "Wallpaper 32",
        file: "videos/wallpaper32.mp4"
    },

    {
        name: "Wallpaper 33",
        file: "videos/wallpaper33.mp4"
    },

    {
        name: "Wallpaper 34",
        file: "videos/wallpaper34.mp4"
    },

    {
        name: "Wallpaper 35",
        file: "videos/wallpaper35.mp4"
    },

    {
        name: "Wallpaper 36",
        file: "videos/wallpaper36.mp4"
    },

    {
        name: "Wallpaper 37",
        file: "videos/wallpaper37.mp4"
    },

    {
        name: "Wallpaper 38",
        file: "videos/wallpaper38.mp4"
    },

    {
        name: "Wallpaper 39",
        file: "videos/wallpaper39.mp4"
    },

    {
        name: "Wallpaper 40",
        file: "videos/wallpaper40.mp4"
    },

    {
        name: "Wallpaper 41",
        file: "videos/wallpaper41.mp4"
    },

    {
        name: "Wallpaper 42",
        file: "videos/wallpaper42.mp4"
    },

    {
        name: "Wallpaper 43",
        file: "videos/wallpaper43.mp4"
    },

    {
        name: "Wallpaper 44",
        file: "videos/wallpaper44.mp4"
    },

    {
        name: "Wallpaper 45",
        file: "videos/wallpaper45.mp4"
    },

    {
        name: "Wallpaper 46",
        file: "videos/wallpaper46.mp4"
    },

    {
        name: "Wallpaper 47",
        file: "videos/wallpaper47.mp4"
    },

    {
        name: "Wallpaper 48",
        file: "videos/wallpaper48.mp4"
    },

    {
        name: "Wallpaper 49",
        file: "videos/wallpaper49.mp4"
    },

    {
        name: "Wallpaper 50",
        file: "videos/wallpaper50.mp4"
    }

];



/* =========================================================
   AI PROMPTS
   ========================================================= */

const PROMPTS = [

    "Dark futuristic gradient wallpaper with glowing purple and cyan light",

    "Abstract neon geometric wallpaper with smooth purple and blue lighting",

    "Minimal futuristic mobile wallpaper with soft glowing colors",

    "Premium dark AMOLED wallpaper with cinematic neon gradients",

    "Modern abstract wallpaper with flowing cyan and violet energy"

];



/* =========================================================
   STATE
   ========================================================= */

const state = {

    selectedVideo: null,

    colorOne: "#7C5CFC",

    colorTwo: "#22D3EE",

    pattern: "gradient",

    direction: "diagonal"

};



/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const video =
    document.getElementById("wallpaperVideo");

const canvas =
    document.getElementById("wallpaperCanvas");

const ctx =
    canvas.getContext("2d");

const videoButtons =
    document.getElementById("videoButtons");

const colorOne =
    document.getElementById("colorOne");

const colorTwo =
    document.getElementById("colorTwo");

const colorOneHex =
    document.getElementById("colorOneHex");

const colorTwoHex =
    document.getElementById("colorTwoHex");

const randomizeButton =
    document.getElementById("randomizeButton");

const phoneGlow =
    document.getElementById("phoneGlow");

const previewCaption =
    document.getElementById("previewCaption");

const patternButtons =
    document.querySelectorAll(
        "[data-pattern]"
    );

const directionButtons =
    document.querySelectorAll(
        "[data-direction]"
    );

const promptList =
    document.getElementById("promptList");

const toast =
    document.getElementById("toast");

const wallpaperSheet =
    document.getElementById("wallpaperSheet");

const setWallpaperButton =
    document.getElementById(
        "setWallpaperButton"
    );

const cancelSheet =
    document.getElementById(
        "cancelSheet"
    );



/* =========================================================
   CREATE VIDEO BUTTONS
   ========================================================= */

function createVideoButtons() {

    videoButtons.innerHTML = "";


    VIDEOS.forEach(
        (wallpaper, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "video-button";


            button.dataset.videoIndex =
                index;



            /* =================================================
               VIDEO PREVIEW
               ================================================= */

            const preview =
                document.createElement(
                    "video"
                );


            preview.className =
                "video-button-preview";


            preview.src =
                wallpaper.file;


            preview.muted =
                true;


            preview.loop =
                true;


            preview.autoplay =
                true;


            preview.playsInline =
                true;


            preview.preload =
                "metadata";



            /* =================================================
               VIDEO OVERLAY
               ================================================= */

            const overlay =
                document.createElement(
                    "div"
                );


            overlay.className =
                "video-button-overlay";



            /* =================================================
               VIDEO NAME
               ================================================= */

            const name =
                document.createElement(
                    "span"
                );


            name.className =
                "video-button-name";


            name.textContent =
                wallpaper.name;



            /* =================================================
               BUILD BUTTON
               ================================================= */

            overlay.appendChild(
                name
            );


            button.appendChild(
                preview
            );


            button.appendChild(
                overlay
            );



            /* =================================================
               CLICK
               ================================================= */

            button.addEventListener(
                "click",
                () => {

                    selectVideo(
                        index
                    );

                }
            );


            videoButtons.appendChild(
                button
            );

        }
    );

}



/* =========================================================
   SELECT VIDEO
   ========================================================= */

function selectVideo(index) {

    if (
        !VIDEOS[index]
    ) {

        return;

    }


    state.selectedVideo =
        index;


    const wallpaper =
        VIDEOS[index];


    video.pause();


    video.src =
        wallpaper.file;


    video.load();


    video.style.display =
        "block";


    canvas.style.display =
        "none";


    const playPromise =
        video.play();


    if (
        playPromise
    ) {

        playPromise.catch(
            () => {

                /*
                 * Playback can be started manually
                 * if the browser blocks autoplay.
                 */

            }
        );

    }


    document
        .querySelectorAll(
            ".video-button"
        )
        .forEach(
            button => {

                const buttonIndex =
                    Number(
                        button.dataset.videoIndex
                    );


                button.classList.toggle(
                    "active",
                    buttonIndex === index
                );

            }
        );


    previewCaption.textContent =
        `${wallpaper.name} — live preview`;


    updateGlow();

}



/* =========================================================
   SHOW DESIGN / GRADIENT PREVIEW
   ========================================================= */

function showDesignPreview() {

    state.selectedVideo =
        null;


    video.pause();


    video.removeAttribute(
        "src"
    );


    video.load();


    video.style.display =
        "none";


    canvas.style.display =
        "block";


    document
        .querySelectorAll(
            ".video-button"
        )
        .forEach(
            button => {

                button.classList.remove(
                    "active"
                );

            }
        );


    previewCaption.textContent =
        "Custom gradient — live preview";


    updateGlow();


    drawCanvas();

}



/* =========================================================
   COLOR UPDATES
   ========================================================= */

function updateColors() {

    state.colorOne =
        colorOne.value.toUpperCase();


    state.colorTwo =
        colorTwo.value.toUpperCase();


    colorOneHex.textContent =
        state.colorOne;


    colorTwoHex.textContent =
        state.colorTwo;


    showDesignPreview();

}



/* =========================================================
   PHONE GLOW
   ========================================================= */

function updateGlow() {

    phoneGlow.style.background =
        `radial-gradient(
            circle,
            ${state.colorOne}55,
            transparent 68%
        )`;

}



/* =========================================================
   CANVAS RESIZE
   ========================================================= */

function resizeCanvas() {

    const rect =
        canvas.getBoundingClientRect();


    const width =
        Math.max(
            1,
            Math.floor(
                rect.width
            )
        );


    const height =
        Math.max(
            1,
            Math.floor(
                rect.height
            )
        );


    const pixelRatio =
        window.devicePixelRatio ||
        1;


    canvas.width =
        width * pixelRatio;


    canvas.height =
        height * pixelRatio;


    ctx.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
    );


    if (
        state.selectedVideo === null
    ) {

        drawCanvas();

    }

}



/* =========================================================
   HEX TO RGB
   ========================================================= */

function hexToRgb(hex) {

    const clean =
        hex.replace(
            "#",
            ""
        );


    return {

        r: parseInt(
            clean.substring(
                0,
                2
            ),
            16
        ),

        g: parseInt(
            clean.substring(
                2,
                4
            ),
            16
        ),

        b: parseInt(
            clean.substring(
                4,
                6
            ),
            16
        )

    };

}



/* =========================================================
   DRAW CANVAS
   ========================================================= */

function drawCanvas() {

    if (
        state.selectedVideo !== null
    ) {

        return;

    }


    const width =
        canvas.clientWidth;


    const height =
        canvas.clientHeight;


    if (
        !width ||
        !height
    ) {

        return;

    }


    const first =
        hexToRgb(
            state.colorOne
        );


    const second =
        hexToRgb(
            state.colorTwo
        );


    let gradient;



    /* =====================================================
       LINEAR
       ===================================================== */

    if (
        state.direction === "linear"
    ) {

        gradient =
            ctx.createLinearGradient(
                0,
                0,
                width,
                0
            );

    }



    /* =====================================================
       RADIAL
       ===================================================== */

    else if (
        state.direction === "radial"
    ) {

        gradient =
            ctx.createRadialGradient(
                width / 2,
                height / 2,
                0,
                width / 2,
                height / 2,
                Math.max(
                    width,
                    height
                )
            );

    }



    /* =====================================================
       DIAGONAL
       ===================================================== */

    else {

        gradient =
            ctx.createLinearGradient(
                0,
                0,
                width,
                height
            );

    }


    gradient.addColorStop(
        0,
        `rgb(
            ${first.r},
            ${first.g},
            ${first.b}
        )`
    );


    gradient.addColorStop(
        1,
        `rgb(
            ${second.r},
            ${second.g},
            ${second.b}
        )`
    );


    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    ctx.fillStyle =
        gradient;


    ctx.fillRect(
        0,
        0,
        width,
        height
    );


    if (
        state.pattern === "mesh"
    ) {

        drawMesh(
            width,
            height
        );

    }


    if (
        state.pattern === "shapes"
    ) {

        drawShapes(
            width,
            height
        );

    }

}



/* =========================================================
   MESH
   ========================================================= */

function drawMesh(
    width,
    height
) {

    ctx.save();


    ctx.globalAlpha =
        0.16;


    ctx.strokeStyle =
        "#ffffff";


    ctx.lineWidth =
        1;


    const spacing =
        55;


    for (
        let x = -height;
        x < width + height;
        x += spacing
    ) {

        ctx.beginPath();


        ctx.moveTo(
            x,
            0
        );


        ctx.lineTo(
            x + height,
            height
        );


        ctx.stroke();

    }


    for (
        let x = 0;
        x < width + height;
        x += spacing
    ) {

        ctx.beginPath();


        ctx.moveTo(
            x,
            height
        );


        ctx.lineTo(
            x + height,
            0
        );


        ctx.stroke();

    }


    ctx.restore();

}



/* =========================================================
   ABSTRACT SHAPES
   ========================================================= */

function drawShapes(
    width,
    height
) {

    ctx.save();


    const circles = [

        {
            x:
                width * 0.2,

            y:
                height * 0.25,

            radius:
                width * 0.28,

            color:
                state.colorOne
        },

        {
            x:
                width * 0.8,

            y:
                height * 0.55,

            radius:
                width * 0.32,

            color:
                state.colorTwo
        },

        {
            x:
                width * 0.45,

            y:
                height * 0.85,

            radius:
                width * 0.20,

            color:
                "#ffffff"
        }

    ];


    circles.forEach(
        circle => {

            const rgb =
                hexToRgb(
                    circle.color
                );


            const gradient =
                ctx.createRadialGradient(
                    circle.x,
                    circle.y,
                    0,
                    circle.x,
                    circle.y,
                    circle.radius
                );


            gradient.addColorStop(
                0,
                `rgba(
                    ${rgb.r},
                    ${rgb.g},
                    ${rgb.b},
                    0.35
                )`
            );


            gradient.addColorStop(
                1,
                `rgba(
                    ${rgb.r},
                    ${rgb.g},
                    ${rgb.b},
                    0
                )`
            );


            ctx.fillStyle =
                gradient;


            ctx.beginPath();


            ctx.arc(
                circle.x,
                circle.y,
                circle.radius,
                0,
                Math.PI * 2
            );


            ctx.fill();

        }
    );


    ctx.restore();

}



/* =========================================================
   PATTERN BUTTONS
   ========================================================= */

patternButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                patternButtons.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                state.pattern =
                    button.dataset.pattern;


                showDesignPreview();

            }
        );

    }
);



/* =========================================================
   DIRECTION BUTTONS
   ========================================================= */

directionButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                directionButtons.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                state.direction =
                    button.dataset.direction;


                showDesignPreview();

            }
        );

    }
);



/* =========================================================
   RANDOMIZE COLORS
   ========================================================= */

function randomHex() {

    const characters =
        "0123456789ABCDEF";


    let result =
        "#";


    for (
        let i = 0;
        i < 6;
        i++
    ) {

        result +=
            characters[
                Math.floor(
                    Math.random() *
                    characters.length
                )
            ];

    }


    return result;

}



randomizeButton.addEventListener(
    "click",
    () => {

        colorOne.value =
            randomHex();


        colorTwo.value =
            randomHex();


        updateColors();

    }
);



/* =========================================================
   COLOR INPUT
   ========================================================= */

colorOne.addEventListener(
    "input",
    updateColors
);


colorTwo.addEventListener(
    "input",
    updateColors
);



/* =========================================================
   AI PROMPTS
   ========================================================= */

function createPrompts() {

    promptList.innerHTML =
        "";


    PROMPTS.forEach(
        promptText => {

            const prompt =
                document.createElement(
                    "div"
                );


            prompt.className =
                "prompt";


            prompt.textContent =
                promptText;


            prompt.addEventListener(
                "click",
                async () => {

                    try {

                        await copyText(
                            promptText
                        );


                        showToast(
                            "Copied to clipboard"
                        );

                    }

                    catch {

                        showToast(
                            "Could not copy"
                        );

                    }

                }
            );


            promptList.appendChild(
                prompt
            );

        }
    );

}



/* =========================================================
   COPY TEXT
   ========================================================= */

async function copyText(text) {

    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        await navigator.clipboard.writeText(
            text
        );

        return;

    }


    const textarea =
        document.createElement(
            "textarea"
        );


    textarea.value =
        text;


    textarea.style.position =
        "fixed";


    textarea.style.opacity =
        "0";


    document.body.appendChild(
        textarea
    );


    textarea.focus();


    textarea.select();


    const successful =
        document.execCommand(
            "copy"
        );


    textarea.remove();


    if (!successful) {

        throw new Error(
            "Copy failed"
        );

    }

}



/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;


function showToast(message) {

    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2000
        );

}



/* =========================================================
   WALLPAPER SHEET
   ========================================================= */

setWallpaperButton.addEventListener(
    "click",
    () => {

        wallpaperSheet.classList.add(
            "show"
        );

    }
);


cancelSheet.addEventListener(
    "click",
    () => {

        wallpaperSheet.classList.remove(
            "show"
        );

    }
);


wallpaperSheet.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            wallpaperSheet
        ) {

            wallpaperSheet.classList.remove(
                "show"
            );

        }

    }
);



/* =========================================================
   WALLPAPER OPTIONS
   ========================================================= */

document
    .querySelectorAll(
        ".sheet-option"
    )
    .forEach(
        option => {

            option.addEventListener(
                "click",
                () => {

                    const target =
                        option.dataset.target;


                    wallpaperSheet.classList.remove(
                        "show"
                    );


                    downloadWallpaper(
                        target
                    );

                }
            );

        }
    );



/* =========================================================
   DOWNLOAD WALLPAPER
   ========================================================= */

function downloadWallpaper(
    target
) {

    /*
     * VIDEO WALLPAPER
     */

    if (
        state.selectedVideo !== null
    ) {

        const selected =
            VIDEOS[
                state.selectedVideo
            ];


        if (!selected) {

            showToast(
                "No wallpaper selected"
            );

            return;

        }


        const link =
            document.createElement(
                "a"
            );


        link.href =
            selected.file;


        link.download =
            selected.name
                .replace(
                    /\s+/g,
                    "_"
                )
                .toLowerCase() +
            ".mp4";


        document.body.appendChild(
            link
        );


        link.click();


        link.remove();


        showToast(
            `${selected.name} downloaded`
        );


        return;

    }


    /*
     * GRADIENT WALLPAPER
     */

    downloadCanvasWallpaper(
        target
    );

}



/* =========================================================
   DOWNLOAD GENERATED GRADIENT
   ========================================================= */

function downloadCanvasWallpaper(
    target
) {

    drawCanvas();


    canvas.toBlob(
        blob => {

            if (!blob) {

                showToast(
                    "Could not create wallpaper"
                );

                return;

            }


            const url =
                URL.createObjectURL(
                    blob
                );


            const link =
                document.createElement(
                    "a"
                );


            link.href =
                url;


            link.download =
                `gradient-wallpaper-${target}.png`;


            document.body.appendChild(
                link
            );


            link.click();


            link.remove();


            URL.revokeObjectURL(
                url
            );


            showToast(
                "Wallpaper downloaded"
            );

        },
        "image/png"
    );

}



/* =========================================================
   VIDEO ERROR
   ========================================================= */

video.addEventListener(
    "error",
    () => {

        previewCaption.textContent =
            "Could not load this video. Check the file path.";

    }
);



/* =========================================================
   WINDOW RESIZE
   ========================================================= */

window.addEventListener(
    "resize",
    resizeCanvas
);



/* =========================================================
   INITIALIZE APP
   ========================================================= */

function initialize() {

    /*
     * Read all 50 entries and automatically
     * create their buttons.
     */

    createVideoButtons();


    /*
     * Create prompt buttons.
     */

    createPrompts();


    /*
     * Start with gradient mode.
     */

    showDesignPreview();


    /*
     * Set initial colors.
     */

    state.colorOne =
        colorOne.value.toUpperCase();


    state.colorTwo =
        colorTwo.value.toUpperCase();


    colorOneHex.textContent =
        state.colorOne;


    colorTwoHex.textContent =
        state.colorTwo;


    updateGlow();


    resizeCanvas();

}


/* =========================================================
   START
   ========================================================= */

initialize();
