# Lesson 3.4: Make Classes
# Mini-Project: Movies Website

# In this file, you will define instances of the class Movie defined
# in media.py. After you follow along with Kunal, make some instances
# of your own!

# After you run this code, open the file fresh_tomatoes.html to
# see your webpage!

import media
import fresh_tomatoes

groundhog_day = media.Movie('Groundhog Day',
                            'Phil (Bill Murray), a weatherman, is out to cover the annual emergence of the groundhog from its hole. He gets caught in a blizzard that he didn''t predict and finds himself trapped in a time warp. He is doomed to relive the same day over and over again until he gets it right.',
                            'PG',
                            'http://www.gstatic.com/tv/thumb/movieposters/14569/p14569_p_v8_ah.jpg',
                            'https://www.youtube.com/watch?v=tSVeDx9fk60',
                            'Bill Murray (Phil), Andie MacDowell (Rita), Chris Elliot (Larry)'
                            )

the_big_lebowski = media.Movie('The Big Lebowski',
                            'Jeff Bridges plays Jeff Lebowski who insists on being called "the Dude," a laid-back, easygoing burnout who happens to have the same name as a millionaire whose wife owes a lot of dangerous people a whole bunch of money -- resulting in the Dude having his rug soiled, sending him spiraling into the Los Angeles underworld.',
                            'R',
                            'http://t3.gstatic.com/images?q=tbn:ANd9GcRBYp315X-0pNvI-Dvqj8FR0AGdF39VCprXpurd0cQel__e17CP',
                            'https://www.youtube.com/watch?v=VgSqm8-wXWA',
                            'Jeff Bridges (The Dude), John Goodman (Walter), Steve Buscemi (Theodore )'
                            )

children_of_men = media.Movie('Children of Men',
                            'When infertility threatens mankind with extinction and the last child born has perished, a disillusioned bureaucrat (Clive Owen) becomes the unlikely champion in the fight for the survival of Earth''s population;',
                            'R',
                            'http://www.gstatic.com/tv/thumb/movieposters/159796/p159796_p_v8_ag.jpg',
                            'https://www.youtube.com/watch?v=Esrf8X07eZk',
                            'Clive Owen, Julianne Moore, Michael Caine'
                            )

inception = media.Movie('Inception',
                            'Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people''s dreams and steal their secrets from their subconscious.',
                            'PG-13',
                            'http://t2.gstatic.com/images?q=tbn:ANd9GcRo9vfJCM6dzPkZHIHBVCtlJnAnew9Ai26kEdrli0-tfmatmciD',
                            'https://www.youtube.com/watch?v=Esrf8X07eZk',
                            'Leonardo DiCaprio, Tom Hardy, Ellen Page'
                            )

the_revenant = media.Movie('The Revenant',
                            'While exploring the uncharted wilderness in 1823, frontiersman Hugh Glass (Leonardo DiCaprio) sustains life-threatening injuries from a brutal bear attack.',
                            'R',
                            'http://t1.gstatic.com/images?q=tbn:ANd9GcS5yuCSZqK5Hha5lElqZr2SCYVY-sYycKZ8PJ8POfNQkOmSuo5B',
                            'https://www.youtube.com/watch?v=Df980EYeWMw',
                            'Leonardo DiCaprio, Tom Hardy, Will Poulter'
                            )

star_wars_last_jedi = media.Movie('Star Wars: The Last Jedi',
                            'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers.',
                            '',
                            'http://t2.gstatic.com/images?q=tbn:ANd9GcRgcIU4MKHZkZNeDt_tAewyfwX7PAmSdj_7wdg_FInkZw8Um9F_',
                            'https://youtu.be/Q0CbN8sfihY',
                            'Daisy Ridley, Mark Hamill, John Boyega'
                            )

movies = [groundhog_day, the_big_lebowski, children_of_men, inception, the_revenant, star_wars_last_jedi]
fresh_tomatoes.open_movies_page(movies)
