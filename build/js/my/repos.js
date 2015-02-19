function myRepos(){
    
    console.log('listing repos')    
    
    $.get("https://api.github.com/users/melissab147/repos", github, function(data) {

        // Q: What is the parameter 'github'? Where was it defined? What's the purpose? 
        // github.js, purpose is to provide GH credentials to access API

        // Q: Why is JSON.parse no longer necessary?
        var repos = data
        var user = repos[0].owner.login
        
        // Q. Why are these templates files stored in a separate folder inside contents/?
        $.get("/git-jquery/templates/repoList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: repos, user: user})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first repo to view
            myRepo(repos[0].full_name)

        })

    })
    // display my repos in #list
    // e.g., https://api.github.com/users/doubleshow/repos

    // alert('todo')
}