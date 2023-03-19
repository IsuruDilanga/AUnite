import unittest
from app import app

class TestFlaskRoutes(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_login_route(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)

    def test_signup_route(self):
        response = self.app.get('/signup')
        self.assertEqual(response.status_code, 200)

    def test_home_route(self):
        response = self.app.get('/home')
        self.assertEqual(response.status_code, 500)


    def test_faceRecognition_route(self):
        response = self.app.get('/FR')
        self.assertEqual(response.status_code, 200)

    def test_eq_route(self):
        response = self.app.get('/EQ')
        self.assertEqual(response.status_code, 500)

    def test_meetTeam_route(self):
        response = self.app.get('/meetTeam')
        self.assertEqual(response.status_code, 200)

    def test_entertainments_route(self):
        response = self.app.get('/entertainments')
        self.assertEqual(response.status_code, 200)

    def test_game_route(self):
        response = self.app.get('/game')
        self.assertEqual(response.status_code, 200)

    def test_MGL1_route(self):
        response = self.app.get('/MGL1')
        self.assertEqual(response.status_code, 200)

    def test_MGL2_route(self):
        response = self.app.get('/MGL2')
        self.assertEqual(response.status_code, 200)

    def test_MGL3_route(self):
        response = self.app.get('/MGL3')
        self.assertEqual(response.status_code, 200)

    def test_snake_route(self):
        response = self.app.get('/snake')
        self.assertEqual(response.status_code, 200)

    def test_tic_route(self):
        response = self.app.get('/tic')
        self.assertEqual(response.status_code, 200)

    def test_flight_route(self):
        response = self.app.get('/flight')
        self.assertEqual(response.status_code, 200)

    def test_education_route(self):
        response = self.app.get('/education')
        self.assertEqual(response.status_code, 200)

    def test_maths1_route(self):
        response = self.app.get('/maths1')
        self.assertEqual(response.status_code, 200)

    def test_maths2_route(self):
        response = self.app.get('/maths2')
        self.assertEqual(response.status_code, 200)

    def test_maths3_route(self):
        response = self.app.get('/maths3')
        self.assertEqual(response.status_code, 200)

    def test_etiquette_route(self):
        response = self.app.get('/etiquette')
        self.assertEqual(response.status_code, 200)

    def test_english_route(self):
        response = self.app.get('/english')
        self.assertEqual(response.status_code, 200)

    def test_goodManner_route(self):
        response = self.app.get('/goodManner')
        self.assertEqual(response.status_code, 200)

    def test_socialManner_route(self):
        response = self.app.get('/socialManner')
        self.assertEqual(response.status_code, 200)

    def test_tableManner_route(self):
        response = self.app.get('/tableManner')
        self.assertEqual(response.status_code, 200)

    def test_alphabet_route(self):
        response = self.app.get('/alphabet')
        self.assertEqual(response.status_code, 200)

    def test_animals_route(self):
        response = self.app.get('/animals')
        self.assertEqual(response.status_code, 200)

    def test_colours_route(self):
        response = self.app.get('/colours')
        self.assertEqual(response.status_code, 200)

    def test_fruits_route(self):
        response = self.app.get('/fruits')
        self.assertEqual(response.status_code, 200)

    def test_numbers_route(self):
        response = self.app.get('/numbers')
        self.assertEqual(response.status_code, 200)

    def test_vegetables_route(self):
        response = self.app.get('/vegetables')
        self.assertEqual(response.status_code, 200)

    def test_progress_route(self):
        response = self.app.get('/progress')
        self.assertEqual(response.status_code, 500)

    def test_aboutUs_route(self):
        response = self.app.get('/aboutUs')
        self.assertEqual(response.status_code, 200)

    def test_music_route(self):
        response = self.app.get('/music')
        self.assertEqual(response.status_code, 200)

    def test_CMusic_route(self):
        response = self.app.get('/CMusic')
        self.assertEqual(response.status_code, 200)

    def test_KMusic_route(self):
        response = self.app.get('/KMusic')
        self.assertEqual(response.status_code, 200)

    def test_OMusic_route(self):
        response = self.app.get('/OMusic')
        self.assertEqual(response.status_code, 200)
    
    
if __name__ == '__main__':
    unittest.main()
