const EXAM_NAME = "Examen de Fundamentos de TI - Código de curso TCS1003";
const ACCESS_CODE = "12345"; // Código que se valida en script.js
const EXAM_DURATION_MINUTES = 180; // Cambiar a 180 u otro valor si se desea
const ADMIN_PASSWORD = "profe123";
const MAX_CLEAR_USES = 10; // Cambia a 2 o 3 si deseas permitir más usos
const CLEAR_INTERVAL_DAYS = 2; // Tiempo en días
const MAX_ATTEMPTS = 4; //Cantidad de intentos si los estudiantes recargan o hacen algo indebido
const EXAM_STORAGE_KEY = "examData";
const EXAM_STATE_KEY = "examState";


 

document.getElementById("title").textContent = EXAM_NAME;
