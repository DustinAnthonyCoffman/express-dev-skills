const fakeData = [
    {student: 'Dustin', skills: ['guitar','dev skills','bike skills']},  //this will be s[0]
    {student: 'Irene', skills: ['dev skills', 'art', 'gardening']}      //this will be s[1]    
];

function getAll() {
    return fakeData;
}
function getOne(id) {
    return fakeData[id];
}
module.exports = {
    getAll,
    getOne
};