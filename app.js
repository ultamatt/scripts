/*
  Scripts Application 

  A simple application to list my scripts for people on the internet to see them 

  - User Should be able to see details about a script
    X Logline
    - Description
    - A Review if there is one. 
    - Download link for the script. 
    - concept images. 
  - User should be able to write a review about the script.
  - There should be a button at the top to get my contact information 
    - Contact has my picture
    - my email
    - my phone number
  - there should be a pop out panel on the left to filter scripts. 
*/
var scriptApp = angular.module('scriptApp', ['ngMaterial']);

scriptApp.controller('scriptController', function ($scope, $http) {
  $scope.formats = [
    { name: "Pilot" }, 
    { name: "Feature" },
    { name: "Sketch" }
  ];

  $scope.scripts = [
    {
      name:"Dignity; Trust", 
      logline:"When Chris Graves starts a new job as a salesman at a company called Dignity Trust, attempting to buy dying people's life insurance policies from them in exchange for a lump sum for their final bucket list item, he meets a woman with a brain tumor who teaches him what it's like to truly live.", 
      description:"", 
      pages:114,
      reviews:[{
        score: 7, 
        positives: "The concept of this script is very touching for a romantic comedy and dramatic comedy. The dynamic between the two main characters is genuine and heartfelt, their contrasting personalities balancing each other well and paving the way for compelling conflict. Chris is the type of guy who plays by the rules and lives on the safe side. He's afraid of heights, flying, and dying. SARAH, on the other hand, is a bald artist who loves to roll around in paint naked on the floor for her art pieces and is readying herself for her impending death. With a fitting meet-cute, as Chris attempts to sell Sarah on Dignity Trust, the two soon become well on their way to positively impacting and changing each other's lives. The remarkable part of this script is how fluidly the situations and conversations come out between the characters. Chris and Sarah's dynamic is really believable and it's enjoyable to watch as they argue about their different worldviews. Their opposing perspectives drive forward the storyline as they're both obviously attracted to each other but are cautious to proceed as both have something to lose. It's a meaningful narrative about a woman who's not afraid of dying and what she has to teach a man who is. Chris's job is also incredibly creative and provides for another layer of conflict in the very unique setting.", 
        negatives: "This script does have a very strong storyline between the two main characters propelling it forward; it's just the supporting characters who need more work. For example, Chris has a crazy fiancée, KAYLA, who he is on a break with but who keeps on popping back up into his life. Their connection never feels genuine at any moment -- unlike the bond that Chris and Sarah share -- and it's hard to believe Chris when he's espousing to Kayla how grateful he is to her for being his best friend for so long. It's hard to believe this because all that is seen of Kayla are glimpses of her tantrums and her childish behavior. If it is truly hard for Chris to say goodbye to her, some insight into their good times and connection would make this more credible. Additionally, Chris's storyline with his writer friend, JACOB, seems a bit out of the blue and haphazardly thrown in, underdeveloped. Chris's interactions with Jacob enable getting the point across that Chris wants to be a writer but is too afraid to go after his dream, but Jacob just never feels like a character who is particularly interesting and he seems to just take up screen time. Chris's dreams of writing could come out in other ways, through other scenes by himself. Sarah's ex, TOM, also needs more dimension; otherwise, he just seems like a rote bad guy for the audience to hate.", 
        site: "Black List", 
        link: "https://blcklst.com/members/scripts/manage/evaluations/30182"
      }],
      download_link:"http://mattmoeller.com",
      concept_images:[],
      price: 5000
    },
    {
      name:"Locke and Lowde", 
      logline:"An odd couple pair of cops are teamed up with the expectation of failure, but they manage to stop a drug dealing maniac from destroying their city with their slapstick antics and unusual group of friends.", 
      description:"", 
      pages:111,
      reviews:[{
        score: 6, 
        positives: "LOCK AND LOWDE is basically a modern AIRPLANE or POLICE ACADEMY, but spoofing buddy cop films. The author clearly has an extraordinary handle on that wonderfully stylized Leslie Nielsen humor, which isn't something a lot of comedy writers can boast. We're talking, sometimes, six jokes a page -- rapid fire and so clever one misses many. It's the kind of movie, like Mel Brooks films or David Zucker films, that people are going to want to watch over and over again just to appreciate the jokes they missed the first time. It's also nice that the film is very self-aware, for instance, there is essentially a 'don't call me Shirley' joke. This movie knows where it came from, and because of that, the existing audiences who appreciate similar comedies will enjoy that awareness. That being said, the comedy and story are broad enough that even people who aren't initiated into this specific kind of absurdism can appreciate it. Speaking of the story, it's thankfully simple so that the focus really is the comedy. The actors who'd be cast in these roles would have a significant opportunity to show off their chops as comedians.", 
        negatives: "Unfortunately spoofing buddy cop films is not original anymore and hasn't always been successful recently. There's even a long list of examples in just the last ten years: 21 JUMP STREET, THE HEAT, THE OTHER GUYS, HOT FUZZ, NATIONAL SECURITY, COP OUT-- it feels near impossible to create a truly unique comedy buddy cop film post-LETHAL WEAPON. Furthermore, this script is even less successful in that it doesn't really have a unique voice or concept. If the story was a little more notable it might pack a different punch. Presently, tracking down a maniac dealing drugs and planning explosions is pretty snooze-worthy, even with the comedic additions of how it's being traded. Furthermore, it would be easier to have greater confidence in this film if it was more than just jokes, but as of now that's really what it is. The characters, relationships, and story are more tools to present the jokes than their own, fulfilling entities.This is evident in the fact that whole scenes wrap around trying to get specific jokes out (as in any scene with LOCKE and CLEARLY), and the fact that characters are primarily named for the jokes that can be derived from them -- as in LOCKE and LOWDE. It's like a series of sketches instead of a full satisfying story.", 
        site: "Black List", 
        link: "https://blcklst.com/members/scripts/manage/evaluations/30263"
      }],
      download_link:"http://mattmoeller.com",
      concept_images:[],
      price: 5000
    }
  ];

  
});

