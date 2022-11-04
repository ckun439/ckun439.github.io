var userInfo = {};

$(document).ready(function(){
  jQuery('html,body').animate({scrollTop:0},800);

  
  //Hides the hidden section, when the form is submtted itterate through this code//
  $('#page2').hide();
  $('.hidden').hide();
  $('.container-food').hide();
  $('.form').submit(function(e){
    $('.hidden__options').empty();
        // Check if empty of not
    if (f_name === '') {
        alert('First name is empty.');
        return false;
    }

    //setting variables
    e.preventDefault();
    userInfo.fName = $('input#f_name').val();
    userInfo.lName = $('input#l_name').val();
    userInfo.noDays = $('input#no_day').val();
    userInfo.noPpl = $('input#no_ppl').val();   
    let noPpl = $('input#no_ppl').val();   
    let noDays = $('input#no_day').val();   
    userInfo.email = $('input#email').val();
    userInfo.dob = $('input#dob').val();
    let blurbList = [];
    let optionList = [];


    //conditional statement checking what accomidation suits
    var optionCounter = 0;
    if(noPpl <= 2 && noPpl > 0 && noDays <= 5 && noDays >= 1){
      optionCounter += 1;
      optionList.push("Hotel");
      blurbList.push("Hotel Auckland offers stylish rooms and suites in an idyllic location at the end of Princes Wharf. Guests can enjoy luxury dining at FISH restaurant, which offers a creative menu with a focus on fresh local ingredients. Guests receive access to an outdoor swimming pool and indoor fitness facilities. With sweeping views across Auckland’s harbour, Hotel Auckland also offers the elegant Bellini Bar, with an extensive cocktail menu. A variety of contemporary event spaces are available, that can host up to 700 guests.");
    }
    if(noPpl == 1 && noDays <= 10 && noDays >= 1){
      optionCounter += 1;
      optionList.push("Hostel");
      blurbList.push("Haka Hostel Auckland provides a range of sleeping options from the funky 20 bed dorm, to private rooms with en-suites, 4-person rooms, and everything in between.All the beds, in every room type are custom made solid wooden beds. The dorms range to suit everyone's budget, from one very trendy 20 bed dorm, right down to a 6 bed dorm. All beds have their own power points for each guest and curtains for each bed, to give all guests privacy")
      ;
    }
    if(noPpl <= 4 && noPpl >= 2 && noDays <= 10 && noDays >= 3){
      optionCounter += 1;
      optionList.push("Motel");
      blurbList.push("Deluxe Room with own bathroom inside, approx 30 square meters, contains one Queen bed by default. Free unlimited WiFi. Electric Fan, Heater, SkyTV.Deluxe Room with own bathroom inside, approx 30 square meters, contains one Queen bed by default. Free unlimited WiFi. Electric Fan, Heater, SkyTV. Deluxe Room with own bathroom inside, approx 30 square meters, contains one Queen bed by default. Free unlimited WiFi. Electric Fan, Heater, SkyTV.");
    }
    if(noPpl <= 4 && noPpl >= 1 &&  noDays <= 15 && noDays >= 2){
      optionCounter += 1;
      optionList.push("House");
      blurbList.push("Black's Hut sits on the shores of Lake Te Anau with expansive uninterrupted views of Fiordland. Brand new, built with quality fixtures and furnishings, entertainment system and hot tub.s Hut has been specifically set up to accommodate adults with two separate bedrooms and Hut sits on the shores of Lake Te Anau with expansive uninterrupted views of Fiordland. Brand new, built with quality fixtures and furnishings, entertainment system and hot tub.s Hut has been specifically set up to accommodate adults with two separat");
    }

    //use of sweetalerts
    if(optionCounter == 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oh Oh!',
        text: 'There are no matches',
      })
    }

  //When there are options avaliable, display the accomidation option box
    if(optionCounter != 0) {
      $('.hidden').show();

  //While loop itterating through the options and  displaying them w/ blurb and button
      let counter = 0;
      while(counter != optionCounter) {
        jQuery('html,body').animate({scrollTop:1200},800);
        $('.hidden__options').append("<h1>option"+ " " +(counter + 1) + " - " + optionList[counter] +"</h1>");
        $('.hidden__options').append("<p>" + blurbList[counter]+ "</p>" + "<button>add</button>");
        counter = counter + 1;
      }

      let buttonNum = 0;
       
      //itterating through each button giving it a unique identifier + class
      //identifier to be used to display whatever selection the user chooses
      $('.hidden__options button').each(function() {
       $(this).addClass("button__"+optionList[buttonNum]);
       buttonNum += 1;
      })

    }
  
  let accomSelection = "";
      //selecting what accomidation
  $('.button__Hotel').click(function(e){
    accomSelection = "Hotel";
    $('.hidden').hide();
    $('.container-food').show();
    userInfo.accomSelection = accomSelection;
  });

  $('.button__Motel').click(function(e){
    accomSelection = "Motel";
    $('.hidden').hide();
    $('.container-food').show();
    userInfo.accomSelection = accomSelection;
  });

  $('.button__House').click(function(e){
    accomSelection = "House";
    $('.hidden').hide();
    $('.container-food').show();
    userInfo.accomSelection = accomSelection;
  });


  $('.button__Hostel').click(function(e){
    accomSelection = "Hostel";
    $('.hidden').hide();
    $('.container-food').show();
    userInfo.accomSelection = accomSelection;
  });

  });


  //getting users food option and their comments adding them to variables
  $('.form2').submit(function(e){ 
    userInfo.foodOpt = $("option:selected").val();
    userInfo.comments = $('textarea#notes').val(); 
    $('#page1').hide();
    $('#page2').show();
    $("html, body").animate({ scrollTop: 0 }, 1000);
    $("html, body").animate({ scrollDown: 0 }, 10000000);
    $('#name-replace').text(userInfo.fName + " " + userInfo.lName);
    $('#dob-replace').text(userInfo.dob);
    $('#nod-replace').text(userInfo.noDays);
    $('#nop-replace').text(userInfo.noPpl);
    $('#email-replace').text(userInfo.email);
    $('#acom-replace').text(userInfo.accomSelection);
    $('#meal-replace').text(userInfo.foodOpt);
    $('#notes-replace').text(userInfo.comments);
  });
});
