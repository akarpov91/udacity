$("#main").prepend(internationalizeButton);
var bio = {
    "name": "Alex Karpov",
    "role": "Web Developer",
    "contacts": {
        "email": "alex.karpov91@gmail.com",
        "mobile": "847-668-5566",
        "github": "akarpov91",
        "twitter": "@techfan91",
        "location": "chicago"
    },
    "welcome": "Welcome to my page",
    "skills": ["HTML", "CSS", "Javascript"],
    "image": "https://vignette.wikia.nocookie.net/homemovies/images/2/26/BrendonSmall.jpg/revision/latest?cb=20101116020648"
}

var work = [
    {
        "employer": "Groupon",
        "position": "Web Developer 1",
        "location": "600 W Chicago St, Chicago IL",
        "years": 4,
        "dates": "Jan 2013 - Jan 2017",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique purus mi, eget cursus mi congue ac. Praesent sodales rhoncus nisl sit amet dignissim. In convallis, tellus vitae venenatis iaculis, arcu mauris commodo mi, vitae varius ipsum tortor at tellus. Suspendisse ac eros ex. Aliquam vel mi vel tortor tempor."
    },
    {
        "employer": "Sears",
        "position": "Email Developer",
        "location": "1 North State St, Chicago IL",
        "years": 1.5,
        "dates": "Jan 2011 - July 2012",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sem a euismod pulvinar. Integer a dui sit amet odio vulputate tempor. Integer ac blandit augue, vel mattis arcu. Nulla vitae ex pulvinar justo pulvinar laoreet. Donec in ullamcorper dolor. Ut gravida sed metus ac gravida. Integer quis bibendum turpis."
    }
]

var projects = {
    "projects": [{
            "title": "Movie Website",
            "dates": "2017",
            "description": "Create a movie website",
            "images": [{
                "url": "https://s7.postimg.org/kwwri3r97/movie_website.png"
            }]
        },
        {
            "title": "Personal Portfolio",
            "dates": "2017",
            "description": "My interactive personal portfolio",
            "images": [{
                "url": "https://s7.postimg.org/5bffy8urf/portfolio.png"
            }]
        }
    ]
};

var education = {
    "universities": [
        {
            "name": "University of Illinois Chicago",
            "city": "Chicago",
            "degree": "Transfer",
            "major": "Undecided",
            "graduation_years": "2007"
        },
        {
            "name": "University of Illinois at Urbana/Champaign",
            "city": "Urbana/Champaign",
            "degree": "BA",
            "major": "Economics",
            "graduation_years": "2009"
        }
    ],
    "online": [
        {
            "name": "Udacity",
            "title": "Intro to Programming with Python",
            "graduation_years": "2017",
            "url": "http://www.udacity.com"
        }
    ]
};

function displayHeader() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
};

function displayContacts(contactLocation) {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email)
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github)
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter)
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location)
    $(contactLocation).append(formattedMobile);
    $(contactLocation).append(formattedEmail);
    $(contactLocation).append(formattedGithub);
    $(contactLocation).append(formattedTwitter);
    $(contactLocation).append(formattedLocation);
}

function displaySkills() {
    var formattedBioImage = HTMLbioPic.replace("%data%", bio.image)
    $("#header").append(HTMLskillsStart);
    $("#skills-h3").prepend(formattedBioImage);
    if (bio.skills.length > 0) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkills);
        formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkills);
        formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkills);
    }
}

function displayWork() {
    if (work.length > 0) {
        work.forEach(function (work) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.position);
            var formattedDate = HTMLworkDates.replace("%data%", work.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.description);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(formattedDate);
            $(".work-entry:last").append(formattedDescription);
            console.log(formattedDate)
        });
    }
}

function inName(name) {
    name = name.split(" ");
    //console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    var internationalName = name[0] + ' ' + name[1];
    console.log(internationalName);
    return internationalName;
}

projects.display = function () {
    if (projects['projects'].length > 0) {
        projects['projects'].forEach(function (project) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title)
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates)
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description)
            $(".project-entry:last").append(formattedDescription);
            if (project.images.length > 0) {
                project['images'].forEach(function (image) {
                    var formattedImage = HTMLprojectImage.replace("%data%", image.url)
                    $(".project-entry:last").append(formattedImage);
                    console.log(image.url);
                });
            };
            console.log(project.title);
        });
    }
}

education.display = function() {
    $("#education").append(HTMLschoolStart);
    if (education.universities.length > 0) {
        education['universities'].forEach(function (university) {
            var formattedName = HTMLschoolName.replace("%data%", university.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", university.degree);
            $(".education-entry:last").append(formattedName + formattedDegree);
            var formattedDates = HTMLschoolDates.replace("%data%", university.graduation_years);
            $(".education-entry:last").append(formattedDates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", university.city);
            $(".education-entry:last").append(formattedLocation);
            var formattedMajor = HTMLschoolMajor.replace("%data%", university.major);
            if (university.major != null) {
                $(".education-entry:last").append(formattedMajor);
            }
            console.log(university.name);
        });
    }
    if (education.online.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);
        education['online'].forEach(function (online_class) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", online_class.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", online_class.name);
            $(".education-entry:last").append(formattedTitle + formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", online_class.graduation_years);
            $(".education-entry:last").append(formattedDates);
            var formattedUrl = HTMLonlineURL.replace("%data%", online_class.url);
            $(".education-entry:last").append(formattedUrl);
        });
    }
}

function displayMap() {
    $("#mapDiv").append(googleMap);
}

function displayConnect() {
    $("#lets-connect").append(HTMLschoolStart);
}

displayHeader();
displayContacts("#topContacts");
displaySkills();
displayWork();
inName("alex Karpov");
projects.display();
education.display();
displayMap();
displayContacts("#footerContacts");