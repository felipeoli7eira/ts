// Tipagem de objeto

type UserAddress = {
    number: number,
    street: string,
    city: string,
    state: string,
    cep: number
}

interface UserInterface {
    readonly name: string,
    address?: UserAddress
}

function getUser(user: UserInterface) {
    return user.address?.street;
}