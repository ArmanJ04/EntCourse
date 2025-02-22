package repo

import "webAitu/models"

type PersonRepository interface {
	GetAllPersons() ([]models.User, error)
	GetPersonByID(id uint) (*models.User, error)
	CreatePerson(person *models.User) error
	GetPersonByEmail(email string) (*models.User, error)
}
