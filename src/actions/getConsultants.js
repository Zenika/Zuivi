export const GET_CONSULTANTS = 'GET_CONSULTANTS';
export const SAVE_CONSULTANTS = 'SAVE_CONSULTANTS'

export const getConsultants = () => ({
    type: GET_CONSULTANTS,
});

export const saveConsultants = (consultants) => ({
    type: SAVE_CONSULTANTS,
    consultants: consultants,
})