function myEvents(){
    
    console.log('listing events')    
    
    $.get("https://api.github.com/users/melissab147/events", github, function(data) {

        var events = data
        var user = events[0].actor.login
        
        $.get("/git-jquery/templates/eventList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: events, user: user})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first repo to view
            myEvent()
        })

    })

}