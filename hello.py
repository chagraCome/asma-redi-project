class User:
    def __init__(self,email,first_name,last_name,password) -> None:
        self.email=email
        self.first_name=first_name
        self.last_name=last_name
        self.password=password

class Vehicle:
    def __init__(self,license_plate,brand,year_of_manifacture) -> None:
        self.__license_plate=license_plate
        self.brand= brand
        self.year_of_manifacture= year_of_manifacture
        self.available = "false"
        self.created_at="12.03.2025"
    
    @property
    def get_license(self):
        """ get license_plate """
        return self.__license_plate
    
    @property
    def change_availablity(self):
        self.available = not(self.available)
    
    def __str__(self) -> str:
        return f"{self.__license_plate} {self.brand} {self.available} {self.year_of_manifacture} {self.created_at}"
    
class Car(Vehicle):
    def __init__(self, license_plate, brand, year_of_manifacture,available, created_at) -> None:
        super().__init__(license_plate, brand,  year_of_manifacture,available, created_at)
    
class Carsharing():
    _cars=[]

    @classmethod
    def add_car(cls,car):
        """add car to cars list"""
        cls._cars.append(car)
    
    @classmethod
    def remove_car(cls):
        """remove car """
        cls._cars.pop()
    
    @classmethod
    def rent_car(cls,license):
        """ rent a car """
        for car in cls._cars:
            if((car.get_license==license)and(car.available=="true")):
                car.change_availablity()

    @classmethod
    def return_car(cls,license):
         """ return car"""
         for car in cls._cars:
            if((car.get_license==license)and(car.available=="false")):
                car.change_availablity()  

    @classmethod
    def list_of_cars(cls):
        return cls._cars
    
    @classmethod
    def all_available_cars(cls):
        """ alla available cars"""
        print("all avariable cars")
        for car in cls._cars:
            if(car.available=="false"):
                return f"{car.get_license}"

    @classmethod
    def rented_cars(cls):
        """ all rented cars"""
        print("all avariable cars")
        for car in cls._cars:
            if(car.available=="true"):
                return f"{car.get_license}"         
        
car1 = Car(1,"bmw",2016)
car2 = Car(2,"audi",2011)
car3 = Car(3,"volvo",2023)
car4= Car(4,"whatever",2025)
car2.get_license()