const usersControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    usersControllers.getAllUsers()
        .then(data => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const getUsersById = (req, res) => {
    const id = req.params.id
    usersControllers.getUsersById(id)
    .then(data => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(404).json({message: err.message})
    })
}

const registrerUser = (req, res) => {
    const {firstName, lastName, email, password, phone, birthday, gender, country} = req.body

    if(firstName && lastName && email && password && phone && birthday){
        usersControllers.createUser({
            firstName, lastName, email, password, phone, birthday, gender, country
        })
        .then( data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
    } else{
        res.status(400).json({message: 'All fields must be completed', fields: {
            firstName: 'string',
            lastName: 'string',
            email: 'example@example.com',
            password: 'string',
            phone: '+5212454545478',
            birthday: 'YYYY/MM/DD'
        }})
    }
}

const deleteUser = (req, res) => {
    const id = req.params.id;
    usersControllers
      .deleteUser(id)
      .then((data) => {
        if (data) {
          res.status(204).json();
        } else {
          res.status(404).json({ message: "Invalid ID" });
        }
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  };
  

const patchUser = (req, res) => {
    const id = req.params.id
    const { firstName, lastName, phone, gender, country } = req.body

    usersControllers.updateUser(id, { firstName, lastName, phone, gender, country })
    .then(data => {
        if(data[0]){
            res.status(200).json({message: `User with ID: ${id}, edited succesfully!`})
        } else {
            res.status(400).json({message: 'Invalid ID'})
        }
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
}

// My user services

const getMyUser = (req, res) => {
    const id = req.user.id
    usersControllers.getUsersById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const patchMyUser = (req, res) => {
    const id = req.user.id
    usersControllers.updateUser(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const deleteMyUser = (req, res) => {
    const id = req.user.id
    usersControllers.deleteUser(id)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
}


module.exports = {
    getAllUsers,
    getUsersById,
    patchUser,
    registrerUser,
    deleteUser,
    getMyUser,
    patchMyUser,
    deleteMyUser
}





