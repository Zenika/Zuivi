export const GET_TYPE_OF_MEETING= 'GET_TYPE_OF_MEETING';
export const SAVE_TYPE_OF_MEETING = 'SAVE_TYPE_OF_MEETING'

export const getTypeOfMeeting = () => ({
    type: GET_TYPE_OF_MEETING,
});

export const saveTypeOfMeeting = (typeOfMeeting) => ({
    type: SAVE_TYPE_OF_MEETING,
    typeOfMeeting: typeOfMeeting,
})