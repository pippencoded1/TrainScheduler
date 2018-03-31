// Initialize Firebase
var config = {
    apiKey: "AIzaSyBWJNBn5xawr18zi-6egSVLmNS__qE-CuU",
    authDomain: "trainschedulerproject-f87eb.firebaseapp.com",
    databaseURL: "https://trainschedulerproject-f87eb.firebaseio.com",
    projectId: "trainschedulerproject-f87eb",
    storageBucket: "",
    messagingSenderId: "337644337263"
};
firebase.initializeApp(config);

// Collection Messages
var messagesRef = firebase.database().ref('messages');


    // Listener for form submit

document.getElementById('TrainForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
   
    var trainname= getInputVal('trainname');
    var destination = getInputVal('destination');
    var firstarrival = getInputVal('firstarrival');
    var frequency = getInputVal('frequency');
    
    saveMessage(trainname, destination, firstarrival, frequency);

    // Clear input after submit
    document.getElementById('TrainForm').reset();
}


// Get Form values'
function getInputVal(id){
    return document.getElementById(id).value;
}


// Save messages to Firebase

function saveMessage(trainname, destination, firstarrival, frequency){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        trainname: trainname,
        destination: destination,
        firstarrival: firstarrival,
        frequency: frequency,

    })
}



