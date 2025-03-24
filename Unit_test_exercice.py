import unittest
def validate_username(username):
    """Validates a username based on length and allowed characters."""
    if not username:
        return False

    if len(username) < 3 or len(username) > 20:
        return False

    allowed_chars = "abcdefghijklmnopqrstuvwxyz0123456789_"
    for char in username.lower():
        if char not in allowed_chars:
            return False
    
    return True


""" unit test for function"""
class TestValidatyUserName(unittest.TestCase):
    def test_valide_UserName(self):
        
        self.assertTrue(validate_username("user123"))
        test2 = validate_username("hello_world")
        self.assertTrue(test2)
        test3= validate_username("user123")
        self.assertTrue(test3)
        test4=validate_username("@6438974")
        self.assertFalse(test4)

if __name__ == "__main__":
    unittest.main()