// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice", "whiterabbit"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "csmLights.js", "shoppingCart.js", "drawing.js", "updown.js", "video.js", "translucent.js",
    ];
    Constants.ExcludedSystemBehaviorModules = ["gizmo.js", "dragAndDrop.js", "propertySheet.js", "stickyNote.js"];
    Constants.ShowCaseSpec = {};

    Constants.DefaultCards = [
        {
            card: {
                
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],

                translation: [-1.1325594901941938, -1.6179733787035926, 5.776565191272698],
                // scale: [15.716117902486776, 15.716117902486776, 15.716117902486776],
                rotation: [0, 0.999973281413003, 0, -0.007310024631348529],
                layers: ["pointer", "walk"],
                name: "/HopeForHaiti_010.glb",
                animationClipIndex: 0,
                animationStartTime: 44428,
                dataLocation: "./assets/3d/HopeForHaiti_010.glb",
                dataScale: [1.0707728865959072, 1.0707728865959072, 1.0707728865959072],
                fileName: "/HopeForHaiti_010.glb",
                modelType: "glb",
                shadow: true,
                // singleSided: true,
                type: "3d",
                loadSynchronously: true,
            
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "./assets/sky/HDRi_4pm_1_compressed_small.exr",
                fileName: "/abandoned_parking_4k.jpg",
                dataType: "exr",
                loadSynchronously: true,
            }
        },

        {
            card: {
                fullBright: true,
                translation: [-14.806226236396713, 0.4311854285397434, 13.270045402326339],
                scale: [4.333110034227071, 4.333110034227071, 4.333110034227071],
                layers: ["pointer"],
                behaviorModules: ["DrawingCanvas"],
                name: "drawing1",
                backgroundImage: "./assets/images/chalkboard.jpg",
                drawingColor: "#ddd", // a CSS Color
                fullBright: true,
                height: 2,
                textureHeight: 512,
                textureType: "canvas",
                textureWidth: 1024,
                type: "2d",
                width: 4,
            }
        },

        {
            card: {
                translation: [-11.599513112300471, 0.4311854285397434, 13.270045402326339],
                scale: [1, 1, 1],
                rotation: [0, -0.9998423527992684, 0, 0.017755831403327288],
                layers: ["pointer"],
                name: "/write here.png",
                cornerRadius: 0.02,
                fileName: "/write here.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/images/write here.png",
                textureType: "image",
                type: "2d", 
            }
        },

        {
            card: {
                translation: [11.851539914844865, 0.4311854285397434, -8.258528269691354],
                scale: [4.333110034227071, 4.333110034227071, 4.333110034227071],
                rotation: [0, -1, 0, 0],
                layers: ["pointer"],
                behaviorModules: ["DrawingCanvas"],
                name: "drawing2",
                backgroundImage: "./assets/images/chalkboard.jpg",
                drawingColor: "#ddd",
                fullBright: true,
                height: 2,
                textureHeight: 512,
                textureType: "canvas",
                textureWidth: 1024,
                type: "2d",
                width: 4,
            }
        },

        {
            card: {
                translation: [8.823144177127906, 0.4311854285397434, -8.258528269691354],
                scale: [1, 1, 1],
                rotation: [0, 0, 0, 0],
                layers: ["pointer"],
                name: "/write here.png",
                cornerRadius: 0.02,
                fileName: "/write here.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/images/write here.png",
                textureType: "image",
                type: "2d",
            
            }
        },

        {
            card: {
                translation: [3.8425276151912895, 0.08844837753579127, -8.972079058421624],
                rotation: [0, -0.9369586309260266, 0, 0.3494403009574393],
                name: "flag pole 1",
                layers: ["pointer"],
                dataLocation: "./assets/3d/Flag_Pole.glb",
                dataScale: [1, 1, 1],
                dataTranslation: [5.1, -1.7, 8.8],
                fileName: "/Flag_Pole.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            },
            id: "pole1",
        },
        {
            card: {
                name: "flag 1",
                layers: ["pointer"],
                dataLocation: "./assets/3d/Flag_Simulation2.glb",
                dataTranslation: [-1.0, 0, 0],
                dataRotation: [-1.54, 0, 0],
                dataScale: [0.5, 0.5, 0.5],
                modelType: "glb",
                shadow: true,
                type: "3d",
                parent: "pole1",
                pointA: [0, -0.4, 0],
                pointB: [0, 2.4, 0],
                behaviorModules: ["UpDown"],
            }
        },

        {
            card: {
                translation: [-7.590280879555574, 0.08844837753579127, -3.2566745499030985],
                rotation: [0, -0.9369586309260266, 0, 0.3494403009574393],
                layers: ["pointer"],
                name: "flag pole 1",
                dataLocation: "./assets/3d/Flag_Pole.glb",
                dataScale: [1, 1, 1],
                dataTranslation: [5.1, -1.7, 8.8],
                fileName: "/Flag_Pole.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            },
            id: "pole2"
        },

        {
            card: {
                name: "flag 2",
                layers: ["pointer"],
                dataLocation: "./assets/3d/Flag_Simulation2.glb",
                dataTranslation: [-1.0, 0, 0],
                dataRotation: [-1.54, 0, 0],
                dataScale: [0.5, 0.5, 0.5],
                modelType: "glb",
                shadow: true,
                type: "3d",
                parent: "pole2",
                pointA: [0, -0.4, 0],
                pointB: [0, 2.4, 0],
                behaviorModules: ["UpDown"],
            }
        },

        // {
        //     card: {
        //             translation: [-1.4332548477256493, 0.7774404169439078, 27.637767491502668],
        //             scale: [6.7180240526439, 6.7180240526439, 6.7180240526439],
        //             rotation: [0, 0.9983881722584435, 0, -0.05675436101697372],
        //             layers: ["pointer"],
        //             name: "/Infographic_3.png",
        //             cornerRadius: 0.02,
        //             fileName: "/Infographic_3.png",
        //             fullBright: true,
        //             modelType: "img",
        //             shadow: true,
        //             singleSided: true,
        //             textureLocation: "./assets/images/Infographic_3.png",
        //             textureType: "image",
        //             type: "2d",
        //             behaviorModules: ["ShoppingCart"],
        //             price: "10.99",

        //     }
        // },

        {
            card: {
                    translation: [6.793451136389074, 0.46723267268581936, 35.8428960077706],                    //position 1
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, -0.7038448833862585, 0, 0.7103537007230863],
                    layers: ["pointer"],
                    name: "/1 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/1 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/1_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "1.00",
                    title: "Tier 1 Donation",
                    description: "Can help to prevent and treat communicable diseases",
            }
        },

        {
            card: {
                    translation: [-8.672792884322906, 0.46723267268581936, 36.01474373412296],                   //position 2
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, 0.7295528958614285, 0, 0.6839243906604034],
                    layers: ["pointer"],
                    behaviorModules: [],
                    name: "/16 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/16 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/16_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "16.00",
                    title: "Tier 2 Donation",
                    description: "Can provide 1 health consultation and medical supplies",
            }
        },

        {
            card: {
                    translation: [6.793451136389074, 0.46723267268581936, 43.57788669640459],   
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, -0.7038448833862585, 0, 0.7103537007230863],
                    layers: ["pointer"],
                    name: "/30 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/30 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/30_Donate.png",
                    textureType: "image",
                    type: "2d", 
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "30.00",
                    title: "Tier 3 Donation",
                    description: "Can support our healthcare program",
            }
        },

        {
            card: {
                    translation: [-8.571166857290434, 0.46723267268581936, 43.844688067494204],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, 0.7295528958614285, 0, 0.6839243906604034],
                    layers: ["pointer"],
                    name: "/50 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/50 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/50_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "50.00",
                    title: "Tier 4 Donation",
                    description: "Can pay 1 teacher to supplement their salary for 1 month",
            }
        },

        {
            card: {
                    translation: [7.024777620218381, 0.46723267268581936, 51.52479511357458],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, -0.7038448833862585, 0, 0.7103537007230863],
                    layers: ["pointer"],
                    name: "/65 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/65 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/65_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "65.00",
                    title: "Tier 5 Donation",
                    description: "Can dispatch 1 home water filtration system to a family in need",
            }
        },

        {
            card: {
                    translation: [-8.524527905594423, 0.46723267268581936, 51.582236153058666],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, 0.7295528958614285, 0, 0.6839243906604034],
                    layers: ["pointer"],
                    name: "/100 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/100 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/100_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "100.00",
                    title: "Tier 6 Donation",
                    description: "Can pay 1 community health worker a 1 month salary stipend",
            
            }
        },

        {
            card: {
                    translation: [7.110901030064705, 0.46723267268581936, 59.19289998530565],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, -0.7038448833862585, 0, 0.7103537007230863],
                    layers: ["pointer"],
                    name: "/110 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/110 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/110_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "110.00",
                    title: "Tier 7 Donation",
                    description: "Can give 1 vulnerable person digital cash for basic goods and services",
            
            }
        },

        {
            card: {
                    translation: [-8.34355120937942, 0.46723267268581936, 59.436517252411626],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, 0.7295528958614285, 0, 0.6839243906604034],
                    layers: ["pointer"],
                    name: "/400 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/400 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/400_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "400.00",
                    title: "Tier 8 Donation",
                    description: "Can equip 1 farmer and their family with livestock",
            
            }
        },

        {
            card: {
                    translation: [7.198771372379792, 0.46723267268581936, 66.86906396641315],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, -0.7038448833862585, 0, 0.7103537007230863],
                    layers: ["pointer"],
                    name: "/750 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/750 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/750_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "750.00",
                    title: "Tier 9 Donation",
                    description: "Can provide 1 mother with financial education and digital cash for 1 year",
            }
        },

        {
            card: {
                    translation: [-8.260254349993023, 0.46723267268581936, 67.29304420580476],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, 0.7295528958614285, 0, 0.6839243906604034],
                    layers: ["pointer"],
                    name: "/833 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/833 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/833_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "833.00",
                    title: "Tier 10 Donation",
                    description: "Can plant a micro-orchard to tackle food scarcity",
            }
        },

        {
            card: {
                    translation: [7.327477577301178, 0.46723267268581936, 74.64665028082086],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, -0.7038448833862585, 0, 0.7103537007230863],
                    layers: ["pointer"],
                    name: "/1000 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/1000 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/1000_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "1000.00",
                    title: "Tier 11 Donation",
                    description: "Can grant 1 student a 1 year college scholarship",
            
            }
        },

        {
            card: {

                    translation: [12.168052831053805, 1.425045229613765, 16.90420923813561],
                    scale: [3.655991549242714, 3.655991549242714, 3.655991549242714],
                    rotation: [0, -1.0025612211358828, 0, -0.010263033419074488],
                    layers: ["pointer"],
                    behaviorModules: ["PDFView"],
                    name: "/2021-Gratitude-Report-Digital-Version.pdf",
                    color: 8947848,
                    depth: 0.05,
                    fileName: "/2021-Gratitude-Report-Digital-Version.pdf",
                    frameColor: 16777215,
                    fullBright: true,
                    height: 1,
                    modelType: "pdf",
                    pdfLocation: "./assets/docs/2021-Gratitude-Report-Digital-Version.pdf",
                    shadow: true,
                    singleSided: true,
                    type: "2d",
                    width: 0.7727272727272728,

            }
        },

        {
            card: {
                    translation: [-19.59679127600608, 0.9296175803882324, 5.868326835411894],
                    scale: [2.7135918006230098, 2.7135918006230098, 2.7135918006230098],
                    rotation: [0, 0.714229961116417, 0, 0.6999111105302167],
                    layers: ["pointer"],
                    name: "/Info 1.1.png",
                    cornerRadius: 0.02,
                    fileName: "/Info 1.1.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/Info 1.1.png",
                    textureType: "image",
                    type: "2d",

            }
        },

        {
            card: {
                    translation: [-19.59679127600608, 0.9296175803882324, 2.010396610677438],
                    scale: [2.7135918006230098, 2.7135918006230098, 2.7135918006230098],
                    rotation: [0, 0.714229961116417, 0, 0.6999111105302167],
                    layers: ["pointer"],
                    name: "/Info 1.2.png",
                    cornerRadius: 0.02,
                    fileName: "/Info 1.2.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/Info 1.2.png",
                    textureType: "image",
                    type: "2d",

            }
        },

        {
            card: {
                    translation: [-16.970763477501684, 0.9296175803882324, -1.5889550375338928],
                    scale: [2.7135918006230098, 2.7135918006230098, 2.7135918006230098],
                    rotation: [0, 0.006362086930907247, 0, 0.9999797617201478],
                    layers: ["pointer"],
                    name: "/Info 2.1.png",
                    cornerRadius: 0.02,
                    fileName: "/Info 2.1.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/Info 2.1.png",
                    textureType: "image",
                    type: "2d",

            }
        },

        {
            card: {
                    translation: [-13.141592806645058, 0.9296175803882324, -1.5889550375338928],
                    scale: [2.7135918006230098, 2.7135918006230098, 2.7135918006230098],
                    rotation: [0, 0.006362086930907247, 0, 0.9999797617201478],
                    layers: ["pointer"],
                    name: "/Info 2.2.png",
                    cornerRadius: 0.02,
                    fileName: "/Info 2.2.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/Info 2.2.png",
                    textureType: "image",
                    type: "2d",
            }
        },

        {
            card: {
                    translation: [16.659548165121276, 0.9982657739035683, -6.875502200388656],
                    scale: [2.7135918006230098, 2.7135918006230098, 2.7135918006230098],
                    rotation: [0, -0.7104721688197876, 0, 0.7037252996251501],
                    layers: ["pointer"],
                    name: "/Info 3.1.png",
                    cornerRadius: 0.02,
                    fileName: "/Info 3.1.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/Info 3.1.png",
                    textureType: "image",
                    type: "2d",
            

            }
        },

        {
            card: {
                    translation: [16.659548165121276, 0.9982657739035683, -2.7754625370469235],
                    scale: [2.7135918006230098, 2.7135918006230098, 2.7135918006230098],
                    rotation: [0, -0.7104721688197876, 0, 0.7037252996251501],
                    layers: ["pointer"],
                    name: "/Info 3.2.png",
                    cornerRadius: 0.02,
                    fileName: "/Info 3.2.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/Info 3.2.png",
                    textureType: "image",
                    type: "2d",
            
            }
        },

        {
            card: {
                translation: [16.659548165121276, 0.9982657739035683, 6.426546444192137],
                scale: [2.7135918006230098, 2.7135918006230098, 2.7135918006230098],
                rotation: [0, -0.7104721688197876, 0, 0.7037252996251501],
                layers: ["pointer"],
                name: "/Info 3.3.png",
                cornerRadius: 0.02,
                fileName: "/Info 3.3.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/images/Info 3.3.png",
                textureType: "image",
                type: "2d",
            
            
            }
        },

        {
            card: {
                translation: [16.659548165121276, 0.9982657739035683, 11.39889532631088],
                scale: [2.7135918006230098, 2.7135918006230098, 2.7135918006230098],
                rotation: [0, -0.7104721688197876, 0, 0.7037252996251501],
                layers: ["pointer"],
                name: "/Info 3.4.png",
                cornerRadius: 0.02,
                fileName: "/Info 3.4.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/images/Info 3.4.png",
                textureType: "image",
                type: "2d",
                
            
            }
        },

        {
            card: {
                translation: [9.103918692050136, -0.3150255339975849, 10.984026276205535],
                scale: [1.5785256988355674, 1.5785256988355674, 1.5785256988355674],
                rotation: [-0.65852403062123, -0.013969982487577512, -0.008188072693071646, 0.7523854704533037],
                layers: ["pointer"],
                name: "/Info 3.5.png",
                cornerRadius: 0.02,
                fileName: "/Info 3.5.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/images/Info 3.5.png",
                textureType: "image",
                type: "2d",            
                
            
            }
        },

        {
            card: {
                translation: [14.921988780035493, -0.3150255339975849, 10.984026276205535],
                scale: [1.5785256988355674, 1.5785256988355674, 1.5785256988355674],
                rotation: [-0.65852403062123, -0.013969982487577512, -0.008188072693071646, 0.7523854704533037],
                layers: ["pointer"],
                name: "/Info 3.6.png",
                cornerRadius: 0.02,
                fileName: "/Info 3.6.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/images/Info 3.6.png",
                textureType: "image",
                type: "2d",
                     
                
            
            }
        },

        {
            card: {
                translation: [9.121198010542168, 0.21419086991183245, 33.828127290547556],
                scale: [3.3237461964437656, 3.3237461964437656, 3.3237461964437656],
                rotation: [0, -1, 0, 0],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer",],
                name: "Croquet Video 1",
                color: 8947848,
                depth: 0.025,
                frameColor: 16777215,
                fullBright: true,
                pauseTime: 1.639603,
                playStartTime: 98.082717,
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/videos/Creating Access to Education in Haiti.mp4",
                textureType: "video",
                type: "2d",
            }
        },

        {
            card: {
                translation: [9.121198010542168, 0.21419086991183245, 27.906495497577655],
                scale: [3.3418139380632463, 3.3418139380632463, 3.3418139380632463],
                rotation: [0, -0.7038448833862585, 0, 0.7103537007230863],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer",],
                name: "Empowering girls through education in Haiti.mp4",
                color: 8947848,
                depth: 0.025,
                frameColor: 16777215,
                fullBright: true,
                pauseTime: 1.639603,
                playStartTime: 98.082717,
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/videos/Empowering girls through education in Haiti.mp4",
                textureType: "video",
                type: "2d",
            }
        },

        {
            card: {
                translation: [-10.699907917143715, 0.21419086991183245, 33.828127290547556],
                scale: [3.3237461964437656, 3.3237461964437656, 3.3237461964437656],
                rotation: [0, -1, 0, 0],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                name: "Hope for Haiti_ An Overview.mp4",
                color: 8947848,
                depth: 0.025,
                frameColor: 16777215,
                fullBright: true,
                pauseTime: 0.03,
                playStartTime: 98.082717,
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/videos/Hope for Haiti_ An Overview.mp4",
                textureType: "video",
                type: "2d",
            
            }
        },

        {
            card: {
                translation: [-9.359493291330724, 0.21419086991183245, -8.503343242383835],
                scale: [3.3418139380632463, 3.3418139380632463, 3.3418139380632463],
                rotation: [0, 0.8843614711264945, 0, 0.46680272962674796],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                name: "Rethink Haiti (1).mp4",
                color: 8947848,
                depth: 0.025,
                frameColor: 16777215,
                fullBright: true,
                pauseTime: 0.03,
                playStartTime: 98.082717,
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/videos/Rethink Haiti (1).mp4",
                textureType: "video",
                type: "2d",
                      
            }
        },

        {
            card: {
                translation: [-10.699907917143715, 0.21419086991183245, 27.738075674135008],
                scale: [3.3418139380632463, 3.3418139380632463, 3.3418139380632463],
                rotation: [0, 0.7112847115815315, 0, 0.7029040183911156],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                name: "School Inauguration in Morency, Haiti!.mp4",
                color: 8947848,
                depth: 0.025,
                frameColor: 16777215,
                fullBright: true,
                pauseTime: 0.03,
                playStartTime: 98.082717,
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/videos/School Inauguration in Morency, Haiti!.mp4",
                textureType: "video",
                type: "2d",
                       
            }
        },

        {
            card: {
                translation: [7.666294580835541, -0.944114972895024, -8.537154384062585],
                scale: [1, 1, 1],
                rotation: [0, -0.9998423527992684, 0, 0.017755831403327288],
                layers: ["pointer"],
                name: "/Flag Interact.png",
                cornerRadius: 0.02,
                fileName: "/Flag Interact.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/images/Flag Interact.png",
                textureType: "image",
                type: "2d", 
            }
        },
    ];
}
