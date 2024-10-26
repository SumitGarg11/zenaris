/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",    
    //  text/plain
  };
  
  
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "{\n  \"course\": {\n    \"name\": \"Python Programming for Beginners\",\n    \"description\": \"This course provides a comprehensive introduction to Python programming, covering the fundamentals of the language, essential concepts, and practical examples. You will learn how to write basic Python programs, manipulate data, work with loops and conditions, and understand fundamental programming concepts.\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"This chapter introduces the Python programming language, its history, and its key features. You will learn how to install Python and set up your development environment.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Variables and Data Types\",\n        \"about\": \"This chapter explores different data types in Python, including numbers, strings, and booleans. You will learn how to declare variables, assign values, and perform basic operations.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Control Flow and Operators\",\n        \"about\": \"This chapter delves into control flow statements such as conditional statements (if-else) and loops (for, while). You will learn how to write programs that execute different blocks of code based on conditions.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Functions and Modules\",\n        \"about\": \"This chapter introduces functions, which are reusable blocks of code, and modules, which contain pre-written functions. You will learn how to define, call, and import functions and modules.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Introduction to Data Structures\",\n        \"about\": \"This chapter provides an overview of basic data structures like lists, tuples, and dictionaries. You will learn how to create, manipulate, and access data within these structures.\",\n        \"duration\": \"15 minutes\"\n      }\n    ],\n    \"category\": \"Programming\",\n    \"topic\": \"Python\",\n    \"level\": \"Basic\",\n    \"duration\": \"1 hour\",\n    \"noOfChapters\": 5\n  }\n} giveme like this \n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course\": {\n    \"name\": \"Python Programming for Beginners\",\n    \"description\": \"This course provides a comprehensive introduction to Python programming, covering the fundamentals of the language, essential concepts, and practical examples. You will learn how to write basic Python programs, manipulate data, work with loops and conditions, and understand fundamental programming concepts.\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"This chapter introduces the Python programming language, its history, and its key features. You will learn how to install Python and set up your development environment.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Variables and Data Types\",\n        \"about\": \"This chapter explores different data types in Python, including numbers, strings, and booleans. You will learn how to declare variables, assign values, and perform basic operations.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Control Flow and Operators\",\n        \"about\": \"This chapter delves into control flow statements such as conditional statements (if-else) and loops (for, while). You will learn how to write programs that execute different blocks of code based on conditions.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Functions and Modules\",\n        \"about\": \"This chapter introduces functions, which are reusable blocks of code, and modules, which contain pre-written functions. You will learn how to define, call, and import functions and modules.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Introduction to Data Structures\",\n        \"about\": \"This chapter provides an overview of basic data structures like lists, tuples, and dictionaries. You will learn how to create, manipulate, and access data within these structures.\",\n        \"duration\": \"15 minutes\"\n      }\n    ],\n    \"category\": \"Programming\",\n    \"topic\": \"Python\",\n    \"level\": \"Basic\",\n    \"duration\": \"1 hour 10 minutes\", \n    \"noOfChapters\": 5\n  }\n}\n```\n\nI have updated the \"duration\" field to \"1 hour 10 minutes\" because the total duration of the chapters adds up to 90 minutes. \n"},
          ],
        },
      ],
    });
  
    export const GenerateChapterContent_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Explain the concept in Detail on Topic: Three.js, Chapter:Introduction to Three.js ,in JSON Format  with list of array with field as title,explanation on give chapter in detail, Code Example( Code \nfield  in <precode > format) if applicable\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"title\": \"Introduction to Three.js\",\n    \"explanation\": \"Three.js is a powerful JavaScript library that allows you to create stunning 3D graphics and animations in your web browser. It simplifies the complex world of WebGL, providing a high-level API for working with scenes, objects, materials, lights, and cameras.  Three.js handles the heavy lifting of rendering 3D content, freeing you to focus on creative aspects like building scenes, animating objects, and adding interactivity.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Setting up Three.js\",\n    \"explanation\": \"To get started with Three.js, you need to include the library in your HTML document. You can download the library from the official website or use a CDN. Once included, you can create a basic scene, renderer, camera, and an object to render.\",\n    \"codeExample\": \"<precode>\\n<!DOCTYPE html>\\n<html>\\n<head>\\n<title>Three.js Example</title>\\n<style>\\nbody { margin: 0; }\\n</style>\\n</head>\\n<body>\\n<script src='https://threejs.org/build/three.js'></script>\\n<script>\\nconst scene = new THREE.Scene();\\nconst camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );\\nconst renderer = new THREE.WebGLRenderer();\\nrenderer.setSize( window.innerWidth, window.innerHeight );\\n document.body.appendChild( renderer.domElement );\\n\\nconst geometry = new THREE.BoxGeometry();\\nconst material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );\\nconst cube = new THREE.Mesh( geometry, material );\\nscene.add( cube );\\n\\ncamera.position.z = 5;\\n\\nfunction animate() {\\n  requestAnimationFrame( animate );\\n  cube.rotation.x += 0.01;\\n  cube.rotation.y += 0.01;\\n  renderer.render( scene, camera );\\n}\\nanimate();\\n</script>\\n</body>\\n</html>\\n</precode>\"\n  },\n  {\n    \"title\": \"The Scene, Camera, and Renderer\",\n    \"explanation\": \"These are the core components of a Three.js application:\\n\\n* **Scene:** Represents the 3D world you are creating. It holds all objects, lights, and other elements.\\n* **Camera:**  Determines what portion of the scene is visible to the viewer.  Common types include PerspectiveCamera (simulating a human eye) and OrthographicCamera (for technical drawings or isometric views).\\n* **Renderer:** Handles the process of drawing the 3D scene onto the canvas. The WebGLRenderer is the most common, utilizing the power of your graphics card.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Objects and Geometries\",\n    \"explanation\": \"Objects are the building blocks of your 3D world. They are defined by a geometry (shape) and a material (appearance).\\n\\n* **Geometry:** Describes the shape of the object. Common geometries include:\\n    * BoxGeometry (for cubes)\\n    * SphereGeometry (for spheres)\\n    * PlaneGeometry (for flat surfaces)\\n    * CylinderGeometry (for cylinders)\\n* **Material:** Defines how the object appears. Examples include:\\n    * MeshBasicMaterial (basic colors)\\n    * MeshLambertMaterial (simulating diffuse lighting)\\n    * MeshPhongMaterial (more realistic, simulating specular highlights)\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Lighting\",\n    \"explanation\": \"Lights are crucial for creating depth and realism in your 3D scenes. Three.js offers different types of lights:\\n\\n* **AmbientLight:** Provides a general, even illumination to the scene.\\n* **DirectionalLight:** Simulates a light source coming from a single direction (like the sun).\\n* **PointLight:** Emulates a light bulb radiating in all directions.\\n* **SpotLight:**  Like a flashlight, shines a cone-shaped beam of light.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Animation and Interactions\",\n    \"explanation\": \"Three.js provides tools for animating your objects and making them interactive. You can use:\\n\\n* **Animation Loop:** The `requestAnimationFrame` function allows you to smoothly update the scene over time.\\n* **Object Transformations:**  Change the position, rotation, and scale of objects using properties like `position`, `rotation`, and `scale`.\\n* **Events:**  Listen to events like mouse clicks or touch interactions to control your scene dynamically.\",\n    \"codeExample\": \"\"\n  }\n]\n```"},
          ],
        },
      ],
    });
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
    
 