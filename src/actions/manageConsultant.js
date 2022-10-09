
export const CHANGE_CONSULTANT_CREATION_FIELD = 'CHANGE_CONSULTANT_CREATION_FIELD';
export const CONSULTANT_CREATION = 'CONSULTANT_CREATION';
export const CLEAN_CONSULTANT_CREATION_STATE = 'CLEAN_CONSULTANT_CREATION_STATE';

export const changeConsultantCreationField = (value, fieldIdentifier) => ({
    type: CHANGE_CONSULTANT_CREATION_FIELD,
    value: value,
    fieldIdentifier: fieldIdentifier,
})

export const consultantCreation = () => ({
    type: CONSULTANT_CREATION,
})

export const cleanConsultantCreationState = () => ({
    type: CLEAN_CONSULTANT_CREATION_STATE,
})