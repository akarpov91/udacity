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
    "welcomeMessage": "Welcome to my page",
    "skills": ["HTML", "CSS", "Javascript"],
    "biopic": "https://vignette.wikia.nocookie.net/homemovies/images/2/26/BrendonSmall.jpg/revision/latest?cb=20101116020648"
};

var work = {
    "jobs": [
        {
            "employer": "Groupon",
            "title": "Web Developer 1",
            "location": "600 W Chicago St, Chicago IL",
            "years": 4,
            "dates": "Jan 2013 - Jan 2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique purus mi, eget cursus mi congue ac. Praesent sodales rhoncus nisl sit amet dignissim. In convallis, tellus vitae venenatis iaculis, arcu mauris commodo mi, vitae varius ipsum tortor at tellus. Suspendisse ac eros ex. Aliquam vel mi vel tortor tempor."
        },
        {
            "employer": "Sears",
            "title": "Email Developer",
            "location": "1 North State St, Chicago IL",
            "years": 1.5,
            "dates": "Jan 2011 - July 2012",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sem a euismod pulvinar. Integer a dui sit amet odio vulputate tempor. Integer ac blandit augue, vel mattis arcu. Nulla vitae ex pulvinar justo pulvinar laoreet. Donec in ullamcorper dolor. Ut gravida sed metus ac gravida. Integer quis bibendum turpis."
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Movie Website",
            "dates": "2017",
            "description": "Create a movie website",
            "images": [
                "https://preview.ibb.co/bxobwd/Screen_Shot_2018_07_05_at_2_29_46_PM.png"
            ]
        },
        {
            "title": "Personal Portfolio",
            "dates": "2017",
            "description": "My interactive personal portfolio",
            "images": [
                "https://preview.ibb.co/ffnEhJ/Screen_Shot_2018_07_05_at_2_29_22_PM.png"
            ]
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "University of Illinois Chicago",
            "location": "Chicago",
            "degree": "Transfer",
            "majors": ["Undecided"],
            "dates": "2007"
        },
        {
            "name": "University of Illinois at Urbana/Champaign",
            "location": "Urbana/Champaign",
            "degree": "BA",
            "majors": ["Economics"],
            "dates": "2009"
        }
    ],
    "onlineCourses": [
        {
            "school": "Udacity",
            "title": "Intro to Programming with Python",
            "dates": "2017",
            "url": "http://www.udacity.com"
        }
    ]
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

    var formattedBioImage = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(HTMLskillsStart);
    $("#skills-h3").prepend(formattedBioImage);
    if (bio.skills.length > 0) {
        bio.skills.forEach(function (skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        });
    }
};

work.display = function () {
    if (work.jobs.length > 0) {
        work.jobs.forEach(function (work) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
            var formattedDate = HTMLworkDates.replace("%data%", work.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.description);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(formattedDate);
            $(".work-entry:last").append(formattedDescription);
            console.log(formattedDate);
        });
    }
};

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
    if (projects.projects.length > 0) {
        projects.projects.forEach(function (project) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedDescription);
            if (project.images.length > 0) {
                project.images.forEach(function (image) {
                    var formattedImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedImage);
                    console.log(image);
                });
            }
            console.log(project.title);
        });
    }
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    if (education.schools.length > 0) {
        education.schools.forEach(function (university) {
            var formattedName = HTMLschoolName.replace("%data%", university.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", university.degree);
            $(".education-entry:last").append(formattedName + formattedDegree);
            var formattedDates = HTMLschoolDates.replace("%data%", university.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", university.location);
            $(".education-entry:last").append(formattedLocation);
            if (university.majors.length > 0) {
                university.majors.forEach(function(major) {
                    var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                    $(".education-entry:last").append(formattedMajor);
                });
            }
        });
    }
    if (education.onlineCourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (online_class) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", online_class.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", online_class.school);
            $(".education-entry:last").append(formattedTitle + formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", online_class.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedUrl = HTMLonlineURL.replace("%data%", online_class.url);
            $(".education-entry:last").append(formattedUrl);
        });
    }
};

function displayMap() {
    $("#mapDiv").append(googleMap);
}

function displayConnect() {
    $("#lets-connect").append(HTMLschoolStart);
}

bio.display();
work.display();
inName("alex Karpov");
projects.display();
education.display();
displayMap();
