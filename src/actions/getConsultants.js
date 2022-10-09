export const GET_CONSULTANTS = 'GET_CONSULTANTS';
export const SAVE_CONSULTANTS = 'SAVE_CONSULTANTS';
export const CHANGE_CONSULTANTS_IS_LOADING = 'CHANGE_CONSULTANTS_IS_LOADING';

export const getConsultants = () => ({
    type: GET_CONSULTANTS,
});

export const saveConsultants = (consultants) => ({
    type: SAVE_CONSULTANTS,
    consultants: consultants,
});

export const changeConsultantsIsLoading = (consultantsIsLoading) =>  ({
    type: CHANGE_CONSULTANTS_IS_LOADING,
    consultantsIsLoading: !consultantsIsLoading
    
})