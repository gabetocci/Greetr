// Declarations
var g = G$('Gabriel','Tocci');

// Events
$('#greet').click(function(){
    g.setLanguage($('#lang').val()).HTMLGreeting('#greeting').log();
});

$('#formal-greet').click(function(){
    g.setLanguage($('#lang').val()).HTMLGreeting('#greeting', true).log();
});

// Main
g.HTMLGreeting('#greeting').log();