// This requirejs module component
define(['knockout'], function(ko) {
    return function modalsViewModel() {
        console.log("Modal loaded!");
        this.test="Modal wrote to template!";
        this.modalTitle="TEST MODAL";
    };
});
