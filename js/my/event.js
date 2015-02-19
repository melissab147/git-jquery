function myEvent(){

    // console.log('viewing event: ', id)

        $.get("/git-jquery/templates/eventView.jade", function(template) {

            var html = jade.render(template)

            $("#details").html(html)

        })


}