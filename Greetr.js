(function(global,$){

    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }

    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludas'
    };

    var logMessages = {
        en: 'Greeted',
        es: 'Saludado'
    };

    Greetr.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function(){
            if (supportedLangs.indexOf(this.language) === -1){
                throw "Invalid Language";
            }
        },

        greeting: function(){
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function(){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal){

            var msg;

            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            };

            if(console) {
                console.log(msg);
            };

            return this;
        },

        log: function(){
            if(console) {
                console.log(
                    Date.now() + ':' + 
                    logMessages[this.language] + ':' + 
                    this.fullName());
            }
            return this;
        },

        setLanguage: function(lang){
            this.language = lang;
            this.validate();
            return this;
        },

        HTMLGreeting: function(selector, formal){
            if (!$) {
                throw 'jQuery Not Loaded';
            }

            if(formal){
                msg = $(selector).html(this.formalGreeting());
            }else{
                msg = $(selector).html(this.greeting());
            };

            return this;
        }

    };

    Greetr.init = function(firstName, lastName, language){

        var self = this;
        
        self.firstName = firstName || '';
        self.lastName  = lastName  || '';
        self.language  = language  || 'en';

        self.validate();

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));