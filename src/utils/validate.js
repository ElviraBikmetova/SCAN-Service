export const limitValidate = {
    required: 'Обязательное поле',
    valueAsNumber: true,
    min: {
        value: 1,
        message: 'Введите число от 1 до 1000'
    },
    max: {
        value: 1000,
        message: 'Введите число от 1 до 1000'
    }
}

export const dateValidate = {
    required: 'Введите корректные данные',
    valueAsDate: true,
    validate: (startDate, endDate) => {
        const startingDate = new Date(startDate);
        const endingDate = new Date(endDate);
        const currentDate = new Date();
        let errors = null

        if (startingDate > endingDate) {
            errors = "Дата окончания должна быть позже даты начала"
            }
    
            if (startingDate > currentDate) {
            errors = "Дата начала не может быть в будущем времени"
            }
    
            if (endingDate > currentDate) {
            errors = "Дата окончания не может быть в будущем времени"
            }
    
        return errors
    }
}

export const innValidate = {
    required: 'Обязательное поле',
    minLength: {
        value: 10,
        message: 'ИНН не должен быть меньше 10 цифр'
    },
    maxLength: {
        value: 10,
        message: 'ИНН не должен быть больше 10 цифр'
    },
    pattern: {
        value: /^\d+$/,
        message: 'ИНН должен состоять только из цифр'
    },
    validate: (inn) => {
        let errors = null
        let sum = 0
        const coefficients = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0]
        for (let i in coefficients) {
            sum += coefficients[i] * parseInt(inn[i])
        }
        let controlNumber = sum % 11;
    
        if (controlNumber > 9) {
            controlNumber %= 10;
        }
    
        if (controlNumber !== parseInt(inn[9])) {
            errors = 'Неправильное контрольное число'
        }
    
        return errors
    }
}