const fakeData = [
    {student: 'Dustin', skills: 'guitar'},
    {student: 'Irene', skills: 'dev skills'}
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