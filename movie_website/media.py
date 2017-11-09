# Lesson 3.4: Make Classes
# Mini-Project: Movies Website

# In this file, you will define the class Movie. You could do this
# directly in entertainment_center.py but many developers keep their
# class definitions separate from the rest of their code. This also
# gives you practice importing Python files.

import webbrowser

class Movie():
    # This class provides a way to store movie related information

    def __init__(self, movie_title, movie_summary, movie_rating, poster_image_url, trailer_youtube_url, cast):
        '''initializes instance of class Movie
        Args:
            movie_title: Holds the title of class Movie
            movie_summary: Holds the summary of class Movie
            movie_rating: Holds the rating of class Movie
            poster_image_url: Holds the poster url of class Movie
            trailer_youtube_url: Holds the trailer link of class Movie
            cast: Holds the cast info of class Movie
        Returns:
            An instance of movie_title, movie_summary, movie_rating, poster_image_url, trailer_youtube_url, cast
        '''
        self.movie_title = movie_title
        self.movie_summary = movie_summary
        self.movie_rating = movie_rating
        self.poster_image_url = poster_image_url
        self.trailer_youtube_url = trailer_youtube_url
        self.cast = ''.join(cast)
