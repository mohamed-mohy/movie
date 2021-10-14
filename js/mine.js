$(".Menu2 .fa-bars").click(function () { 
    
    $(".Menu").animate({left:"0px"},500)
    $(".Menu2").animate({left:"250px"},500)
    $(".fa-bars").hide()
    $(".fa-times").show()


    $(".Menu .item1").animate({opacity:"1",top:"0"},600,function(){
        $(".Menu .item2").animate({opacity:"1",top:"40px"},400,function(){
            $(".Menu .item3").animate({opacity:"1",top:"80px"},300,function(){
                $(".Menu .item4").animate({opacity:"1",top:"120px"},200,function(){
                    $(".Menu .item5").animate({opacity:"1",top:"160px"},100,function(){
                        $(".Menu .item6").animate({opacity:"1",top:"200px"},100)
                    })
                })
            })
        })
    })
});

$(".Menu2 .fa-times").click(function () { 
    
    $(".Menu").animate({left:"-250px"},500)
    $(".Menu2").animate({left:"0px"},500)
    $(".fa-times").hide()
    $(".fa-bars").show()
    $(".Menu .item1 , .Menu .item2 , .Menu .item3 , .Menu .item4 , .Menu .item5 , .Menu .item6").animate({opacity:"0",top:"50%"})
});


///regex 

let regexName   = /^[a-zA-Z]{3,}$/
let regexEmail  = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
let regexPhone  = /^(01)[0125][0-9]{8}$/
let regexAge    = /^[1-9][0-9]$/
let regexPass   = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}/
let nameStatus  = 0
let emailStatus = 0
let phoneStatus = 0
let ageStatus   = 0
let passStatus  = 0
let cpassStatus = 0

$("#cName").keyup(function () { 
    if(regexName.test(this.value))
    {
        nameStatus=1
        $(".name-alert").addClass("d-none");
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
        validation()
    }
    else
    {
        nameStatus=0
        $(".name-alert").removeClass("d-none");
        $(this).addClass("is-invalid");
        validation()
    }
});
$("#cName").focus(function () { 
    if(regexName.test(this.value))
    {
        nameStatus=1
        $(".name-alert").addClass("d-none");
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
        validation()
    }
    else
    {
        nameStatus=0
        $(".name-alert").removeClass("d-none");
        $(this).addClass("is-invalid");
        validation()
    }
});

$("#cEmail").keyup(function () { 
    if(regexEmail.test(this.value))
    {
        emailStatus=1
        $(".email-alert").addClass("d-none");
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
        validation()
    }
    else
    {
        emailStatus=0
        $(".email-alert").removeClass("d-none");
        $(this).addClass("is-invalid");
        validation()
    }
});
$("#cEmail").focus(function () { 
    if(regexEmail.test(this.value))
    {
        emailStatus=1
        $(".email-alert").addClass("d-none");
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
        validation()
    }
    else
    {
        emailStatus=0
        $(".email-alert").removeClass("d-none");
        $(this).addClass("is-invalid");
        validation()
    }
});

$("#cPhone").keyup(function () { 
    if(regexPhone.test(this.value))
    {
        phoneStatus=1
        $(".phone-alert").addClass("d-none");
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
        validation()
    }
    else
    {
        phoneStatus=0
        $(".phone-alert").removeClass("d-none");
        $(this).addClass("is-invalid");
        validation()
    }
});

$("#cPhone").focus(function () { 
    if(regexPhone.test(this.value))
    {
        phoneStatus=1
        $(".phone-alert").addClass("d-none");
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
        validation()
    }
    else
    {
        phoneStatus=0
        $(".phone-alert").removeClass("d-none");
        $(this).addClass("is-invalid");
        validation()
    }
});


$("#cAge").keyup(function () { 
    if(regexAge.test(this.value))
    {
        ageStatus=1
        $(".age-alert").addClass("d-none");
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
        validation()
    }
    else
    {
        ageStatus=0
        $(".age-alert").removeClass("d-none");
        $(this).addClass("is-invalid");
        validation()
    }
});

$("#cAge").focus(function () { 
    if(regexAge.test(this.value))
    {
        ageStatus=1
        $(".age-alert").addClass("d-none");
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
        validation()
    }
    else
    {
        ageStatus=0
        $(".age-alert").removeClass("d-none");
        $(this).addClass("is-invalid");
        validation()
    }
});

$("#cPassword").keyup(function () { 
    if(regexPass.test(this.value))
    {
        passStatus=1
        $(".pass-alert").addClass("d-none");
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
        validation()
    }
    else
    {
        passStatus=0
        $(".pass-alert").removeClass("d-none");
        $(this).addClass("is-invalid");
        validation()
    }
});

$("#cPassword").focus(function () { 
    if(regexPass.test(this.value))
    {
        passStatus=1
        $(".pass-alert").addClass("d-none");
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
        validation()
    }
    else
    {
        passStatus=0
        $(".pass-alert").removeClass("d-none");
        $(this).addClass("is-invalid");
        validation()
    }
});

$("#cCPassword").keyup(function () { 
    let pass = $("#cPassword").val();
    if(this.value == pass)
    {
        cpassStatus=1
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
        validation()
    }
    else
    {
        cpassStatus = 0
        $(this).addClass("is-invalid");
        validation()
    }
});

function validation(){
    
    if(nameStatus >0 && emailStatus >0 && phoneStatus >0 && ageStatus >0 && passStatus >0 && cpassStatus > 0)
    {
        $(".subBtn").attr("disabled", false);
    }
    else
    {
        $(".subBtn").attr("disabled", true);
    
    }
}



/// api

let imgPath =`https://image.tmdb.org/t/p/w500`;
let path = ``;
let http
async function getMovies(key = `now_playing`)
{
    http = await fetch(`https://api.themoviedb.org/3/movie/${key}?api_key=16428d9edade8d0b9d60ded9d6a68d84&language=en-US&page=1`)
    http = await http.json()

    let collector = ``;

    for(let i = 0 ; i < http.results.length ; i++)
    {
        collector +=`    
        <div class="col-lg-4 col-md-6 py-4">
        <div class="text-center position-relative imgBox">
        <img src="${imgPath}${http.results[i].poster_path}" class="img-fluid position-relative" >
        <div class="hoverBox">
            <div class="capBox">
            <h2>${http.results[i].original_title}</h2>
            <p>
                ${http.results[i].overview}
            </p>
            <p>rate: ${http.results[i].vote_average}</p>
            <p>${http.results[i].release_date}</p>
            </div>
            </div>
            </div>
            </div>`
    }
    $(".movie").html(collector)
}

async function getMoviesTrending()
{
        http = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=16428d9edade8d0b9d60ded9d6a68d84`)
    http = await http.json()

    let collector = ``;

    for(let i = 0 ; i < http.results.length ; i++)
    {
        collector +=`    
        <div class="col-lg-4 col-md-6 py-4">
        <div class="text-center position-relative imgBox">
        <img src="${imgPath}${http.results[i].poster_path}" class="img-fluid position-relative" >
        <div class="hoverBox">
            <div class="capBox">
            <h2>${http.results[i].original_title}</h2>
            <p>
                ${http.results[i].overview}
            </p>
            <p>rate: ${http.results[i].vote_average}</p>
            <p>${http.results[i].release_date}</p>
            </div>
            </div>
            </div>
            </div>`
    }
    $(".movie").html(collector)
}


async function searchMovies(query)
{
        http = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=16428d9edade8d0b9d60ded9d6a68d84&language=en-US&query=${query}&page=1&include_adult=false`)
    http = await http.json()

    let collector = ``;

    for(let i = 0 ; i < http.results.length ; i++)
    {
        collector +=`    
        <div class="col-lg-4 col-md-6 py-4">
        <div class="text-center position-relative imgBox">
        <img src="${imgPath}${http.results[i].poster_path}" class="img-fluid position-relative" >
        <div class="hoverBox">
            <div class="capBox">
            <h2>${http.results[i].original_title}</h2>
            <p>
                ${http.results[i].overview}
            </p>
            <p>rate: ${http.results[i].vote_average}</p>
            <p>${http.results[i].release_date}</p>
            </div>
            </div>
            </div>
            </div>`
    }
    $(".movie").html(collector)
}

$(".searchMovie").keyup(function () { 
    let sVal = $(this).val();
    searchMovies(sVal)

    $(".onPage").html("")
});


$(".searchOnPage").keyup(function () { 

    collector1=``;
    for(let i =0 ; i < http.results.length ; i++)
    {
        let name=http.results[i].original_title
        if(name.toLowerCase().includes($(this).val()))
        {
            collector1+=`  
        <div class="col-lg-4 col-md-6 py-4">
        <div class="text-center position-relative imgBox">
        <img src="${imgPath}${http.results[i].poster_path}" class="img-fluid position-relative" >
        <div class="hoverBox">
            <div class="capBox">
            <h2>${http.results[i].original_title}</h2>
            <p>
                ${http.results[i].overview}
            </p>
            <p>rate: ${http.results[i].vote_average}</p>
            <p>${http.results[i].release_date}</p>
            </div>
            </div>
            </div>
            </div>
            `

        }
    
    }   
        $(".onPage").html(collector1)
        $(".Menu ul li a").click(function () { 
            
            path = $(this).attr('value')
            
            if(path == "")
            {
                $(".onPage").html("")
            }
            else
            {
                $(".onPage").html("")
            }
            
        });
    

});


$(".Menu ul li a").click(function () { 

    path = $(this).attr('value');
    if(path != "trending") 
    {
        getMovies(path)
    
    }
    else
    {
        getMoviesTrending() 
        
    }
    
});

getMovies()