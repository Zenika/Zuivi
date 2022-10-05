export const GET_CONSULTANT_BY_ID = 'GET_CONSULTANT_BY_ID';
export const SAVE_CONSULTANT_BY_ID = 'SAVE_CONSULTANT_BY_ID'

export const getConsultantById = (id) => ({
    type: GET_CONSULTANT_BY_ID,
    id: id,
});

export const saveConsultantById = (consultantById) => ({
    type: SAVE_CONSULTANT_BY_ID,
    consultantById: consultantById,
})