
export const CHANGE_CONSULTANT_CREATION_FIELD = 'CHANGE_CONSULTANT_CREATION_FIELD';
export const CONSULTANT_CREATION = 'CONSULTANT_CREATION';


export const changeConsultantCreationField = (value, fieldIdentifier) => ({
    type: CHANGE_CONSULTANT_CREATION_FIELD,
    value: value,
    fieldIdentifier: fieldIdentifier,
})

export const consultantCreation = () => ({
    type: CONSULTANT_CREATION,
})
