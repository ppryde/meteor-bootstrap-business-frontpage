Router.configure({
    layoutTemplate:'layout'
});

Router.route('/', 
    function(){
        this.render('home');
        this.render('header', {to: 'navBar'});
    },
    {name:'home'}
);