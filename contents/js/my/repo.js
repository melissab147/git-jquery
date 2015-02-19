function myRepo(full_name){

    console.log('viewing repo: ', full_name)

    // e.g., https://api.github.com/repos/ucdd2-sp15/nn-express

    $.get("https://api.github.com/repos/" + full_name, github, function(data) {
        
        var repo = data
        // console.log(repo)

        $.get("/git-jquery/templates/repoView.jade", function(template) {

            var html = jade.render(template, {item: repo})
            
            $("#details").html(html)

        })

    })
    // display a particular repo of mine in #details
    // e.g., https://api.github.com/repos/doubleshow/up

    // alert('todo')
}